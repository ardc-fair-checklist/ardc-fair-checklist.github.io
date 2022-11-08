import { computed, ref } from 'vue'

const state = ref({
    software: ['v0.1', 'v0.2'],
    data: ['v0.1', 'v0.2']
})

export const versions = computed(() => state.value);
export const latest = computed(() => {
    return {
        software: state.value.software.slice(-1)[0],
        data: state.value.data.slice(-1)[0]
    }
});
