<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Basic Page Needs
    ================================================== -->
    <title>El Center Template</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="El Center is - Professional A unique and beautiful collection of UI elements">

    <!-- Favicon -->
    <link href="/client/assets/images/favicon.png" rel="icon" type="image/png">

    <!-- icons
    ================================================== -->
    <link rel="stylesheet" href="/client/assets/css/icons.css">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="/client/assets/css/uikit.css">
    <link rel="stylesheet" href="/client/assets/css/style.css">
    <link rel="stylesheet" href="/client/assets/css/tailwind.css">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'El center') }}</title>


    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- Scripts -->

</head>

<body>

    <div id="wrapper" class="is-verticle">

        <!--  Header  -->
        <header class="is-transparent is-dark border-b backdrop-filter backdrop-blur-2xl" uk-sticky="cls-inactive: is-dark is-transparent border-b">
            <div class="header_inner">
                <div class="left-side">

                    <!-- Logo -->
                    <div id="logo">
                        <a href="/">
                            <img src="/client/assets/images/logo.png" alt="">
                            <img src="/client/assets/images/logo-light.png" class="logo_inverse" alt="">
                            <img src="/client/assets/images/logo-mobile.png" class="logo_mobile" alt="">
                        </a>
                    </div>

                    <!-- icon menu for mobile -->
                    <div class="triger" uk-toggle="target: #wrapper ; cls: is-active">
                    </div>

                </div>
                <div class="right-side">

                    <!-- Header search box  -->
                    <form action="/course" method="get">
                        <div class="header_search"><i class="uil-search-alt"></i>
                            <input name="search" value="{{request()->get('search')}}" type="text" class="form-control" placeholder="Tìm kiếm khoá học ..." autocomplete="off">
                        </div>
                    </form>
                </div>
            </div>
        </header>

        <!-- Main Contents -->
        <div class="main_content">
            @yield('content')
        </div>

        <!-- sidebar -->
        <div class="sidebar">
            <div class="sidebar_inner" data-simplebar>

                <ul class="side-colored">
                    <li ><a href="/">
                            <ion-icon name="compass" class="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500">
                            </ion-icon>
                            <span>Trang chủ</span>
                        </a>
                    </li>
                    <li><a href="/blog">
                            <ion-icon name="newspaper" class="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500">
                            </ion-icon>
                            <span>Blog</span>
                        </a>
                    </li>
                    <!-- <li><a href="/document">
                            <ion-icon name="book" class="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                            </ion-icon>
                            <span>Tài liệu</span>
                        </a>
                    </li> -->
                    <li><a href="/course">
                            <ion-icon name="play-circle" class="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                            </ion-icon>
                            <span> Khóa học</span>
                        </a>
                    </li>
                </ul>

                <ul class="side_links" data-sub-title="Pages">
                    <li><a href="/about">
                            <ion-icon name="information-circle-outline" class="side-icon"></ion-icon> Giới thiệu
                        </a></li>
                    <li><a href="/contact">
                            <ion-icon name="albums-outline" class="side-icon"></ion-icon> Liên hệ
                        </a></li>
                    <li><a href="/admin/login">
                            <ion-icon name="document-text-outline" class="side-icon"></ion-icon> Tài khoản
                        </a></li>
                    <!-- <li><a href="#">Tải khoản </a>
                        <ul>
                            <li><a href="/admin/login">Đăng nhập </a></li>
                            <li><a href="/admin/register">Đăng ký</a></li>
                        </ul>
                    </li> -->
                </ul>
            </div>

            <div class="side_overly" uk-toggle="target: #wrapper ; cls: is-collapse is-active"></div>
        </div>

    </div>


    <!-- Javascript
    ================================================== -->
    <script src="/client/assets/libs/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="/client/assets/js/uikit.js"></script>
    <script src="/client/assets/js/tippy.all.min.js"></script>
    <script src="/client/assets/js/simplebar.js"></script>
    <script src="/client/assets/js/custom.js"></script>
    <script src="/client/assets/js/bootstrap-select.min.js"></script>
    <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
    <script>
        const path = window.location.pathname;
        const menuItem = document.querySelector(
            `.side-colored a[href="${path}"]`
        );
        menuItem?.parentElement.classList.add("active");
    </script>

</body>


<!-- Mirrored from demo.foxthemes.net/El Center-v4.2/default/explore.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Jun 2021 06:48:04 GMT -->

</html>