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
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
type PropType = {
    answer: {
        id: string,
        score: number,
        text: string
    }
    isChecked: boolean
    onClick: () => void
};
defineProps<PropType>();
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

</style>
