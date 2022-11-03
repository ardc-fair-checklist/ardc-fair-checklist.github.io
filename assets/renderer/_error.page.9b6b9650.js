import { d as defineComponent, t as createElementBlock, u as openBlock, v as createBaseVNode } from "../chunk-376a9fed.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", null, "404 Page Not Found", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "This page could not be found.", -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h1", null, "500 Internal Server Error", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "Something went wrong.", -1);
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "_error.page",
  props: ["is404"],
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.is404 ? (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_4)) : (openBlock(), createElementBlock("div", _hoisted_5, _hoisted_8));
    };
  }
});
export {
  _sfc_main as default
};
