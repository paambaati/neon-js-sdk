/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Cursor based pagination is used. The user must pass the cursor as is to the backend.
 * For more information about cursor based pagination, see
 * https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination
 *
 */
export type Pagination = {
    cursor: string;
};

