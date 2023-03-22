<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

	// protected function success(string $message, array $data = [])
	protected function success(string $message, $data = [], $code = 0)
	{
		return [
			'message' => $message,
			'code' => $code,
			'data' => $data
		];
	}
}
