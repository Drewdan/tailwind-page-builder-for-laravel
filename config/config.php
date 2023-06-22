<?php

return [
	'prefix' => 'page-builder',
	'middleware' => ['web'], // you probably want to include 'web' here
	'external' => [
		'prefix' => null,
		'middleware' => ['web'], // you probably want to include 'web' here
	],

];
