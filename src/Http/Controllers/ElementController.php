<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ElementController extends Controller {
	public function __invoke(): JsonResponse {
		$elementOptions = config('page-builder-element-options');

		$elements = collect(config('page-builder.elements'))->map(function ($element) use ($elementOptions) {
			$options = explode(',', $element['options']);
			$element['options'] = collect($elementOptions)->filter(fn ($option, $key) => in_array($key, $options));

			return $element;
		});

		return response()->json($elements);
	}
}
