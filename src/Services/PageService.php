<?php

namespace Drewdan\PageBuilder\Services;

use Illuminate\Support\Collection;
use Drewdan\PageBuilder\Models\Page;
use Drewdan\PageBuilder\Dtos\PageRoute;
use Drewdan\PageBuilder\Dtos\PageElement;

class PageService {

	public static function getRouteList(): Collection {
		return Page::query()->select(['label', 'slug'])->get()->map(function (Page $page) {
			$pageRoute = new PageRoute();

			$pageRoute->title = $page->label;
			$pageRoute->url = route('page-builder.page', ['page' => $page->slug]);

			return $pageRoute;
		});
	}

	public function buildPage(Page $page): string {
		$pageElements = $page->body;

		if (!$pageElements) {
			return '';
		}

		// we need to sort the elements by their order
		usort($pageElements, function ($a, $b) {
			return $a['order'] <=> $b['order'];
		});

		$pageString = '<div class="grid md:grid-cols-4 content-start p-5 gap-4">';

		foreach ($pageElements as $element) {
			$pageString .= $this->buildElement($element);
		}

		$pageString .= '</div>';

		return $pageString;
	}

	public function buildElement(array $element): string {
		$pageElement = PageElement::fromArray($element);

		$elementString = "<{$pageElement->as} ";

		// now we add the classes
		if ($pageElement->attributes->classes) {
			$elementString .= 'class="' . implode(' ', $pageElement->attributes->classes) . '" ';
		}

		// now we add the styles
		if ($pageElement->attributes->styles) {
			$elementString .= 'style="' . implode(';', $pageElement->attributes->styles) . '" ';
		}

		// now we add the title
		if ($pageElement->attributes->title) {
			$elementString .= 'title="' . $pageElement->attributes->title . '" ';
		}

		// now we add the alt
		if ($pageElement->attributes->alt) {
			$elementString .= 'alt="' . $pageElement->attributes->alt . '" ';
		}

		// now we add the src
		if ($pageElement->attributes->src) {
			$elementString .= 'src="' . $pageElement->attributes->src . '" ';
		}

		// now we add the href
		if ($pageElement->attributes->href) {
			$elementString .= 'href="' . $pageElement->attributes->href . '" ';
		}


		$closingTag = $pageElement->as === 'img' ? '/>' : '>';

		// now we add the text node if there is one
		if ($pageElement->content) {
			$elementString .= $closingTag . $pageElement->content;
		} else {
			$elementString .= $closingTag;
		}

		// now we add the child elements by recursively calling this function
		if ($pageElement->elements) {
			// we need to sort the elements by their order
			usort($pageElement->elements, function ($a, $b) {
				return $a['order'] <=> $b['order'];
			});

			foreach ($pageElement->elements as $childElement) {
				$elementString .= $this->buildElement($childElement);
			}
		}

		if ($closingTag !== '/>') {
			$elementString .= "</{$pageElement->as}>";
		}

		return $elementString;
	}

}
