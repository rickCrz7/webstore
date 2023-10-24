<template>
    <div
        id="main"
        class="antialiased text-lg tracking-wide grid grid-rows-[auto,1fr,auto] min-h-screen"
    >
        <HeaderView />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import HeaderView from './components/Header.vue'
</script>
