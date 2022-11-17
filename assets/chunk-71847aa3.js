import { x as ref, y as computed } from "./chunk-ae64c334.js";
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
const global = "";
export {
  latest as l
};