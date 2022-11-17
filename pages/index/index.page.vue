<template>
    <h1>FAIR checklists</h1>
    <p>
        Choose the checklist for <Link v-bind:href="linkToDataChecklist">data</Link> or for <Link v-bind:href="linkToSoftwareChecklist">software</Link>.
    </p>
    <Footer />
</template>

<script lang="ts" setup>
import { latest } from '~/renderer/versions'
import Footer from './Footer.vue'
import Link from './Link.vue'
import '~/renderer/global.css'
import './app.css'

const linkToDataChecklist = `${import.meta.env.BASE_URL}data/${latest.value.data}`
const linkToSoftwareChecklist = `${import.meta.env.BASE_URL}software/${latest.value.software}`
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
