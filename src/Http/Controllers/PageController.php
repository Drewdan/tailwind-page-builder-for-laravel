<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Illuminate\Http\Response;

class PageController extends Controller {

	public function edit(): Response {
		return response()->view('page-builder::pages.edit');
	}

}
