<?php

namespace Tests\Feature\Topic;

use App\Models\Topic;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UpdateTopicTest extends TestCase
{
	/**
	 * 表单数据验证
	 * @test
	 * @return void
	 */
	public function theFormDataValidation()
	{
		$this->login();
		$topic = $this->create(Topic::class);
		$response = $this->putJson("api/topic/{$topic['id']}", []);
		$response->assertStatus(422);
	}
}
