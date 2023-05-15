import { l as latest } from "../../chunk-d031348f.js";
import { d as defineComponent, o as onMounted, t as createElementBlock, u as openBlock } from "../../chunk-546a4201.js";
const app = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  setup(__props) {
    onMounted(() => {
      const urlWithDuplicateSlashes = [
        "/ssg/",
        latest.value
      ].join("/");
      const url = `/${urlWithDuplicateSlashes.split("/").filter((e) => e !== "").join("/")}`;
      window.location.href = url;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("p", null, " Redirecting... ");
    };
  }
});
export {
  _sfc_main as default
};
