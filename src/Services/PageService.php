<?php

namespace Drewdan\PageBuilder\Services;
use Illuminate\Support\Collection;
use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Dtos\PageRoute;

class PageService {

	public static function getRouteList(): Collection {
		return Page::query()->select(['title', 'slug'])->get()->map(function (Page $page) {
			$pageRoute = new PageRoute();

			$pageRoute->title = $page->title;
			$pageRoute->url = route('page-builder.page', ['page' => $page->slug]);

			return $pageRoute;
		});
	}

}
