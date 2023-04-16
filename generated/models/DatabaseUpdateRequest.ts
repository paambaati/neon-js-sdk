/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DatabaseUpdateRequest = {
    database: {
        /**
         * The name of the database
         *
         */
        name?: string;
        /**
         * The name of the role that owns the database
         *
         */
        owner_name?: string;
    };
};

