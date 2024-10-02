<?php

namespace Http\Controllers;

use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Tests\TestCase;

class PageRenderControllerTest extends TestCase {

	public function testCanReturnPage() {
		$pageData = [
			"uuid" => "fea927db-b2b9-403c-b6fb-e63a0f02ead6",
			"slug" => "home",
			"label" => "Home",
			"meta_description" => "Home Page",
			"meta_keywords" => "home, page",
			"head" => [],
			"body" => [
				[
					"id" => "window-basket-closer",
					"order" => 1,
					"uuid" => "f7a9db38-536a-47d3-a21a-a615912440e6",
					"attributes" => [
						"classes" => ["col-span-4"],
					],
					"as" => "div",
					"elements" => [
						[
							"id" => "explain-running-better",
							"order" => 0,
							"uuid" => "46d5dc88-ed32-489e-b066-f775a816eeba",
							"as" => "h1",
							"elements" => [],
							"content" => "Header 1",
						],
					],
				],
				[
					"id" => "ride-stage-ruler",
					"order" => 2,
					"uuid" => "665fc907-4745-4baa-9322-34ddb50246aa",
					"attributes" => [
						"classes" => ["col-span-4"],
					],
					"as" => "div",
					"elements" => [
						[
							"id" => "problem-means-tea",
							"order" => 0,
							"uuid" => "628e7e1b-98ed-445c-90d9-fa262703eefc",
							"attributes" => [
								"classes" => ["flex", "flex-col", "gap-12"],
							],
							"as" => "div",
							"elements" => [
								[
									"id" => "bark-lungs-open",
									"order" => 0,
									"uuid" => "7930a052-532d-4fec-aabd-020cceaedde8",
									"as" => "p",
									"elements" => [],
									"content" => "Paragraph",
								],
								[
									"id" => "danger-fort-key",
									"order" => 0,
									"uuid" => "81d42a49-398d-43a7-bcbe-45778eb231a6",
									"as" => "p",
									"elements" => [],
									"content" => "Paragraph",
								],
								[
									"id" => "nearby-new-gain",
									"order" => 0,
									"uuid" => "156d00bb-2ea2-4992-893e-9121b5bf4018",
									"as" => "p",
									"elements" => [],
									"content" => "Paragraph",
								],
								[
									"id" => "wood-dark-cook",
									"order" => 0,
									"uuid" => "c5f22c05-e8ef-4956-a09d-5924b36ec9d2",
									"as" => "img",
									"elements" => [],
									"attributes" => [
										"src" => "https://davies-florist.eu-central-1.linodeobjects.com/c5924211-fffb-4caa-880d-8a1c4258b97b",
										"alt" => "Placeholder Image",
										"classes" => [
											"object-contain",
										],
									],
								],
							],
						],
					],
				],
			],
			"foot" => [],
		];


		$page = Page::factory()->create($pageData);


		$this->get('/page/' . $page->slug)
			->assertViewHas('contents', '<div class="grid md:grid-cols-4 content-start p-5 gap-4"><div class="col-span-4" ><h1 >Header 1</h1></div><div class="col-span-4" ><div class="flex flex-col gap-12" ><p >Paragraph</p><p >Paragraph</p><p >Paragraph</p><img class="object-contain" alt="Placeholder Image" src="https://davies-florist.eu-central-1.linodeobjects.com/c5924211-fffb-4caa-880d-8a1c4258b97b" /></div></div></div>')
			->assertStatus(200);
	}

}
