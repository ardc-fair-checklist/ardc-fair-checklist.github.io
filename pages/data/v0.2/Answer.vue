<template>
    <div class="answer">
        <input type="radio" v-bind:id="answer.id" v-bind:value="answer.id" v-bind:checked="isChecked" v-on:click="onClick">
        <label v-bind:for="answer.id">(+{{ answer.score }}) {{ answer.text }}</label>
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
