<template>
    <div class="banner" v-if="showBannerMessageVersions">
        A newer version of the checklist is available at <a v-bind:href="link">{{link}}</a>, consider upgrading.
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { latest } from '~/renderer/versions'
import { usePageContext } from '~/renderer/usePageContext'
import { showBannerMessageVersions, setShowBannerMessageVersions } from './store'
import '~/renderer/colors.css'

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
    if (myVersion !== latest.value.software) {
        setShowBannerMessageVersions(true)
    }
})
</script>

<style scoped>
a {
    text-underline-offset: 0.3em;
    color: rgb(60, 116, 134);
}

a:visited {
    color: #721d81;
}

a:hover {
    color: rgb(113, 117, 119);
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

