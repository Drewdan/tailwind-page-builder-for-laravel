<?php

namespace Http\Controllers;

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

	public function testCanStoreUpdatedPageContentCorrectly() {
		$page = Page::factory()->create();

		$content = [
			[
				'id' => 0,
				'colspan' => 4,
				'textAlign' => 'text-center',
				'elements' => [
					[
						'id' => 1,
						'type' => 'h1',
						'renderer' => 'Text',
						'size' => '4xl',
						'weight' => 'bold',
						'content' => 'A heading',
					],
				],
			],
			[
				'id' => 3,
				'colspan' => 4,
				'textAlign' => 'text-center',
				'elements' => [
					[
						'id' => 4,
						'type' => 'p',
						'renderer' => 'Text',
						'size' => 'md',
						'weight' => 'normal',
						'content' => 'A paragraph',
						'text-alignment' => 'text-center',
					],
				],
			],
		];

		$data = $page->toArray();
		$data['content'] = $content;

		$this->put('/page-builder/data/pages/' . $page->slug, $data)
			->assertSessionHasNoErrors()
			->assertStatus(204);


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
