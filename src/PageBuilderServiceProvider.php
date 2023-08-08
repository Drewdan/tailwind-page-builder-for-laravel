<?php

namespace Drewdan\PageBuilder;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Drewdan\PageBuilder\View\Components\DefaultLayout;

class PageBuilderServiceProvider extends ServiceProvider {

	const PACKAGE_VERSION = '0.0.6';

	public function boot() {
		$this->registerRoutes();

		$this->loadViewsFrom(__DIR__ . '/../resources/views', 'page-builder');

		$this->publishes([
			__DIR__ . '/../public' => public_path('vendor/page-builder'),
		], 'public');

		$this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

		Blade::component('default-layout', DefaultLayout::class);
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
		Route::group($this->externalRouteConfiguration(), function () {
			$this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
		});

		Route::group($this->internalRouteConfiguration(), function () {
			$this->loadRoutesFrom(__DIR__ . '/../routes/internal.php');
		});

	}

	protected function internalRouteConfiguration(): array {
		return [
			'prefix' => config('page-builder.prefix'),
			'middleware' => config('page-builder.middleware'),
		];
	}

	protected function externalRouteConfiguration(): array {
		return [
			'prefix' => config('page-builder.external.prefix'),
			'middleware' => config('page-builder.external.middleware'),
		];
	}

}
