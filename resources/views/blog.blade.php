@extends('layouts.app')

@section('content')
<div class="container">

    <div class="text-2xl font-semibold"> Articles </div>
    <nav class="cd-secondary-nav border-b md:m-0 nav-small">
        <ul>
            <li class="active"><a href="#" class="lg:px-2"> Suggestions </a></li>
        </ul>
    </nav>

    <div class="lg:flex lg:space-x-4 lg:-mx-4 mt-6">

        <div class="lg:w-10/12">
            <div class="divide-y tube-card px-6 md:m-0 -mx-5">
                @foreach ($data as $item)
                <div class="md:flex md:space-x-6 py-5">
                    <a href="blog-read.html">
                        <div class="md:w-56 w-full h-36 overflow-hidden rounded-lg relative shadow-sm">
                            <img src="{{$item->thumbnail ?? 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'}}" alt="" class="w-full h-full absolute inset-0 object-cover">
                            <div class="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
                                JavaScript
                            </div>
                        </div>
                    </a>
                    <div class="flex-1 md:pt-0 pt-4">

                        <a href="blog-read.html" class="text-xl font-semibold line-clamp-2 leading-8">{{$item->title}}</a>
                        <p class="line-clamp-2"> {{strlen($item->description) > 200 ? subtr($item->description,200) . '...' : $item->description}}   </p>

                        <div class="flex items-center pt-2 text-sm">
                            <div class="flex items-center">
                                <ion-icon name="bookmark-outline" class="text-xl mr-2"></ion-icon>
                            </div>
                        </div>

                    </div>
                </div>
                @endforeach
            </div>
            <div class="d-flex justify-content-end mt-5">
                {{$data->links('pagination.default')}}
            </div>

        </div>
        <!--  Sidebar  -->
        <div class="lg:w-80 w-full">

            <div class="space-y-5" uk-sticky="offset:22; bottom:true ; top:30 ; animation: uk-animation-slide-top-small">

                <div class="tube-card p-6">
                    <div class="flex items-start justify-between">
                        <div>
                            <h4 class="text-lg -mb-0.5 font-semibold"> Recently Posted </h4>
                        </div>
                        <a href="#" class="text-blue-600">
                            <ion-icon name="refresh" class="-mt-0.5 -mr-2 hover:bg-gray-100 p-1.5 rounded-full text-lg md hydrated" role="img" aria-label="refresh"></ion-icon>
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="blog-read.html" class="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                                <h3 class="font-medium line-clamp-2"> Interesting JavaScript and CSS Libraries you should know </h3>
                                <div class="flex items-center my-auto text-xs space-x-1.5">
                                    <div> Sep 12, 2020</div>
                                    <div class="pb-1"> . </div>
                                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                                    <div> 23</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="blog-read.html" class="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                                <h3 class="font-medium line-clamp-2"> Awesome Web Dev Tools and Resources For 2021</h3>
                                <div class="flex items-center my-auto text-xs space-x-1.5">
                                    <div> Sep 12, 2020</div>
                                    <div class="pb-1"> . </div>
                                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                                    <div> 23</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="blog-read.html" class="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                                <h3 class="font-medium line-clamp-2">Interesting Web development and CSS Libraries </h3>
                                <div class="flex items-center my-auto text-xs space-x-1.5">
                                    <div> Sep 12, 2020</div>
                                    <div class="pb-1"> . </div>
                                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                                    <div> 23</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="blog-read.html" class="hover:bg-gray-50 rounded-md p-2 -mx-2 block">
                                <h3 class="font-medium line-clamp-2">Awesome Web Dev Tools and Resources For 2021 </h3>
                                <div class="flex items-center my-auto text-xs space-x-1.5">
                                    <div> Sep 12, 2020</div>
                                    <div class="pb-1"> . </div>
                                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                                    <div> 23</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <a href="#" class="hover:bg-gray-100 -mb-2 mt-0.5 h-8 flex items-center justify-center rounded-md text-blue-400 text-sm">
                        See all
                    </a>
                </div>

                <div class="tube-car p-2">
                    <h4 class="text-lg mb-2 font-semibold"> Tags </h4>
                    <div class="flex flex-wrap gap-2">
                        <a href="#" class="bg-gray-200 py-1.5 px-4 rounded-full"> Computers</a>
                        <a href="#" class="bg-gray-200 py-1.5 px-4 rounded-full"> Business</a>
                        <a href="#" class="bg-gray-200 py-1.5 px-4 rounded-full"> News</a>
                        <a href="#" class="bg-gray-200 py-1.5 px-4 rounded-full"> Architecher</a>
                        <a href="#" class="bg-gray-200 py-1.5 px-4 rounded-full"> Technolgy</a>
                        <a href="#" class="bg-gray-200 py-1.5 px-4 rounded-full"> Music</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection