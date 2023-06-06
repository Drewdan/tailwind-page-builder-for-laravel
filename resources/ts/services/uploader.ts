import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

interface UploadOptions {
    bucket?: string | undefined;
    contentType?: string | undefined;
    data?: any;
    expires?: string | undefined;
    visibility?: string | undefined;
    baseURL?: string | undefined;
    headers?: any;
    options?: any;
    progress?: (value: number) => void | undefined;
}

class Uploader {

    client: AxiosInstance;

    constructor() {
        let config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (import.meta.env.DEV) {
            console.log('loading client for dev file uploader');
            config.baseURL = 'http://package.test';
        }

        this.client = axios.create(config);
    }
    /**
     * Generate the S3 URL to an application asset.
     */
    asset(path: string): string {
        return '/' + path;
    }

    /**
     * Store a file in S3 and return its UUID, key, and other information.
     */
    async store(file: File, options: UploadOptions = {}) {
        const response = await this.client.post('/page-builder/storage-url', {
            'bucket': options.bucket || '',
            'content_type': options.contentType || file.type,
            'expires': options.expires || '',
            'visibility': options.visibility || '',
            ...options.data
        }, {
            headers: options.headers || {},
            ...options.options
        });

        let headers = response.data.headers;

        if ('Host' in headers) {
            delete headers.Host;
        }

        if (typeof options.progress === 'undefined') {
            options.progress = () => {
            };
        }

        await axios.put(response.data.url, file, {
            headers: headers,
            onUploadProgress: (progressEvent) => {
                // if (options.progress) {
                //     options.progress(progressEvent.loaded / progressEvent.total);
                // }
            }
        })

        response.data.extension = file.name.split('.').pop()

        return response.data;
    }
}

export default new Uploader();
