import type { ContentfulClientApi, Entry, EntryCollection, EntrySkeletonType, EntrySys, FieldsType, OrderFilterPaths } from "contentful";

export const useFetchPagination = <T extends EntrySkeletonType & { contentTypeId: string }>({
    content_type,
    order,
    limit,
} : {
    content_type: string,
    order: (OrderFilterPaths<EntrySys, "sys"> | "sys.contentType.sys.id" | "-sys.contentType.sys.id")[],
    limit: number,
}) => {
    const client = useNuxtApp().$client as ContentfulClientApi<undefined>;
    const entries = shallowRef<T[]>([]);
    const skip = ref(0);
    const isLoading = ref(false);
    const noMoreToLoad = ref(false);
    const filters = ref<Record<string, string>>({});
    
      const { data, refresh } = useAsyncData(async (payload) => {
        if (isLoading.value || noMoreToLoad.value) return
        isLoading.value = true;
        const response = await client.getEntries<T>({
          content_type,
          order: order,
          limit,
          skip: skip.value,
          ...filters.value
        });
      
        entries.value = structuredClone([...entries.value, ...response.items] as T[]);
        skip.value += limit;
        isLoading.value = false;
        if (response.items.length < limit) {
          noMoreToLoad.value = true;
        }
      }, {
        immediate: true
      });

    return {
        entries,
        fetchEntries: refresh,
        filters,
        isLoading,
        noMoreToLoad,
        skip
    }
}