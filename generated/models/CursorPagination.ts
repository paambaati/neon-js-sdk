/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * To paginate the response, issue an initial request with `limit` value. Then, add the value returned in the response `.pagination.next` attribute into the request under the `cursor` query parameter to the subsequent request to retrieve next page in pagination. The contents on cursor `next` are opaque, clients are not expected to make any assumptions on the format of the data inside the cursor.
 */
export type CursorPagination = {
    next?: string;
    sort_by?: string;
    sort_order?: string;
};

