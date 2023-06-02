<?php

namespace Drewdan\PageBuilder\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PageStoreRequest extends FormRequest {

	public function rules(): array {
		return [
			'title' => [
				'required',
			],
		];
	}

}
