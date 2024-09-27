<?php

namespace Drewdan\PageBuilder\Dtos;

class PageElement {

	public function __construct(
		public string $uuid,
		public int $order,
		public string $as,
		public Attributes $attributes,
		public array $elements,
		public ?string $content,
		public ?string $id,
	) {
	}

	public static function fromArray(array $data): PageElement {
		return new PageElement(
			uuid: $data['uuid'],
			order: $data['order'],
			as: $data['as'],
			attributes: Attributes::fromArray($data['attributes'] ?? []),
			elements: $data['elements'],
			content: $data['content'] ?? null,
			id: $data['id'] ?? null,
		);
	}

}
