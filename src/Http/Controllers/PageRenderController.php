<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Services\PageService;

class PageRenderController {

	public function __invoke(Page $page, PageService $pageService) {
		return response()->view('page-builder::page', [
			'contents' => $pageService->buildPage($page),
			'componentName' => config('page-builder.layout'),
		]);
	}
}
