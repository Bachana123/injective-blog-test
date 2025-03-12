<script setup lang="ts">
import type { EntrySkeletonType } from 'contentful';
import { twMerge } from 'tailwind-merge';
import type { Blog } from '~/types/blog';
import type { Category } from '~/types/category';



const {entries, fetchEntries, noMoreToLoad, isLoading, skip} = useFetchPagination<Blog>({
    content_type: "blogPost",
    order: ["-sys.createdAt"],
    limit: 6
})

const {entries: categories } = useFetchPagination<Category>({
    content_type: "categories",
    order: ["sys.createdAt"],
    limit: 20
})

const allCategories = computed(() => {
    return [{ key: 'all', label: 'All' }, ...categories.value?.map((item) => {
        return {
            key: item.sys.id as unknown as string,
            label: item.fields.name as unknown as string, 
        }
    })]
})

const selectedCategory = ref(0)
const payload = ref({})

const onFilterChange = (index: number) => {
    if (index === selectedCategory.value) return

    payload.value = {}
    noMoreToLoad.value = false
    entries.value = []
    skip.value = 0

    selectedCategory.value = index
    
    if (index === 0) {
        fetchEntries()
        return
    }
    const key = allCategories.value[index].key
    payload.value = {'fields.categories.sys.id': key}
    fetchEntries(payload.value)
}
</script>

<template>
    <section class="bg-white pt-16 pb-6">
        <div class="grid grid-cols-12 gap-4 container mx-auto px-7 md:px-9">
            <UTabs v-if="allCategories.length" :items="allCategories" :default-index="0" class="col-start-1 xl:col-end-8 col-end-13 whitespace-nowrap" :ui="{ list: {rounded: 'rounded-full', background: '!bg-white', base: 'ring-1 ring-black', marker: { background: '!bg-[#4d3dff]', rounded: 'rounded-full' } } }" @change="onFilterChange">
                <template #default="{ item, selected }">
                    <span :class="[twMerge('text-black', selected && 'text-white', )]">{{ item.label }}</span>
                </template>
            </UTabs>
            <div v-if="isLoading" class="col-span-12 flex gap-5 flex-wrap">
                <div class="" v-for="i in 6" :key="i">
                    <USkeleton class="h-[290px] w-[470px]" :ui="{ rounded: 'rounded-xl' }" />
                    <div class="space-y-2 mt-4">
                        <USkeleton class="h-10 w-[250px]" />
                        <USkeleton class="h-6 w-[200px]" />
                    </div>
                </div>
            </div>
            <div v-else class="col-span-12 grid grid-cols-12 gap-5">
                <div class="lg:col-span-4 col-span-12" v-for="item in entries" :key="item.fields.slug as string">
                    <CommonCard  :item="item as unknown as EntrySkeletonType<Blog>" variant="small"  />
                </div>
            </div>
            <UButton v-if="!noMoreToLoad" color="black" variant="solid" :loading="isLoading" class="mt-6 col-start-6 col-end-8 mx-auto rounded-full p-4 ring-1 ring-slate-500 hover:-translate-y-3 duration-300" @click="fetchEntries(payload)">
                Load More
            </UButton>
        </div>
    </section>
</template>