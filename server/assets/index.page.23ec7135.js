import { defineComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./chunk-458f8a02.js";
import "./chunk-1b82c9dc.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Home</h1><p> Choose the checklist for `);
      _push(ssrRenderComponent(_sfc_main$1, { href: "/ssg/data/v0.2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`data`);
          } else {
            return [
              createTextVNode("data")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` or for `);
      _push(ssrRenderComponent(_sfc_main$1, { href: "/ssg/software/v0.2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`software`);
          } else {
            return [
              createTextVNode("software")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
