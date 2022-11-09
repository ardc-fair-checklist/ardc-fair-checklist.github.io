<template>
    <p>
        Redirecting...
    </p>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePageContext } from '~/renderer/usePageContext'
import '~/renderer/global.css'

onMounted(() => {
    const { urlPathname } = usePageContext()
    const url = `${import.meta.env.BASE_URL}${urlPathname}`
    window.location.href = `/${url.split('/').filter(e => e !== "").join('/')}/v0.2`
})
</script>

<style scoped>
</style>
