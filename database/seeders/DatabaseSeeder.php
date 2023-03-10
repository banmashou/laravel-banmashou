<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\System;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function run()
	{
		\App\Models\User::factory(10)->create();

		$user = User::first();
		$user->name = '斑马兽';
		$user->mobile = env('MOBILE');
		$user->email = '237313142@qq.com';
		$user->save();
		// \App\Models\User::factory()->create([
		//     'name' => 'Test User',
		//     'email' => 'test@example.com',
		// ]);

		// 3. 创建数据
		Topic::factory(50)->create();
		System::factory(10)->create();
	}
}
