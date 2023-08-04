<?php

namespace Builders;

use Drewdan\PageBuilder\Tests\TestCase;
use Drewdan\PageBuilder\Builders\ImageElementBuilder;

class ImageBuilderTest extends TestCase {

	public ImageElementBuilder $class;

	public function setUp(): void {
		parent::setUp();

		$this->class = new ImageElementBuilder();
	}

	public function testBuild() {
		$this->class->setSrc('test');
		$this->class->setAlt('test');

		$this->assertEquals('<img class="w-full" src="test" alt="test" />', $this->class->build());

	}

	public function testMake() {
		$class = ImageElementBuilder::make();

		$this->assertInstanceOf(ImageElementBuilder::class, $class);
	}

	public function testSetSrc() {
		$this->class->setSrc('test');

		$this->assertEquals('test', $this->class->src);
	}

	public function testSetAlt() {
		$this->class->setAlt('test');

		$this->assertEquals('test', $this->class->alt);
	}
}
