import type { EntrySkeletonType, Metadata, SyncResponse, SysQueries } from "contentful";

export interface CategoryFields {
    name: string;
    slug: string;
}

export interface Category extends EntrySkeletonType {
    contentTypeId: "category";
    metadata: Metadata;
    sys: SyncResponse;
    fields: CategoryFields;
}