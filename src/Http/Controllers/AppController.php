<?php

namespace Drewdan\PageBuilder\Http\Controllers;

class AppController {
	public function __invoke() {
		return view('page-builder::app');
	}
}
