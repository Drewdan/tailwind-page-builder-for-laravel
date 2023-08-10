<?php

namespace Drewdan\PageBuilder\Builders\Traits;

trait HasTextAlignment {

	public function setTextAlign(string $align): static {
		$this->classes->push(match ($align) {
			'text-left' => 'text-left',
			'text-center' => 'text-center',
			'text-right' => 'text-right',
			'text-justify' => 'text-justify',
			default => '',
		});

		return $this;
	}

}
