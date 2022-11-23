<template>
    <footer>
        <div class="logos">
            <img class="logo" src="/netherlands-escience-center-logo.svg" alt="nlesc logo" />
            <img class="logo" src="/ardc-logo.svg" alt="ardc logo" />
        </div>
        <p>
            {{'This checklist is a collaborative effort by Netherlands ' +
            'eScience Center and Australian Research Data Commons.'}}
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
    padding-bottom: 16em;
}

footer p {
    width: 75%;
    text-align: center;
    margin: 0 auto;
}
</style>
