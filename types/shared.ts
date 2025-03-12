import type { Metadata } from "contentful";

export interface SysLink {
    type: "Link";
    linkType: string;
    id: string;
}

export interface Sys {
    space: { sys: SysLink };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: { sys: SysLink };
    publishedVersion?: number;
    revision?: number;
    contentType: { sys: SysLink };
    locale: string;
}

export interface ImageFileDetails {
    size: number;
    image: {
        width: number;
        height: number;
    };
}

export interface ImageFile {
    url: string;
    details: ImageFileDetails;
    fileName: string;
    contentType: string;
}

export interface ImageFields {
    title: string;
    description: string;
    file: ImageFile;
}

export interface Image {
    metadata: Metadata;
    sys: Sys;
    fields: ImageFields;
}