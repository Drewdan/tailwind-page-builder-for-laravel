<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Http\Requests\PageStoreRequest;
use Drewdan\PageBuilder\Http\Requests\PageUpdateRequest;

class PageController extends Controller {

	// TODO: config item for allowing policies to be added

	public function index() {
		$pages = Page::all();

		return response(['pages' => $pages]);
	}

	// This won't be needed as we will use the vue router
	public function show(Page $page): Response {
		return response(['page' => $page]);
	}

	public function store(PageStoreRequest $request): Response {
		Page::create($request->validated());

		return response()->noContent();
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
