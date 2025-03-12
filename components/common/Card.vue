<script setup lang="ts">
import type { EntrySkeletonType } from 'contentful';
import type { Blog } from '~/types/blog';
import { twMerge } from 'tailwind-merge';

interface Props {
    item: EntrySkeletonType<Blog>;
    variant?: 'default' | 'only-title' | 'small';
}

withDefaults(defineProps<Props>(), {
    variant: 'default',
}); 
</script>

<template>
    <NuxtLink :to="'/blog/' + item?.fields.slug" class="block">
        <UCard v-if="item" class="overflow-hidden group rounded-2xl" :ui="{ divide: '', ring: '', body: { padding: '!p-0' }, background: variant !== 'only-title' ? 'dark:bg-white' : 'dark:bg-[#ebf0ff] hover:dark:bg-[#ffa36e]', footer: { background: variant === 'only-title' ? 'bg-[#ebf0ff] relative group-hover:bg-[#ffa36e]' : 'bg-white relative' } }">
            <div :class="twMerge('duration-300 h-[600px] easy-in-out', variant === 'only-title' ? 'h-[130px]' : 'group-hover:translate-y-[-70px]', variant === 'small' && 'h-[400px]')">
                <img v-if="variant && variant !== 'only-title'" :src="item?.fields.image?.fields?.file?.url" :alt="item?.fields.image?.fields?.title" :class="twMerge('w-full h-[512px] object-cover', variant === 'small' && 'h-auto')" />
                <h2 :class="
                twMerge('text-[24px] font-serif font-[700] text-[#1A1A1A] line-clamp-2 w-2/3 px-4 mt-4', 
                    variant === 'only-title' && 'w-full group-hover:text-[#611447]', 
                    variant === 'small' && 'w-full')">
                    {{item?.fields.title}}
                </h2>
                <p v-if="variant && variant !== 'only-title'" :class="twMerge('text-[#1A1A1A] text-[16px] font-serif line-clamp-3 px-4 opacity-0 group-hover:opacity-50 duration-300 w-2/3',
                variant === 'small' && 'w-full')">{{item?.fields.description}}</p>
            </div>
            <template #footer>
                <div :class="twMerge('flex justify-between items-center bg-white relative', variant === 'only-title' && 'bg-[#ebf0ff] group-hover:bg-[#ffa36e]')">
                    <time v-if="variant && variant !== 'only-title'" datetime="2025-03-11" class="text-xs text-[#1A1A1A] font-mono">
                        {{item?.fields.createdAt}}
                    </time>
                    <div class="flex gap-2 whitespace-nowrap">
                        <UBadge v-for="category in item?.fields.categories" :key="category?.fields.slug" :label="category?.fields.name" variant="outline" color="gray" :class="twMerge('group-hover:bg-[#ebf0ff] ring-[#d4e0ff] !text-black', variant === 'only-title' && 'group-hover:bg-[#611447] group-hover:ring-[#611447] group-hover:!text-white')"  />
                    </div>
                </div>
            </template>
        </UCard>
    </NuxtLink>
</template>