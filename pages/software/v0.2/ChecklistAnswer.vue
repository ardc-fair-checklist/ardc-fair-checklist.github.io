<template>
    <div
        class="answer"
        v-bind:aria-labelledby="`label-${answer.id}`"
        v-on:click="onClick"
        v-on:keydown.space.prevent.stop="onClick"
        tabindex=0
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
            >
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

type PropType = {
    answer: Answer
    isChecked: boolean
    onClick: () => void
};
defineProps<PropType>();
</script>

<style scoped>
.answer {
    padding: 0.3em 0.2em;
    border: 2px solid var(--dark);
    border-radius: 0.25em;
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
    color: var(--white);
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
    filter: brightness(80%);
}
</style>
