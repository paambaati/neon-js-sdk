/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TelemetryAuthentication } from './TelemetryAuthentication';
export type TelemetryConnection = {
    /**
     * Required. Communication protocol used to send telemetry data. Options: grpc, http.
     *
     */
    protocol: 'grpc' | 'http';
    /**
     * Required. URI of the OpenTelemetry Collector (e.g., https://collector.customer.com:4317).
     *
     */
    endpoint: string;
    /**
     * Required. Authentication configuration to securely send telemetry.
     * Options include bearer token, basic auth, or API key.
     *
     */
    authentication: TelemetryAuthentication;
};

