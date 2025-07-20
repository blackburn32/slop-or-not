<template>
    <div class="flex flex-col items-center justify-center h-screen px-4 mt-24">
        <h1 class="text-4xl font-bold font-title max-w-xl text-secondary text-center">THE SEER'S SCROLLS: SECRETS OF SPOTTING SLOP</h1>
        <p class="text-secondary max-w-xl text-center">Few mortals see through the forgeries. Learn these secrets, and you may ascend to the rank of Truth Seer.</p>
        <UAccordion
            :items="items" 
            class="w-full md:max-w-xl mt-8" 
            :ui="{
                header: 'bg-[#541F4A] text-secondary font-medium px-4 rounded-lg',
                leadingIcon: 'size-8!',
                trailingIcon: 'size-6!',
                label: 'font-semibold',
                item: 'mb-1 border-b-0',
                content: 'bg-[#541F4A] text-secondary font-medium px-4'
            }"
        />
        <UButton to="/quiz" class="mt-4 max-w-xl" size="xl" block>Return to the trial</UButton>
    </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'The hands betray the spell',
    icon: 'i-ph-number-circle-one-fill',
    content: 'Count fingers and study limbs. AI sorcery struggles with anatomy. Look for extra or missing fingers, warped hands, or limbs that do not align.'
  },
  {
    label: 'The glyphs speak nonsense',
    icon: 'i-ph-number-circle-two-fill',
    content: 'Signs and written words often crumble under enchantment. Watch for misspellings, jumbled letters, or fonts that feel wrong.'
  },
  {
    label: 'The mirror lies',
    icon: 'i-ph-number-circle-three-fill',
    content: 'Look for symmetry and geometry that defy reason. Too-perfect patterns, warped perspectives, or impossible structures are signs of forgery.'
  },
  {
    label: 'The eyes hold the truth',
    icon: 'i-ph-number-circle-four-fill',
    content: 'Glassy or hollow pupils, uneven teeth, and unnatural facial details reveal the slop\'s illusion.'
  },
  {
    label: 'The world repeats itself',
    icon: 'i-ph-number-circle-five-fill',
    content: 'Hair, fur, leaves, or stone may repeat unnaturally or swirl in chaotic patterns.'
  },
  {
    label: 'The light cannot be fooled',
    icon: 'i-ph-number-circle-six-fill',
    content: 'Shadows and reflections often betray false magic. Look for flickering, misaligned, or missing light.'
  },
  {
    label: 'The background wispers lies',
    icon: 'i-ph-number-circle-seven-fill',
    content: 'Posters, animals, or people in the distance may blur, distort, or repeat. AI forgeries cannot keep distant details straight.'
  },
  {
    label: 'Perfection is the greatest lie',
    icon: 'i-ph-number-circle-eight-fill',
    content: 'Too-perfect skin, glossy highlights, or over-saturated colors are signs of slop\'s tempting glamour.'
  },
  {
    label: 'The oracle of reverse sight',
    icon: 'i-ph-number-circle-nine-fill',
    content: 'Use tools like Google, TinEye, or Yandex. True images trace back to real photographers. Forgeries appear only in AI forums.'
  },
])


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