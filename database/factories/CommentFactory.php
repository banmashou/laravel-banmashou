<?php

namespace Database\Factories;

use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition()
	{
		return [
			'content' => fake()->sentence(),
			'user_id' => User::inRandomOrder()->first()->id,
			'commentable_type' => 'App\Models\Topic',
			'commentable_id' => 1
			// 'reply_user_id' => User::inRandomOrder()->first()->id,
		];
	}
}
