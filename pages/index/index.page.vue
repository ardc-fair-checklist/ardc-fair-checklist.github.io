<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main>
        <div>
            <h1>FAIR checklists</h1>
            <p>
                Choose the checklist for
                <ChecklistLink v-bind:href="linkToDataChecklist">data</ChecklistLink>
                or for <ChecklistLink v-bind:href="linkToSoftwareChecklist">
                software</ChecklistLink>.
            </p>
        </div>
        <ChecklistFooter />
    </main>
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
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
}
h1 {
    line-height: 1.2em;
    margin-top: 3em;
    margin-bottom: 3em;
}
</style>
