<?php

namespace Drewdan\PageBuilder\Builders;

class ImageBuilder {


	public string $src = '';

	public string $alt = '';

	public static function make(): ImageBuilder {
		return new static();
	}

	public function setSrc(string $src): ImageBuilder {
		$this->src .= ' src="' . $src . '"';
		return $this;
	}

	public function setAlt(string $alt): ImageBuilder {
		$this->alt .= ' alt="' . $alt . '"';
		return $this;
	}

	public function build(): string {
		return '<img ' . $this->src . $this->alt . ' />';
	}

}
