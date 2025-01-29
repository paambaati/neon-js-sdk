/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Details of an organization guest, who is not directly a member of
 * an organization but has been shared one of the projects it owns
 *
 */
export type OrganizationGuest = {
    permission_id: string;
    user_email: string;
    project_id: string;
    project_name: string;
};

