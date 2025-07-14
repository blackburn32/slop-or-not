<template>
  <UPageHero 
    title="Slop or Not?" 
    description="Can you tell slop from not? Test your skills detecting AI generated slop." 
    headline="Coming Soon" 
    :links="links" 
  />
</template>

<script setup lang="ts">
const links = ref([
  {
    label: 'Learn more',
    to: '/about',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>