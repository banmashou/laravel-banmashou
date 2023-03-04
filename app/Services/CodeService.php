<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;

class CodeService
{
	public function send($phone): int
	{
		$code = $this->code($phone);

		if (app()->environment('testing')) return $code;

		app(AliyunService::class)->sms(
			config('bm.aliyun.aliyun_code_sign'),
			config('bm.aliyun.aliyun_code_template'),
			$phone,
			["code" => $code, 'product' => config('app.name')]
		);

		return $code;
	}

	protected function code($phone): int
	{
		Cache::flush();
		if (Cache::get($phone)) abort(403, '请稍后再试');

		$code = mt_rand(1000, 9999);

		Cache::put($phone, $code, config('bm.code.timeout'));

		return $code;
	}
}
