import { l as latest } from "../../chunk-6660a69c.js";
import { _ as _export_sfc, a as _imports_0, b as _imports_1 } from "../../chunk-55859c7c.js";
import { u as openBlock, t as createElementBlock, x as createStaticVNode, d as defineComponent, y as renderSlot, z as normalizeClass, A as unref, v as createBaseVNode, B as createTextVNode, C as createVNode, D as withCtx, F as Fragment, E as pushScopeId, G as popScopeId } from "../../chunk-34b0814a.js";
import { u as usePageContext } from "../../chunk-3ae7c80c.js";
const ChecklistFooter_vue_vue_type_style_index_0_scoped_2ba1b878_lang = "";
const _sfc_main$2 = {};
const _hoisted_1$1 = /* @__PURE__ */ createStaticVNode('<div class="logos" data-v-2ba1b878><a href="https://esciencecenter.nl" target="_blank" data-v-2ba1b878><img class="logo" src="' + _imports_0 + '" alt="nlesc logo" data-v-2ba1b878></a><a href="https://ardc.edu.au" target="_blank" data-v-2ba1b878><img class="logo" src="' + _imports_1 + '" alt="ardc logo" data-v-2ba1b878></a></div><p data-v-2ba1b878> This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons. </p>', 2);
const _hoisted_3 = [
  _hoisted_1$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, _hoisted_3);
}
const ChecklistFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-2ba1b878"]]);
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
const ChecklistLink_vue_vue_type_style_index_0_scoped_058ee869_lang = "";
const ChecklistLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-058ee869"]]);
const app = "";
const _withScopeId = (n) => (pushScopeId("data-v-593d37f8"), n = n(), popScopeId(), n);
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
const index_page_vue_vue_type_style_index_0_scoped_593d37f8_lang = "";
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-593d37f8"]]);
export {
  index_page as default
};
