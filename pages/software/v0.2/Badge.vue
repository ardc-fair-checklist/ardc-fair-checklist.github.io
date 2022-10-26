<template>
    <div class="badge">
        <h2>Get the badge</h2>
        <h3>Markdown</h3>
        <textarea readonly wrap="off">{{ badge.markdown.value }}</textarea>
        <h3>ReStructured Text</h3>
        <textarea readonly wrap="off">{{ badge.rst.value }} </textarea>
        <h3>HTML</h3>
        <textarea readonly wrap="off">{{ badge.html.value }}</textarea>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { fairQueryParams } from './store'
import metadata from '../../../package.json'
const [major, minor] = metadata.version.split('.').slice(0, 2)
const APP_BASE_URL = "https://ardc-fair-checklist.github.io/ardc-fair-checklist"
const badge = {
    html: computed(() => `<a href="${APP_BASE_URL}/#/software?` +
                         `v=${major}.${minor}` +
                         `${fairQueryParams.value}">\n` +
                         `  <img src="${APP_BASE_URL}/badge.svg" ` +
                         `alt="FAIR checklist badge">\n</a>`),
    markdown: computed(() => `[![FAIRness badge image](${APP_BASE_URL}/badge.svg)]` +
                             `(${APP_BASE_URL}/#/software?` +
                             `v=${major}.${minor}` +
                             `${fairQueryParams.value})`),
    rst: computed(() => `.. image:: ${APP_BASE_URL}/badge.svg\n` +
                        `   :target: ${APP_BASE_URL}/#software?v=${major}.${minor}${fairQueryParams.value}\n` +
                        `   :alt: FAIR checklist badge`)
}
</script>


<style scoped>
textarea {
    width: 100%;
    height: 6em;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 3px;
    resize: none;
}
</style>
