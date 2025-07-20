/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponse } from '../models/EmptyResponse';
import type { GeneralError } from '../models/GeneralError';
import type { Member } from '../models/Member';
import type { Organization } from '../models/Organization';
import type { OrganizationInvitationsResponse } from '../models/OrganizationInvitationsResponse';
import type { OrganizationInvitesCreateRequest } from '../models/OrganizationInvitesCreateRequest';
import type { OrganizationMembersResponse } from '../models/OrganizationMembersResponse';
import type { OrganizationMemberUpdateRequest } from '../models/OrganizationMemberUpdateRequest';
import type { OrganizationsResponse } from '../models/OrganizationsResponse';
import type { OrgApiKeyCreateRequest } from '../models/OrgApiKeyCreateRequest';
import type { OrgApiKeyCreateResponse } from '../models/OrgApiKeyCreateResponse';
import type { OrgApiKeyRevokeResponse } from '../models/OrgApiKeyRevokeResponse';
import type { OrgApiKeysListResponseItem } from '../models/OrgApiKeysListResponseItem';
import type { TransferProjectsToOrganizationRequest } from '../models/TransferProjectsToOrganizationRequest';
import type { VPCEndpointAssignment } from '../models/VPCEndpointAssignment';
import type { VPCEndpointDetails } from '../models/VPCEndpointDetails';
import type { VPCEndpointsResponse } from '../models/VPCEndpointsResponse';
import type { VPCEndpointsWithRegionResponse } from '../models/VPCEndpointsWithRegionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrganizationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve organization details
     * Retrieves information about the specified organization.
     *
     * @param orgId The Neon organization ID
     * @returns Organization Returned information about the organization
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getOrganization(
        orgId: string,
    ): CancelablePromise<Organization | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{org_id}',
            path: {
                'org_id': orgId,
            },
        });
    }
    /**
     * List organization API keys
     * Retrieves the API keys for the specified organization.
     * The response does not include API key tokens. A token is only provided when creating an API key.
     * API keys can also be managed in the Neon Console.
     * For more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).
     *
     * @param orgId The Neon organization ID
     * @returns OrgApiKeysListResponseItem Returned the API keys for the specified organization
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listOrgApiKeys(
        orgId: string,
    ): CancelablePromise<Array<OrgApiKeysListResponseItem> | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{org_id}/api_keys',
            path: {
                'org_id': orgId,
            },
        });
    }
    /**
     * Create organization API key
     * Creates an API key for the specified organization.
     * The `key_name` is a user-specified name for the key.
     * This method returns an `id` and `key`. The `key` is a randomly generated, 64-bit token required to access the Neon API.
     * API keys can also be managed in the Neon Console.
     * See [Manage API keys](https://neon.tech/docs/manage/api-keys/).
     *
     * @param orgId The Neon organization ID
     * @param requestBody
     * @returns OrgApiKeyCreateResponse Created an organization API key
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public createOrgApiKey(
        orgId: string,
        requestBody: OrgApiKeyCreateRequest,
    ): CancelablePromise<OrgApiKeyCreateResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{org_id}/api_keys',
            path: {
                'org_id': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Revoke organization API key
     * Revokes the specified organization API key.
     * An API key that is no longer needed can be revoked.
     * This action cannot be reversed.
     * You can obtain `key_id` values by listing the API keys for an organization.
     * API keys can also be managed in the Neon Console.
     * See [Manage API keys](https://neon.tech/docs/manage/api-keys/).
     *
     * @param orgId The Neon organization ID
     * @param keyId The API key ID
     * @returns OrgApiKeyRevokeResponse Revoked the specified organization API key
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public revokeOrgApiKey(
        orgId: string,
        keyId: number,
    ): CancelablePromise<OrgApiKeyRevokeResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{org_id}/api_keys/{key_id}',
            path: {
                'org_id': orgId,
                'key_id': keyId,
            },
        });
    }
    /**
     * Retrieve organization members details
     * Retrieves information about the specified organization members.
     *
     * @param orgId The Neon organization ID
     * @returns OrganizationMembersResponse Returned information about organization members
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getOrganizationMembers(
        orgId: string,
    ): CancelablePromise<OrganizationMembersResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{org_id}/members',
            path: {
                'org_id': orgId,
            },
        });
    }
    /**
     * Retrieve organization member details
     * Retrieves information about the specified organization member.
     *
     * @param orgId The Neon organization ID
     * @param memberId The Neon organization member ID
     * @returns Member Returned information about the organization member
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getOrganizationMember(
        orgId: string,
        memberId: string,
    ): CancelablePromise<Member | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{org_id}/members/{member_id}',
            path: {
                'org_id': orgId,
                'member_id': memberId,
            },
        });
    }
    /**
     * Update role for organization member
     * Only an admin can perform this action.
     *
     * @param orgId The Neon organization ID
     * @param memberId The Neon organization member ID
     * @param requestBody
     * @returns Member The updated organization member
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public updateOrganizationMember(
        orgId: string,
        memberId: string,
        requestBody: OrganizationMemberUpdateRequest,
    ): CancelablePromise<Member | GeneralError> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{org_id}/members/{member_id}',
            path: {
                'org_id': orgId,
                'member_id': memberId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove member from the organization
     * Remove member from the organization.
     * Only an admin of the organization can perform this action.
     * If another admin is being removed, it will not be allows in case it is the only admin left in the organization.
     *
     * @param orgId The Neon organization ID
     * @param memberId The Neon organization member ID
     * @returns EmptyResponse Removed organization member
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public removeOrganizationMember(
        orgId: string,
        memberId: string,
    ): CancelablePromise<EmptyResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{org_id}/members/{member_id}',
            path: {
                'org_id': orgId,
                'member_id': memberId,
            },
        });
    }
    /**
     * Retrieve organization invitation details
     * Retrieves information about extended invitations for the specified organization
     *
     * @param orgId The Neon organization ID
     * @returns OrganizationInvitationsResponse Returned information about the organization invitations
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getOrganizationInvitations(
        orgId: string,
    ): CancelablePromise<OrganizationInvitationsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{org_id}/invitations',
            path: {
                'org_id': orgId,
            },
        });
    }
    /**
     * Create organization invitations
     * Creates invitations for a specific organization.
     * If the invited user has an existing account, they automatically join as a member.
     * If they don't yet have an account, they are invited to create one, after which they become a member.
     * Each invited user receives an email notification.
     *
     * @param orgId The Neon organization ID
     * @param requestBody
     * @returns OrganizationInvitationsResponse The created organization invitation
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public createOrganizationInvitations(
        orgId: string,
        requestBody: OrganizationInvitesCreateRequest,
    ): CancelablePromise<OrganizationInvitationsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{org_id}/invitations',
            path: {
                'org_id': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Transfer projects between organizations
     * Transfers selected projects, identified by their IDs, from your organization to another specified organization.
     *
     * @param sourceOrgId The Neon organization ID (source org, which currently owns the project)
     * @param requestBody
     * @returns EmptyResponse Projects successfully transferred from organization to organization
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public transferProjectsFromOrgToOrg(
        sourceOrgId: string,
        requestBody: TransferProjectsToOrganizationRequest,
    ): CancelablePromise<EmptyResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{source_org_id}/projects/transfer',
            path: {
                'source_org_id': sourceOrgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                406: `Transfer failed - the target organization has too many projects or its plan is incompatible with the source organization. Reduce projects or upgrade the organization.`,
                422: `One or more of the provided project IDs have GitHub or Vercel integrations installed. Transferring integration projects is currently not supported`,
            },
        });
    }
    /**
     * List VPC endpoints across all regions
     * Retrieves the list of VPC endpoints for the specified Neon organization across all regions.
     *
     * @param orgId The Neon organization ID
     * @returns VPCEndpointsWithRegionResponse The list of configured VPC endpoint IDs for the specified organization across all regions
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listOrganizationVpcEndpointsAllRegions(
        orgId: string,
    ): CancelablePromise<VPCEndpointsWithRegionResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{org_id}/vpc/vpc_endpoints',
            path: {
                'org_id': orgId,
            },
        });
    }
    /**
     * List VPC endpoints
     * Retrieves the list of VPC endpoints for the specified Neon organization.
     *
     * @param orgId The Neon organization ID
     * @param regionId The Neon region ID
     * @returns VPCEndpointsResponse The list of configured VPC endpoint IDs for the specified organization
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public listOrganizationVpcEndpoints(
        orgId: string,
        regionId: string,
    ): CancelablePromise<VPCEndpointsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints',
            path: {
                'org_id': orgId,
                'region_id': regionId,
            },
        });
    }
    /**
     * Retrieve VPC endpoint details
     * Retrieves the current state and configuration details of a specified VPC endpoint.
     *
     * @param orgId The Neon organization ID
     * @param regionId The Neon region ID.
     * Azure regions are currently not supported.
     *
     * @param vpcEndpointId The VPC endpoint ID
     * @returns VPCEndpointDetails Returned the current status and configuration details of the specified VPC endpoint.
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getOrganizationVpcEndpointDetails(
        orgId: string,
        regionId: string,
        vpcEndpointId: string,
    ): CancelablePromise<VPCEndpointDetails | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}',
            path: {
                'org_id': orgId,
                'region_id': regionId,
                'vpc_endpoint_id': vpcEndpointId,
            },
        });
    }
    /**
     * Assign or update VPC endpoint
     * Assigns a VPC endpoint to a Neon organization or updates its existing assignment.
     *
     * @param orgId The Neon organization ID
     * @param regionId The Neon region ID.
     * Azure regions are currently not supported.
     *
     * @param vpcEndpointId The VPC endpoint ID
     * @param requestBody
     * @returns any Assigned the VPC endpoint to the specified Neon organization
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public assignOrganizationVpcEndpoint(
        orgId: string,
        regionId: string,
        vpcEndpointId: string,
        requestBody: VPCEndpointAssignment,
    ): CancelablePromise<any | GeneralError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}',
            path: {
                'org_id': orgId,
                'region_id': regionId,
                'vpc_endpoint_id': vpcEndpointId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete VPC endpoint
     * Deletes the VPC endpoint from the specified Neon organization.
     * If you delete a VPC endpoint from a Neon organization, that VPC endpoint cannot
     * be added back to the Neon organization.
     *
     * @param orgId The Neon organization ID
     * @param regionId The Neon region ID.
     * Azure regions are currently not supported.
     *
     * @param vpcEndpointId The VPC endpoint ID
     * @returns any Deleted the VPC endpoint from the specified Neon organization
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public deleteOrganizationVpcEndpoint(
        orgId: string,
        regionId: string,
        vpcEndpointId: string,
    ): CancelablePromise<any | GeneralError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}',
            path: {
                'org_id': orgId,
                'region_id': regionId,
                'vpc_endpoint_id': vpcEndpointId,
            },
        });
    }
    /**
     * Retrieve current user organizations list
     * Retrieves information about the current Neon user's organizations
     *
     * @returns OrganizationsResponse Returned information about the current user organizations
     *
     * @returns GeneralError General Error
     * @throws ApiError
     */
    public getCurrentUserOrganizations(): CancelablePromise<OrganizationsResponse | GeneralError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me/organizations',
        });
    }
}
