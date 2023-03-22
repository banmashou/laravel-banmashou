<?php

namespace Tests\Feature\Comment;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ReplyCommntTest extends TestCase
{
	use Comment;
	/**
	 * 发表评论的回复
	 * @test
	 * @return void
	 */
	public function commentOnTheReply()
	{
		$comment = $this->comment();
		$this->login($this->create(User::class));
		$response = $this->postJson('/api/comment/topic/' . $comment->commentable_id, [
			'content' => $this->faker()->sentence(),
			'comment_id' => $comment->id
		]);
		$response->assertStatus(200)->assertJsonPath('data.reply_user_id', $comment->user_id);
	}
}
