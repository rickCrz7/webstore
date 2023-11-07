<template>
    <main
        class="container mx-auto max-w-prose p-2 min-h-screen flex items-center justify-center"
    >
        <div class="bg-blueGray py-62 px-26 rounded-3xl">
            <span class="font-bold text-3xl">Thank You For Your Purchase</span>
            <div>
                <span class="text-2xl">Your order will be shipped shortly</span>
            </div>
            <div class="flex justify-center mt-12">
                <button class="learn-more" @click="goToHome">
                    Return to Home
                    <i class="i-mdi:chevron-right text-4xl mb-1"></i>
                </button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
    router.push({ name: 'Home' })
}
</script>
