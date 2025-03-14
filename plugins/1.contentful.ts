import { createClient } from 'contentful';

export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfig = useRuntimeConfig()
    
    const config = {
        space: runtimeConfig.public.space,
        accessToken: runtimeConfig.public.accessToken,
    };

    nuxtApp.provide('client', createClient(config));
});