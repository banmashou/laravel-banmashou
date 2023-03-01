<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
	/**
	 * 手机号不存在
	 * @test
	 * @return void
	 */
	public function PhoneNumberDoesNotExist()
	{
		$response = $this->postJson('api/auth/login', [
			'mobile' => '19999999999',
			'password' => 'admin888'
		]);

		$response->assertJsonValidationErrorFor('mobile');
	}



	/**
	 * 密码输入错误
	 * @test
	 * @return void
	 */
	public function ThePasswordInputError()
	{
		$response = $this->postJson('api/auth/login', [
			'mobile' => env('MOBILE'),
			'password' => 'admin88811'
		]);

		// $response->dd();
		$response->assertJsonValidationErrorFor('password');
	}

	/**
	 * 手机号不能为空
	 * @test
	 * @return void
	 */
	public function PhoneNumberCannotBeEmpty()
	{
		$response = $this->postJson('api/auth/login');
		$response->assertJsonValidationErrorFor('mobile');

		// assertJsonValidationErrors 多个验证的方法
		// $response->assertJsonValidationErrors(['mobile', 'password']);
	}
}
