<template>
    <p>
        Redirecting...
    </p>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePageContext } from '~/renderer/usePageContext'
import '~/colors.css'
import './style.css'

onMounted(() => {
    const { urlPathname } = usePageContext()
    window.location.href = `/${urlPathname.split('/').filter(e => e !== "").join('/')}/v0.2`
})
</script>

<style scoped>
</style>
