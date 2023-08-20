export default interface TextElementContract {
    id: number;
    type: string; // todo make type
    renderer: string;
    name: string;
    description: string;
    classes: string;
    size: string;
    weight: string;
    content: string;
    alignment: string;
    options: any;

}
