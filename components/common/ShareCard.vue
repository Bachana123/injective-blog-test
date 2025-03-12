<script setup lang="ts">
const shareItems = [
    {
        icon: 'i-radix-icons-discord-logo',
        label: 'Discord',
    },
    {
        icon: 'i-radix-icons-twitter-logo',
        label: 'Twitter',
    },
    {
        icon: 'i-line-md-reddit',
        label: 'Reddit',
    },
    {
        icon: 'i-radix-icons-github-logo',
        label: 'Github',
    },
    {
        icon: 'i-mdi-youtube',
        label: 'YouTube',
    },
    {
        icon: 'i-file-icons-telegram',
        label: 'Telegram',
    }
]
</script>

<template>
    <section class="grid grid-cols-12 flex-col bg-[url('/imgs/bg-lets-go@1x.jpg')] bg-cover bg-center bg-no-repeat md:py-16 md:px-12 p-6 rounded-3xl">
        <div class="col-span-2 md:col-span-12 flex flex-row items-center gap-4">
            <svg class="!w-1 !h-1 md:!w-2 md:!h-2 rounded-full bg-white" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5.00049" r="5" fill="currentcolor"></circle>
            </svg>
            <div class="text-inherit">Let's Go</div>
        </div>
        <div class="md:col-start-2 col-start-1 md:col-end-9 col-end-12 flex flex-col md:gap-4 md:pt-32 pt-4">
            <h4 class="md:text-7xl text-3xl">
                The future of finance <span class="md:block">starts here.</span> 
            </h4>
            <p class="md:text-xl text-base">
                Join the journey in building true
                <span class="md:block">financial freedom for all.</span>
            </p>
        </div>
        <div class="md:col-start-2 col-start-1 col-end-12 gap-3 md:mt-32 mt-6">
            <div class="flex flex-wrap gap-4">
                <UButton color="black" variant="solid" class="rounded-full py-2 px-6 ring-1 ring-slate-500 hover:-translate-y-3 duration-300 bg-transparent text-lg active:translate-y-0" :ui="{base: '!bg-transparent !text-white !ring-white'}" v-for="item in shareItems" :key="item.label" :icon="item.icon">
                    <span class="md:block hidden">
                        {{ item.label }}
                    </span>
                </UButton>
            </div>
        </div>
    </section>
</template>