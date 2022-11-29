<template>
    <div class="question">
        <div class="question-index shared">
            {{ `${question.index + 1}.` }}
        </div>
        <fieldset >
            <legend class="shared">
                {{ `${question.text}` }}
            </legend>
            <div class="question-guidance">
                {{ question.guidance }}
            </div>
            <ChecklistAnswer v-for="(answer, answerIndex) in question.answers"
                v-bind:answer="answer"
                v-bind:isChecked="compliance[question.index] === answerIndex"
                v-bind:key="answer.id"
                v-bind:onClick="onClick(answerIndex)"
                v-on:keydown.space.prevent.stop="onClick(answerIndex)"
            />
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import { compliance } from './store';
import { setCompliance } from './store';
import ChecklistAnswer from './ChecklistAnswer.vue';

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
}>();

const onClick = (answerIndex: number) => () => {
    const newCompliance = [
        ...compliance.value.slice(0, props.question.index),
        answerIndex,
        ...compliance.value.slice(props.question.index + 1)
    ];
    setCompliance(newCompliance);
};
</script>

<style scoped>

fieldset {
    border-style: none;
    flex-grow: 1;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-block-start: 0em;
    padding-inline-start: 0em;
    padding-inline-end: 0em;
    padding-block-end: 0em;
}
legend {
    padding-inline-start: 0px;
    padding-inline-end: 0px;
    margin-bottom: 1em;
}
.question {
    background-color: var(--dark);
    border-radius: 0.25em;
    border: 2px solid #444;
    color: var(--light);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 2em;
    padding-bottom: 1em;
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 1em;
}

@media screen and (max-width: 41.5em) {
    .question {
        padding-left: 1em;
        padding-right: 1em;
    }
}

.question-index {
    min-width: 2em;
}
.question-guidance {
    margin-bottom: 1em;
    text-align: justify;
    display: none;
}
.shared {
    /* shared styles for legend and .question-index */
    font-weight: bold;
    line-height: 1.6em;
    font-size: 1.17em;
}
</style>
