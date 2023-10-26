<template>
    <main class="">
        <div class="image-container">
            <div>
                <img
                    src="/src/assets/Momentum4.webp"
                    alt="banner"
                    class="bg-coolgray-300 flex justify-center opacity-85"
                />
            </div>
            <div class="text-overlay">
                <span class="heading">Sennheiser Mometum 4 Wireless</span>
            </div>
            <div class="sub-heading">
                <span class="sub-heading">Immerse Yourself </span>
            </div>
            <div class="button-overlay">
                <button class="learn-more" @click="goToPage('Momentum4')">
                    Learn More <i class="i-mdi:chevron-right text-4xl mb-1"></i>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-2 h-3/4 mt-12 gap-6 p-4">
            <div class="w-full bg-gray-8 p-4 rounded-lg">
                <img
                    src="/src/assets/sony-wh-1000xm4-lifestyle.webp"
                    alt="banner"
                    class="opacity-85 rounded-md"
                />
                <div class="pt-4">
                    <span class="card-heading">Sony WH-1000XM4</span>
                </div>
                <div>
                    <span class="card-sub-heading"
                        >Industy leading noise canceling</span
                    >
                </div>
                <div class="flex justify-center mt-20">
                    <button class="learn-more" @click="goToPage('WH-1000XM4')">
                        Learn More
                        <i class="i-mdi:chevron-right text-4xl mb-1"></i>
                    </button>
                </div>
            </div>
            <div class="w-full bg-gray-8 p-4 rounded-lg">
                <img
                    src="/src/assets/bose.jpg"
                    alt="banner"
                    class="opacity-85 rounded-md"
                />
                <div class="pt-4">
                    <span class="card-heading">Bose QuietComfort Ultra</span>
                </div>
                <div>
                    <span class="card-sub-heading">Comfort, Style, Sound</span>
                </div>
                <div class="flex justify-center mt-20">
                    <button
                        class="learn-more"
                        @click="goToPage('QuietComfort')"
                    >
                        Learn More
                        <i class="i-mdi:chevron-right text-4xl mb-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPage = (page: string) => {
    router.push('/' + page)
}
</script>
