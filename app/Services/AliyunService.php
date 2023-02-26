<?php

namespace App\Services;

use AlibabaCloud\SDK\Dysmsapi\V20170525\Dysmsapi;
use \Exception;
use AlibabaCloud\Tea\Exception\TeaError;
use AlibabaCloud\Tea\Utils\Utils;

use Darabonba\OpenApi\Models\Config;
use AlibabaCloud\SDK\Dysmsapi\V20170525\Models\SendSmsRequest;
use AlibabaCloud\Tea\Utils\Utils\RuntimeOptions;

class AliyunService
{
	/**
	 * 使用AK&SK初始化账号Client
	 * @param string $accessKeyId
	 * @param string $accessKeySecret
	 * @return Dysmsapi Client
	 */
	public static function createClient($accessKeyId, $accessKeySecret)
	{
		$config = new Config([
			// 必填，您的 AccessKey ID
			"accessKeyId" => $accessKeyId,
			// 必填，您的 AccessKey Secret
			"accessKeySecret" => $accessKeySecret
		]);
		// 访问的域名
		$config->endpoint = "dysmsapi.aliyuncs.com";
		return new Dysmsapi($config);
	}

	/**
	 * @param string[] $args
	 * @return void
	 */
	public static function sms($sign, $template, $phone, $params)
	{
		// 工程代码泄露可能会导致AccessKey泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考，建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/311677.html
		$client = self::createClient(config('bm.aliyun.aliyun_key'), config('bm.aliyun.aliyun_secret'));
		$sendSmsRequest = new SendSmsRequest([
			"signName" => $sign,
			"templateCode" => $template,
			"phoneNumbers" => $phone,
			"templateParam" => json_encode($params)
		]);
		$runtime = new RuntimeOptions([]);
		// 复制代码运行请自行打印 API 的返回值
		$client->sendSmsWithOptions($sendSmsRequest, $runtime);
	}
}
