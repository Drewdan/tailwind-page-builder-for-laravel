<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ElementController extends Controller {
	public function __invoke(): JsonResponse {
		return response()->json(config('page-builder.elements'));
	}
}
