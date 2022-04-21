<?php

namespace App\Http\Controllers;

use App\Models\Level;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LevelController extends Controller
{
    public function index(Request $request)
    {

        $page = $request->query('page') ?? 1;
        $pageSize = $request->query('pageSize') ?? 3;

        $data = Level::when($request->has("search"), function ($q) use ($request) {
            $term = strtolower($request->search);
            return $q->whereRaw('lower(name) like (?) ',["%{$term}%"])
                    ;
        })
        ->when($request->has("status"), function ($q) use ($request) {
            return $q->where('status', '=', $request->status);
        })
        ->when($request->has("start_date"), function ($q) use ($request) {
            return $q->where('created_at', '>=', $request->start_date);
        })
        ->when($request->has("end_date"), function ($q) use ($request) {
            return $q->where('created_at', '<=', $request->end_date);
        })
        ->orderBy('id', 'desc')
        ->skip(($page - 1) * $pageSize)
        ->take($pageSize)
        ->get();


        $total = Level::when($request->has("search"), function ($q) use ($request) {
            $term = strtolower($request->search);
            return $q->whereRaw('lower(name) like (?) ',["%{$term}%"])
                    ;
        })
        ->when($request->has("status"), function ($q) use ($request) {
            return $q->where('status', '=', $request->status);
        })
        ->when($request->has("start_date"), function ($q) use ($request) {
            return $q->where('created_at', '>=', $request->start_date);
        })
        ->when($request->has("end_date"), function ($q) use ($request) {
            return $q->where('created_at', '<=', $request->end_date);
        })
        ->count();

        return response()->json([
            "total" => $total,
            "data" => $data,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {

            return response()->json(['error' => $validator->errors()], 400);
        }

        Level::create($request->all());
        return response()->json([
            "message" => "Thêm mới thành công",
        ]);
    }

    public function show($id)
    {
        sleep(5);
        $model = Level::find($id);
        if ($model == null) {
            return response()->json(['error' => "Không tìm thấy dữ liệu"], 400);
        }
        return response()->json($model);
    }

    public function update($id, Request $request)
    {
        $model = Level::find($id);
        $model->name = $request->name;
        $model->description = $request->description;
        $model->save();
        return response()->json(["message" => "Cập nhật thành công"]);
    }

    public function destroy($id)
    {
        $model = Level::find($id);
        if ($model == null) {
            return response()->json(['error' => "Không tìm thấy dữ liệu"], 400);
        }
        $model->delete();
        return response()->json([
            "message" => "Xoá chiến dịch thành công",
        ]);
    }
}
