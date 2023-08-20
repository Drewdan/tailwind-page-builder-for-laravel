<?php

return [
	'text-alignment' => [
		'type' => 'select',
		'title' => 'Text Alignment',
		'default' => 'text-left',
		'options' => [
			'text-left' => [
				'label' => 'Left',
				'value' => 'text-left',
			],
			'text-center' => [
				'label' => 'Center',
				'value' => 'text-center',
			],
			'text-right' => [
				'label' => 'Right',
				'value' => 'text-right',
			],
			'text-justify' => [
				'label' => 'Justify',
				'value' => 'text-justify',
			],
		],
	],
	'size' => [
		'type' => 'select',
		'title' => 'Text Size',
		'default' => 'text-base',
		'options' => [
			'sm' => [
				'label' => 'Small',
				'value' => 'sm',
			],
			'md' => [
				'label' => 'Medium',
				'value' => 'md',
			],
			'lg' => [
				'label' => 'Large',
				'value' => 'lg',
			],
			'xl' => [
				'label' => 'Extra Large',
				'value' => 'xl',
			],
			'2xl' => [
				'label' => '2x Extra Large',
				'value' => '2xl',
			],
			'3xl' => [
				'label' => '3x Extra Large',
				'value' => '3xl',
			],
			'4xl' => [
				'label' => '4x Extra Large',
				'value' => '4xl',
			],
			'default' => [
				'label' => 'Default',
				'value' => 'base',
			],
		],
	],
	'weight' => [
		'type' => 'select',
		'title' => 'Font Weight',
		'default' => 'normal',
		'options' => [
			'light' => [
				'label' => 'Light',
				'value' => 'light',
			],
			'normal' => [
				'label' => 'Normal',
				'value' => 'normal',
			],
			'bold' => [
				'label' => 'Bold',
				'value' => 'bold',
			],
			'black' => [
				'label' => 'Black',
				'value' => 'black',
			],
			'default' => [
				'label' => 'Default',
				'value' => 'base',
			],
		],
	],
	'src' => [
		'type' => 'upload',
		'title' => 'File Source',
		'default' => '',
	],
	'alt' => [
		'type' => 'text',
		'title' => 'Alt Text',
		'default' => '',
	],
	'content' => [
		'type' => 'content',
		'title' => 'Content',
		'default' => '',
	],
];
