<?php

return [
	'prefix' => 'page-builder',
	'middleware' => ['web'], // you probably want to include 'web' here
	'external' => [
		'prefix' => null,
		'middleware' => ['web'], // you probably want to include 'web' here
	],
	'elements' => [
		[
			'id' => 1,
			'type' => 'h1',
			'renderer' => 'Text',
			'name' => 'Heading',
			'description' => 'Use this element to create a heading',
			'size' => '4xl',
			'weight' => 'bold',
			'content' => 'Some heading',
			'alignment' => 'text-left',
		],
		[
			'id' => 2,
			'type' => 'p',
			'renderer' => 'Text',
			'name' => 'Paragraph',
			'description' => 'Use this element to create a paragraph',
			'size' => 'md',
			'weight' => 'normal',
			'content' => 'Some paragraph',
			'alignment' => 'text-left',
		],
		[
			'id' => 3,
			'type' => 'img',
			'renderer' => 'Image',
			'name' => 'Image Element',
			'description' => 'Use this to create an image element',
			'src' => 'https://placehold.it/350x150',
			'alt' => 'Placeholder image',
		]
	]

];
