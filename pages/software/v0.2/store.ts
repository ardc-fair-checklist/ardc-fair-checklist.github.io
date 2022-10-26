import { computed, ref } from 'vue'

export type AnswerType = {
    id: string,
    score: number,
    text: string
}

export type QuestionType = {
    answers: AnswerType[],
    aspect: "F" | "A" | "I" | "R",
    guidance: string,
    id: string,
    principle: string,
    text: string
}

const state = ref({
    compliance: [] as number[],
    questions: [] as (QuestionType & { index: number })[]
})

export const compliance = computed(() => state.value.compliance);
export const questions = computed(() => state.value.questions);
export const setCompliance = (newCompliance: number[]) => state.value.compliance = newCompliance
export const setQuestions = (questions: QuestionType[]) => {
    // add index
    state.value.questions = (questions as QuestionType[]).map((q, i) => ({...q, index: i}))
    state.value.compliance = new Array(questions.length).fill(0);
}

export const nQuestions = computed(() => {
    const deriveNumberOfQuestions = (aspect: "F" | "A" | "I" | "R") => {
        return state.value.questions.filter(question => question.aspect === aspect).length
    }
    return {
        f: deriveNumberOfQuestions("F"),
        a: deriveNumberOfQuestions("A"),
        i: deriveNumberOfQuestions("I"),
        r: deriveNumberOfQuestions("R"),
        total: state.value.questions.length
    }
})

export const nPointsMax = computed(() => {
    const derivePointsMax = (aspect: "F" | "A" | "I" | "R" | "*") => {
        let selectedQuestions = state.value.questions;
        if (aspect !== "*") {
            selectedQuestions = state.value.questions.filter(question => question.aspect === aspect)
        }
        return selectedQuestions.map(question => Math.max(...question.answers.map(answer => answer.score)))
                                .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    }
    return {
        f: derivePointsMax("F"),
        a: derivePointsMax("A"),
        i: derivePointsMax("I"),
        r: derivePointsMax("R"),
        total: derivePointsMax("*")
    }
})

export const slices = computed(() => {
    type Slices = {
        f: [number, number]
        a: [number, number]
        i: [number, number]
        r: [number, number]
    }
    return {
        f: [0, nQuestions.value.f],
        a: [nQuestions.value.f, nQuestions.value.f + nQuestions.value.a],
        i: [nQuestions.value.f + nQuestions.value.a, nQuestions.value.f + nQuestions.value.a + nQuestions.value.i],
        r: [nQuestions.value.f + nQuestions.value.a + nQuestions.value.i, nQuestions.value.total],
    } as Slices
})

export const fairQueryParams = computed(() => {
    return `&f=${state.value.compliance.slice(...slices.value.f).map(elem => elem.toString()).join('')}` +
           `&a=${state.value.compliance.slice(...slices.value.a).map(elem => elem.toString()).join('')}` +
           `&i=${state.value.compliance.slice(...slices.value.i).map(elem => elem.toString()).join('')}` +
           `&r=${state.value.compliance.slice(...slices.value.r).map(elem => elem.toString()).join('')}`
})

export const progress = computed(() => {
    const scoreArrays = state.value.questions.map(q => q.answers.map(a => a.score))
    const scores = state.value.compliance.map((iAnswer, iQuestion) => scoreArrays[iQuestion][iAnswer])
    const summation = (previousValue: number, currentValue: number) => previousValue + currentValue;
    if (nQuestions.value.total === 0) {
        return {
            f: '0%',
            a: '0%',
            i: '0%',
            r: '0%',
            overall: '0%'
        }
    }
    return {
        f: `${100 * scores.slice(...slices.value.f).reduce(summation, 0) / nPointsMax.value.f}%`,
        a: `${100 * scores.slice(...slices.value.a).reduce(summation, 0) / nPointsMax.value.a}%`,
        i: `${100 * scores.slice(...slices.value.i).reduce(summation, 0) / nPointsMax.value.i}%`,
        r: `${100 * scores.slice(...slices.value.r).reduce(summation, 0) / nPointsMax.value.r}%`,
        overall: `${100 * scores.reduce(summation, 0) / nPointsMax.value.total}%`
    }
})
