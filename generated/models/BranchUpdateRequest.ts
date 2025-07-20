/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BranchUpdateRequest = {
    branch: {
        name?: string;
        protected?: boolean;
        /**
         * The timestamp when the branch is scheduled to expire and be automatically deleted. Must be set by the client following the [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) format with precision up to seconds (such as 2025-06-09T18:02:16Z). Deletion is performed by a background job and may not occur exactly at the specified time. If this field is set to null, the expiration timestamp is removed.
         *
         * This feature is currently in private preview. Get in touch with us to get access.
         *
         */
        expires_at?: string | null;
    };
};

