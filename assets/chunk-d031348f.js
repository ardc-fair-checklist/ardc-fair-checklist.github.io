import { x as ref, y as computed } from "./chunk-546a4201.js";
const state = ref(["v0.1", "v0.2"]);
computed(() => state.value);
const latest = computed(() => state.value.slice(-1)[0]);
const global = "";
export {
  latest as l
};
