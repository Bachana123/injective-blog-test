import type { EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { Category } from "./category";

export type Author = EntrySkeletonType<{
    name: EntryFieldTypes.Text;
    profileImg: EntryFieldTypes.AssetLink;
}, 'author'>

export type Blog = EntrySkeletonType<
{
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    createdAt: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    categories: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Category>>;
    author: EntryFieldTypes.EntryLink<Author>;
},
'blogPost'
>