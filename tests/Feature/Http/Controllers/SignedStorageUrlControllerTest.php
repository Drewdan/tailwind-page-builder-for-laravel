<?php

namespace Drewdan\PageBuilder\Tests\Feature\Http\Controllers;

use Illuminate\Support\Facades\Config;
use Drewdan\PageBuilder\Tests\TestCase;

class SignedStorageUrlControllerTest extends TestCase {

	public function testCanGenerateSignedStorageUploadUrl() {
		Config::set('page-builder.storage.bucket', 'test-bucket');
		Config::set('page-builder.storage.default_region', 'us-east-1');
		Config::set('page-builder.storage.access_key_id', 'test-access-key-id');
		Config::set('page-builder.storage.secret_access_key', 'test-secret-access-key');

		$this->post('page-builder/storage-url')
			->assertStatus(201)
			->assertJsonStructure(['url', 'uuid']);
	}

	public function testCanOverrideDefaultEndpoint() {
		Config::set('page-builder.storage.bucket', 'test-bucket');
		Config::set('page-builder.storage.default_region', 'us-east-1');
		Config::set('page-builder.storage.access_key_id', 'test-access-key-id');
		Config::set('page-builder.storage.secret_access_key', 'test-secret-access-key');
		Config::set('page-builder.storage.endpoint', 'http://foobar.com');

		$response = $this->post('page-builder/storage-url')
			->assertStatus(201)
			->assertJsonStructure(['url', 'uuid'])
			->json('url');

		$this->assertTrue(str_starts_with($response, 'http://test-bucket.foobar.com'));
	}
}
