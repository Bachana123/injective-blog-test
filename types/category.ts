import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface CategoryFields {
    name: string;
    slug: string;
}

export type Category = EntrySkeletonType<
    CategoryFields,
    'categories'
>