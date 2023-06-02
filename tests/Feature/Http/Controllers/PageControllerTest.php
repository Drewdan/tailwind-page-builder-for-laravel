<?php

namespace Feature\Http\Controllers;

use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Tests\TestCase;

class PageControllerTest extends TestCase {

	public function testCanStorePage() {
		$data = [
			'title' => 'Test Page',
		];

		$this->post('/page-builder/data/pages', $data)
			->assertStatus(204);

		$this->assertDatabaseHas('pages', $data);
	}

	public function testCanUpdatePage() {
		$page = Page::factory()->create();

		$data = $page->toArray();
		$data['title'] = 'Updated Title';

		$this->put('/page-builder/data/pages/' . $page->slug, $data)
			->assertStatus(204);

		$this->assertDatabaseHas('pages', [
			'id' => $page->id,
			'title' => 'Updated Title',
		]);
	}

	public function testCanDeletePage() {
		$page = Page::factory()->create();

		$this->delete('/page-builder/data/pages/' . $page->slug)
			->assertStatus(204);

		$this->assertDatabaseMissing('pages', [
			'id' => $page->id,
		]);
	}

}
