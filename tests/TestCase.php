<?php

class TestCase extends \Orchestra\Testbench\TestCase {

	public function setUp(): void {
		parent::setUp();
	}

	protected function getPackageProviders($app) {
		return [
			PageBuilderServiceProvider::class,
		];
	}

	protected function getEnvironmentSetUp($app) {
		// perform environment setup
	}
}
