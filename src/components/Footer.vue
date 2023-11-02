<template>
    <footer
        class="bg-[#333333] text-center text-gray-100 px-4 py-12 flex flex-col items-center print:hidden"
    >
        <div class="flex items-center p-4">
            <router-link
                class="text-lg font-bold flex items-center gap-2"
                :to="{ name: 'Home' }"
                ><i class="i-mdi:headphones text-xl"></i>PulsePro
                Audio</router-link
            >
        </div>
    </footer>
</template>
