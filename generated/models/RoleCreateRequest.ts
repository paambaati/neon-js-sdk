/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RoleCreateRequest = {
    role: {
        /**
         * The role name. Cannot exceed 63 bytes in length.
         *
         */
        name: string;
        /**
         * Whether to create a role that cannot login.
         *
         */
        no_login?: boolean;
    };
};

