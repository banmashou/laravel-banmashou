<?php

namespace App\Providers;

use App\Services\AliyunService;
use App\Services\CodeService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->app->instance(CodeService::class, new CodeService());
		$this->app->instance(AliyunService::class, new AliyunService());
	}

	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot()
	{
		//
	}
}
