/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionParameters } from './ConnectionParameters';
export type ConnectionDetails = {
    /**
     * The connection URI is defined as specified here: [Connection URIs](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS)
     * The connection URI can be used to connect to a Postgres database with psql or defined in a DATABASE_URL environment variable.
     *
     */
    connection_uri: string;
    connection_parameters: ConnectionParameters;
};

