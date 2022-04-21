<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "System Admin",
            'email' => "admin@com.vn",
            'role' => 'admin',
            'password' => Hash::make('123456'),
        ]);

        DB::table('users')->insert([
            'name' => "manage",
            'email' => "manage@com.vn",
            'role' => 'manage',
            'password' => Hash::make('123456'),
        ]);

        DB::table('users')->insert([
            'name' => "student",
            'email' => "student@com.vn",
            'role' => 'student',
            'password' => Hash::make('123456'),
        ]);


        DB::table('users')->insert([
            'name' => "teacher",
            'email' => "teacher@com.vn",
            'role' => 'teacher',
            'password' => Hash::make('123456'),
        ]);
    }
}
