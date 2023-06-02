export default interface Page {
    id: number;
    title: string;
    slug: string;
    content: object|null;
    created_at: string;
    updated_at: string;
}
