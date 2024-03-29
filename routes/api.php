<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\SignController;
use App\Http\Controllers\SystemController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\VideoController;
use App\Http\Resources\VideoResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
// 	return $request->user();
// });

Route::get('/abc',function(){
	return 'abc...';
});

Route::controller(AuthController::class)->prefix('auth')->group(function () {
	Route::post('login', 'login');
	Route::post('register', 'register');
});

// Route::apiResource('topic', TopicController::class);

Route::controller(TopicController::class)->prefix('topic')->group(function () {
	Route::apiResource(null, TopicController::class)->parameters([null => 'topic']);
});

// 系统课程
Route::apiResource('system', SystemController::class);

// 课程
Route::apiResource('lesson', LessonController::class);

// 视频
Route::apiResource('video', VideoController::class);

// 签到
Route::apiResource('sign', SignController::class);

// 收藏
Route::post('favorite/{type}/{id}', [FavoriteController::class, 'toggle']);

// 评论
Route::post('comment/{type}/{id}', [CommentController::class, 'store']);
Route::get('comment/{type}/{id}', [CommentController::class, 'index']);
Route::apiResource('comment', CommentController::class);
