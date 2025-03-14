export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/mdc',
    '@nuxtjs/i18n',
  ],
  runtimeConfig: {
    public: {
      space: process.env.NUXT_CTF_SPACE_ID,
      accessToken: process.env.NUXT_CTF_ACCESS_TOKEN,
    }
  },
  i18n: {
    langDir: "locales", 
    strategy: "prefix_except_default",
    defaultLocale: "en-US",
    locales: [
        { code: "en-US", iso: "en-US", file: "en.json", name: "English", legacy: false },
        { code: "de", iso: "de", file: "de.json", name: "Deutsch", legacy: false },
    ],
  },
  ssr: true,
})