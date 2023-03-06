<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use App\Http\Requests\StoreTopicRequest;
use App\Http\Requests\UpdateTopicRequest;
use App\Http\Resources\TopicResource;

class TopicController extends Controller
{

	public function __construct()
	{
		// header jwt token
		$this->middleware('auth:sanctum')->except(['index', 'show']);
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return TopicResource::collection(Topic::with('user')->paginate(10));
		// return [
		// 	'data' => [
		// 		''
		// 	]
		// ]
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \App\Http\Requests\StoreTopicRequest  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(StoreTopicRequest $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Models\Topic  $topic
	 * @return \Illuminate\Http\Response
	 */
	public function show(Topic $topic)
	{
		return new TopicResource($topic->load('user'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Models\Topic  $topic
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Topic $topic)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \App\Http\Requests\UpdateTopicRequest  $request
	 * @param  \App\Models\Topic  $topic
	 * @return \Illuminate\Http\Response
	 */
	public function update(UpdateTopicRequest $request, Topic $topic)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Models\Topic  $topic
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Topic $topic)
	{
		//
	}
}
