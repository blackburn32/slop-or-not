<template>
  <header class="fixed top-0 right-0 z-50">
    <!-- Hamburger Menu Button -->
    <UButton
      color="primary"
      variant="solid"
      class="rounded-none h-[68px] w-[68px] flex items-center justify-center cursor-pointer"
      :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      square
      @click="toggleMenu"
    >
      <UIcon
        :name="isMenuOpen ? 'material-symbols:close' : 'material-symbols:menu'"
        class="z-10 text-inverted"
        size="24"
      />
    </UButton>

    <!-- Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform translate-x-full -translate-y-full"
      enter-to-class="transform translate-x-0 -translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="transform translate-x-0 -translate-y-0"
      leave-to-class="transform translate-x-full -translate-y-full"
    >
      <div
        v-if="isMenuOpen"
        class="fixed top-0 right-0 bg-primary"
        style="clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 80%)"
      >
        <nav class="flex flex-col items-end gap-5 pt-15 pb-15 pr-[29px] pl-10">
          <NuxtLink
            class="text-xl text-inverted transition-colors duration-200 cursor-pointer"
            @click="toggleAbout"
          >
            About
          </NuxtLink>

          <NuxtLink
            to="https://github.com/blackburn32/slop-or-not/blob/main/LICENSE"
            :external="true"
            target="_blank"
            class="text-xl text-inverted transition-colors duration-200 underline"
            @click="closeMenu"
          >
            MIT Licensed
          </NuxtLink>
        </nav>
      </div>
    </Transition>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform translate-x-full -translate-y-full"
      enter-to-class="transform translate-x-0 -translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="transform translate-x-0 -translate-y-0"
      leave-to-class="transform translate-x-full -translate-y-full"
    >
      <AboutContent v-if="isAboutOpen" />
    </Transition>

    <div
        v-if="isMenuOpen && !isAboutOpen"
        class="fixed inset-0 -z-10"
        @click="closeMenu"
      />
</header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const isAboutOpen = ref(false)

const toggleMenu = () => {
  if(isAboutOpen.value) {
    isAboutOpen.value = false
  } else {
    isMenuOpen.value = !isMenuOpen.value
  }
}

const toggleAbout = () => {
  isAboutOpen.value = !isAboutOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  isAboutOpen.value = false
}

// Close menu when route changes
watch(() => useRoute().path, () => {
  closeMenu()
})

// Close menu on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>