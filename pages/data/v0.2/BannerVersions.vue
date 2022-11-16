<template>
    <div class="banner" v-if="showBannerMessageVersions">
        A newer version of the checklist is available at <Link v-bind:href="link">{{link}}</Link>, consider upgrading.
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { latest } from '~/renderer/versions'
import { onMounted } from 'vue'
import { setShowBannerMessageVersions } from './store'
import { showBannerMessageVersions } from './store'
import { usePageContext } from '~/renderer/usePageContext'
import Link from './Link.vue'
import '~/renderer/global.css'
import './app.css'

const link = computed(() => {
    return [
        window.location.origin,
        window.location.pathname.split('/').filter(e => e !== '').slice(0, -1).join('/'),
        latest.value.software
    ].join('/')
})

onMounted(() => {
    const { urlPathname } = usePageContext()
    const myVersion = urlPathname.split('/').slice(-1)[0]
    if (myVersion !== latest.value.data) {
        setShowBannerMessageVersions(true)
    }
})
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

