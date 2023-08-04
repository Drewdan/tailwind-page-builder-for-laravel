<?php

namespace Drewdan\PageBuilder\Builders;

use Illuminate\Support\Collection;

class ElementBuilder {

	public Collection $classes;

	public static function make(): static {
		return new static();
	}

}
