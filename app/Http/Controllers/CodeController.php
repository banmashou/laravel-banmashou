<?php

namespace App\Http\Controllers;

use App\Services\AliyunService;
use App\Services\CodeService;
use Illuminate\Http\Request;

class CodeController extends Controller
{
	public function send()
	{
		app(AliyunService::class)->sms();
		return 'ok';
		// return app(CodeService::class)->send(env('MOBILE'));
	}
}
