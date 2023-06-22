<?php

namespace Drewdan\PageBuilder\Builders;

class HeadingBuilder {

	public string $content = '';

	public string $size = '';

	public string $weight = '';

	public function setContent(string $content): static {
		$this->content = $content;
		return $this;
	}

	public function setSize(string $size): static {
		$this->size = match($size) {
			'sm' => 'text-sm',
			'md' => 'text-md',
			'lg' => 'text-lg',
			'xl' => 'text-xl',
			'2xl' => 'text-2xl',
			'3xl' => 'text-3xl',
			'4xl' => 'text-4xl',
			default => 'text-base',
		};

		return $this;
	}

	public function setWeight(string $weight): static {
		$this->weight = match($weight) {
			'light' => 'font-light',
			'normal' => 'font-normal',
			'bold' => 'font-bold',
			'black' => 'font-black',
			default => 'font-base',
		};

		return $this;
	}

	public function build(): string {
		return '<p class="' . $this->size . ' ' . $this->weight . '">' . $this->content . '</p>';
	}



	public static function make(): static {
		return new static();
	}

}
