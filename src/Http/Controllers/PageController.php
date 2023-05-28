<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Illuminate\Http\Response;

class PageController extends Controller {

	// TODO: config item for allowing policies to be added

	public function edit(): Response {
		return response()->view('page-builder::pages.edit');
	}

}
