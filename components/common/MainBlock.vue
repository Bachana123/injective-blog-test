<script setup lang="ts">
import type { EntrySkeletonType } from 'contentful';
import type { Blog } from '~/types/blog';

interface Props {
    blogItem: Blog[];
}

defineProps<Props>()
</script>

<template>
    <div class="rounded-t-3xl overflow-hidden -mt-5 bg-white pt-16">
        <section class="grid grid-cols-12 gap-4 container mx-auto px-7 md:px-9 py-2">
            <div class="col-span-12 md:col-span-8 ">
                <CommonCard :item="blogItem[0]"  />
            </div>
            <div class="col-span-12 md:col-span-4 flex flex-col gap-6">
                <CommonCard :item="blogItem[1]" variant="only-title"  />
                <CommonCard :item="blogItem[2]" variant="only-title"  />
                <CommonCard :item="blogItem[3]" variant="only-title"  />
            </div>
        </section>
    </div>
</template>