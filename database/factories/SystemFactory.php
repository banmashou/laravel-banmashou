<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\System>
 */
class SystemFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition()
	{
		// 2. 为数据库表生成测试数据
		return [
			'title' => fake()->sentence(),
			'description' => fake()->sentence(),
			'preview' => fake()->imageUrl('300x300')
		];
	}
}
