<template>
    <p>
        Redirecting...
    </p>
</template>

<script setup lang="ts">
import { latest } from '~/renderer/versions'
import { onMounted } from 'vue'
import '~/renderer/global.css'
import './app.css'

onMounted(() => {
    const urlWithDuplicateSlashes = [
        import.meta.env.BASE_URL,
        'software',
        latest.value.software
    ].join('/');
    const url = `/${urlWithDuplicateSlashes.split('/').filter(e => e !== "").join('/')}`;
    window.location.href = url;
})
</script>

<style scoped>
</style>
