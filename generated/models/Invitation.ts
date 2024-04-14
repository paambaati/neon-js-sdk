/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberRole } from './MemberRole';
export type Invitation = {
    id: string;
    /**
     * Email of the invited user
     */
    email: string;
    /**
     * Organization id as it is stored in Neon
     */
    org_id: string;
    /**
     * UUID for the user_id who extended the invitation
     */
    invited_by: string;
    /**
     * Timestamp when the invitation was created
     */
    invited_at: string;
    role: MemberRole;
};

