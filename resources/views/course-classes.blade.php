@extends('layouts.app')

@section('content')
<div class="container">
    <div class="mb-2">
        <div class="text-xl font-semibold">DANH SÁCH LỚP HỌC</div>
        <div class="text-sm mt-2">Các lớp học có thể đăng kí</div>
    </div>
    <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small uk-grid">
        @foreach($data->classes as $item)
        <li tabindex="-1" class="uk-active">
            <a href="/course/{{$data->slug}}/{{$item->id}}/register" class="uk-link-reset">
                <div class="card uk-transition-toggle">
                    <div class="card-media h-40">
                        <div class="card-media-overly"></div>
                        <img src="{{$item->thumbnail ?? 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'}}" alt="" class="">
                        <span class="icon-play"></span>
                    </div>
                    <div class="card-body p-4">
                        <div class="font-semibold line-clamp-2">
                            <a href="/course/{{$data->slug}}/{{$item->id}}/register">{{$item->title}}</a>
                        </div>
                        <div class="flex space-x-2 items-center text-sm pt-3">
                        </div>
                        <div class="pt-1 flex items-center justify-between">
                            <div class="text-sm font-medium"> {{$item->user->name}} </div>
                            <span>Đã đăng ký {{$item->orders->count()}}</span>
                        </div>
                        <div class="pt-1">
                            <div>Lịch học Thứ: {{$item->schedule->days}}</div>
                            <div>Khung giờ: {{$item->schedule->start_hour}} - {{$item->schedule->end_hour}}</div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
        @endforeach
    </ul>
</div>
@endsection