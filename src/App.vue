<template>
    <div id="main" class="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <HeaderView class="fixed w-screen z-10" />
        <RouterView class="mt-24" />
        <!-- <FooterView class="absolute bottom-0 w-full" /> -->
    </div>
</template>

<script setup lang="ts">
import HeaderView from './components/Header.vue'
// import FooterView from './components/Footer.vue'
</script>
