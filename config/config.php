<?php

return [
	'prefix' => 'page-builder',
	'middleware' => ['web'], // you probably want to include 'web' here
	'external' => [
		'prefix' => null,
		'middleware' => ['web'], // you probably want to include 'web' here
	],
	'storage' => [
		'endpoint' => env('PAGE_BUILDER_ENDPOINT', env('AWS_ENDPOINT')),
		'default_region' => env('PAGE_BUILDER_DEFAULT_REGION', env('AWS_DEFAULT_REGION')),
		'access_key_id' => env('PAGE_BUILDER_ACCESS_KEY_ID', env('AWS_ACCESS_KEY_ID')),
		'secret_access_key' => env('PAGE_BUILDER_SECRET_ACCESS_KEY', env('AWS_SECRET_ACCESS_KEY')),
		'bucket' => env('PAGE_BUILDER_BUCKET', env('AWS_BUCKET')),
		'path_style_endpoint' => env('PAGE_BUILDER_PATH_STYLE_ENDPOINT', false),
	],
	'layout' => 'default-layout',
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
			'alignment' => 'content-left',
			'options' => 'size,text-alignment,weight,content'
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
			'alignment' => 'content-left',
			'options' => 'size,text-alignment,weight,content'
		],
		[
			'id' => 3,
			'type' => 'img',
			'renderer' => 'Image',
			'name' => 'Image Element',
			'description' => 'Use this to create an image element',
			'src' => 'https://placehold.it/350x150',
			'alt' => 'Placeholder image',
			'options' => 'src,alt'
		]
	]

];
