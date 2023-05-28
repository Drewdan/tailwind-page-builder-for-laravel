<?php

namespace Drewdan\PageBuilder\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model {

	protected $guarded = [];

	protected $casts = [
		'content' => 'array',
	];

	public function getRouteKeyName(): string {
		// TODO: make this a config item
		return 'slug';
	}

}
