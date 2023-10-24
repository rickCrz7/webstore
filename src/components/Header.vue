<!-- <template>
    <header class="bg-gray shadow-xl border-t-4 border-primary">
        <nav
            class="px-6 mx-auto w-full text-primary tracking-widest lg:flex lg:justify-between"
        >
            <div class="h-12 flex items-center">
                <span class="text-black">PulsePro Audio</span>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts"></script> -->

<template>
    <header class="bg-gray-800 text-white">
        <div class="container mx-auto flex justify-between items-center py-4">
            <div class="flex items-center">
                <h1 class="text-lg font-bold">PulsePro Audio</h1>
            </div>
            <nav class="hidden flex-col text-2xl lg:flex lg:flex-row">
                <ul class="flex items-center">
                    <router-link :to="{ name: 'Momentum4' }"
                        >Momentum 4</router-link
                    >
                    <router-link :to="{ name: 'Momentum4' }"
                        >Sony WH-1000XM4</router-link
                    >
                    <router-link :to="{ name: 'Momentum4' }"
                        >Bose QuietComfort Ultra</router-link
                    >
                    <router-link :to="{ name: 'Momentum4' }"
                        >Checkout</router-link
                    >
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
