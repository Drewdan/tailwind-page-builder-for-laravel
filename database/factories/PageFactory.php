<?php

namespace Drewdan\PageBuilder\Database\Factories;

use Drewdan\PageBuilder\Models\Page;
use Illuminate\Database\Eloquent\Factories\Factory;

class PageFactory extends Factory {

	protected $model = Page::class;

	/**
	 * @inheritDoc
	 */
	public function definition(): array {
		return [
			'title' => $this->faker->sentence,
			'slug' => $this->faker->slug,
		];
	}
}
