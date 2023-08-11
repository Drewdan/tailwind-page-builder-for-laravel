<?php

namespace Drewdan\PageBuilder\Services;

use Illuminate\Support\Collection;
use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Dtos\PageRoute;
use Drewdan\PageBuilder\Builders\ImageElementBuilder;
use Drewdan\PageBuilder\Builders\HeadingElementBuilder;
use Drewdan\PageBuilder\Builders\ContainerElementBuilder;
use Drewdan\PageBuilder\Builders\ParagraphElementBuilder;

class PageService {

	public static function getRouteList(): Collection {
		return Page::query()->select(['title', 'slug'])->get()->map(function (Page $page) {
			$pageRoute = new PageRoute();

			$pageRoute->title = $page->title;
			$pageRoute->url = route('page-builder.page', ['page' => $page->slug]);

			return $pageRoute;
		});
	}

	public function buildPage(Page $page): string {
		// This is the parent container which contains the grid layout
		$container = ContainerElementBuilder::make()
			->setGrid('4')
			->setContentFlow('content-start')
			->setPadding('5')
			->setGap('4');

		$contents = $page->content;

		// This page has no contents yet, so just early return an empty string
		if (!$contents) {
			return '<div></div>';
		}

		$gridContainers = collect();

		foreach ($contents as $content) {
			$gridContainer = ContainerElementBuilder::make()
				->setTextAlign($content['textAlign'] ?? '')
				->setColspan(1)
				->setMdColspan($content['colSpan']);

			$children = collect($content['elements'] ?? [])->map(function ($child) {
				if (isset($child['renderer']) && $child['renderer'] === 'Image') {
					return ImageElementBuilder::make()
						->setSrc($child['src'])
						->setAlt($child['alt']);
				}

				$builder = match ($child['renderer'] ?? 'Text') {
					'Heading' => HeadingElementBuilder::make(),
					'Paragraph', 'Text' => ParagraphElementBuilder::make(),
					default => throw new \Exception('Invalid renderer type ' . $child['renderer']),
				};

				if ($builder instanceof HeadingElementBuilder) {
					return $builder->setContent($child['content'])
						->setTextAlign($child['text-alignment'] ?? '')
						->setSize($child['size'])
						->setWeight($child['weight']);
				}

				if (!isset($child['content'])) {
					throw new \Exception('Invalid content');
				}

				if ($builder instanceof ParagraphElementBuilder) {
					return $builder->setContent($child['content'])
						->setTextAlign($child['text-alignment'] ?? '')
						->setSize($child['size'])
						->setWeight($child['weight']);
				}

				throw new \Exception('Invalid builder type');
			});

			$gridContainer->addChild(...$children);

			$gridContainers->push($gridContainer);
		}

		$container->addChild(...$gridContainers);

		return $container->build();
	}

}
