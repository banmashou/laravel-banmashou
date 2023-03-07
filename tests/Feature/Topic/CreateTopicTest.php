<?php

namespace Tests\Feature\Topic;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreateTopicTest extends TestCase
{
	/**
	 * 标题内容不能为空
	 * @test
	 * @return void
	 */
	public function TheTitleAndContentCannotBeEmpty()
	{
		// $this->actingAs($this->create(User::class));
		$user = $this->create(User::class);
		$this->actingAs($user);

		$response = $this->postJson('api/topic', []);

		$response->assertStatus(422)->assertJsonValidationErrors(['title', 'content']);
	}

	/**
	 * 标题长度校验
	 * @test
	 * @return void
	 */
	public function TitleCheckLength()
	{
		$user = $this->create(User::class);
		$this->actingAs($user);
		$response = $this->postJson('api/topic', ['title' => 'bm']);
		$response->assertStatus(422)->assertJsonValidationErrors(['title']);
	}


	/**
	 * 成功发表贴子
	 * @test
	 * @return void
	 */
	public function successfulPublishedPosts()
	{
		$user = $this->create(User::class);
		$this->actingAs($user);
		$response = $this->postJson('api/topic', [
			'title' => $this->faker()->sentence(),
			'content' => $this->faker()->paragraph()
		]);
		$response->assertStatus(200)->assertJson(['message' => true]);
	}
}
