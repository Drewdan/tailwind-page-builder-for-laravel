import ElementProperties from "../components/configs/ElementProperties.vue";
import Colour from "../components/configs/Colour.vue";
import TextAlignment from "../components/configs/TextAlignment.vue";
import FontSize from "../components/configs/FontSize.vue";
import {ElementType, PageElement} from "../types/page";
import {generate} from "random-words";
import {v4 as uuid} from 'uuid';
import TextNode from "../components/configs/TextNode.vue";
import ImageOptions from "../components/configs/ImageOptions.vue";
import GridSettings from "../components/configs/GridSettings.vue";
import Sizing from "../components/configs/Sizing.vue";
import FlexSettings from "../components/configs/FlexSettings.vue";


const getConfigurationComponentsFor = (elementType: any): any[] => {
	switch (elementType) {
		case ElementType.Div:
			return [ElementProperties, GridSettings, FlexSettings];
		case ElementType.Img:
			return [ElementProperties, ImageOptions, Sizing];
		case ElementType.H1:
			return [FontSize, TextAlignment, Colour, ElementProperties, TextNode];
		case ElementType.H2:
			return [FontSize, TextAlignment, Colour, ElementProperties, TextNode];
		case ElementType.H3:
			return [FontSize, TextAlignment, Colour, ElementProperties, TextNode];
		case ElementType.H4:
			return [FontSize, TextAlignment, Colour, ElementProperties, TextNode];
		case ElementType.P:
			return [FontSize, TextAlignment, Colour, ElementProperties, TextNode];
		default:
			return [ElementProperties];
	}
}

const div = (): PageElement => {
	return {
		id: generate({exactly: 3, join: "-"}),
		order: 0,
		uuid: uuid(),
		attributes: {
			classes: ['col-span-4'],
		},
		as: ElementType.Div,
		elements: [],
	}
}

const stack = (): PageElement => {
	return {
		id: generate({exactly: 3, join: "-"}),
		order: 0,
		uuid: uuid(),
		attributes: {
			classes: ['flex', 'flex-col', 'gap-2'],
		},
		as: ElementType.Div,
		elements: [],
	}
}

const p = (): PageElement => {
	return {
		id: generate({exactly: 3, join: "-"}),
		order: 0,
		attributes: {},
		uuid: uuid(),
		as: ElementType.P,
		elements: [],
		content: `Paragraph`,
	}
}

const headerOne = (): PageElement => {
	return {
		id: generate({exactly: 3, join: "-"}),
		order: 0,
		attributes: {},
		uuid: uuid(),
		as: ElementType.H1,
		elements: [],
		content: `Header 1`,
	}
}

const headerTwo = (): PageElement => {
	return {
		id: generate({exactly: 3, join: "-"}),
		order: 0,
		uuid: uuid(),
		attributes: {},
		as: ElementType.H2,
		elements: [],
		content: `Header 2`,
	}
}

const image = (): PageElement => {
	return {
		id: generate({exactly: 3, join: "-"}),
		order: 0,
		uuid: uuid(),
		as: ElementType.Img,
		elements: [],
		attributes: {
			src: 'https://via.placeholder.com/150',
			alt: 'Placeholder Image',
		},
	}
}

const builder: any = {
	div,
	headerOne,
	headerTwo,
	image,
	p,
	stack,
}

const templates = {
	"Layouts": [
		{
			label: 'Div Column',
			description: 'A column that can contain other elements',
			function: 'div',
		},
		{
			label: 'Stack',
			description: 'A stack of elements with some configurable gap between them',
			function: 'stack',
		},
	],
	"Headers and Paragraphs": [
		{
			label: 'Header 1',
			description: 'A header with the H1 tag',
			function: 'headerOne',
		},
		{
			label: 'Header 2',
			description: 'A header with the H2 tag',
			function: 'headerTwo',
		},
		{
			label: 'Paragraph',
			description: 'A paragraph element',
			function: 'p',
		}
	],
	"Media": [
		{
			label: 'Image',
			description: 'An image element',
			function: 'image',
		},
	],
}

export {
	templates,
	builder,
	getConfigurationComponentsFor,
};
