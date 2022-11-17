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
import { computed } from 'vue'
import { onMounted } from 'vue'
import { fairQueryParams } from './store'
import { ref } from 'vue'

const href = ref('');
const app_base_url = ref('')

const htmlBadge = computed(() => `<a href="${href.value}?${fairQueryParams.value}">\n` +
    `  <img src="${app_base_url.value}badge.svg" ` +
    `alt="FAIR checklist badge">\n</a>`)
const markdownBadge = computed(() => `[![FAIRness badge image](${app_base_url.value}badge.svg)]` +
    `(${href.value}?${fairQueryParams.value})`)
const rstBadge = computed(() => `.. image:: ${app_base_url.value}badge.svg\n` +
        `   :target: ${href.value}?${fairQueryParams.value}\n` +
        `   :alt: FAIR checklist badge`)

onMounted(() => {
    href.value = `${window.location.origin}/${window.location.pathname.split('/').filter(e => e !== '').join('/')}`;
    app_base_url.value = `${window.location.origin}${import.meta.env.BASE_URL}`
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
