<?php

namespace Drewdan\PageBuilder\Tests;

use Orchestra\Testbench\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Drewdan\PageBuilder\PageBuilderServiceProvider;
use Illuminate\Foundation\Bootstrap\LoadEnvironmentVariables;

class TestCase extends BaseTestCase {

	use RefreshDatabase;

	public function setUp(): void {
		parent::setUp();
	}

	protected function getPackageProviders($app) {
		return [
			PageBuilderServiceProvider::class,
		];
	}

	protected function getEnvironmentSetUp($app) {
		$app->useEnvironmentPath(__DIR__.'/..');
        $app->bootstrapWith([LoadEnvironmentVariables::class]);
        parent::getEnvironmentSetUp($app);
	}
}
