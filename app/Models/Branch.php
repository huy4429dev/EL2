<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;
    protected $table="branches";
    protected $fillable = ["name","description"];

    public function branches()
    {
        return $this->hasMany(Room::class);
    }
}
