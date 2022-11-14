import { G as ref, H as computed } from "./chunk-9b869ddf.js";
const state = ref({
  software: ["v0.1", "v0.2"],
  data: ["v0.1", "v0.2"]
});
computed(() => state.value);
const latest = computed(() => {
  return {
    software: state.value.software.slice(-1)[0],
    data: state.value.data.slice(-1)[0]
  };
});
export {
  latest as l
};