<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassScheduleDetail extends Model
{
    use HasFactory;
    protected $table="class_schedule_details";
    protected $fillable = ["start_date", "end_date","note","schedule_id"];


    public function schedule()
    {
        return $this->belongsTo(ClassSchedule::class);
    }

    

    // public function posts()
    // {
    //     return $this->belongsToMany(BlogPost::class, 'blog_posts_categories', 'category_id', 'post_id');
    // }
}
