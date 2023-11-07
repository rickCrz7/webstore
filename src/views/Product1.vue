<template>
    <main>
        <div class="product-image">
            <img
                src="/src/assets/H.webp"
                alt="banner"
                class="bg-coolgray-300 flex justify-center opacity-85"
            />
            <button class="button-overlay" @click="goToThankYou">
                Buy Now
            </button>
            <div class="text-overlaySM">
                <span>Sennheiser Momentum 4 Wireless</span>
                <br />
                <span class="">$299.99</span>
                <br />
                <div>
                    <span>Sennheiser's Signature Sound</span>
                    <span
                        >Amazing Adaptive Noise Cancellation and Transparency
                        Mode</span
                    >
                    <span>Premium look & feel</span>
                </div>
            </div>
            <div class="text-overlayMD">
                <span class="">Sennheiser Momentum 4 Wireless</span>
                <div class="mt-4 flex justify-center">
                    <span class="">$299.99</span>
                </div>
                <div class="text-3xl mt-8 p-4 rounded-2xl">
                    <div><span>Sennheiser's Signature Sound</span></div>
                    <br />
                    <div>
                        <span
                            >Amazing Adaptive Noise Cancellation and
                            Transparency Mode</span
                        >
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
