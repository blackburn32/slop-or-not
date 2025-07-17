<template>
    <ContentRenderer
        v-if="page"
        :value="page"
        class="prose dark:prose bg-primary h-screen w-screen fixed top-0 right-0 px-[18px] pt-[82px] pb-[24px] text-neutral-950 overflow-y-auto scrollbar-hide"
    />
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('about-content', () => queryCollection('docs').path('/about').first())
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>