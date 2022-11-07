<template>
    <div class="question">
        <div class="question-index">
            {{ `${question.index + 1}.` }}
        </div>
        <div class="question-content">
            <h3>
                {{ `${question.text}` }}
            </h3>
            <div class="question-guidance">
                {{ question.guidance }}
            </div>
            <fieldset>
                <Answer v-for="(answer, answerIndex) in question.answers"
                    v-bind:answer="answer"
                    v-bind:isChecked="compliance[question.index] === answerIndex"
                    v-bind:key="answer.id"
                    v-bind:onClick="onClick(answerIndex)"
                />
            </fieldset>
        </div>
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
