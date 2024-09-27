<?php

namespace Drewdan\PageBuilder\Dtos;

class Attributes {

	public function __construct(
		public ?array $classes,
		public ?array $styles,
		public ?string $title,
		public ?string $alt,
		public ?string $src,
		public ?string $href,
	) {
	}

	public static function fromArray(array $data): Attributes {
		return new Attributes(
			classes: $data['classes'] ?? null,
			styles: $data['styles'] ?? null,
			title: $data['title'] ?? null,
			alt: $data['alt'] ?? null,
			src: $data['src'] ?? null,
			href: $data['href'] ?? null,
		);
	}

}
