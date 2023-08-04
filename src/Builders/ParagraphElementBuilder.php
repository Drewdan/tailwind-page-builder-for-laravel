<?php

namespace Drewdan\PageBuilder\Builders;

use Illuminate\Support\Collection;
use Drewdan\PageBuilder\Contracts\ElementBuilderContract;
use Drewdan\PageBuilder\Builders\Traits\HasSizeClass;
use Drewdan\PageBuilder\Builders\Traits\HasWeightClass;

class ParagraphElementBuilder extends ElementBuilder implements ElementBuilderContract {

	use HasSizeClass;
	use HasWeightClass;

	public string $content = '';

	public function __construct() {
		$this->classes = new Collection();
	}

	public function setContent(string $content): ParagraphElementBuilder {
		$this->content = $content;
		return $this;
	}

	public function build(): string {
		$classes = $this->classes->filter()->implode(' ');
		return '<p class="' . $classes . '">' . $this->content . '</p>';
	}



}
