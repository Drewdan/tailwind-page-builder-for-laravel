<?php

namespace Drewdan\PageBuilder\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Drewdan\PageBuilder\Database\Factories\PageFactory;

class Page extends Model {

	use HasFactory;

	protected $guarded = [];

	protected $casts = [
		'content' => 'array',
	];

	public function getRouteKeyName(): string {
		// TODO: make this a config item
		return 'slug';
	}


	public function save(array $options = []) {
		$this->slug = Str::slug($this->title);
		return parent::save($options);
	}

	protected static function newFactory() {
		return PageFactory::new();
	}
}
