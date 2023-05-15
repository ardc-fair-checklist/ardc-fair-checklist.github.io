import { computed } from 'vue';
import { ref } from 'vue';

const state = ref(['v0.1', 'v0.2']);

export const versions = computed(() => state.value);
export const latest = computed(() => state.value.slice(-1)[0]);
