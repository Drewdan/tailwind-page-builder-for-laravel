<?php

namespace Drewdan\PageBuilder\Contracts;

interface ElementBuilderContract {

	public function build(): string;

	public static function make(): static;

}
