<template>
    <div class="badges">
        <h2>Get the badge</h2>

        <h3>
            <label for="textarea-markdown-badge">Markdown</label>
        </h3>

        <div class="row">
            <textarea
                id="textarea-markdown-badge"
                readonly
                v-bind:value="markdownBadge"
                wrap="off"
            ></textarea>
            <button role="button" onclick="console.log('not implemented yet')">Copy</button>
        </div>

        <h3>
            <label for="textarea-rst-badge">ReStructured Text</label>
        </h3>

        <div class="row">
            <textarea
                id="textarea-rst-badge"
                readonly
                v-bind:value="rstBadge"
                wrap="off"
            ></textarea>
            <button role="button" onclick="console.log('not implemented yet')">Copy</button>
        </div>

        <h3>
            <label for="textarea-html-badge">HTML</label>
        </h3>

        <div class="row">
            <textarea
                id="textarea-html-badge"
                readonly
                v-bind:value="htmlBadge"
                wrap="off"
            ></textarea>
            <button role="button" onclick="console.log('not implemented yet')">Copy</button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { fairQueryParams } from './store';

const alt = 'FAIR checklist badge';
const href = ref('');
const appBaseUrl = ref('');

const htmlBadge = computed(() => `<a href="${href.value}?${fairQueryParams.value}">\n`
    + `  <img src="${appBaseUrl.value}badge.svg" `
    + `alt="${alt}">\n</a>`);
const markdownBadge = computed(() => `[![${alt}](${appBaseUrl.value}badge.svg)]`
    + `(${href.value}?${fairQueryParams.value})`);
const rstBadge = computed(() => `.. image:: ${appBaseUrl.value}badge.svg\n`
        + `   :target: ${href.value}?${fairQueryParams.value}\n`
        + `   :alt: ${alt}`);

onMounted(() => {
    href.value = `${window.location.origin}/${window.location.pathname.split('/').filter(e => e !== '').join('/')}`;
    appBaseUrl.value = `${window.location.origin}${import.meta.env.BASE_URL}`;
});
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
    font-family: Consolas, Monaco, 'Lucida Console',
                'Liberation Mono', 'DejaVu Sans Mono',
                'Bitstream Vera Sans Mono',
                'Courier New', monospace;
}

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap
}

button {
    align-self: center;
    background-color: #eee;
    border-radius: 0.15em;
    border: 2px solid rgba(0, 0, 0, 0.7);
    color: black;
    flex-grow: 0;
    height: min-content;
    margin-left: 2em;
    margin-right: 1em;
    padding: 0.5em 1.5em;
}

button:hover {
    border: 2px solid white;
    background-color: white;
    cursor: pointer;
}

button:disabled {
    opacity: 0.5;
}


</style>
