<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Aws\S3\S3Client;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use InvalidArgumentException;

class SignedStorageUrlController extends Controller {

	public function store(Request $request) {
		$this->ensureConfigurationIsSet();

		$bucket = config('page-builder.storage.bucket');

//		Gate::authorize('uploadFiles', [
//			$request->user(),
//			$bucket = $request->input('bucket') ?: $_ENV['AWS_BUCKET'],
//		]);

		$client = $this->storageClient();

		$uuid = Str::uuid()->toString();

		$signedRequest = $client->createPresignedRequest(
			$this->createCommand(
				$request,
				$client,
				$bucket,
				$key = ('tmp/' . $uuid),
			),
			'5 minutes',
		);

		$uri = $signedRequest->getUri();

		return response()->json([
			'uuid' => $uuid,
			'bucket' => $bucket,
			'key' => $key,
			'url' => $uri->getScheme() . '://' . $uri->getAuthority() . $uri->getPath() . '?' . $uri->getQuery(),
			'headers' => $this->headers($request, $signedRequest),
		], 201);
	}

	protected function createCommand(Request $request, S3Client $client, $bucket, $key) {
		return $client->getCommand('putObject', array_filter([
			'Bucket' => $bucket,
			'Key' => $key,
			'ACL' => $request->input('visibility') ?: $this->defaultVisibility(),
			'ContentType' => $request->input('content_type') ?: 'application/octet-stream',
			'CacheControl' => $request->input('cache_control') ?: null,
			'Expires' => $request->input('expires') ?: null,
		]));
	}

	protected function headers(Request $request, $signedRequest) {
		return array_merge(
			$signedRequest->getHeaders(),
			[
				'Content-Type' => $request->input('content_type') ?: 'application/octet-stream',
			],
		);
	}

	protected function ensureConfigurationIsSet() {
		if (config('page-builder.storage.default_region') === null) {
			throw new InvalidArgumentException('No default region set for S3 storage');
		}

		if (config('page-builder.storage.access_key_id') === null) {
			throw new InvalidArgumentException('No access key ID set for S3 storage');
		}

		if (config('page-builder.storage.secret_access_key') === null) {
			throw new InvalidArgumentException('No secret access key set for S3 storage');
		}

		if (config('page-builder.storage.bucket') === null) {
			throw new InvalidArgumentException('No bucket set for S3 storage');
		}
	}

	protected function storageClient() {
		$config = [
			'region' => config('page-builder.storage.default_region'),
			'version' => 'latest',
			'signature_version' => 'v4',
			'use_path_style_endpoint' => config('page-builder.storage.path_style_endpoint'),
			'credentials' => [
				'key' => config('page-builder.storage.access_key_id'),
				'secret' => config('page-builder.storage.secret_access_key'),
			],
		];

		if (config('page-builder.storage.endpoint')) {
			$config['endpoint'] = config('page-builder.storage.endpoint');
		}

		return new S3Client($config);
	}

	protected function defaultVisibility() {
		return 'private';
	}
}
