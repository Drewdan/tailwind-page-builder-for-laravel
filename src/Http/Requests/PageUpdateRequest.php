<?php

namespace Drewdan\PageBuilder\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PageUpdateRequest extends FormRequest {

	public function rules(): array {
		return [
			'title' => [
				'required',
			],
			'content' => [
				'nullable',
				'json',
			],
			'page_title' => [
				'nullable',
				'string',
			],
			'meta_description' => [
				'nullable',
				'string',
			],
			'meta_keywords' => [
				'nullable',
				'string',
			],
		];
	}

}
