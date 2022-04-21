<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;

class BlogPageController extends Controller
{
    public function index()
    {
        $data = BlogPost::with('user')->orderBy('id', 'desc')->paginate(3);
        return view('blog', ['data' => $data]);
    }

    public function detail($id,Request $request)
    {
        return view('blog-detail');
    }
}
