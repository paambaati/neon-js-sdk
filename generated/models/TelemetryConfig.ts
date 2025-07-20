/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TelemetryConfig = {
    /**
     * Required. The telemetry data types to enable. One or both of: metrics, logs.
     *
     */
    types: Array<'metrics' | 'logs'>;
    /**
     * Optional. Overrides the default endpoint for metrics (e.g., https://metrics.customer.com:4317).
     *
     */
    metrics_endpoint_override?: string;
    /**
     * Optional. Overrides the default endpoint for logs (e.g., https://logs.customer.com:4318).
     *
     */
    logs_endpoint_override?: string;
};

