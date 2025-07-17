export interface SlopLevel {
    name: string
    description: string
    score: number
}

const slopLevels: SlopLevel[] = [
    {
        name: 'A Slop King',
        description: 'You\'ve mastered the art of slop! You\'re well prepared for a world of slop. Spread your knowledge and help others learn to spot slop.',
        score: 100
    },
    {
        name: 'Baron von Slop',
        description: 'Your reputation as a slop-slayer is known across the realm. Can you vanquish all slop?',
        score: 90
    },
    {
        name: 'A Slop Whisperer',
        description: 'Like a wise mage, you sense slop in the shadows before others even glimpse it. Ready to push your powers further?',
        score: 80
    },
    {
        name: 'Sir Slops-a-Lot',
        description: 'Congratulations! You\'ve been knighted for your slop-slaying skills. Sharpen your skills and challenge yourself again.',
        score: 60
    },
    {
        name: 'A Bit Slop-y',
        description: 'Nice try, but you\'ve got some learning to do. Take a look at the tricks of the trade, then try again!',
        score: 40
    },
    {
        name: 'Slop Curious',
        description: 'It\'s going to take more than a little curiosity to spot slop. Check out our slop-spotting guide, then try again!',
        score: 20
    },
]   

export function getSlopLevel(score: number) {
    return slopLevels.find(level => score >= level.score)
}