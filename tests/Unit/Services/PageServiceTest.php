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

}
