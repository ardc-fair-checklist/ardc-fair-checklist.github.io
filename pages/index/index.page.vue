<template>
    <h1>Home</h1>
    <p>
      Choose the checklist for <Link v-bind:href="linkToDataChecklist">data</Link> or for <Link v-bind:href="linkToSoftwareChecklist">software</Link>.
    </p>
    <p>1936</p>
</template>

<script lang="ts" setup>
import Link from '~/renderer/Link.vue'
import './style.css'
const linkToDataChecklist = `${import.meta.env.BASE_URL}data/v0.2`
const linkToSoftwareChecklist = `${import.meta.env.BASE_URL}software/v0.2`
</script>
