<template>
    <main style="position: relative">
        <div class="product-image">
            <img
                src="/src/assets/H.webp"
                alt="banner"
                class="bg-coolgray-300 flex justify-center opacity-85"
            />
            <div class="text-overlaySM">
                <h1 class="text-3xl">Sennheiser Momentum 4 Wireless</h1>
                <h1 class="text-2xl">$299.99</h1>
                <br />
                <h2>Sennheiser's Signature Sound</h2>
                <h2>
                    Amazing Adaptive Noise Cancellation and Transparency Mode
                </h2>
                <h2>Premium look & feel</h2>
            </div>
            <button class="button-overlay" @click="goToCheckout">
                Buy Now
            </button>
            <div class="text-overlayMD">
                <h1 class="text-3xl">Sennheiser Momentum 4 Wireless</h1>
                <h1 class="text-2xl">$299.99</h1>
                <div class="text-3xl mt-2 px-24 rounded-2xl">
                    <div><span>Sennheiser's Signature Sound</span></div>
                    <br class="hidden lg:flex" />
                    <div>
                        <span>
                            Amazing Adaptive Noise Cancellation and Transparency
                            Mode
                        </span>
                    </div>
                    <br class="hidden lg:show" />
                    <span>Premium look & feel</span>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCheckout = () => {
    router.push({ name: 'Checkout', query: { from: 'M4' } })
}
</script>
