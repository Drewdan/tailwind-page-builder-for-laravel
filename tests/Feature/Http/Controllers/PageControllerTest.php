<?php

namespace Http\Controllers;

use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Tests\TestCase;

class PageControllerTest extends TestCase {

	public function testCanUpdatePage() {
		$page = Page::factory()->create();

		$this->put('/page-builder/data/pages/' . $page->uuid, [
			'slug' => 'updated-slug',
			'label' => 'Updated Title',
		])
			->assertSessionHasNoErrors()
			->assertStatus(204);

		$this->assertDatabaseHas('pages', [
			'id' => $page->id,
			'label' => 'Updated Title',
		]);
	}


	public function testCanDeletePage() {
		$page = Page::factory()->create();

		$this->delete('/page-builder/data/pages/' . $page->uuid)
			->assertStatus(204);

		$this->assertDatabaseMissing('pages', [
			'id' => $page->id,
		]);
	}

}
