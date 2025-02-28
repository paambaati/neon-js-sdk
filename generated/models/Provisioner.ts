/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Neon compute provisioner.
 * Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.
 *
 * Provisioner can be one of the following values:
 * * k8s-pod
 * * k8s-neonvm
 *
 * Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.
 *
 */
export type Provisioner = string;
