<template>
    <main class="bg-white">
        <section class="flex md:h-[512px] h-80 pb-12 md:pb-10 bg-[url('/imgs/bg-header@1x.jpg')] ">
            <div class="flex flex-1 flex-col md:flex-row container px-7 md:px-9 mx-auto justify-end md:justify-between">
            <h1 class="text-[56px] md:text-9xl text-white font-[400] font-serif content-end">Injective Blog</h1>
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
import type { ContentfulClientApi } from 'contentful';
import type { Blog } from '~/types/blog';

const { $client } = useNuxtApp()
const { locale } = useI18n()

const client = $client as ContentfulClientApi<undefined>;

const todayDate = computed(() => {
    return createDateWithMonth({ locale: locale.value });
});


const {data: blogData} = await useAsyncData(() => client.withoutUnresolvableLinks.getEntries<Blog>({
    content_type: 'blogPost',
    order: ['sys.createdAt'],
    limit: 4,
    locale: locale.value,
})
.then((posts) => {
    return posts.items
}), {
    watch: [locale]
})
</script>