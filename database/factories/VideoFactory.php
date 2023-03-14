<?php

namespace Database\Factories;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition()
	{
		return [
			'title' => fake()->sentence(),
			'lesson_id' => Lesson::inRandomOrder()->first()->id,
			'path' => 'file:///C:/Users/HeJun/Desktop/WeChat_20230314214937.mp4'
		];
	}
}
