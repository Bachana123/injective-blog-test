import type { ContentfulClientApi, Entry, EntrySkeletonType, EntrySys, OrderFilterPaths } from "contentful";

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
    const entries = shallowRef<Entry<T, "WITHOUT_UNRESOLVABLE_LINKS">[]>([]);
    const skip = ref(0);
    const isLoading = ref(false);
    const noMoreToLoad = ref(false);
    const filters = ref<Record<string, string>>({});
    const { locale, locales } = useI18n();
    
      const { data, refresh } = useAsyncData(async () => {
        if (isLoading.value || noMoreToLoad.value) return
        isLoading.value = true;
        const response = await client.withoutUnresolvableLinks.getEntries<T>({
          content_type,
          order: order,
          limit,
          skip: skip.value,
          locale: locales.value.find(item => item.code === locale.value)?.iso,
          ...filters.value
        });
      
        entries.value = structuredClone([...entries.value, ...response.items]);
        skip.value += limit;
        isLoading.value = false;
        if (response.items.length < limit) {
          noMoreToLoad.value = true;
        }
      }, {
        immediate: true,
        watch: [locale]
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