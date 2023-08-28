<template>
    <header>
        <div class="spacer">
        </div>
        <div class="view-source">
            <a href="https://github.com/ardc-fair-checklist/ardc-fair-checklist/issues/new?labels=user-feedback&template=10_feedback.md">
                Report an issue
            </a>
            <a href="https://github.com/ardc-fair-checklist/ardc-fair-checklist/issues/new?labels=user-feedback&template=10_feedback.md">
                <img src="/octocat.svg" alt="octocat logo" />
            </a>
        </div>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1em 0.5em;
}

.view-source {
    min-width: min-content;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    cursor: pointer;
}
.view-source a {
    text-decoration: none;
    color: var(--font);
    padding-right: 0.6em;
    padding-top: 0.2em;
    line-height: 1.6;
    text-underline-offset: 0.7em;
}
.view-source:hover a {
    text-decoration: underline;
    color: black;
}
.view-source:hover img {
    opacity: 1;
    transform: scale(1.05);
}
.view-source img {
    width: 2em;
    height: 2em;
    opacity: 0.8;
}
@media screen and (min-width: 70em) {
    .view-source {
        padding-right: 1em;
    }
}
</style>
