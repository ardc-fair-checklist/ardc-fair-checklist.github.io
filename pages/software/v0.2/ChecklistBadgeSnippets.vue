<template>
    <div class="badges">
        <h2>Get the badge</h2>

        Use the buttons next to the snippets below to copy your badge
        and paste it into your project's README. The hyperlink in each
        snippet points back to this page, and includes the
        necessary data to check the appropriate answers.

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
            <div class="col">
                <button
                    role="button"
                    v-on:click="copyButtonClickHandler">
                    Copy
                </button>
                <div class="copied-text">
                    copied
                </div>
            </div>
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
            <div class="col">
                <button
                    role="button"
                    v-on:click="copyButtonClickHandler">
                    Copy
                </button>
                <div class="copied-text">
                    copied
                </div>
            </div>
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
            <div class="col">
                <button
                    role="button"
                    v-on:click="copyButtonClickHandler">
                    Copy
                </button>
                <div class="copied-text">
                    copied
                </div>
            </div>
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
    + `alt="${alt}">\n</a>\n`);
const markdownBadge = computed(() => `[![${alt}](${appBaseUrl.value}badge.svg)]`
    + `(${href.value}?${fairQueryParams.value})\n`);
const rstBadge = computed(() => `.. image:: ${appBaseUrl.value}badge.svg\n`
        + `   :target: ${href.value}?${fairQueryParams.value}\n`
        + `   :alt: ${alt}\n`);

const copyButtonClickHandler = (event: Event) => {
    if (event.target === null) {
        return;
    }
    const button = event.target as HTMLInputElement;
    if (button.parentElement === null) {
        return;
    }
    if (button.parentElement.previousElementSibling === null) {
        return;
    }
    const textArea = button.parentElement.previousElementSibling as HTMLInputElement;
    const text = textArea.value;
    navigator.clipboard.writeText(text);
    if (button.nextElementSibling === null) {
        return;
    }
    const feedbackString = button.nextElementSibling as HTMLElement;
    feedbackString.classList.remove('transparent');
    feedbackString.classList.add('opaque');
    setTimeout(() => {
        feedbackString.classList.remove('opaque');
        feedbackString.classList.add('transparent');
    }, 1000);
};

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
    flex-wrap: nowrap;
}

.col {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
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

.copied-text {
    font-size: 80%;
    margin-left: 2em;
    margin-right: 1em;
    opacity: 0;
}

.copied-text.opaque {
    opacity: 1;
    transition: opacity 0s;
}
.copied-text.transparent {
    opacity: 0;
    transition: opacity 2s;
}
</style>
