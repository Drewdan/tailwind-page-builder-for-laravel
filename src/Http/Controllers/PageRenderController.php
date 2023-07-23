<?php

namespace Drewdan\PageBuilder\Http\Controllers;

use Exception;
use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Builders\ImageBuilder;
use Drewdan\PageBuilder\Builders\HeadingBuilder;
use Drewdan\PageBuilder\Builders\ParagraphBuilder;

class PageRenderController {
	public function __invoke(Page $page) {
		$contents = collect(json_decode($page->content, true));

		$contents = $contents->map(function (array $item) {
			$el = '<div ';

			if ($item['colSpan'] > 1) {
				$el .= 'class="md:col-span-' . $item['colSpan'] . ' ';
			}

			$el .= '' . $item['textAlign'] . '" ';

			$el .= '>';

			$children = collect($item['elements'] ?? [])->map(function ($child) {
				if (isset($child['renderer']) && $child['renderer'] === 'Image') {
					return ImageBuilder::make()
						->setSrc($child['src'])
						->setAlt($child['alt'])
						->build();
				}

				$builder = match($child['renderer'] ?? 'Text') {
					'Heading' => HeadingBuilder::make(),
					'Paragraph','Text' => ParagraphBuilder::make(),
					default => throw new Exception('Invalid renderer type ' . $child['renderer']),
				};

				if ($builder instanceof HeadingBuilder) {
					return $builder->setContent($child['content'])
						->setSize($child['size'])
						->setWeight($child['weight'])
						->build();
				}

				if (!isset($child['content'])) {
					throw new Exception('Invalid content');
				}

				if ($builder instanceof ParagraphBuilder) {
					return $builder->setContent($child['content'])
						->setSize($child['size'])
						->setWeight($child['weight'])
						->build();
				}

				throw new Exception('Invalid builder type');
			});

			$el .= $children->implode('');

			$el .= '</div>';

			return $el;
		})->implode('');

		$contents = "<div class=\"col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4 p-5 content-start\">{$contents}</div>";

		return response()->view('page-builder::page', [
			'contents' => $contents,
			'componentName' => config('page-builder.layout'),
		]);
	}
}
