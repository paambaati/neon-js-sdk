/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { ApiKeyService } from './services/ApiKeyService';
import { BranchService } from './services/BranchService';
import { EndpointService } from './services/EndpointService';
import { OperationService } from './services/OperationService';
import { ProjectService } from './services/ProjectService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class NeonClient {

    public readonly apiKey: ApiKeyService;
    public readonly branch: BranchService;
    public readonly endpoint: EndpointService;
    public readonly operation: OperationService;
    public readonly project: ProjectService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://console.neon.tech/api/v2',
            VERSION: config?.VERSION ?? '2',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.apiKey = new ApiKeyService(this.request);
        this.branch = new BranchService(this.request);
        this.endpoint = new EndpointService(this.request);
        this.operation = new OperationService(this.request);
        this.project = new ProjectService(this.request);
    }
}

