<?php

namespace Drewdan\PageBuilder\Tests\Unit\Services;

use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Tests\TestCase;
use Drewdan\PageBuilder\Services\PageService;

class PageServiceTest extends TestCase {

	public function testReturnsListOfRoutes() {
		Page::factory()->create(['title' => 'Test Page', 'slug' => 'test-page']);
		Page::factory()->create(['title' => 'Test Page 2', 'slug' => 'test-page-2']);

		$routes = PageService::getRouteList();

		$this->assertCount(2, $routes);

		$this->assertEquals('Test Page', $routes->first()->title);
		$this->assertEquals('http://localhost/page/test-page', $routes->first()->url);

		$this->assertEquals('Test Page 2', $routes->last()->title);
		$this->assertEquals('http://localhost/page/test-page-2', $routes->last()->url);
	}

	public function testCanBuildPageFromJson() {
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

		$service = new PageService();

		$html = $service->buildPage($page);

		$this->assertEquals('<div class="grid md:grid-cols-4 content-start p-5 gap-4"><div class="col-span-1 md:col-span-4"><p class="text-4xl font-bold">A heading</p></div><div class="col-span-1 md:col-span-4"><p class="text-md font-normal">A paragraph</p></div></div>', $html);
	}

}
