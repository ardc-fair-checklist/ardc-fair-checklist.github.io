import { _ as _imports_0, a as _imports_1, b as _sfc_main$2 } from "../../chunk-a88020e5.js";
import { _ as _export_sfc } from "../../chunk-de093346.js";
import { u as openBlock, t as createElementBlock, v as createBaseVNode, d as defineComponent, x as createTextVNode, y as createVNode, z as withCtx, F as Fragment } from "../../chunk-64f4e639.js";
import "../../chunk-214b0f2c.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "logos" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "logo",
    src: _imports_0,
    alt: "nlesc logo"
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "logo",
    src: _imports_1,
    alt: "ardc logo"
  })
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, " This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons. ", -1);
const _hoisted_3 = [
  _hoisted_1$1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, _hoisted_3);
}
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const style = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "Home", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  setup(__props) {
    const linkToDataChecklist = `${"/ssg/"}data/v0.2`;
    const linkToSoftwareChecklist = `${"/ssg/"}software/v0.2`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("p", null, [
          createTextVNode(" Choose the checklist for "),
          createVNode(_sfc_main$2, { href: linkToDataChecklist }, {
            default: withCtx(() => [
              createTextVNode("data")
            ]),
            _: 1
          }),
          createTextVNode(" or for "),
          createVNode(_sfc_main$2, { href: linkToSoftwareChecklist }, {
            default: withCtx(() => [
              createTextVNode("software")
            ]),
            _: 1
          }),
          createTextVNode(". ")
        ]),
        createVNode(Footer)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
