import { u as usePageContext } from "./chunk-89e65c56.js";
import { d as defineComponent, t as createElementBlock, A as renderSlot, B as normalizeClass, C as unref, u as openBlock } from "./chunk-376a9fed.js";
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
  _sfc_main as _
};
