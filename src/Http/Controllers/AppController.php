<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Drewdan\PageBuilder\Models\Page;

class AppController {
	public function __invoke(Page $page) {
		return view('page-builder::app');
	}
}
