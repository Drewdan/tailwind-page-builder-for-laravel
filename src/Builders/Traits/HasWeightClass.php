<?php

namespace Drewdan\PageBuilder\Builders\Traits;

trait HasWeightClass {

	public function setWeight(string $weight): static {
		$this->classes->push(match($weight) {
			'light' => 'font-light',
			'normal' => 'font-normal',
			'bold' => 'font-bold',
			'black' => 'font-black',
			default => 'font-base',
		});

		return $this;
	}

}
