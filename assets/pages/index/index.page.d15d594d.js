import { l as latest } from "../../chunk-59326f4c.js";
import { _ as _imports_0, a as _imports_1 } from "../../chunk-5b637298.js";
import { _ as _export_sfc } from "../../chunk-de093346.js";
import { u as openBlock, t as createElementBlock, x as pushScopeId, y as popScopeId, v as createBaseVNode, d as defineComponent, z as renderSlot, A as normalizeClass, B as unref, C as createTextVNode, D as createVNode, E as withCtx, F as Fragment } from "../../chunk-4828f769.js";
import { u as usePageContext } from "../../chunk-26e7f91e.js";
const ChecklistFooter_vue_vue_type_style_index_0_scoped_6fb89924_lang = "";
const _sfc_main$2 = {};
const _withScopeId$1 = (n) => (pushScopeId("data-v-6fb89924"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "logos" }, [
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
], -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, " This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons. ", -1));
const _hoisted_3 = [
  _hoisted_1$1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, _hoisted_3);
}
const ChecklistFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-6fb89924"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistLink",
  setup(__props) {
    const pageContext = usePageContext();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass({ active: unref(pageContext).urlPathname === _ctx.$attrs.href })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
const ChecklistLink_vue_vue_type_style_index_0_scoped_3a67c0ee_lang = "";
const ChecklistLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3a67c0ee"]]);
const app = "";
const _withScopeId = (n) => (pushScopeId("data-v-eb77947c"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "FAIR checklists", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  setup(__props) {
    const linkToDataChecklist = `${"/ssg/"}data/${latest.value.data}`;
    const linkToSoftwareChecklist = `${"/ssg/"}software/${latest.value.software}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("p", null, [
          createTextVNode(" Choose the checklist for "),
          createVNode(ChecklistLink, { href: linkToDataChecklist }, {
            default: withCtx(() => [
              createTextVNode("data")
            ]),
            _: 1
          }),
          createTextVNode(" or for "),
          createVNode(ChecklistLink, { href: linkToSoftwareChecklist }, {
            default: withCtx(() => [
              createTextVNode("software")
            ]),
            _: 1
          }),
          createTextVNode(". ")
        ]),
        createVNode(ChecklistFooter)
      ], 64);
    };
  }
});
const index_page_vue_vue_type_style_index_0_scoped_eb77947c_lang = "";
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb77947c"]]);
export {
  index_page as default
};
