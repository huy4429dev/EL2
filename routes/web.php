<?php

use App\Http\Controllers\AboutPageController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogPageController;
use App\Http\Controllers\ContactPageController;
use App\Http\Controllers\CoursePageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\MailjetController;
use App\Http\Controllers\SinglePageController;
use App\Http\Controllers\VnpayController;
use App\Models\MailConfig;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get("/debug", function () {
    dd(now()->hour(15)->minute(0)->second(0)->diffInMinutes(now(),false));
    $config = MailConfig::with("template", "campaign")
        ->where("campaign_id", 19)
        ->first();
    dd($config);

    $html = $config->template->html;
    dd($html);

    // $lead = Lead::first();
    // $campaign = Campaign::first();
    // return view("Email.tiktok-invited",compact("lead","campaign"));
    // dispatch(new HandleInvited(43, 1));
});

// Auth::routes();

Route::get('/vnpay/checkout', [VnpayController::class, 'payment'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/vnpay/success', [VnpayController::class, 'success'])->where('path', '[a-zA-Z0-9-/]+');

Route::get('/', [HomePageController::class, 'index'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/blog', [BlogPageController::class, 'index'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/blog/{id}', [BlogPageController::class, 'detail'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/course', [CoursePageController::class, 'index'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/course/{slug}/{classId}/register', [CoursePageController::class, 'register'])->where('path', '[a-zA-Z0-9-/]+');
Route::post('/course/{slug}/{classId}/register', [CoursePageController::class, 'storeRegister'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/course/{slug}/classes', [CoursePageController::class, 'classes'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/course/{slug}', [CoursePageController::class, 'detail'])->where('path', '[a-zA-Z0-9-/]+');

Route::get('/about', [AboutPageController::class, 'index'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/contact', [ContactPageController::class, 'index'])->where('path', '[a-zA-Z0-9-/]+');
Route::post('/contact', [ContactPageController::class, 'store'])->where('path', '[a-zA-Z0-9-/]+');

Route::get('/admin/{path?}', [AdminController::class, 'index'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/preview/{id}/{previewId}', [MailjetController::class, 'preview'])->name("preview");
Route::get('/{path?}', [SinglePageController::class, 'index'])->where('path', '[a-zA-Z0-9-/]+');
