import type { Asset, AssetLink, ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, ResolvedAssetLink, ResolvedLink, UnresolvedLink } from "contentful";
import type { Category } from "./category";
import type { Image } from "./shared";

export type Author = EntrySkeletonType<{
    name: string;
    profileImg: Image;
}, 'author'>

export type Blog = EntrySkeletonType<
{
    title: string;
    slug: string;
    description: string;
    createdAt: string;
    image: Image;
    categories: Category[];
    author: Author;
},
'blogPost'
>