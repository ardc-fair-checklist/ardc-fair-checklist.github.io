import { u as usePageContext } from "./chunk-89e65c56.js";
import { d as defineComponent, t as createElementBlock, A as renderSlot, B as normalizeClass, C as unref, u as openBlock } from "./chunk-376a9fed.js";
const _imports_0 = "/ssg/netherlands-escience-center-logo.svg";
const _imports_1 = "/ssg/ardc-logo.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Link",
  setup(__props) {
    const pageContext = usePageContext();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass({ active: unref(pageContext).urlPathname === _ctx.$attrs.href })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _imports_0 as _,
  _imports_1 as a,
  _sfc_main as b
};
