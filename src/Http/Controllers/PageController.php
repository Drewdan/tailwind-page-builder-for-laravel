<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Http\Requests\PageUpdateRequest;

class PageController extends Controller {

	/**
	 * No create route, as we will only be updating pages. The implementer
	 * of this package will have to create their own pages, but we will
	 * provide a service for this.
	 */

	public function show(Page $page): JsonResponse {
		return response()->json($page);
	}

	public function update(PageUpdateRequest $request, Page $page): Response {
		$page->update($request->validated());

		return response()->noContent();
	}

	public function destroy(Page $page): Response {
		$page->delete();

		return response(null, 204);

	}

}
