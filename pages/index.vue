<template>
    <main class="bg-white">
        <section class="flex md:h-[512px] h-80 pb-12 md:pb-10 bg-[url('/imgs/bg-header@1x.jpg')] ">
            <div class="flex flex-1 flex-col md:flex-row container px-7 md:px-9 mx-auto justify-end md:justify-between">
            <h1 class="text-[56px] md:text-9xl text-white font-[300] font-serif content-end">Injective Blog</h1>
            <div class="content-end">
                <time datetime="2025-03-11" class="text-xs text-white font-mono">
                {{todayDate}}
                </time>
            </div>
            </div>
        </section>
        <CommonMainBlock v-if="blogData" :blogItem="blogData" />
        <CommonBlogsWithFilter />
    </main>
  </template>
  
<script setup lang="ts">
import type { ContentfulClientApi, Entry, EntryCollection, EntrySkeletonType } from 'contentful';
import type { Blog } from '~/types/blog';

const { $client } = useNuxtApp()

const client = $client as ContentfulClientApi<undefined>;

const todayDate = computed(() => {
    const date = new Date(); 
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
});

const blogData = ref<EntrySkeletonType<Blog>[]>([]);

client.getEntries<Blog>({
    content_type: 'blogPost',
    order: ['sys.createdAt'],
    limit: 4
})
.then((posts) => {
    blogData.value = {...posts.items as unknown as EntrySkeletonType<Blog>[]}
})
.catch(console.error);
</script>