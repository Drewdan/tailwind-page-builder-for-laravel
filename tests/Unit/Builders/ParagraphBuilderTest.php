<?php

namespace Builders;

use Drewdan\PageBuilder\Tests\TestCase;
use Drewdan\PageBuilder\Builders\ParagraphElementBuilder;

class ParagraphBuilderTest extends TestCase {

	public ParagraphElementBuilder $class;

	public function setUp(): void {
		parent::setUp();

		$this->class = new ParagraphElementBuilder();
	}

	public function testSetWeight() {
		$this->class->setWeight('light');

		$this->assertContains('font-light', $this->class->classes);
	}

	public function testMake() {
		$class = ParagraphElementBuilder::make();

		$this->assertInstanceOf(ParagraphElementBuilder::class, $class);
	}

	public function testSetSize() {
		$this->class->setSize('sm');

		$this->assertContains('text-sm', $this->class->classes);
	}

	public function testSetContent() {
		$this->class->setContent('test');

		$this->assertEquals('test', $this->class->content);
	}

	public function testSetTextAlign() {
		$this->class->setTextAlign('text-center');

		$this->assertContains('text-center', $this->class->classes);
	}

	public function testBuild() {
		$this->class->setSize('sm')
			->setWeight('light')
			->setTextAlign('text-center')
			->setContent('test');

		$this->assertEquals('<p class="text-sm font-light text-center">test</p>', $this->class->build());
	}
}
