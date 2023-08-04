<?php

namespace Builders;

use Drewdan\PageBuilder\Tests\TestCase;
use Drewdan\PageBuilder\Builders\HeadingElementBuilder;

class HeadingBuilderTest extends TestCase {

	public HeadingElementBuilder $class;

	public function setUp(): void {
		parent::setUp();

		$this->class = new HeadingElementBuilder();
	}

	public function testMake() {
		$class = HeadingElementBuilder::make();

		$this->assertInstanceOf(HeadingElementBuilder::class, $class);
	}

	public function testSetSize() {
		$this->class->setSize('sm');

		$this->assertContains('text-sm', $this->class->classes);
	}

	public function testSetWeight() {
		$this->class->setWeight('light');

		$this->assertContains('font-light', $this->class->classes);
	}

	public function testSetContent() {
		$this->class->setContent('test');

		$this->assertEquals('test', $this->class->content);
	}

	public function testBuild() {
		$this->class->setSize('sm');
		$this->class->setWeight('light');
		$this->class->setContent('test');

		$this->assertEquals('<h1 class="text-sm font-light">test</h1>', $this->class->build());
	}

}
