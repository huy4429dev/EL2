@extends('layouts.app')

@section('content')
<div class="container">
    <div class="mb-2">
        <div class="text-xl font-semibold">KHÓA HỌC ĐANG KHAI GIẢNG</div>
        <div class="text-sm mt-2"> Các khóa học đang khai giảng và có nhiều ưu đãi tại ENLISH CENTER</div>
    </div>

    <nav class="cd-secondary-nav border-b md:m-0 -mx-4 nav-small">
        <ul>
            @if(!request()->get('search'))
            <li class="active"><a href="#" class="lg:px-2"> Mới </a></li>
            @endif
            @if(request()->get('search'))
            <li class="active"><a href="#" class="lg:px-2">Từ khoá: {{request()->get('search')}} </a></li>
            @endif
        </ul>
    </nav>

    <!--  slider -->
    <div class="mt-3">
        <h4 class="py-3 border-b font-semibold text-grey-700  mx-1 mb-4" hidden>
            <ion-icon name="star"></ion-icon> Featured today
        </h4>

        <div class="relative" uk-slider="finite: true">
            <div class="uk-slider-container px-1 py-3">
                <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small uk-grid">
                    @if(count($data) > 0)
                    @foreach ($data as $item)
                    <li>
                        <a href="/course/{{$item->slug}}" class="uk-link-reset">
                            <div class="card uk-transition-toggle">
                                <div class="card-media h-40">
                                    <div class="card-media-overly"></div>
                                    <img src="{{$item->thumbnail ?? 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'}}" alt="" class="">
                                    <span class="icon-play"></span>
                                </div>
                                <div class="card-body p-4">
                                    <div class="font-semibold line-clamp-2">{{$item->title}}</div>
                                    <div class="flex space-x-2 items-center text-sm pt-3">
                                        <div> {{$item->number_of_hours}} giờ </div>
                                        <div> · </div>
                                        <div> {{$item->lectures}} bài học </div>
                                    </div>
                                    <div class="pt-1 flex items-center justify-between">
                                        <div class="text-sm font-medium"> {{$item->user->name}} </div>
                                        <div class="text-lg font-semibold"> {{number_format($item->price)}} đ </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    @endforeach
                    @endif
                    @if( count($data) == 0)
                      <div class="alert alert-warning">Không có kết quả tìm kiếm cho từ khoá</div>
                    @endif
                </ul>
                <div class="d-flex justify-content-end mt-5">
                    {{$data->links('pagination.default')}}
                </div>
            </div>
        </div>
    </div>
    @endsection