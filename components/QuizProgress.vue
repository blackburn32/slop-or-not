<template>
    <div class="flex items-center px-8 py-4 w-full">
        <div class="relative w-full">
            <!-- Progress Bar SVG -->
            <svg 
                width="278" 
                height="40" 
                viewBox="0 0 278 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-10"
                preserveAspectRatio="none"
            >
                <path 
                    d="M1 20.7651C5.25043 12.4461 16.8559 -2.96449 29.2746 1.94509C44.7979 8.08206 30.9378 34.2663 54.2228 33.4481C77.5077 32.6298 66.974 11.7641 88.0414 14.2189C109.109 16.6737 95.2486 38.7668 113.544 38.3576C131.839 37.9485 124.033 5.89989 146.808 1.94509C165.658 -1.32813 150.689 33.4481 173.974 33.4481C197.259 33.4481 187.834 7.67259 202.803 14.2189C217.772 20.7651 201.694 33.0389 218.881 38.3576C236.067 43.6763 227.215 14.2189 245.51 14.2189C263.805 14.2189 259.57 26.2778 277 20.7651" 
                    stroke="#C461B2" 
                    stroke-width="2"
                    vector-effect="non-scaling-stroke"
                />
            </svg>
            
            <!-- Progress Indicators -->
            <div class="absolute inset-0">
                <div 
                    v-for="(question, index) in answeredQuestions" 
                    :key="index"
                    class="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                    :style="getIndicatorPosition(index)"
                >
                    <div 
                        class="w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300"
                        :class="{
                            'bg-success': question.wasCorrect,
                            'bg-error': !question.wasCorrect
                        }"
                    >
                        <UIcon 
                            :name="question.wasCorrect ? 'i-heroicons-check' : 'i-heroicons-x-mark'" 
                            size="14"
                            :class="{
                                'text-[#586508]': question.wasCorrect,
                                'text-[#FFC7B1]': !question.wasCorrect
                            }"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { QuizResults } from '~/types/QuizResults'

interface Props {
    results: QuizResults
}

const props = defineProps<Props>()

const answeredQuestions = computed(() => {
    return props.results.questions.filter(q => q.wasCorrect !== undefined)
})

// Points along the SVG path where indicators should appear
// These are proportional positions (0-1) along the wavy path
const pathPoints = [
    { x: 0, y: 0.52 },       // First point (0/278, 20.7/40)
    { x: 0.194, y: 0.825 },  // Second point (54/278, 33/40)
    { x: 0.317, y: 0.355 },  // Third point (88/278, 14.2/40)
    { x: 0.407, y: 0.959 },  // Fourth point (113/278, 38.4/40)
    { x: 0.528, y: 0.049 },  // Fifth point (146.8/278, 1.9/40)
    { x: 0.626, y: 0.837 },  // Sixth point (173.974/278, 33.4/40)
    { x: 0.730, y: 0.355 },  // Seventh point (202.8/278, 14.2/40)
    { x: 0.787, y: 0.959 },  // Eighth point (218.9/278, 38.4/40)
    { x: 0.883, y: 0.355 },  // Ninth point (245.5/278, 14.2/40)
    { x: 0.996, y: 0.519 }   // Final point (277/278, 20.8/40)
]

const getIndicatorPosition = (index: number) => {
    if (index >= pathPoints.length) return { left: '100%', top: '50%' }
    
    const point = pathPoints[index]
    const leftPercent = point.x * 100
    const topPercent = point.y * 100
    
    return {
        left: `${leftPercent}%`,
        top: `${topPercent}%`
    }
}
</script>