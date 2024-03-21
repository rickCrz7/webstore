<template>
    <main style="position: relative">
        <div class="product-image">
            <img
                src="/src/assets/HBOSE~3.webp"
                alt="banner"
                class="bg-coolgray-300 flex justify-center opacity-85"
            />
            <button class="button-overlay" @click="goToCheckout">
                Buy Now
            </button>
            <div class="text-overlaySM">
                <h1 class="text-3xl">Bose QuietComfort Ultra</h1>
                <h1 class="text-2xl">$429.99</h1>
                <br />
                <h2>Elite Comfort and Sound</h2>
                <h2>Bose Signature Sound</h2>
                <h2>Premium Noise Canceling Headphones</h2>
            </div>
            <div class="text-overlayMD">
                <h1 class="text-3xl">Bose QuietComfort Ultra</h1>
                <h1 class="text-2xl">$429.99</h1>
                <div class="text-3xl mt-2 px-24 rounded-2xl">
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

const goToCheckout = () => {
    router.push({ name: 'Checkout', query: { from: 'QCU' } })
}
</script>
