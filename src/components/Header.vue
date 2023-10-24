<template>
    <header class="bg-gray-800 text-white shadow-xl border-t-4 border-primary">
        <div class="container mx-auto flex justify-between items-center py-4">
            <div class="flex items-center p-4">
                <router-link
                    class="text-lg font-bold flex items-center gap-2"
                    :to="{ name: 'Home' }"
                    ><i class="i-mdi:headphones text-xl"></i>PulsePro
                    Audio</router-link
                >
            </div>
            <nav class="hidden flex-col text-2xl lg:flex lg:flex-row">
                <div id="menuDiv" class="hidden lg:flex lg:flex-row">
                    <ul class="flex items-center">
                        <router-link
                            class="menu-item"
                            :to="{ name: 'Momentum4' }"
                            >Momentum 4</router-link
                        >
                        <router-link class="menu-item" :to="{ name: 'XM4' }"
                            >Sony WH-1000XM4</router-link
                        >
                        <router-link
                            class="menu-item"
                            :to="{ name: 'QuietComfort' }"
                            >Bose QuietComfort Ultra</router-link
                        >
                        <router-link class="pl-8" :to="{ name: 'Checkout' }"
                            ><i class="i-mdi:cart-outline text-3xl"></i
                        ></router-link>
                    </ul>
                </div>
                <div class="flex justify-between items-center md:hidden">
                    <div>
                        <button @click="toggleMenu">Menu</button>
                    </div>
                </div>
            </nav>
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
