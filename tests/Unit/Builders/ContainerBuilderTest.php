<?php

namespace Builders;

use Drewdan\PageBuilder\Tests\TestCase;
use Drewdan\PageBuilder\Builders\HeadingElementBuilder;
use Drewdan\PageBuilder\Builders\ContainerElementBuilder;
use Drewdan\PageBuilder\Builders\ParagraphElementBuilder;

class ContainerBuilderTest extends TestCase {

	public ContainerElementBuilder $class;

	public function setUp(): void {
		parent::setUp();

		$this->class = new ContainerElementBuilder();
	}

	public function testMake() {
		$class = ContainerElementBuilder::make();

		$this->assertInstanceOf(ContainerElementBuilder::class, $class);
	}

	public function testSetGap() {
		$this->class->setGap('4');

		$this->assertContains('gap-4', $this->class->classes);
	}
	public function testSetPadding() {
		$this->class->setPadding('4');

		$this->assertContains('p-4', $this->class->classes);
	}

	public function testSetContentFlow() {
		$this->class->setContentFlow('content-start');

		$this->assertContains('content-start', $this->class->classes);
	}

	public function testSetGrid() {
		$this->class->setGrid('4');

		$this->assertContains('grid md:grid-cols-4', $this->class->classes);
	}

	public function testAddChild() {
		$heading = HeadingElementBuilder::make()
			->setContent('test')
			->setSize('sm');

		$paragraph = ParagraphElementBuilder::make()
			->setContent('test')
			->setSize('sm');

		$this->class->addChild($heading, $paragraph);

		$this->assertEquals($heading, $this->class->children[0]);
		$this->assertEquals($paragraph, $this->class->children[1]);
	}

	public function testAddingBuiltChildThrowsException() {
		$heading = HeadingElementBuilder::make()
			->setContent('test')
			->setSize('sm')
			->build();

		$this->expectException(\Exception::class);
		$this->class->addChild($heading);
	}

	public function testBuild() {

		$heading = HeadingElementBuilder::make()
			->setContent('test')
			->setSize('sm');

		$paragraph = ParagraphElementBuilder::make()
			->setContent('test')
			->setSize('sm');

		$output = $this->class
			->setGrid('4')
			->setGap('4')
			->setPadding('5')
			->setContentFlow('content-start')
			->addChild($heading, $paragraph)
			->build();

		$this->assertEquals(
			'<div class="grid md:grid-cols-4 gap-4 p-5 content-start"><h1 class="text-sm">test</h1><p class="text-sm">test</p></div>',
			$output
		);

	}




}
