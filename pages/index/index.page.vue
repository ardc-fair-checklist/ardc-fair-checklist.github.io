<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <p>
        Redirecting...
    </p>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { latest } from '~/renderer/versions';
import '~/renderer/global.css';
import './app.css';

onMounted(() => {
    const urlWithDuplicateSlashes = [
        import.meta.env.BASE_URL,
        latest.value
    ].join('/');
    const url = `/${urlWithDuplicateSlashes.split('/').filter(e => e !== '').join('/')}`;
    window.location.href = url;
});
</script>

<style scoped>
</style>
