<template>
    <div id="main" class="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <HeaderView />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import HeaderView from './components/Header.vue'
import FooterView from './components/Footer.vue'
</script>
