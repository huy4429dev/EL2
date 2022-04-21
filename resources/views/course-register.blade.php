@extends('layouts.app')

@section('content')
<div class="container">

    <h1 class="md:text-2xl text-xl leading-none text-gray-900 tracking-tight my-3"> Đăng ký học </h1>

    <nav class="cd-secondary-nav border-b md:m-0 -mx-4 nav-small">
        <ul>
            <li class="active"><a href="#" class="lg:px-2">Thông tin chung </a></li>
        </ul>
    </nav>

    <div class="grid lg:grid-cols-2 mt-12 gap-8">
        <div class="group-info">
        <h3 class="text-xl mb-3"> Thông tin </h3>
            <div class="bg-white rounded-md lg:shadow-md shadow col-span-2 p-4">
                <div>Tên lớp học: <span>{{$class -> title}}</span></div>
                <div>Mã lớp học: <span>{{$class -> code}}</span></div>
                <div>Phòng học: <span>{{$class -> room->name}}</span></div>
                <div>Sỉ số: <span>{{$class -> qty}} học sinh</span></div>
                <div>Giáo viên phụ trách: <span>{{$class -> teacher->name}}</span></div>
                <div>Ngày bắt đầu: <span>{{$class -> start_date}}</span></div>
                <div>Ngày kết thúc: <span>{{$class -> end_date}}</span></div>
                <div>Lịch học Thứ: {{$class->schedule->days}}</div>
                <div>Khung giờ: {{$class->schedule->start_hour}} - {{$class->schedule->end_hour}}</div>
            </div>
        </div>

        <div>
            <h3 class="text-xl mb-3"> Đăng ký học</h3>
            <div class="bg-white rounded-md lg:shadow-md shadow col-span-2">
                <form action="/course/{{$data->slug}}/{{$data->classes->first()->id}}/register" method="POST">
                    @csrf
                    <div class="grid grid-cols-2 gap-3 lg:p-6 p-4">
                        @if ($errors->any())
                        <div class="mt-4">
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        @endif
                        @if(session()->has('success'))
                        <div class="mt-4">
                            <div class="alert alert-success">
                                {{ session()->get('success') }}
                            </div>
                        </div>
                        @endif

                        @if(session()->has('error'))
                        <div class="mt-4">
                            <div class="alert alert-danger">
                                {{ session()->get('error') }}
                            </div>
                        </div>
                        @endif
                        <div class="col-span-2">
                            <label for="fullName"> Họ tên</label>
                            <input name="fullName" type="text" placeholder="" id="fullName" class="shadow-none with-border">
                        </div>
                        <div class="col-span-2">
                            <label for="email"> Email</label>
                            <input name="email" type="text" placeholder="" id="email" class="shadow-none with-border">
                        </div>
                        <div class="col-span-2">
                            <label for="phone"> Điện thoại</label>
                            <input name="phone" type="text" placeholder="" id="phone" class="shadow-none with-border">
                        </div>
                        <div class="col-span-2">
                            <label for="total">Học phí ( vnd )</label>
                            <input disabled value="{{number_format($data->price)}}" type="text" id="total" class="shadow-none with-border">
                            <input name="total" value="{{number_format($data->price)}}" type="hidden">
                        </div>
                        <div class="col-span-2">
                            <label for="note">Ghi chú</label>
                            <textarea id="note" name="note" rows="3" class="with-border"></textarea>
                        </div>
                    </div>

                    <div class="bg-gray-10 p-6 pt-0 flex justify-end space-x-3">
                        <button type="submit" class="button bg-blue-700"> Đăng ký </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
@endsection