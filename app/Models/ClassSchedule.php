<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassSchedule extends Model
{
    use HasFactory;
    protected $table="class_schedules";
    protected $fillable = ["start_date","days", "end_date","note","class_id","start_hour", "end_hour","user_id"];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
    public function class()
    {
        return $this->belongsTo(ClassRoom::class);
    }

    public function details()
    {
        return $this->hasMany(ClassScheduleDetail::class,"schedule_id");
    }


}
