import { computed } from 'vue';
import { ref } from 'vue';

const state = ref({
    data: ['v0.1'],
    software: ['v0.1']
});

export const versions = computed(() => state.value);
export const latest = computed(() => ({
    data: state.value.data.slice(-1)[0],
    software: state.value.software.slice(-1)[0]
}));
