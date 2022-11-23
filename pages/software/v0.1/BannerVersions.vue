<template>
    <div class="banner" v-if="showBanner">
        A newer version of this checklist is available at <ChecklistLink v-bind:href="link">{{link}}</ChecklistLink>, consider upgrading.
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { latest } from '~/renderer/versions';
import { usePageContext } from '~/renderer/usePageContext';
import ChecklistLink from './ChecklistLink.vue';
import '~/renderer/global.css';
import './app.css';

const link = computed(() => [
    window.location.origin,
    ...window.location.pathname.split('/').filter(e => e !== '').slice(0, -1),
    latest.value.software
].join('/'));

const showBanner = ref(false);

onMounted(() => {
    const { urlPathname } = usePageContext();
    const myVersion = urlPathname.split('/').filter(e => e !== '').slice(-1)[0];
    showBanner.value = myVersion !== latest.value.software;
});
</script>

<style scoped>
a {
    text-underline-offset: 0.3em;
    color: #144e70;
}

a:hover {
    color: var(--black);
}

.banner {
    background-color: lightgoldenrodyellow;
    border-radius: 0.5em;
    box-sizing: border-box;
    color: #333;
    margin-bottom: 1em;
    min-height: 3em;
    padding: 1.5em 3em;
    text-align: center;
}
</style>
