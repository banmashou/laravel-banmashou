<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;

class CodeService
{
	public function send($phone)
	{
		app(AliyunService::class)->sms(
			config('bm.aliyun.aliyun_code_sign'),
			config('bm.aliyun.aliyun_code_template'),
			$phone,
			["code" => $this->code($phone)]
		);
	}

	protected function code($phone)
	{
		Cache::flush();
		if (Cache::get($phone)) abort(403, '请稍后再试');

		$code = mt_rand(1000, 9999);

		Cache::put($phone, $code, 600);

		return $code;
	}
}
