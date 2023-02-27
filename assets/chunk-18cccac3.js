import { H as ref, I as computed } from "./chunk-34b0814a.js";
const state = ref({
  data: ["v0.1"],
  software: ["v0.1", "v0.2"]
});
computed(() => state.value);
const latest = computed(() => ({
  data: state.value.data.slice(-1)[0],
  software: state.value.software.slice(-1)[0]
}));
const global = "";
export {
  latest as l
};
