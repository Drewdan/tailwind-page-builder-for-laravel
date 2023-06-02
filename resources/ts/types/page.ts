import ElementContainerInterface from "../contracts/element-container-interface";

export default interface Page {
    id: number;
    title: string;
    slug: string;
    content: ElementContainerInterface[]|null;
    created_at: string;
    updated_at: string;
}
