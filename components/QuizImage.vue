<template>
    <Transition name="slide-in" appear>
        <div 
            v-show="isVisible"
            class="image-container relative cursor-pointer transition-all duration-300 w-full"
            :class="{ 'cursor-default': !!textBadge }"
            @click="handleClick"
        >
            <img 
                v-if="imageUrl"
                :src="imageUrl" 
                :alt="'Quiz Image'"
                class="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                :class="{ 'border-2 border-secondary': selected }"
            >
            <USkeleton 
                v-else
                class="w-full h-64 md:h-80 rounded-lg shadow-lg bg-primary hover:scale-105 transition-all duration-300"
                :class="{ 
                    'border-2 border-secondary': selected,
                    'hover:scale-100': !!textBadge,
                 }"
            />
            
            <div 
                v-if="textBadge" 
                class="absolute top-0 left-0 pl-2 pr-6 pt-4 pb-5 text-sm font-semibold text-secondary bg-[#541F4A] trapezoid-badge"
                :class="{ 'border-t-2 border-l-2 border-secondary': selected }"
                >
                {{ textBadge }}
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
interface Props {
    imageUrl?: string
    selected?: boolean
    textBadge?: string
    delay?: number
}

const props = withDefaults(defineProps<Props>(), {
    imageUrl: undefined,
    selected: false,
    textBadge: undefined,
    delay: 0
})

const isVisible = ref(false)

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, props.delay)
})

const emit = defineEmits<{
    click: []
}>()

const handleClick = () => {
    if (!props.textBadge) { // Only allow clicks when no badge is shown (not in results mode)
        emit('click')
    }
}
</script>

<style scoped>

.slide-in-enter-active {
    transition: all 0.6s ease-out;
}

.slide-in-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.slide-in-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.trapezoid-badge {
    clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 80%, 0 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
}
</style> 