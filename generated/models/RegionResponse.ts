/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RegionResponse = {
    /**
     * The region ID as used in other API endpoints
     */
    region_id: string;
    /**
     * A short description of the region.
     */
    name: string;
    /**
     * Whether this region is used by default in new projects.
     */
    default: boolean;
    /**
     * The geographical latitude (approximate) for the region. Empty if unknown.
     */
    geo_lat: string;
    /**
     * The geographical longitude (approximate) for the region. Empty if unknown.
     */
    geo_long: string;
};

