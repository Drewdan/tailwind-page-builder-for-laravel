<?php

namespace Drewdan\PageBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Drewdan\PageBuilder\Database\Factories\PageFactory;

class Page extends Model {

	use HasFactory;

	protected $guarded = [];

	protected $casts = [
		'head' => 'array',
		'body' => 'array',
		'foot' => 'array',
	];

	protected static function newFactory(): PageFactory {
		return PageFactory::new();
	}
}
