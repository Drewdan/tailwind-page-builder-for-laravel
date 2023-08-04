import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import Page from "../types/page";
import ElementContainerInterface from "../contracts/element-container-interface";
import TextElement from "../components/elements/TextElement.vue";
import TextElementContract from "../types/text-element";

export default class ApiClient {

    client: AxiosInstance;

    constructor() {
        let config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (import.meta.env.DEV) {
            console.log('loading client for dev');
            config.baseURL = 'http://package.test';
        }

        this.client = axios.create(config);
    }

    async loadElements(): Promise<TextElementContract[]> {
        return (await this.client.get('/page-builder/elements')).data;
    }

    async loadPages(): Promise<Page[]> {
        return (await this.client.get('/page-builder/data/pages')).data.pages;
    }

    async loadPage(slug: string): Promise<Page> {
        return (await this.client.get(`/page-builder/data/pages/${slug}`)).data.page;
    }

    async createPage(title: string): Promise<void> {
        await this.client.post('/page-builder/data/pages', {title});
    }

    async savePage(slug: string, title: string, content: ElementContainerInterface[]): Promise<void> {
        await this.client.put(`/page-builder/data/pages/${slug}`, {
            title,
            content: content
        });
    }

    async storeFile(uuid: string, key: string, bucket: string): Promise<string> {
        return (await this.client.post('/page-builder/files', {uuid, key, bucket})).data.file;
    }
}
