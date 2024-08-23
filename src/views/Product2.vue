<template>
    <main style="position: relative">
        <div class="product-image">
            <img
                src="/src/assets/HXM4~3.webp"
                alt="banner"
                class="bg-coolgray-300 flex justify-center opacity-85"
            />
            <button class="button-overlay" @click="goToCheckout">
                Add to Cart
            </button>
            <div class="text-overlaySM">
                <h1 class="text-3xl">Sony WH-1000XM4</h1>
                <h1 class="text-2xl">$3499.99</h1>
                <br />
                <h2>Comfortable and lightweight</h2>
                <h2>Industry Leading Noise Cancellation</h2>
                <h2>Premium look & feel</h2>
            </div>
            <div class="text-overlayMD">
                <h1 class="text-3xl">Sony WH-1000XM4</h1>
                <h1 class="text-2xl">$349.99</h1>
                <div class="text-3xl mt-2 px-24 rounded-2xl">
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

const goToCheckout = () => {
    router.push({ name: 'Checkout', query: { from: 'XM4' } })
}
</script>
