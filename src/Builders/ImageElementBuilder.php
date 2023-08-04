<?php

namespace Drewdan\PageBuilder\Builders;

use Drewdan\PageBuilder\Contracts\ElementBuilderContract;

class ImageElementBuilder extends ElementBuilder implements ElementBuilderContract {


	public string $src = '';

	public string $alt = '';

	public function setSrc(string $src): ImageElementBuilder {
		$this->src = $src;
		return $this;
	}

	public function setAlt(string $alt): ImageElementBuilder {
		$this->alt = $alt;
		return $this;
	}

	public function build(): string {
		// TODO: Don't hardcode width
		$srcAttr = $this->src !== '' ? ' src="' . $this->src . '"' : '';
		$altAttr = $this->alt !== '' ? ' alt="' . $this->alt . '"' : '';
		return '<img class="w-full"' . $srcAttr . $altAttr . ' />';
	}
}
