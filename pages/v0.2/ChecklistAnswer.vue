<template>
    <div
        class="answer"
        v-bind:aria-labelledby="`label-${answer.id}`"
        tabindex=0
        v-on:click="onClick"
        v-on:keydown.enter.stop="onClick"
        role="radio"
    >
        <div class="answer-radiobutton">
            <input
                type="radio"
                v-bind:id="answer.id"
                v-bind:value="answer.id"
                v-bind:checked="isChecked"
                role="presentation"
                tabindex="-1"
                aria-label=""
                autocomplete="off"
            >
            <!-- autocomplete off for correctly resetting form state on refresh in firefox -->
        </div>
        <div class="answer-points">
            (+{{ answer.score }})
        </div>
        <div class="answer-text">
            <label
                v-bind:for="answer.id"
                v-bind:id="`label-${answer.id}`"
            >{{ answer.text }}
                <div
                    class="answer-elaboration"
                    v-html="answer.elaboration"
                    v-if="answer.elaboration !== ''">
                </div>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Answer } from './types';

defineProps<{
    answer: Answer
    isChecked: boolean
    // eslint-disable-next-line no-unused-vars
    onClick:(e: Event) => void
}>();
</script>

<style scoped>
.answer {
    padding: 0.3em 0.2em;
    border: 2px solid #eeeeee;
    border-radius: 0.25em;
    color: var(--font);
    column-gap: 0.5em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

*:focus:not(.focus-visible) {
    /*  https://css-tricks.com/keyboard-only-focus-styles/  */
    outline: none;
}

.answer:hover, .answer:focus, .answer:active, .answer:focus-visible {
    border-color: var(--ardc-purple);
}

.answer-radiobutton {
    width: min-content;
}
.answer-points {
    width: min-content;
    display: none;
}
.answer-text {
    width: 100%;
}

.answer-elaboration {
    margin-left: 1.5em;
    margin-right: 3em;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
    font-size: 0.9em;
    filter: opacity(95%);
}
</style>
