<?php

namespace Drewdan\PageBuilder\Builders;

use Illuminate\Support\Collection;
use Drewdan\PageBuilder\Contracts\ElementBuilderContract;

class ContainerElementBuilder implements ElementBuilderContract {

	public Collection $classes;

	public Collection $children;

	public function __construct() {
		$this->children = new Collection();
		$this->classes = new Collection();
	}

	public function setMdColspan(string $colspan) {
		$this->classes->push(match ($colspan) {
			'1' => 'md:col-span-1',
			'2' => 'md:col-span-2',
			'3' => 'md:col-span-3',
			'4' => 'md:col-span-4',
			'5' => 'md:col-span-5',
			'6' => 'md:col-span-6',
			'7' => 'md:col-span-7',
			'8' => 'md:col-span-8',
			'9' => 'md:col-span-9',
			'10' => 'md:col-span-10',
			'11' => 'md:col-span-11',
			'12' => 'md:col-span-12',
			default => '',
		});

		return $this;
	}

	public function setColspan(string $colspan) {
		$this->classes->push(match ($colspan) {
			'1' => 'col-span-1',
			'2' => 'col-span-2',
			'3' => 'col-span-3',
			'4' => 'col-span-4',
			'5' => 'col-span-5',
			'6' => 'col-span-6',
			'7' => 'col-span-7',
			'8' => 'col-span-8',
			'9' => 'col-span-9',
			'10' => 'col-span-10',
			'11' => 'col-span-11',
			'12' => 'col-span-12',
			default => '',
		});

		return $this;
	}

	public function setGap(string $gap): static {
		$this->classes->push(match ($gap) {
			'4' => 'gap-4',
		});

		return $this;
	}

	public function setPadding(string $padding): static {
		$this->classes->push(match ($padding) {
			'4' => 'p-4',
			'5' => 'p-5',
		});

		return $this;
	}

	public function setContentFlow(string $flow): static {
		$this->classes->push(match ($flow) {
			'content-start' => 'content-start',
			'content-center' => 'content-center',
			'content-end' => 'content-end',
			'content-between' => 'content-between',
			'content-around' => 'content-around',
			'content-evenly' => 'content-evenly',
			default => '',
		});

		return $this;
	}

	public function setGrid(string $grid): static {
		$this->classes->push(match ($grid) {
			'1' => 'grid md:grid-cols-1',
			'4' => 'grid md:grid-cols-4',
			default => '',
		});

		return $this;
	}

	public function addChild(...$child): static {
		foreach ($child as $item) {
			if (!($item instanceof ElementBuilderContract)) {
				throw new \Exception('Child must be an instance of ElementBuilderContract');
			}
		}

		$this->children = $this->children->merge($child);

		return $this;
	}

	public function build(): string {
		$classes = $this->classes->filter()->implode(' ');
		$output = '<div class="' . $classes . '">';

		foreach ($this->children as $child) {
			$output .= $child->build();
		}

		$output .= '</div>';

		return $output;
	}

	public static function make(): static {
		return new static();
	}

}
