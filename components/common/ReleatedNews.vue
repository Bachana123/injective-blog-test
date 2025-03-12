<script setup lang="ts">
import type { ContentfulClientApi, EntryCollection, EntrySkeletonType } from 'contentful';
import type { Blog } from '~/types/blog';

const { $client } = useNuxtApp()

const client = $client as ContentfulClientApi<undefined>;
    
const blogData = ref<EntryCollection<EntrySkeletonType<Blog>>>();

client.getEntries<EntrySkeletonType<Blog>>({
    content_type: 'blogPost',
    order: ['sys.createdAt'],
    limit: 3
})
.then((posts) => {
    blogData.value = posts
})
.catch(console.error);
</script>

<template>
    <div class="container mx-auto ">
        <h3 class="text-bold text-5xl text-black py-16">Releated News</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="blog in blogData?.items" :key="blog.sys.id">
                <CommonCard  :item="blog as unknown as EntrySkeletonType<Blog>" variant="small"  />
            </div>
        </div>
    </div>
</template>