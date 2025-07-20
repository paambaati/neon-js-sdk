/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A map where key is a project ID and a value is a list of installed applications.
 *
 */
export type ProjectsApplicationsMapResponse = {
    applications: Record<string, Array<'vercel' | 'github' | 'datadog' | 'opentelemetry'>>;
};

