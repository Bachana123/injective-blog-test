<script setup lang="ts">
import type { Blog } from '~/types/blog';
import { twMerge } from 'tailwind-merge';
import type { Entry } from 'contentful';

const localPath = useLocalePath();
const { locale } = useI18n()

interface Props {
    item: Entry<Blog, "WITHOUT_UNRESOLVABLE_LINKS">;
    variant?: 'default' | 'only-title' | 'small';
}

withDefaults(defineProps<Props>(), {
    variant: 'default',
}); 
</script>

<template>
    <NuxtLink :to="localPath('/blog/' + item?.fields.slug)" class="block">
        <UCard v-if="item" class="overflow-hidden group rounded-2xl" :ui="{ divide: '', ring: '', body: { padding: '!p-0' }, background: variant !== 'only-title' ? 'dark:bg-white' : 'dark:bg-[#ebf0ff] hover:dark:bg-[#ffa36e]', footer: { background: variant === 'only-title' ? 'bg-[#ebf0ff] relative group-hover:bg-[#ffa36e]' : 'bg-white relative', padding: 'sm:px-6 pt-0' } }">
            <div :class="twMerge('duration-300 h-[630px] easy-in-out', variant === 'only-title' ? 'h-[156px]' : 'group-hover:translate-y-[-70px]', variant === 'small' && 'h-[420px] group-hover:translate-y-[-80px]')">
                <img v-if="variant && variant !== 'only-title'" :src="item?.fields.image?.fields?.file?.url" :alt="item?.fields.image?.fields?.title" :class="twMerge('w-full h-[512px] object-cover', variant === 'small' && 'h-auto')" />
                <div class="p-6">
                    <time v-if="variant !== 'default'" datetime="2025-03-11" class="text-xs text-[#0b182b] opacity-60 font-mono font-normal">
                        {{
                            createDateWithMonth({time: item?.fields.createdAt, locale: locale})
                        }}
                    </time>
                    <h2 :class="
                    twMerge('text-[24px] font-serif font-[300] text-[#1A1A1A] line-clamp-2 w-2/3', 
                        variant === 'only-title' && 'w-full group-hover:text-[#611447]', 
                        variant === 'small' && 'w-full')">
                        {{item?.fields.title}}
                    </h2>
                    <p v-if="variant && variant !== 'only-title'" :class="twMerge('text-[#1A1A1A] text-[16px] font-serif line-clamp-3 opacity-0 group-hover:opacity-50 duration-300 w-2/3',
                    variant === 'small' && 'w-full')">{{item?.fields.description}}</p>
                </div>
            </div>
            <template #footer>
                <div :class="twMerge('flex justify-between items-center bg-white relative', variant === 'only-title' && 'bg-[#ebf0ff] group-hover:bg-[#ffa36e]')">
                    <time v-if="variant === 'default'" datetime="2025-03-11" class="text-xs text-[#0b182b] opacity-60 font-mono font-normal">
                        {{
                            createDateWithMonth({time: item?.fields.createdAt, locale: locale})
                        }}
                    </time>
                    <div class="flex gap-2 whitespace-nowrap">
                        <UBadge  v-for="category in item?.fields.categories" :key="category?.fields.slug" :label="category?.fields.name" variant="outline" color="gray" :class="twMerge('group-hover:bg-[#ebf0ff] ring-[#d4e0ff] !text-[#0b182b] !font-normal rounded-[4px]', variant === 'only-title' && 'group-hover:bg-[#611447] group-hover:ring-[#611447] group-hover:!text-white')"  />
                    </div>
                </div>
            </template>
        </UCard>
    </NuxtLink>
</template>