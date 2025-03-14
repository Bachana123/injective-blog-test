import type { EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface CategoryFields {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
}

export type Category = EntrySkeletonType<
    CategoryFields,
    'categories'
>