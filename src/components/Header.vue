<template>
    <header>
        <nav class="container mx-auto flex justify-between items-center p-4">
            <div class="flex items-center p-4">
                <router-link
                    class="text-lg font-bold flex items-center gap-2"
                    :to="{ name: 'Home' }"
                    ><i class="i-mdi:headphones text-xl"></i>PulsePro
                    Audio</router-link
                >
            </div>
            <div class="hidden flex-col lg:flex lg:flex-row">
                <ul class="flex items-center text-xl">
                    <router-link class="menu-item" :to="{ name: 'Momentum4' }"
                        >Momentum 4</router-link
                    >
                    <router-link class="menu-item" :to="{ name: 'XM4' }"
                        >Sony WH-1000XM4</router-link
                    >
                    <router-link
                        class="menu-item"
                        :to="{ name: 'QuietComfort' }"
                        >QuietComfort Ultra</router-link
                    >
                    <router-link class="pl-8" :to="{ name: 'Checkout' }"
                        ><i class="i-mdi:cart-outline text-3xl"></i
                    ></router-link>
                </ul>
            </div>
            <div class="lg:hidden flex items-center text-white">
                <div>
                    <button @click="toggleMenu">
                        <i class="i-mdi:menu text-3xl"></i>
                    </button>
                </div>
            </div>
        </nav>
        <div id="menuDiv" class="hidden flex-col py-2">
            <ul class="flex flex-col w-screen items-right gap-2 ml-4">
                <router-link class="py-4" :to="{ name: 'Momentum4' }"
                    >Momentum 4</router-link
                >
                <router-link class="py-4" :to="{ name: 'XM4' }"
                    >Sony WH-1000XM4</router-link
                >
                <router-link class="py-4" :to="{ name: 'QuietComfort' }"
                    >QuietComfort Ultra</router-link
                >
                <router-link
                    class="flex gap-4 items-center justify-center"
                    :to="{ name: 'Checkout' }"
                    ><span>Checkout</span
                    ><i class="i-mdi:cart-outline text-xl"></i
                ></router-link>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const toggleMenu = () => {
    const el = document.getElementById('menuDiv')
    if (!el) return
    if (el.classList.contains('hidden')) {
        el.classList.replace('hidden', 'flex')
    } else {
        el.classList.replace('flex', 'hidden')
    }
}
</script>
