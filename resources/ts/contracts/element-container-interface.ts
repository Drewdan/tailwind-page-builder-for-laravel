import PageElementInterface from "./page-element-interface";

export default interface ElementContainerInterface {
	id: string | number;
	classes: string;
	colSpan: number;
	elements: PageElementInterface[];
}
