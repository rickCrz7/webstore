<template>
    <main>
        <div class="product-image">
            <img
                src="/src/assets/HBOSE~3.webp"
                alt="banner"
                class="bg-coolgray-300 flex justify-center opacity-85"
            />
            <button class="button-overlay" @click="goToThankYou">
                Buy Now
            </button>
            <div class="text-overlaySM">
                <span>Bose QuietComfort Ultra</span>
            </div>
            <div class="text-overlayMD">
                <span class="">Bose QuietComfort Ultra</span>
                <div class="mt-4 flex justify-center">
                    <span class="">$429.99</span>
                </div>
                <div class="text-3xl mt-8 p-4 rounded-2xl">
                    <div><span>Elite Comfort and Sound</span></div>
                    <br />
                    <div>
                        <span>Bose Signature Sound</span>
                    </div>
                    <br />
                    <span>Premium Noise Canceling Headphones</span>
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
