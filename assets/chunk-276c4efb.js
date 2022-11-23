import { G as ref, H as computed } from "./chunk-4828f769.js";
const state = ref({
  data: ["v0.1"],
  software: ["v0.1"]
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
