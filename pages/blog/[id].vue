<script setup lang="ts">
import type { ContentfulClientApi } from 'contentful';
import type { Blog } from '~/types/blog';

definePageMeta({
  layout: 'custom'
})

const route = useRoute()
const { locale } = useI18n()

const { $client } = useNuxtApp()
const client = $client as ContentfulClientApi<undefined>;

const { data: entry } = await useAsyncData(() => client.withoutUnresolvableLinks.getEntries<Blog>({
    content_type: 'blogPost',
    'fields.slug': route.params.id as string,
    include: 2,
    locale: locale.value,
}).then((res) => {
    const firstItem = res.items[0];

        if (firstItem && 'fields' in firstItem) {
            return firstItem;
        }

        return null;
}), {
    watch: [locale]
});

const date = computed(() => {
    const date = new Date(entry.value?.sys?.createdAt ?? '');
    return date.toLocaleDateString(locale.value, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
});

const author = computed(() => {
  const authorEntry = entry.value?.fields.author;
  return authorEntry && 'fields' in authorEntry ? authorEntry : null;
});
</script>

<template>
    <main class="bg-white w-full h-full md:pt-[200px] pt-24 pb-6 px-4 md:px-0">
        <div v-if="entry?.fields" class="container grid grid-cols-12 mx-auto">
            <div class="md:col-start-4 col-start-1 md:col-end-10 col-end-13">
                <div class="flex gap-2">
                    <UBadge v-for="category in entry?.fields.categories" :key="category?.fields.slug" :label="category?.fields?.name" variant="outline" color="gray" class="group-hover:bg-[#ebf0ff] ring-[#d4e0ff] !text-black"  />
                </div>
                <h1 class="text-black md:text-5xl text-xl font-semibold mt-4 md:leading-[60px]">
                    {{ entry?.fields.title }}
                </h1>
                <div class="flex items-center gap-4 md:mt-8 mt-4">
                    <img 
                        v-if="author"
                        :src="author.fields.profileImg?.fields.file?.url" 
                        :alt="author.fields.name" 
                        class="w-12 h-12 rounded-full" 
                        />
                    <div>
                        <h3 class="text-black text-base">{{ author?.fields.name }}</h3>
                        <span class="text-gray-700 text-xs">{{ date }}</span>
                    </div>
                </div>
            </div>
            <img class="md:col-start-3 col-start-1 md:col-end-11 col-end-13 rounded-2xl overflow-hidden md:mt-16 mt-4 w-full" :src="entry.fields.image?.fields.file?.url" :alt="entry?.fields.title">
            <MDC 
            :parserOptions="{
                    
            }" 
            :value="entry?.fields.description" 
            tag="article" 
            class="text-gray-700 md:col-start-4 col-start-1 md:col-end-10 col-end-13 mt-10 markdown-text"  /> 
        </div>
        <div v-else class="h-screen absolute top-0 left-0 w-full bg-white z-50">
            <span class="block capitalize text-4xl text-black text-center mt-40">this post doesn't exist</span>
            <span class="block text-gray-700 text-xl text-center">please check the url</span>
            <img src="/imgs/404.gif" alt="404" class="md:w-1/2 mx-auto my-10 md:!my-40" />
            <span class="block text-gray-700 text-xl text-center ">
                or go back to the 
                <NuxtLink to="/" class="text-blue-500">blog page</NuxtLink>
            </span>
        </div>
        <CommonReleatedNews />
    </main>
</template>

<style scoped lang="css">
:deep(.markdown-text img) {
    @apply my-6;
}
:deep(.markdown-text h2) {
    @apply text-2xl mt-10 text-black;
}
:deep(.markdown-text p) {
    @apply mt-6;
}
</style>