<template>
    <div class="badges">
        <h2>Get the badge</h2>

        <h3>
            <label for="textarea-markdown-badge">Markdown</label>
        </h3>

        <textarea
            readonly wrap="off"
            id="textarea-markdown-badge"
        >{{ badge.markdown.value }}</textarea>

        <h3>
            <label for="textarea-rst-badge">ReStructured Text</label>
        </h3>

        <textarea
            readonly wrap="off"
            id="textarea-rst-badge"
        >{{ badge.rst.value }}</textarea>


        <h3>
            <label for="textarea-html-badge">HTML</label>
        </h3>

        <textarea
            readonly wrap="off"
            id="textarea-html-badge"
        >{{ badge.html.value }}</textarea>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { fairQueryParams } from './store'
const APP_BASE_URL = `https://ardc-fair-checklist.github.io${import.meta.env.BASE_URL}`
const badge = {
    html: computed(() => `<a href="${APP_BASE_URL}software/v0.2` +
                         `?${fairQueryParams.value}">\n` +
                         `  <img src="${APP_BASE_URL}badge.svg" ` +
                         `alt="FAIR checklist badge">\n</a>`),
    markdown: computed(() => `[![FAIRness badge image](${APP_BASE_URL}badge.svg)]` +
                             `(${APP_BASE_URL}software/v0.2` +
                             `?${fairQueryParams.value})`),
    rst: computed(() => `.. image:: ${APP_BASE_URL}badge.svg\n` +
                        `   :target: ${APP_BASE_URL}software/v0.2?${fairQueryParams.value}\n` +
                        `   :alt: FAIR checklist badge`)
}
</script>


<style scoped>
.badges {
    margin-top: 5em;
    padding-top: 1.5em;
}

textarea {
    background-color: white;
    border-radius: 3px;
    border: 2px solid #ccc;
    box-sizing: border-box;
    color: black;
    height: 6em;
    resize: none;
    width: 100%;
}
</style>
