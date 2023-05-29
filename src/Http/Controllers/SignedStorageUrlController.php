<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Aws\S3\S3Client;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use InvalidArgumentException;

class SignedStorageUrlController extends Controller {
	public function store(Request $request) {
		$this->ensureEnvironmentVariablesAreAvailable($request);

		$bucket = $request->input('bucket') ?: $_ENV['AWS_BUCKET'];

//		Gate::authorize('uploadFiles', [
//			$request->user(),
//			$bucket = $request->input('bucket') ?: $_ENV['AWS_BUCKET'],
//		]);

		$client = $this->storageClient();

		$uuid = Str::uuid()->toString();

		$expiresAfter = config('vapor.signed_storage_url_expires_after', 5);

		$signedRequest = $client->createPresignedRequest(
			$this->createCommand($request, $client, $bucket, $key = ('tmp/' . $uuid)),
			sprintf('+%s minutes', $expiresAfter)
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
			]
		);
	}

	protected function ensureEnvironmentVariablesAreAvailable(Request $request) {
		$missing = array_diff_key(array_flip(array_filter([
			$request->input('bucket') ? null : 'AWS_BUCKET',
			'AWS_DEFAULT_REGION',
			'AWS_ACCESS_KEY_ID',
			'AWS_SECRET_ACCESS_KEY',
		])), $_ENV);

		if (empty($missing)) {
			return;
		}

		throw new InvalidArgumentException(
			'Unable to issue signed URL. Missing environment variables: ' . implode(', ', array_keys($missing))
		);
	}

	protected function storageClient() {
		$config = [
			'region' => config('filesystems.disks.s3.region', $_ENV['AWS_DEFAULT_REGION']),
			'version' => 'latest',
			'signature_version' => 'v4',
			'use_path_style_endpoint' => config('filesystems.disks.s3.use_path_style_endpoint', false),
		];

		if (!isset($_ENV['AWS_LAMBDA_FUNCTION_VERSION'])) {
			$config['credentials'] = array_filter([
				'key' => $_ENV['AWS_ACCESS_KEY_ID'] ?? null,
				'secret' => $_ENV['AWS_SECRET_ACCESS_KEY'] ?? null,
				'token' => $_ENV['AWS_SESSION_TOKEN'] ?? null,
			]);

//			if (array_key_exists('AWS_URL', $_ENV) && !is_null($_ENV['AWS_URL'])) {
				//$config['url'] = $_ENV['AWS_URL'];
				$config['endpoint'] = $_ENV['AWS_ENDPOINT'];
//			}
		}

		return new S3Client($config);
	}

	protected function defaultVisibility() {
		return 'private';
	}
}
