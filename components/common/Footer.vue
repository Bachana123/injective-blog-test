<template>
    <footer class="bg-white">
        <div class="container mx-auto pt-16 px-4">
            <CommonShareCard />
        </div>
        <div class="bg-[#d4e0ff] mt-10 px-4">
            <div class="container mx-auto py-16">
                <div class="flex md:flex-row flex-col gap-6 items-start justify-between">
                    <IconsLogo class="text-black" />
                    <div class="text-[#4d3dff] p-6 bg-[#ebf0ff] md:w-max w-full rounded-lg">
                        <p>Sign up for our newsletter</p>
                        <div class="flex md:flex-row flex-col items-center mt-6">
                            <input type="text" placeholder="Your email" class="bg-transparent placeholder-[#4d3dff] focus:outline-none focus:placeholder-white h-[72px] md:placeholder:text-7xl placeholder:text-xl md:text-7xl text-xl md:w-96" />
                            <UButton class="rounded-full py-2 px-6 ring-1 ring-slate-500 hover:-translate-y-3 duration-300 bg-transparent text-lg active:translate-y-0" :ui="{base: '!bg-[#4d3dff] !text-white !ring-white'}">Join now</UButton>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-6 gap-8 mt-8">
                    <div v-for="i in 6" :key="i">
                        <h3 class="text-bold text-base text-black">Company</h3>
                        <ul class="mt-4 text-gray-700">
                            <li class="duration-500 hover:-translate-y-2 hover:text-black cursor-pointer">About Us</li>
                            <li class="duration-500 hover:-translate-y-2 hover:text-black cursor-pointer">Contact Us</li>
                            <li class="duration-500 hover:-translate-y-2 hover:text-black cursor-pointer">Careers</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>