<template>
    <div class="outer">
        <div class="inner" >
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    progress: string
}>()
</script>

<style scoped>
.outer {
    background-color: #808080;
    width: 100%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 3px;
}

.inner {
    background-color: var(--ardc-yellow);
    height: 1em;
    width: v-bind('progress');  /* CSS Vue magic here */
}
</style>
