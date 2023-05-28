<?php

namespace Drewdan\PageBuilder;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class PageBuilderServiceProvider extends ServiceProvider {

	public function boot() {
		$this->registerRoutes();

		$this->loadViewsFrom(__DIR__ . '/../resources/views', 'page-builder');

		$this->publishes([
			__DIR__ . '/../public' => public_path('vendor/page-builder'),
		], 'public');
	}

	public function register() {
		$this->mergeConfigFrom(__DIR__ . '/../config/config.php', 'page-builder');

		if ($this->app->runningInConsole()) {

			$this->publishes([
				__DIR__ . '/../config/config.php' => config_path('page-builder.php'),
			], 'config');

		}
	}

	protected function registerRoutes() {
		Route::group($this->routeConfiguration(), function () {
			$this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
		});
	}

	protected function routeConfiguration() {
		return [
			'prefix' => config('page-builder.prefix'),
			'middleware' => config('page-builder.middleware'),
		];
	}

}
