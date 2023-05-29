<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller {

	public function store(Request $request): Response {
		$fileName = str_replace('/tmp/', '', $request->input('file'));

		Storage::copy(
			$request->input('file'),
			$fileName,
		);

		return response(
			[
				'file' => $fileName
			]
		);
	}

}
