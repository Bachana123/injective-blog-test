import type { EntrySkeletonType } from "contentful";
import type { Category } from "./category";
import type { Image } from "./shared";

export interface Author extends EntrySkeletonType {
    name: string;
    profileImg: Image;
}

export interface Blog extends EntrySkeletonType {
    title: string;
    slug: string;
    description: string;
    createdAt: string;
    image: Image;
    categories: Category[];
    author: Author;
}