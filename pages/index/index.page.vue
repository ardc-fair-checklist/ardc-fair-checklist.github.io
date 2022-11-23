<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h1>FAIR checklists</h1>
    <p>
        Choose the checklist for <ChecklistLink v-bind:href="linkToDataChecklist">data</ChecklistLink> or for <ChecklistLink v-bind:href="linkToSoftwareChecklist">software</ChecklistLink>.
    </p>
    <ChecklistFooter />
</template>

<script lang="ts" setup>
import { latest } from '~/renderer/versions';
import ChecklistFooter from './ChecklistFooter.vue';
import ChecklistLink from './ChecklistLink.vue';
import '~/renderer/global.css';
import './app.css';

const linkToDataChecklist = `${import.meta.env.BASE_URL}data/${latest.value.data}`;
const linkToSoftwareChecklist = `${import.meta.env.BASE_URL}software/${latest.value.software}`;
</script>

<style scoped>
main {
    background-color: var(--black);
    color: var(--white);
}
h1 {
    line-height: 1.2em;
    margin-top: 3em;
}
</style>
