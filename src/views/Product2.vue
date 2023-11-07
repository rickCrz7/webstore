<template>
    <main>
        <div class="product-image">
            <img
                src="/src/assets/HXM4~3.webp"
                alt="banner"
                class="bg-coolgray-300 flex justify-center opacity-85"
            />
            <button class="button-overlay" @click="goToThankYou">
                Buy Now
            </button>
            <div class="text-overlaySM">
                <span>Sony WH-1000XM4</span>
            </div>
            <div class="text-overlayMD">
                <span class="">Sony WH-1000XM4</span>
                <div class="mt-4 flex justify-center">
                    <span class="">$349.99</span>
                </div>
                <div class="text-3xl mt-8 p-4 rounded-2xl">
                    <div><span>Comfortable and lightweight</span></div>
                    <br />
                    <div>
                        <span>Industry Leading Noise Cancellation</span>
                    </div>
                    <br />
                    <span>Premium look & feel</span>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToThankYou = () => {
    router.push({ name: 'ThankYou' })
}
</script>
