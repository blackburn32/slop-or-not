<template>
    <div class="relative flex flex-col h-screen w-screen overflow-hidden">
        <!-- Main Content Area -->
        <div class="flex-1 flex items-center justify-center px-[24px]">
            <Transition name="fade" mode="out-in">
                <QuizIntro v-if="showIntro" key="intro" />
                <QuizImages
                    v-else-if="!quizCompleted"
                    key="images"
                    :show-results="showResults"
                    :selected-image="selectedImage"
                    :question-data="currentQuestion"
                    @image-selected="handleImageSelection"
                />
                <QuizResultsViewer v-else-if="quizCompleted" :results="results" />
            </Transition>
        </div>
        
        <!-- Footer Area -->
        <Transition name="slide-up">
            <div v-if="showFooter" class="max-h-16">
                <QuizFooter
                    :can-proceed="canProceed"
                    :results="results"
                    @next="handleNext"
                />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">

import type { QuizQuestion, QuizResults } from '~/types/QuizResults'
import { generateQuestions } from '~/utils/QuizGenerator'

const showIntro = ref(true)
const showResults = ref(false)
const selectedImage = ref<string | null>(null)
const currentQuestionIndex = ref(0)
const quizCompleted = ref(false)
const results = ref<QuizResults>({ questions: [] })

const questions = ref<QuizQuestion[]>(generateQuestions())

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])
const canProceed = computed(() => selectedImage.value !== null)

const handleImageSelection = (imageId: string) => {
    if (showResults.value) return
    selectedImage.value = imageId
}

const handleNext = () => {
    if (!selectedImage.value || !currentQuestion.value) return
    
    // Show results first
    if (!showResults.value) {
        showResults.value = true
        
        // Determine if answer was correct
        const isCorrect = selectedImage.value === currentQuestion.value.slopImage
        
        questions.value[currentQuestionIndex.value].wasCorrect = isCorrect
        results.value.questions.push(questions.value[currentQuestionIndex.value])
        
        // Auto-advance to next question after showing results
        setTimeout(() => {
            moveToNextQuestion()
        }, 1500)
    }
}

const moveToNextQuestion = () => {
    if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++
        selectedImage.value = null
        showResults.value = false
    } else {
        // Quiz complete - you can add completion logic here
        quizCompleted.value = true
        showFooter.value = false
    }
}

const showFooter = ref(false)
const showFooterAfterTimeout = () => {
    setTimeout(() => {
        showFooter.value = true
    }, 240)
}

onMounted(() => {
    // Wait 2 seconds then fade out intro
    setTimeout(() => {
        showIntro.value = false
        showFooterAfterTimeout()
    }, 2000)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active {
    transition-delay: 0.1s;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.5s ease-in-out 0.1s;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
}
</style>