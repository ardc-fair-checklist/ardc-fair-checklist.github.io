<template>
    <div class="question">
        <h3>{{ `${question.index + 1}. ${question.text}` }}</h3>
        <fieldset>
            <p class="guidance">{{ question.guidance }}</p>
            <Answer v-for="(answer, answerIndex) in question.answers"
                v-bind:answer="answer"
                v-bind:isChecked="compliance[question.index] === answerIndex"
                v-bind:key="answer.id"
                v-bind:onClick="onClick(answerIndex)"
            />
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import Answer from './Answer.vue'
import { compliance, setCompliance } from './store'

const props = defineProps<{
    question: {
        answers: {
            id: string,
            score: number,
            text: string
        }[],
        guidance: string,
        index: number,
        text: string
    }
}>()

const onClick = (answerIndex: number) => {
    return () => {
        const newCompliance = [
            ...compliance.value.slice(0, props.question.index),
            answerIndex,
            ...compliance.value.slice(props.question.index + 1)
        ]
        setCompliance(newCompliance);
    }
}
</script>

<style scoped>
</style>
