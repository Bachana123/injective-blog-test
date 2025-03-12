export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxtjs/mdc'],
  runtimeConfig: {
    public: {
      space: process.env.NUXT_CTF_SPACE_ID,
      accessToken: process.env.NUXT_CTF_ACCESS_TOKEN,
    }
  }
})