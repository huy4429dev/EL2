<?php

namespace App\Http\Controllers;

use App\Mail\RegisterClassSendMail;
use App\Models\ClassRoom;
use App\Models\Course;
use App\Models\Order;
use App\Models\Profile;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Hash;

class CoursePageController extends Controller
{
    public function index(Request $request)
    {
        if($request->search){
            $data = Course::with('user')->whereRaw('lower(title) like (?) ', ["%{$request->search}%"])->orderBy('id', 'desc')->paginate(3);
        }
        else {
            $data = Course::with('user')->orderBy('id', 'desc')->paginate(3);
        }
        return view('course', ['data' => $data]);
    }

    public function detail($slug)
    {
        $data = Course::with('user', 'level')->where('slug', '=', $slug)->first();
        $courseId = $data->id;

        $totalRegister = Order::whereHas('class', function (Builder $q) use ($courseId) {
            $q->where('id', $courseId);
        })->count();
            
        $totalClass = ClassRoom::where('course_id', $courseId)->count();

        $relatedCourses = Course::where('id','!=',$courseId)->orderBy('id','desc')->take(3)->get();

        return view('course-detail', ['data' => $data, 'totalRegister' => $totalRegister, 'totalClass' => $totalClass, 'relatedCourses' => $relatedCourses]);
    }
    public function classes($slug)
    {
        $data = Course::with('user', 'level', 'classes', 'classes.schedule', 'classes.orders')->where('slug', '=', $slug)->first();
        return view('course-classes', ['data' => $data]);
    }

    public function register($slug, $classId)
    {
        $data = Course::with('user', 'level')->where('slug', '=', $slug)
            ->whereHas('classes', function (Builder $q) use ($classId) {
                $q->where('id', $classId);
            })
            ->first();
        
        $class = ClassRoom::with('user','teacher','schedule','room','orders')->find($classId);
        

        return view('course-register', ['data' => $data, 'class' => $class]);
    }

    public function storeRegister( $classId, Request $request)
    {
        $request->validate(
            [
                'total' => 'required',
                'fullName' => 'required',
                'email' => 'email|unique:users',
                "phone" => 'required|max:13'
            ],
            [
                'fullName.required' => 'Vui lòng nhập họ tên',
                'email.required' => 'Vui lòng nhập email',
                'email.email' => 'Email không đúng định dạng',
                'phone.required' => 'Vui lòng nhập số điện thoại',
                'phone.max' => 'Số điện thoại không đúng định dạng',
                'email.unique' => 'Email này đã được đăng kí, vui lòng đăng nhập tài khoản của bạn',
            ]
        );

        // $model['total'] = str_replace(",", "", $model['total']);

        $don_hang = [];
        if (Auth::user()) {

            $customerId = Auth::user()->id;
            $profile = Profile::first('user_id', $customerId);
            if (!$profile) {
                Profile::create([
                    "user_id" => $customerId,
                    "name" => $request->fullName,
                    "avatar" => 'employee-avatar.png',
                    "phone" => $request->phone,
                ]);
            } else {
                $profile->phone = $request->phone;
                $profile->save();
            }

            $don_hang = [
                'total'     => 10000,
                'user_id' => $customerId,
                'fullName' => $request->fullName,
                'email' => $request->email,
                "phone" => $request->phone,
                "note" => $request->note,
                'status'    => 0,
                'classId' => $classId,
            ];
        } else {

            $student = User::create([
                "name" => "",
                "role" => "student",
                "email" =>  $request->email,
                'password' => Hash::make($request->phone),
            ]);

            $profile =  Profile::create([
                "user_id" => $student->id,
                "name" => $request->fullName,
                "avatar" => 'employee-avatar.png',
                "phone" => $request->phone,
            ]);

            $don_hang = [
                'total'     => 1000,
                'user_id' => $student->id,
                'fullName' => $request->fullName,
                'email' => $request->email,
                "phone" => $request->phone,
                "note" => $request->note ?? " ",
                'status'    => 0,
                'classId' => $classId,
            ];
        }

        try {
            Order::create($don_hang);
            if (Auth::check()) {
                $this->sendMail($don_hang['email']);
            } else {
                $this->sendMail($don_hang['email'], $request->phone);
            }
            return redirect()->back()->with('success', 'Đăng ký học thành công !');
        } catch (Exception $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
        return redirect()->back()->with('error', 'ERROR');
    }

    public function sendMail($email, $password = null)
    {
        try {

            $details = [
                'title' => 'Xác nhận đăng ký khoá học',
                'body' =>  'Thông tin tài khoản:',
                'email' => $email,
                'password' =>  $password
            ];

            \Mail::to($email)->send(new RegisterClassSendMail($details));
        } catch (Exception $e) {
            print_r($e->getMessage());
            die();
        }
    }
}
