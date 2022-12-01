import { computed } from 'vue';
import { ref } from 'vue';
import { Principle } from './types';
import { Question } from './types';

export const principles = ['f', 'a', 'i', 'r'] as Principle[];

const state = ref({
    compliance: [] as number[],
    questions: [] as (Question & { index: number })[]
});

export const compliance = computed(() => state.value.compliance);
export const questions = computed(() => state.value.questions);
export const setCompliance = (newCompliance: number[]) => {
    state.value.compliance = newCompliance;
};
export const setQuestions = (questionsNoIndex: Question[]) => {
    // add index
    state.value.questions = (questionsNoIndex as Question[])
        .map((q, i) => ({ ...q, index: i }));
    state.value.compliance = new Array(questionsNoIndex.length).fill(0);
};

export const nQuestions = computed(() => {
    const deriveNumberOfQuestions = (principle: Principle) => (
        state.value.questions.filter(question => question.principle === principle).length
    );
    return {
        f: deriveNumberOfQuestions('f'),
        a: deriveNumberOfQuestions('a'),
        i: deriveNumberOfQuestions('i'),
        r: deriveNumberOfQuestions('r'),
        total: state.value.questions.length
    };
});

const nPointsMax = computed(() => {
    const derivePointsMax = (principle: Principle | '*') => {
        let selectedQuestions = state.value.questions;
        if (principle !== '*') {
            selectedQuestions = state.value.questions.filter(q => q.principle === principle);
        }
        return selectedQuestions.map(q => Math.max(...q.answers.map(a => a.score)))
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    };
    return {
        f: derivePointsMax('f'),
        a: derivePointsMax('a'),
        i: derivePointsMax('i'),
        r: derivePointsMax('r'),
        total: derivePointsMax('*')
    };
});

const slices = computed(() => {
    type Slices = {
        f: [number, number]
        a: [number, number]
        i: [number, number]
        r: [number, number]
    };
    return {
        f: [
            0,
            nQuestions.value.f
        ],
        a: [
            nQuestions.value.f,
            nQuestions.value.f + nQuestions.value.a
        ],
        i: [
            nQuestions.value.f + nQuestions.value.a,
            nQuestions.value.f + nQuestions.value.a + nQuestions.value.i
        ],
        r: [
            nQuestions.value.f + nQuestions.value.a + nQuestions.value.i,
            nQuestions.value.total
        ]
    } as Slices;
});

export const progress = computed(() => {
    const scoreArrays = state.value.questions.map(q => q.answers.map(a => a.score));
    const scores = state.value.compliance
        .map((iAnswer, iQuestion) => scoreArrays[iQuestion][iAnswer]);
    const summation = (previousValue: number, currentValue: number) => previousValue + currentValue;
    if (nQuestions.value.total === 0) {
        return {
            f: '0%',
            a: '0%',
            i: '0%',
            r: '0%'
        };
    }
    return {
        f: `${(100 * scores.slice(...slices.value.f).reduce(summation, 0)) / nPointsMax.value.f}%`,
        a: `${(100 * scores.slice(...slices.value.a).reduce(summation, 0)) / nPointsMax.value.a}%`,
        i: `${(100 * scores.slice(...slices.value.i).reduce(summation, 0)) / nPointsMax.value.i}%`,
        r: `${(100 * scores.slice(...slices.value.r).reduce(summation, 0)) / nPointsMax.value.r}%`
    };
});
