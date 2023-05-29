<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller {

	public function store(Request $request): Response {
		$fileName = str_replace('tmp/', '', $request->input('key'));

		Storage::disk('s3')->copy(
			$request->input('key'),
			$fileName,
		);

		Storage::setVisibility(
			$fileName,
			'public',
		);

		return response(
			[
				'file' => Storage::url($fileName),
			]
		);
	}

}
