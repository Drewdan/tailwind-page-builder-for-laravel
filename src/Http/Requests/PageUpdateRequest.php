<?php

namespace Drewdan\PageBuilder\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PageUpdateRequest extends FormRequest {

	public function rules(): array {
		return [
			'slug' => [
				'required',
			],
			'label' => [
				'required',
			],
			'meta_description' => [
				'nullable',
				'string',
			],
			'meta_keywords' => [
				'nullable',
				'string',
			],
			'head' => [
				'nullable',
			],
			'body' => [
				'nullable',
			],
			'foot' => [
				'nullable',
			],
		];
	}

}
