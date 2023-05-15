<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<script lang="ts" setup>
import { usePageContext } from '~/renderer/usePageContext';

const pageContext = usePageContext();
</script>

<style scoped>
</style>
