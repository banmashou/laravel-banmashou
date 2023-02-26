<?php

namespace App\Services;

class CodeService
{
	public function send($phone) {
		return "向 {$phone} 发送验证码";
	}
}
