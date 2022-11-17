<template>
    <div class="badges">
        <h2>Get the badge</h2>

        <h3>
            <label for="textarea-markdown-badge">Markdown</label>
        </h3>

        <textarea
            readonly wrap="off"
            id="textarea-markdown-badge"
        >{{ markdownBadge }}</textarea>

        <h3>
            <label for="textarea-rst-badge">ReStructured Text</label>
        </h3>

        <textarea
            readonly wrap="off"
            id="textarea-rst-badge"
        >{{ rstBadge }}</textarea>


        <h3>
            <label for="textarea-html-badge">HTML</label>
        </h3>

        <textarea
            readonly wrap="off"
            id="textarea-html-badge"
        >{{ htmlBadge }}</textarea>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { fairQueryParams } from './store'
import { ref } from 'vue'

const htmlBadge = ref('');
const markdownBadge = ref('');
const rstBadge = ref('');

onMounted(() => {
    const href = `${window.location.origin}/${window.location.pathname.split('/').filter(e => e !== '').join('/')}`;
    const APP_BASE_URL = `${window.location.origin}${import.meta.env.BASE_URL}`
    htmlBadge.value = `<a href="${href}?${fairQueryParams.value}">\n` +
            `  <img src="${APP_BASE_URL}badge.svg" ` +
            `alt="FAIR checklist badge">\n</a>`
    markdownBadge.value = `[![FAIRness badge image](${APP_BASE_URL}badge.svg)]` +
            `(${href}?${fairQueryParams.value})`
    rstBadge.value = `.. image:: ${APP_BASE_URL}badge.svg\n` +
            `   :target: ${href}?${fairQueryParams.value}\n` +
            `   :alt: FAIR checklist badge`
})
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
