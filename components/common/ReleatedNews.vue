<script setup lang="ts">
import type { ContentfulClientApi } from 'contentful';
import type { Blog } from '~/types/blog';

const { $client } = useNuxtApp()
const { locale } = useI18n()

const client = $client as ContentfulClientApi<undefined>;
    
const {data: blogData} = await useAsyncData(() => client.withoutUnresolvableLinks.getEntries<Blog>({
    content_type: 'blogPost',
    order: ['sys.createdAt'],
    limit: 3,
    locale: locale.value,
}), {
    watch: [locale]
})
</script>

<template>
    <div class="container mx-auto ">
        <h3 class="text-bold text-5xl text-black py-16">Releated News</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="blog in blogData?.items" :key="blog.sys.id">
                <CommonCard :item="blog" variant="small" />
            </div>
        </div>
    </div>
</template>