<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;
    protected $table="blog_categories";
    protected $fillable = ["name","slug","description"];

    public function posts()
    {
        return $this->belongsToMany(BlogPost::class, 'blog_posts_categories', 'category_id', 'post_id');
    }

}
