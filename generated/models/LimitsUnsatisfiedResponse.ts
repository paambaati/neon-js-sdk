/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LimitsUnsatisfiedResponse = {
    limits: Array<{
        /**
         * Identifier of the unsatisfied limit. Possible values are:
         * - subscription_type
         * - projects_count
         * - project_region
         *
         */
        name: string;
        expected: string;
        actual: string;
    }>;
};

