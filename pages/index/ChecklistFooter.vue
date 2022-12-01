<template>
    <footer>
        <div class="logos">
            <a href="https://esciencecenter.nl" target="_blank">
                <img class="logo" src="/netherlands-escience-center-logo.svg" alt="nlesc logo" />
            </a>
            <a href="https://ardc.edu.au" target="_blank">
                <img class="logo" src="/ardc-logo.svg" alt="ardc logo" />
            </a>
        </div>
        <p>
            These checklists are a collaborative effort by
            Netherlands eScience Center and Australian Research Data Commons.
        </p>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>

img.logo {
    height: 3em;
    margin-left: 2em;
    margin-right: 2em;
}

.logos {
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
}

footer {
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 5em;
    padding-bottom: 6em;
}

footer p {
    width: 75%;
    text-align: center;
    margin: 0 auto;
}
</style>
