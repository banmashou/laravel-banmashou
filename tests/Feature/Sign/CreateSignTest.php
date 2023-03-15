<?php

namespace Tests\Feature\Sign;

use App\Models\Sign;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreateSignTest extends TestCase
{
	/**
	 * 签到表单验证
	 * @test
	 * @return void
	 */
	public function signInFormValidation()
	{
		$response = $this->postJson('/api/sign', []);

		$response->assertStatus(422)->assertJsonValidationErrors(['content', 'mood']);
	}

	/**
	 * 当前不允许重复签到
	 * @test
	 * @return void
	 */
	public function theCurrentIsNotAllowedToRepeatSignIn()
	{
		$this->login($this->create(User::class));
		$sign = $this->create(Sign::class, null, [
			'user_id' => $this->user->id
		]);

		// dd(\Auth::user()->toArray());
		$response = $this->postJson('/api/sign', [
			'content' => $this->faker()->sentence(),
			'mood' => 'mood'
		]);

		$response->assertStatus(403);
	}
}
