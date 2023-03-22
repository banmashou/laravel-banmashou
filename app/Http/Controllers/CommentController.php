<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Http\Resources\CommentResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request, string $type, int $id)
	{
		$comments = model($type, $id)->comments()->get();
		return CommentResource::collection($comments);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \App\Http\Requests\StoreCommentRequest  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(StoreCommentRequest $request, String $type, int $id)
	{
		$model = model($type, $id);
		$data = ['user_id' => Auth::id()] + $request->input();

		if ($request->comment_id) {
			$data['reply_user_id'] = Comment::find($request->comment_id)->user_id;
		}

		$comment = $model->comments()->create($data);
		// return $model;
		// $comment->fill(['user_id' => Auth::id()] + $request->input())->save();
		return new CommentResource($comment->fresh());
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Models\Comment  $comment
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Comment $comment)
	{
		$this->authorize('delete', $comment);

		return $this->success('删除成功');
	}
}
