export enum ElementType {
    Div = "div",
    Img = "img",
    A = "a",
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    P = "p",
}

export interface Attributes {
    classes?: string[];
    styles?: string[];
    title?: string;
    alt?: string;
    src?: string;
    href?: string;
}

export interface PageElement {
    uuid: string;
    id?: string;
    order: number;
    as: ElementType;
    attributes: Attributes;
    content?: string;
    elements: PageElement[];
    allowedChildren?: ElementType[];
}

export interface Page {
    id: number;
    uuid: string;
    slug: string;
    label: string;
    meta_description: string;
    meta_keywords: string;
    allowedChildren: ElementType[];
    head: any;
    body: PageElement[];
    foot: any;
}
