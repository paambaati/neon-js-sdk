/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DatabaseCreateRequest = {
    database: {
        /**
         * The name of the datbase
         *
         */
        name: string;
        /**
         * The name of the role that owns the database
         *
         */
        owner_name: string;
    };
};

