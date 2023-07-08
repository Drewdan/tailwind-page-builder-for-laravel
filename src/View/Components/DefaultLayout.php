<?php

namespace Drewdan\PageBuilder\View\Components;

use Illuminate\View\View;
use Illuminate\View\Component;

class DefaultLayout extends Component {

	public function render(): View {
		return view('page-builder::components.default-layout');
	}
}
