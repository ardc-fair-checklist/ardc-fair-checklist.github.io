<template>
    <div class="answer" v-on:click="onClick">
        <div class="answer-radiobutton">
            <input type="radio" v-bind:id="answer.id" v-bind:value="answer.id" v-bind:checked="isChecked" >
            <label v-bind:for="answer.id"></label>
        </div>
        <div class="answer-points">
            (+{{ answer.score }})
        </div>
        <div class="answer-text">
             {{ answer.text }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    answer: {
        id: string,
        score: number,
        text: string
    }
    isChecked: boolean
    onClick: () => void
}>()
</script>

<style scoped>
</style>
