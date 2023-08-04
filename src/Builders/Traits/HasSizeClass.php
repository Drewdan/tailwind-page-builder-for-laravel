<?php

namespace Drewdan\PageBuilder\Builders\Traits;

trait HasSizeClass {

	public function setSize(string $size): static {
		$this->classes->push(match($size) {
			'sm' => 'text-sm',
			'md' => 'text-md',
			'lg' => 'text-lg',
			'xl' => 'text-xl',
			'2xl' => 'text-2xl',
			'3xl' => 'text-3xl',
			'4xl' => 'text-4xl',
			default => 'text-base',
		});

		return $this;
	}

}
