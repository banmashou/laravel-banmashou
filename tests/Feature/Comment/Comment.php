<?php

namespace Tests\Feature\Comment;

use App\Models\Topic;
use App\Models\User;

trait Comment
{
	/**
	 * 获取新评论
	 */
	protected function comment()
	{
		$user = $this->create(User::class);
		$topic = $this->create(Topic::class);
		return $topic->comments()->create(['user_id' => $user->id, 'content' => $this->faker()->sentence()]);
	}
}
