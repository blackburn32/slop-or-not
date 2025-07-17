<template>
    <div class="flex flex-col items-center justify-center h-full w-full px-[40px]">
        <!-- Title -->
        <h1 class="text-3xl md:text-4xl font-bold font-title text-secondary mb-8 text-center">
            WHICH IS SLOP?
        </h1>
        
        <!-- Images Container -->
        <div class="flex flex-col lg:flex-row gap-6 max-w-4xl w-full">
            <QuizImage
                v-for="image in shuffledImages"
                :key="image"
                :selected="selectedImage === image"
                :text-badge="showResults ? (image === questionData?.realImage ? 'Not Slop' : 'Slop') : undefined"
                :image-url="image"
                @click="selectImage(image)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { QuizQuestion } from '~/types/QuizResults'
interface Props {
    showResults: boolean
    selectedImage: string | null
    questionData: QuizQuestion 
}

const props = defineProps<Props>()

const shuffledImages = computed(() => {
    return [
       props.questionData.realImage,
        props.questionData.slopImage
    ].sort(() => Math.random() - 0.5)
})

const emit = defineEmits<{
    imageSelected: [imageId: string]
}>()

const selectImage = (imageId: string) => {
    emit('imageSelected', imageId)
}
</script>
