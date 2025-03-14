<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { Blog } from '~/types/blog';
import type { Category } from '~/types/category';

const {entries, fetchEntries, noMoreToLoad, isLoading, skip, filters} = useFetchPagination<Blog>({
    content_type: "blogPost",
    order: ["-sys.createdAt"],
    limit: 6
})

const {entries: categories } = useFetchPagination<Category>({
    content_type: "categories",
    order: ["sys.createdAt"],
    limit: 20
})

const selectedCategory = ref({
    key: '', 
    label: 'All', 
    index: 0
})

const allCategories = computed(() => {
    return [{ key: '', label: 'All', index: 0 }, ...categories.value?.map((item, index) => {
        return {
            key: item.sys.id,
            label: item.fields.name, 
            index: index + 1
        }
    })]
})

const onFilterChange = (index: number) => {
    if (index === selectedCategory.value.index) return

    filters.value = {}
    noMoreToLoad.value = false
    entries.value = []
    skip.value = 0

    selectedCategory.value = allCategories.value[index]
    
    if (index === 0) {
        fetchEntries()
        return
    }

    filters.value = {'fields.categories.sys.id': selectedCategory.value.key}
    fetchEntries()
}

</script>

<template>
    <section class="bg-white pt-16 pb-6">
        <div class="grid grid-cols-12 gap-4 container mx-auto px-7 md:px-9">
            <div class="hidden lg:block col-start-1 xl:col-end-8 col-end-13 whitespace-nowrap">
                <UTabs 
                    v-if="allCategories.length" 
                    :items="allCategories" 
                    :default-index="0" 
                    :ui="{ 
                        list: {
                            rounded: 'rounded-full', 
                            background: '!bg-white', 
                            base: 'ring-1 ring-[#d4e0ff] !p-0 h-auto', 
                            marker: { 
                                background: '!bg-[#4d3dff]', 
                                rounded: 'rounded-full' 
                            } 
                        } 
                    }" 
                    @change="onFilterChange">
                    <template #default="{ item, selected }">
                        <span :class="[twMerge('text-black font-normal', selected && 'text-white', )]">{{ item.label }}</span>
                    </template>
                </UTabs>
            </div>
            <div v-if="isLoading" class="col-span-12 flex gap-5 flex-wrap">
                <div v-for="i in 6" :key="i">
                    <USkeleton class="h-[290px] w-[470px]" :ui="{ rounded: 'rounded-xl' }" />
                    <div class="space-y-2 mt-4">
                        <USkeleton class="h-10 w-[250px]" />
                        <USkeleton class="h-6 w-[200px]" />
                    </div>
                </div>
            </div>
            <div v-else class="col-span-12 grid grid-cols-12 gap-5">
                <div class="lg:col-span-4 col-span-12" v-for="item in entries" :key="item.fields.slug">
                    <CommonCard  :item="item" variant="small"  />
                </div>
            </div>
            <UButton v-if="!noMoreToLoad" color="black" variant="solid" :loading="isLoading" class="mt-16 col-start-6 col-end-8 mx-auto rounded-full py-3 px-6 ring-1 ring-[#d4e0ff] text-lg leading-[18px] hover:-translate-y-3 duration-300 font-normal bg-white text-black hover:bg-gray-100" @click="fetchEntries">
                {{ $t('common.button.loadMore') }}
            </UButton>
        </div>
    </section>
</template>