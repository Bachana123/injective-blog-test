<script setup lang="ts">
import type { ContentfulClientApi } from 'contentful';
import type { Blog } from '~/types/blog';

const { $client } = useNuxtApp()
const { locale, t } = useI18n()

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
    <div class="container mx-auto px-16 pt-16">
        <span class="flex text-black text-sm items-center gap-4">
            <svg class="!w-1 !h-1 md:!w-2 md:!h-2 rounded-full bg-white" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5.00049" r="5" fill="currentcolor"></circle>
            </svg>
            {{ t('releatedPosts.smallTitle') }}
        </span>
        <h3 class="text-bold text-5xl text-black py-10">{{ t('releatedPosts.title') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="blog in blogData?.items" :key="blog.sys.id">
                <CommonCard :item="blog" variant="small" />
            </div>
        </div>
    </div>
</template>