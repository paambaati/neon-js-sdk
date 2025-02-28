import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { Interceptors } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
<<<<<<< HEAD
||||||| e7dd037
import { ApiKeyService } from './services/ApiKeyService';
import { BranchService } from './services/BranchService';
import { ConsumptionService } from './services/ConsumptionService';
import { EndpointService } from './services/EndpointService';
import { OperationService } from './services/OperationService';
import { ProjectService } from './services/ProjectService';
import { UsersService } from './services/UsersService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class NeonClient {
    public readonly apiKey: ApiKeyService;
    public readonly branch: BranchService;
    public readonly consumption: ConsumptionService;
    public readonly endpoint: EndpointService;
    public readonly operation: OperationService;
    public readonly project: ProjectService;
    public readonly users: UsersService;
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
        this.consumption = new ConsumptionService(this.request);
        this.endpoint = new EndpointService(this.request);
        this.operation = new OperationService(this.request);
        this.project = new ProjectService(this.request);
        this.users = new UsersService(this.request);
    }
}
=======
import { ApiKeyService } from './services/ApiKeyService';
import { AuthService } from './services/AuthService';
import { BranchService } from './services/BranchService';
import { ConsumptionService } from './services/ConsumptionService';
import { EndpointService } from './services/EndpointService';
import { OperationService } from './services/OperationService';
import { OrganizationsService } from './services/OrganizationsService';
import { ProjectService } from './services/ProjectService';
import { RegionService } from './services/RegionService';
import { UsersService } from './services/UsersService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class NeonClient {
    public readonly apiKey: ApiKeyService;
    public readonly auth: AuthService;
    public readonly branch: BranchService;
    public readonly consumption: ConsumptionService;
    public readonly endpoint: EndpointService;
    public readonly operation: OperationService;
    public readonly organizations: OrganizationsService;
    public readonly project: ProjectService;
    public readonly region: RegionService;
    public readonly users: UsersService;
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
        this.auth = new AuthService(this.request);
        this.branch = new BranchService(this.request);
        this.consumption = new ConsumptionService(this.request);
        this.endpoint = new EndpointService(this.request);
        this.operation = new OperationService(this.request);
        this.organizations = new OrganizationsService(this.request);
        this.project = new ProjectService(this.request);
        this.region = new RegionService(this.request);
        this.users = new UsersService(this.request);
    }
}
>>>>>>> main

import { ApiKeyService } from './services.gen';
import { AuthService } from './services.gen';
import { BranchService } from './services.gen';
import { ConsumptionService } from './services.gen';
import { EndpointService } from './services.gen';
import { OperationService } from './services.gen';
import { OrganizationsService } from './services.gen';
import { ProjectService } from './services.gen';
import { RegionService } from './services.gen';
import { UsersService } from './services.gen';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class NeonClient {

	public readonly apiKey: ApiKeyService;
	public readonly auth: AuthService;
	public readonly branch: BranchService;
	public readonly consumption: ConsumptionService;
	public readonly endpoint: EndpointService;
	public readonly operation: OperationService;
	public readonly organizations: OrganizationsService;
	public readonly project: ProjectService;
	public readonly region: RegionService;
	public readonly users: UsersService;

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
			interceptors: {
				request: config?.interceptors?.request ?? new Interceptors(),
				response: config?.interceptors?.response ?? new Interceptors(),
      },
		});

		this.apiKey = new ApiKeyService(this.request);
		this.auth = new AuthService(this.request);
		this.branch = new BranchService(this.request);
		this.consumption = new ConsumptionService(this.request);
		this.endpoint = new EndpointService(this.request);
		this.operation = new OperationService(this.request);
		this.organizations = new OrganizationsService(this.request);
		this.project = new ProjectService(this.request);
		this.region = new RegionService(this.request);
		this.users = new UsersService(this.request);
	}
}
