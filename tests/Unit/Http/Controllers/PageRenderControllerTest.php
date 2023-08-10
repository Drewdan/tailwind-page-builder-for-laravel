<?php

namespace Http\Controllers;


use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Tests\TestCase;

class PageRenderControllerTest extends TestCase {

	public function testCanReturnPage() {
		$page = Page::factory()->create([
			'title' => 'My test page',
			'content' => [
				[
					'id' => 0,
					'colSpan' => 4,
					'textAlign' => 'text-center',
					'elements' => [
						[
							'id' => 1,
							'type' => 'h1',
							'renderer' => 'Text',
							'size' => '4xl',
							'weight' => 'bold',
							'content' => 'A heading',
						]
					],
				],
				[
					'id' => 3,
					'colSpan' => 4,
					'textAlign' => 'text-center',
					'elements' => [
						[
							'id' => 4,
							'type' => 'p',
							'renderer' => 'Text',
							'size' => 'md',
							'weight' => 'normal',
							'content' => 'A paragraph',
						]
					]
				]
			],
		]);

		$this->get('/page/' . $page->slug)
			->assertViewHas('contents', '<div class="grid md:grid-cols-4 content-start p-5 gap-4"><div class="text-center col-span-1 md:col-span-4"><p class="text-4xl font-bold">A heading</p></div><div class="text-center col-span-1 md:col-span-4"><p class="text-md font-normal">A paragraph</p></div></div>')
			->assertStatus(200);
	}

}
