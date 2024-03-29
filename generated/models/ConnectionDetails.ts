/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionParameters } from './ConnectionParameters';
export type ConnectionDetails = {
    /**
     * Connection URI is same as specified in https://www.postgresql.org/docs/current/libpq-connect.html#id-1.7.3.8.3.6
     * It is a ready to use string for psql or for DATABASE_URL environment variable.
     *
     */
    connection_uri: string;
    connection_parameters: ConnectionParameters;
};

