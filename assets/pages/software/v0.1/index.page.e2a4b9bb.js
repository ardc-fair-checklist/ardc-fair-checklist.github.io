import { l as latest } from "../../../chunk-18cccac3.js";
import { H as ref, I as computed, u as openBlock, t as createElementBlock, v as createBaseVNode, J as toDisplayString, x as createStaticVNode, d as defineComponent, o as onMounted, A as unref, E as pushScopeId, G as popScopeId, K as createCommentVNode, y as renderSlot, z as normalizeClass, B as createTextVNode, C as createVNode, D as withCtx, F as Fragment, L as renderList, M as createBlock } from "../../../chunk-34b0814a.js";
import { _ as _export_sfc, a as _imports_0, b as _imports_1 } from "../../../chunk-55859c7c.js";
import { u as usePageContext } from "../../../chunk-3ae7c80c.js";
import { _ as _imports_0$1 } from "../../../chunk-797968b4.js";
import { u as useCssVars, w as withKeys, a as withModifiers } from "../../../chunk-98817835.js";
const principles = ["f", "a", "i", "r"];
const state = ref({
  compliance: [],
  questions: []
});
const compliance = computed(() => state.value.compliance);
const questions$1 = computed(() => state.value.questions);
const setCompliance = (newCompliance) => {
  state.value.compliance = newCompliance;
};
const setQuestions = (questionsNoIndex) => {
  state.value.questions = questionsNoIndex.map((q, i) => ({ ...q, index: i }));
  state.value.compliance = new Array(questionsNoIndex.length).fill(0);
};
const nQuestions = computed(() => {
  const deriveNumberOfQuestions = (principle) => state.value.questions.filter((question) => question.principle === principle).length;
  return {
    f: deriveNumberOfQuestions("f"),
    a: deriveNumberOfQuestions("a"),
    i: deriveNumberOfQuestions("i"),
    r: deriveNumberOfQuestions("r"),
    total: state.value.questions.length
  };
});
const nPointsMax = computed(() => {
  const derivePointsMax = (principle) => {
    let selectedQuestions = state.value.questions;
    if (principle !== "*") {
      selectedQuestions = state.value.questions.filter((q) => q.principle === principle);
    }
    return selectedQuestions.map((question) => Math.max(...question.answers.map((answer) => answer.score))).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };
  return {
    f: derivePointsMax("f"),
    a: derivePointsMax("a"),
    i: derivePointsMax("i"),
    r: derivePointsMax("r"),
    total: derivePointsMax("*")
  };
});
const slices = computed(() => {
  return {
    f: [
      0,
      nQuestions.value.f
    ],
    a: [
      nQuestions.value.f,
      nQuestions.value.f + nQuestions.value.a
    ],
    i: [
      nQuestions.value.f + nQuestions.value.a,
      nQuestions.value.f + nQuestions.value.a + nQuestions.value.i
    ],
    r: [
      nQuestions.value.f + nQuestions.value.a + nQuestions.value.i,
      nQuestions.value.total
    ]
  };
});
const nAnswers = computed(() => {
  const numbers = questions$1.value.map((q) => q.answers.length);
  return {
    f: numbers.slice(...slices.value.f),
    a: numbers.slice(...slices.value.a),
    i: numbers.slice(...slices.value.i),
    r: numbers.slice(...slices.value.r)
  };
});
const fairQueryParams = computed(() => [
  `f=${state.value.compliance.slice(...slices.value.f).map((elem) => elem.toString()).join("")}`,
  `a=${state.value.compliance.slice(...slices.value.a).map((elem) => elem.toString()).join("")}`,
  `i=${state.value.compliance.slice(...slices.value.i).map((elem) => elem.toString()).join("")}`,
  `r=${state.value.compliance.slice(...slices.value.r).map((elem) => elem.toString()).join("")}`
].join("&"));
const progress = computed(() => {
  const scoreArrays = state.value.questions.map((q) => q.answers.map((a) => a.score));
  const scores = state.value.compliance.map((iAnswer, iQuestion) => scoreArrays[iQuestion][iAnswer]);
  const summation = (previousValue, currentValue) => previousValue + currentValue;
  if (nQuestions.value.total === 0) {
    return {
      f: "0%",
      a: "0%",
      i: "0%",
      r: "0%"
    };
  }
  return {
    f: `${100 * scores.slice(...slices.value.f).reduce(summation, 0) / nPointsMax.value.f}%`,
    a: `${100 * scores.slice(...slices.value.a).reduce(summation, 0) / nPointsMax.value.a}%`,
    i: `${100 * scores.slice(...slices.value.i).reduce(summation, 0) / nPointsMax.value.i}%`,
    r: `${100 * scores.slice(...slices.value.r).reduce(summation, 0) / nPointsMax.value.r}%`
  };
});
const ChecklistAbout_vue_vue_type_style_index_0_scoped_7c7b328f_lang = "";
const _sfc_main$a = {};
const _hoisted_1$9 = /* @__PURE__ */ createStaticVNode('<div class="logos" data-v-7c7b328f><a href="https://esciencecenter.nl" target="_blank" data-v-7c7b328f><img class="logo" src="' + _imports_0 + '" alt="nlesc logo" data-v-7c7b328f></a><a href="https://ardc.edu.au" target="_blank" data-v-7c7b328f><img class="logo" src="' + _imports_1 + '" alt="ardc logo" data-v-7c7b328f></a></div>', 1);
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, [
    _hoisted_1$9,
    createBaseVNode("p", null, toDisplayString("This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons."), 1)
  ]);
}
const ChecklistAbout = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$1], ["__scopeId", "data-v-7c7b328f"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-01c0000b"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { class: "badges" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h2", null, "Get the badge", -1));
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-markdown-badge" }, "Markdown")
], -1));
const _hoisted_4$3 = { class: "row" };
const _hoisted_5$2 = ["value"];
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-rst-badge" }, "ReStructured Text")
], -1));
const _hoisted_8 = { class: "row" };
const _hoisted_9 = ["value"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-html-badge" }, "HTML")
], -1));
const _hoisted_12 = { class: "row" };
const _hoisted_13 = ["value"];
const _hoisted_14 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistBadgeSnippets",
  setup(__props) {
    const alt = "FAIR checklist badge";
    const href = ref("");
    const appBaseUrl = ref("");
    const htmlBadge = computed(() => `<a href="${href.value}?${fairQueryParams.value}">
  <img src="${appBaseUrl.value}badge.svg" alt="${alt}">
</a>
`);
    const markdownBadge = computed(() => `[![${alt}](${appBaseUrl.value}badge.svg)](${href.value}?${fairQueryParams.value})
`);
    const rstBadge = computed(() => `.. image:: ${appBaseUrl.value}badge.svg
   :target: ${href.value}?${fairQueryParams.value}
   :alt: ${alt}
`);
    const copyButtonClickHandler = (event) => {
      if (event.target === null) {
        return;
      }
      const button = event.target;
      if (button.parentElement === null) {
        return;
      }
      if (button.parentElement.previousElementSibling === null) {
        return;
      }
      const textArea = button.parentElement.previousElementSibling;
      const text = textArea.value;
      navigator.clipboard.writeText(text);
      if (button.nextElementSibling === null) {
        return;
      }
      const feedbackString = button.nextElementSibling;
      feedbackString.classList.remove("transparent");
      feedbackString.classList.add("opaque");
      setTimeout(() => {
        feedbackString.classList.remove("opaque");
        feedbackString.classList.add("transparent");
      }, 1e3);
    };
    onMounted(() => {
      href.value = `${window.location.origin}/${window.location.pathname.split("/").filter((e) => e !== "").join("/")}`;
      appBaseUrl.value = `${window.location.origin}${"/ssg/"}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        _hoisted_2$4,
        _hoisted_3$4,
        createBaseVNode("div", _hoisted_4$3, [
          createBaseVNode("textarea", {
            id: "textarea-markdown-badge",
            readonly: "",
            value: unref(markdownBadge),
            wrap: "off"
          }, null, 8, _hoisted_5$2),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_6$1
          ])
        ]),
        _hoisted_7$1,
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("textarea", {
            id: "textarea-rst-badge",
            readonly: "",
            value: unref(rstBadge),
            wrap: "off"
          }, null, 8, _hoisted_9),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_10
          ])
        ]),
        _hoisted_11,
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("textarea", {
            id: "textarea-html-badge",
            readonly: "",
            value: unref(htmlBadge),
            wrap: "off"
          }, null, 8, _hoisted_13),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_14
          ])
        ])
      ]);
    };
  }
});
const ChecklistBadgeSnippets_vue_vue_type_style_index_0_scoped_01c0000b_lang = "";
const ChecklistBadgeSnippets = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-01c0000b"]]);
const _hoisted_1$7 = {
  key: 0,
  class: "banner"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistBannerParams",
  setup(__props) {
    const bannerMessage = ref("");
    onMounted(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const params = {
        f: searchParams.get("f") || "",
        a: searchParams.get("a") || "",
        i: searchParams.get("i") || "",
        r: searchParams.get("r") || ""
      };
      const chooseBannerMessage = () => {
        const checkPrinciple = (principle) => {
          if (params[principle].length !== nQuestions.value[principle]) {
            return {
              msg: `Query parameter '${principle}' does not have the right number of elements (${nQuestions.value[principle]})`,
              err: true
            };
          }
          if (/^[0-9]+$/.test(params[principle]) === false) {
            return {
              msg: `Query parameter '${principle}' includes unknown character`,
              err: true
            };
          }
          const supplied = params[principle].split("").map((c) => parseInt(c, 10));
          const errors2 = supplied.map((iAnswer, index) => {
            if (iAnswer >= nAnswers.value[principle][index]) {
              return {
                msg: `Query parameter '${principle}' has out-of-range value on position ${index}`,
                err: true
              };
            }
            return { msg: "", err: false };
          }).filter((error) => error.err === true);
          return {
            msg: errors2.map((e) => e.msg).join("; "),
            err: errors2.length > 0
          };
        };
        if (Object.values(params).every((e) => e === "")) {
          return { msg: "", err: false };
        }
        if (Object.values(params).every((e) => e !== ""))
          ;
        else {
          return {
            msg: "When using query parameters, include 'f', 'a', 'i', and 'r'",
            err: true
          };
        }
        const errors = principles.map((p) => checkPrinciple(p)).filter((error) => error.err === true);
        return {
          msg: errors.map((e) => e.msg).join("; "),
          err: errors.length > 0
        };
      };
      const zeros = Array(nQuestions.value.total).fill(0);
      const { msg, err } = chooseBannerMessage();
      bannerMessage.value = msg;
      if (err === true) {
        setCompliance(zeros);
      } else if (Object.values(params).every((e) => e === "")) {
        setCompliance(zeros);
      } else {
        const compl = `${params.f}${params.a}${params.i}${params.r}`;
        setCompliance(compl.split("").map((char) => parseInt(char, 10)));
        window.history.pushState({}, "", [window.location.origin, window.location.pathname].join(""));
      }
    });
    return (_ctx, _cache) => {
      return bannerMessage.value !== "" ? (openBlock(), createElementBlock("div", _hoisted_1$7, toDisplayString(bannerMessage.value), 1)) : createCommentVNode("", true);
    };
  }
});
const ChecklistBannerParams_vue_vue_type_style_index_0_scoped_fbc84e52_lang = "";
const ChecklistBannerParams = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-fbc84e52"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
const ChecklistLink_vue_vue_type_style_index_0_scoped_b21c5856_lang = "";
const ChecklistLink = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-b21c5856"]]);
const app = "";
const _hoisted_1$6 = {
  key: 0,
  class: "banner"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistBannerVersions",
  setup(__props) {
    const link = computed(() => [
      window.location.origin,
      ...window.location.pathname.split("/").filter((e) => e !== "").slice(0, -1),
      latest.value.software
    ].join("/"));
    const showBanner = ref(false);
    onMounted(() => {
      const { urlPathname } = usePageContext();
      const myVersion = urlPathname.split("/").filter((e) => e !== "").slice(-1)[0];
      showBanner.value = myVersion !== latest.value.software;
    });
    return (_ctx, _cache) => {
      return showBanner.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createTextVNode(" A newer version of this checklist is available at "),
        createVNode(ChecklistLink, { href: unref(link) }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(link)), 1)
          ]),
          _: 1
        }, 8, ["href"]),
        createTextVNode(" , consider upgrading. ")
      ])) : createCommentVNode("", true);
    };
  }
});
const ChecklistBannerVersions_vue_vue_type_style_index_0_scoped_d9a7a226_lang = "";
const ChecklistBannerVersions = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d9a7a226"]]);
const ChecklistBannerWIP_vue_vue_type_style_index_0_scoped_518e944f_lang = "";
const _sfc_main$5 = {};
const _hoisted_1$5 = { class: "banner" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, " This website is a work in progress. Note that for the time being, the number of questions in the checklist, their order, and their content is subject to change. As a result, any badges are not guaranteed to reliably restore any previous form state. ");
}
const ChecklistBannerWIP = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-518e944f"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-eb689ef1"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "home" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", {
  width: "128",
  height: "128",
  viewBox: "0 0 128 128",
  version: "1.1",
  id: "svg5",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("defs", { id: "defs2" }),
  /* @__PURE__ */ createBaseVNode("g", { id: "layer1" }, [
    /* @__PURE__ */ createBaseVNode("g", {
      id: "outline",
      transform: "matrix(1.032058,0,0,1.032058,-2.0517123,-5.997519)"
    }, [
      /* @__PURE__ */ createBaseVNode("path", { d: "m 64,13.845703 -57.4746094,41.068359 4.6894534,6.5625\n                            7.96289,-5.689453 V 121.80078 H 49.626953 V 91.585938\n                            H 65.746094 V 121.80078 H 108.82227 V 55.787109 l\n                            7.96289,5.689453 4.68945,-6.5625 C 114.12178,49.660112\n                            106.76885,44.406295 99.416016,39.152344 V 17.582031 H\n                            83.607422 V 27.855469 C 77.071721,23.185398 70.535701,18.515774\n                            64,13.845703 Z m 0,15.738281 34.822266,24.882813 V 111.80078\n                            H 75.746094 V 81.585938 H 39.626953 V 111.80078 H 29.177734\n                            V 54.466797 Z" }),
      /* @__PURE__ */ createBaseVNode("g", null, [
        /* @__PURE__ */ createBaseVNode("path", { d: "m 89.706841,22.049501 h 5.808742 v 12.368457 h -5.808742 z" })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M 63.999995,24.525796 99.938597,50.206302 V 109.3783 H\n                        76.122651 V 78.194827 H 38.845604 V 109.3783 H 28.061403 V\n                        50.206302 Z",
      id: "inside"
    })
  ])
], -1));
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "view-source" }, [
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/ardc-fair-checklist/ssg/issues/new?labels=user-feedback&template=10_feedback.md" }, " Report an issue "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/ardc-fair-checklist/ssg/issues/new?labels=user-feedback&template=10_feedback.md" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0$1,
      alt: "octocat logo"
    })
  ])
], -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistHeader",
  setup(__props) {
    const linkToHome = `${"/ssg/"}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", null, [
        createBaseVNode("div", _hoisted_1$4, [
          createVNode(ChecklistLink, { href: linkToHome }, {
            default: withCtx(() => [
              _hoisted_2$3
            ]),
            _: 1
          })
        ]),
        _hoisted_3$3
      ]);
    };
  }
});
const ChecklistHeader_vue_vue_type_style_index_0_scoped_eb689ef1_lang = "";
const ChecklistHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-eb689ef1"]]);
const _hoisted_1$3 = { class: "footer" };
const _hoisted_2$2 = { class: "inner" };
const _hoisted_3$2 = { class: "another-inner" };
const _hoisted_4$2 = { class: "progressbars" };
const _hoisted_5$1 = /* @__PURE__ */ createStaticVNode('<div class="labels" data-v-dfc13404><div class="row" data-v-dfc13404><div class="label" data-v-dfc13404> Findable </div></div><div class="row" data-v-dfc13404><div class="label" data-v-dfc13404> Accessible </div></div><div class="row" data-v-dfc13404><div class="label" data-v-dfc13404> Interoperable </div></div><div class="row" data-v-dfc13404><div class="label" data-v-dfc13404> Reusable </div></div></div><div class="bars" data-v-dfc13404><div class="row" data-v-dfc13404><div class="bar bar-bg" data-v-dfc13404><div class="bar blue" data-v-dfc13404></div></div></div><div class="row" data-v-dfc13404><div class="bar bar-bg" data-v-dfc13404><div class="bar pink" data-v-dfc13404></div></div></div><div class="row" data-v-dfc13404><div class="bar bar-bg" data-v-dfc13404><div class="bar yellow" data-v-dfc13404></div></div></div><div class="row" data-v-dfc13404><div class="bar bar-bg" data-v-dfc13404><div class="bar purple" data-v-dfc13404></div></div></div></div>', 2);
const _hoisted_7 = ["disabled"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistProgressBars",
  props: {
    disableButton: { type: Boolean },
    onClick: null,
    progress: null
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "01c36570": __props.progress.f,
      "01c3656b": __props.progress.a,
      "01c36573": __props.progress.i,
      "01c3657c": __props.progress.r
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$2, [
              _hoisted_5$1,
              createBaseVNode("button", {
                disabled: __props.disableButton,
                role: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => __props.onClick())
              }, "Get the badge", 8, _hoisted_7)
            ])
          ])
        ])
      ]);
    };
  }
});
const ChecklistProgressBars_vue_vue_type_style_index_0_scoped_dfc13404_lang = "";
const ChecklistProgressBars = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dfc13404"]]);
const _hoisted_1$2 = ["aria-labelledby"];
const _hoisted_2$1 = { class: "answer-radiobutton" };
const _hoisted_3$1 = ["id", "value", "checked"];
const _hoisted_4$1 = { class: "answer-points" };
const _hoisted_5 = { class: "answer-text" };
const _hoisted_6 = ["for", "id"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistAnswer",
  props: {
    answer: null,
    isChecked: { type: Boolean },
    onClick: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "answer",
        "aria-labelledby": `label-${__props.answer.id}`,
        onClick: _cache[0] || (_cache[0] = (...args) => __props.onClick && __props.onClick(...args)),
        onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(
          (...args) => __props.onClick && __props.onClick(...args),
          ["prevent", "stop"]
        ), ["space"])),
        tabindex: "0",
        role: "radio"
      }, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("input", {
            type: "radio",
            id: __props.answer.id,
            value: __props.answer.id,
            checked: __props.isChecked,
            role: "presentation",
            tabindex: "-1",
            "aria-label": ""
          }, null, 8, _hoisted_3$1)
        ]),
        createBaseVNode("div", _hoisted_4$1, " (+" + toDisplayString(__props.answer.score) + ") ", 1),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("label", {
            for: __props.answer.id,
            id: `label-${__props.answer.id}`
          }, toDisplayString(__props.answer.text), 9, _hoisted_6)
        ])
      ], 40, _hoisted_1$2);
    };
  }
});
const ChecklistAnswer_vue_vue_type_style_index_0_scoped_5fd48f14_lang = "";
const ChecklistAnswer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5fd48f14"]]);
const _hoisted_1$1 = { class: "question" };
const _hoisted_2 = { class: "question-index shared" };
const _hoisted_3 = { class: "shared" };
const _hoisted_4 = { class: "question-guidance" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistQuestion",
  props: {
    question: null
  },
  setup(__props) {
    const props = __props;
    const onClick = (answerIndex) => () => {
      const newCompliance = [
        ...compliance.value.slice(0, props.question.index),
        answerIndex,
        ...compliance.value.slice(props.question.index + 1)
      ];
      setCompliance(newCompliance);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(`${__props.question.index + 1}.`), 1),
        createBaseVNode("fieldset", null, [
          createBaseVNode("legend", _hoisted_3, toDisplayString(`${__props.question.text}`), 1),
          createBaseVNode("div", _hoisted_4, toDisplayString(__props.question.guidance), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.question.answers, (answer, answerIndex) => {
            return openBlock(), createBlock(ChecklistAnswer, {
              answer,
              isChecked: unref(compliance)[__props.question.index] === answerIndex,
              key: answer.id,
              onClick: onClick(answerIndex),
              onKeydown: withKeys(withModifiers(($event) => onClick(answerIndex), ["prevent", "stop"]), ["space"])
            }, null, 8, ["answer", "isChecked", "onClick", "onKeydown"]);
          }), 128))
        ])
      ]);
    };
  }
});
const ChecklistQuestion_vue_vue_type_style_index_0_scoped_6bdebae3_lang = "";
const ChecklistQuestion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6bdebae3"]]);
const questions = [
  {
    answers: [
      {
        id: "f:q0:a0",
        score: 0,
        text: "No identifier"
      },
      {
        id: "f:q0:a1",
        score: 1,
        text: "Local identifier or reasonably unique name"
      },
      {
        id: "f:q0:a2",
        score: 2,
        text: "Web address (URL)"
      },
      {
        id: "f:q0:a3",
        score: 3,
        text: "Globally unique and persistent identifier (e.g. DOI, PURL, or Handle)"
      }
    ],
    guidance: "A uniquely named piece of software is not the same as an identifier as it might be linked to a registry or programming language. A Uniform Resource Locator (URL) is a kind of unique identifier, but might not be persistent.",
    id: "f:q0",
    principle: "f",
    text: "Does the software have any identifier assigned?"
  },
  {
    answers: [
      {
        id: "f:q1:a0",
        score: 0,
        text: "No identifier"
      },
      {
        id: "f:q1:a1",
        score: 1,
        text: "There is only one identifier for the entire bundle/package"
      },
      {
        id: "f:q1:a2",
        score: 2,
        text: "Some components have distinct identifiers"
      },
      {
        id: "f:q1:a3",
        score: 3,
        text: "Each component has a PID with reference to a top level PID"
      }
    ],
    guidance: "A persistent identifier (PID) like a DOI, PURL or Handle has the following characteristics: globally unique, citable and persistent. The granularity is decided for each software and its maturity.",
    id: "f:q1",
    principle: "f",
    text: "Are different components of the software assigned distinct identifiers representing different levels of granularity?"
  },
  {
    answers: [
      {
        id: "f:q2:a0",
        score: 0,
        text: "No identifier"
      },
      {
        id: "f:q2:a1",
        score: 1,
        text: "Each major version (version X) is assigned an identifier"
      },
      {
        id: "f:q2:a2",
        score: 2,
        text: "available versions distinctly identified"
      }
    ],
    guidance: "Version is one of the granularity levels identified as most relevant. Depending on the maturity of the software development, not only major versions but minor and point versions are also encouraged. For example: - each minor version (version X.Y) is assigned an identifier - Each point version (version X.Y.Z) is assigned an identifier",
    id: "f:q2",
    principle: "f",
    text: "Are different versions of the same software identified?"
  },
  {
    answers: [
      {
        id: "f:q3:a0",
        score: 0,
        text: "The software is not described with any metadata"
      },
      {
        id: "f:q3:a1",
        score: 1,
        text: "The software has a title and a brief description"
      },
      {
        id: "f:q3:a2",
        score: 2,
        text: "Title, description, and multiple fields are provided, albeit informally (not using a standard format)"
      },
      {
        id: "f:q3:a3",
        score: 3,
        text: "Described comprehensively using a formal machine-readable metadata schema "
      }
    ],
    guidance: "See also Interoperable and Reusable for specific questions about relationships between objects, and about specific kinds of metadata. Rich metadata constitutes a plurality of attributes (for R1): (e.g. name, version, contributors roles, programming language, description of the purpose, science domain, key words, licence, PID, related identifiers) Examples of formal machine-readable metadata schemas are (e.g. Citation.CFF, .zenodo.json, codemeta.jsonld)",
    id: "f:q3",
    principle: "f",
    text: "Is the software described with rich metadata?"
  },
  {
    answers: [
      {
        id: "f:q4:a0",
        score: 0,
        text: "No metadata"
      },
      {
        id: "f:q4:a1",
        score: 1,
        text: "Metadata does not include an identifier for the software"
      },
      {
        id: "f:q4:a2",
        score: 2,
        text: "The identifier is captured in the metadata that describes the software"
      }
    ],
    guidance: "The identifier is recommended to be globally unique and persistent. Those features enable citability. F3 calls for that identifier to be included within the metadata record that the identifier points to",
    id: "f:q4",
    principle: "f",
    text: "Is the identifier included in the metadata that describes the software?"
  },
  {
    answers: [
      {
        id: "f:q5:a0",
        score: 0,
        text: "No metadata"
      },
      {
        id: "f:q5:a1",
        score: 1,
        text: "Metadata is not structured"
      },
      {
        id: "f:q5:a2",
        score: 2,
        text: "Metadata might be searchable and indexable but not FAIR"
      },
      {
        id: "f:q5:a3",
        score: 3,
        text: "Metadata is structured in a FAIR way"
      }
    ],
    guidance: "Many of the questions here relate to making the metadata associated with software FAIR. Principles F2, F3, A2, R1, and R2 all relate to making the metadata associated with software FAIR. Here the focus is on that metadata being captured in a way that enables searching and indexing of that metadata. For instance, a codemeta file may hold the relevant metadata, but if it is not exposed (or integrated) in a way that enables indexing, then it will not fulfil this criterion. Here this consideration is not just that the metadata exists, but also that it is available in a system that enables it to be FAIR.",
    id: "f:q5",
    principle: "f",
    text: "Are metadata FAIR, searchable and indexable?"
  },
  {
    answers: [
      {
        id: "a:q0:a0",
        score: 0,
        text: "No access to software, or there are unspecified access conditions, or software is not retrievable by its identifier"
      },
      {
        id: "a:q0:a1",
        score: 1,
        text: "Software is retrieved via its identifier with defined access conditions, but access is closed or mediated by individual arrangement"
      },
      {
        id: "a:q0:a2",
        score: 2,
        text: "Stated minimal restrictions for software to be downloaded from an online location (e.g personal or group website or FTP server)"
      },
      {
        id: "a:q0:a3",
        score: 3,
        text: "Software can be retrieved from a publicly-accessible code development repository, package or library manager or software registry or archive"
      }
    ],
    guidance: "Software is retrievable from: - a publicly-accessible code development repository (e.g. GitHub, GitLab, BitBucket, etc), - a package or library manager (e.g apt, CRAN, PyPI, etc), - a research software registry  (e.g. see this list), or - an archive.",
    id: "a:q0",
    principle: "a",
    text: "Can the software be retrieved via its identifier using standardised protocols?"
  },
  {
    answers: [
      {
        id: "a:q1:a0",
        score: 0,
        text: "No metadata record exists"
      },
      {
        id: "a:q1:a1",
        score: 1,
        text: "Metadata exists, but is not accessible via an identifier"
      },
      {
        id: "a:q1:a2",
        score: 2,
        text: "Metadata is retrievable via an identifier"
      },
      {
        id: "a:q1:a3",
        score: 3,
        text: "And is machine readable"
      }
    ],
    guidance: "Some formal machine-readable metadata schema exist specifically for software (e.g. Citation.CFF, .zenodo.json, codemeta.jsonld). Mechanisms for retrieving metadata include DataCite DOI metadata, encoding of metadata using schema.org on the page resolved to by the identifier, and retrieval via a package manager",
    id: "a:q1",
    principle: "a",
    text: "Can metadata be retrieved via is identifier using standardised protocols?"
  },
  {
    answers: [
      {
        id: "a:q2:a0",
        score: 0,
        text: "No (e.g. a specialized client using a closed protocol might be required to download the software)"
      },
      {
        id: "a:q2:a1",
        score: 1,
        text: "Protocol is not open or free and allows for authentication and authorisation"
      },
      {
        id: "a:q2:a2",
        score: 2,
        text: "Protocol is open and free but does not allow for authentication and authorisation"
      },
      {
        id: "a:q2:a3",
        score: 3,
        text: "Yes"
      }
    ],
    guidance: "This question refers to the combinations of these two principles [define protocol] [describe authentication and authorisation]",
    id: "a:q2",
    principle: "a",
    text: "Is the protocol open, free and universally implementable? and does it allow for authentication and autorisation procedures?"
  },
  {
    answers: [
      {
        id: "a:q3:a0",
        score: 0,
        text: "Not applicable, no metadata record exists"
      },
      {
        id: "a:q3:a1",
        score: 1,
        text: "No, metadata is lost if software is no longer accessible"
      },
      {
        id: "a:q3:a2",
        score: 2,
        text: "Unsure, whether the institution/registry provides this feature"
      },
      {
        id: "a:q3:a3",
        score: 3,
        text: "Yes"
      }
    ],
    guidance: "Mostly a feature of the metadata registry",
    id: "a:q3",
    principle: "a",
    text: "Are metadata accessible, even when the software is no longer available?"
  },
  {
    answers: [
      {
        id: "i:q0:a0",
        score: 0,
        text: "No Domain-relevant data input/output standard is implemented"
      },
      {
        id: "i:q0:a1",
        score: 1,
        text: "Standard data input/output"
      },
      {
        id: "i:q0:a2",
        score: 2,
        text: "Input/output meets domain-relevant standards"
      }
    ],
    guidance: "A domain-relevant standard is an agreed standard that addresses the needs of a given community (or communities). For interoperation between software it is necessary that more than one software tool supports common standards for interchange. Ideally, related research software are capable of exchanging data or metadata because they all implement common standards. The way in which the data is transmitted might be via reading and writing files, or by passing arguments to an API and receiving responses. Barriers to meeting this guiding principle include a lack of relevant standards, a lack of community consensus on relevant standards, a lack of implementations of agreed upon standards. Work outside the software itself may need to be done before this guiding principle can be addressed.",
    id: "i:q0",
    principle: "i",
    text: "Are the data written/read or exchanged by the software machine readable and in (an) open (file) format(s)?"
  },
  {
    answers: [
      {
        id: "i:q1:a0",
        score: 0,
        text: "There are no links to other metadata or data"
      },
      {
        id: "i:q1:a1",
        score: 1,
        text: "The metadata record includes URI links to related metadata, data and definitions"
      },
      {
        id: "i:q1:a2",
        score: 2,
        text: "Qualified links to other resources are recorded in a machine readable format"
      }
    ],
    guidance: "I2. Software includes qualified references to other objects.",
    id: "i:q1",
    principle: "i",
    text: "How is the relationship to data and metadata described in the metadata and software? (see 17 for relationship to other software)"
  },
  {
    answers: [
      {
        id: "r:q0:a0",
        score: 0,
        text: "Non-accessible form"
      },
      {
        id: "r:q0:a1",
        score: 1,
        text: "Undocumented binary form"
      },
      {
        id: "r:q0:a2",
        score: 2,
        text: "Documented binary form"
      },
      {
        id: "r:q0:a3",
        score: 3,
        text: "Source code available in a repository and documented"
      },
      {
        id: "r:q0:a4",
        score: 4,
        text: "Source code available via a package manager or similar"
      }
    ],
    guidance: "Specifically it considers reusability in the sense of software being understood, built upon or incorporated into other software, but not necessarily executed (again). Sensitivities may restrict access to the software. The form of the software or the way in which it is made available restricts the way in which it can be understood. A service may obscure all internal workings of the software if no alternate form is made available. A compiled binary form is not as easily pulled apart or understood as a source code representation. Binaries in some cases can be built upon or incorporated into other software, but this is especially the case when it the programming interface to that software is fully documented. Source code is the most straightforwardly interrogable form of software, but in some circumstances making this form available may not be possible, practical or desirable.",
    id: "r:q0",
    principle: "r",
    text: "Can software be understood, modified, built upon, or incorporated into other software? Is software made available in a form that makes this easy to do? Links to 7"
  },
  {
    answers: [
      {
        id: "r:q1:a0",
        score: 0,
        text: "No, access to the binary or source code is not available"
      },
      {
        id: "r:q1:a1",
        score: 1,
        text: "Yes, a binary is available and it has an executable environment clearly described in order to execute the software"
      },
      {
        id: "r:q1:a2",
        score: 2,
        text: "Yes, the software is packaged with access to dependencies."
      }
    ],
    guidance: "Specifically it considers reusability in the sense of software be able to be executed, not in the sense of it being understood, built upon or incorporated into other software. Factors affecting the executability of the software include documentation of configuration, dependencies and execution environment (software and hardware). These can be captured in a human readable format (such as text), but are ideally captured in a machine readable format as well. In some cases, it may be possible or desirable to make the software available in a packaged form to facilitate reuse. For example, an emulation environment where the software is run executable. Also a container where the software and its dependencies are all encapsulated. Or it could be that the software is made available via a package management system.",
    id: "r:q1",
    principle: "r",
    text: "Is the software (re)executable? Can it easily be run (again)?"
  },
  {
    answers: [
      {
        id: "r:q2:a0",
        score: 0,
        text: "No license is attached"
      },
      {
        id: "r:q2:a1",
        score: 1,
        text: "Non-standard license is attached"
      },
      {
        id: "r:q2:a2",
        score: 2,
        text: "Machine-readable non-standard license"
      },
      {
        id: "r:q2:a3",
        score: 3,
        text: "Standard license"
      },
      {
        id: "r:q2:a4",
        score: 4,
        text: "Machine readable standard license"
      }
    ],
    guidance: "Standard licenses are those that are widely recognised. Licences are often referred to by name, but machine readable licenses can be specified by reference to a standard vocabulary such as SPDX, or are encoded in a machine readable format such as RDF/XML in the metadata record for the software.  Ideally the license deed is available in the package or linked to by a standard URL. Note that Creative Commons licenses are not recommended for software.",
    id: "r:q2",
    principle: "r",
    text: "Which of the following best describes the license (usage rights) attached to the software?"
  },
  {
    answers: [
      {
        id: "r:q3:a0",
        score: 0,
        text: "No provenance detail given"
      },
      {
        id: "r:q3:a1",
        score: 1,
        text: "Partially recorded as human readable text"
      },
      {
        id: "r:q3:a2",
        score: 2,
        text: "Comprehensively recorded"
      },
      {
        id: "r:q3:a3",
        score: 3,
        text: "Comprehensively recorded in a machine readable format"
      }
    ],
    guidance: 'Provenance answers the "who, what, when, where, why and how" for the development of the software. Providing detailed provenance gives a user the details they need to trust that the software will do what they expect it to do. This extends well beyond whether the software and its development over time has been captured in a version control system. A record of provenance captures information such as the people, their roles in making contributions, the resources committed (for instance grants, people-time, hardware), the time span of a project (or projects) focussed on the work,  the geographic location of the authors or their affiliations with organisations, the project objectives or intent in producing the software and the agreed upon process, systems and/or constraints (including changes in licensing) on the development of the software. All of this detail can help to interpret and understand how and why the software came to be, and to engender trust in reuse. A partial capture of provenance captures only some of this detail. This detail can also be comprehensive but not machine readable. Examples of machine readable provenance standards include PROV, and formats include RDF, JSON, NetCDF, XML, etc.',
    id: "r:q3",
    principle: "r",
    text: "How much provenance information has been captured to facilitate software reuse? (e.g., project objectives, processes, authors, roles, contributions, use of other components)."
  },
  {
    answers: [
      {
        id: "r:q4:a0",
        score: 0,
        text: "Dependencies are expressed by name only, or not at all"
      },
      {
        id: "r:q4:a1",
        score: 1,
        text: "Dependencies named, but no version detail is provided"
      },
      {
        id: "r:q4:a2",
        score: 2,
        text: "The metadata record includes URI links to related software dependencies"
      },
      {
        id: "r:q4:a3",
        score: 3,
        text: "Qualified links to other software are recorded in a machine readable format"
      }
    ],
    guidance: "A qualified reference is a pointer to an external object, with a clear authority for resolving/confirming that identity given in the form of the reference. Ideally this is in a form that includes a resolver within the reference (e.g., in the form of a URI). For software this would mean referring to other software via a resolvable, qualified permanent identifier. In metadata this is only possible when software is able to be referred to in this fashion. Not all software can be referred to in this way. A qualified reference in software is presently technically difficult or impossible in many languages, where conventional practice is to use a (unqualified) reference via a (possibly non-unique) name, possibly in combination with a version number.",
    id: "r:q4",
    principle: "r",
    text: "How is the relationship to software described in the metadata and software? (see 12 for relationship to other components such as data and metadata)"
  },
  {
    answers: [
      {
        id: "r:q5:a0",
        score: 0,
        text: "No standards looked for, or applied"
      },
      {
        id: "r:q5:a1",
        score: 1,
        text: "Looked for standards, but unclear or unavailable"
      },
      {
        id: "r:q5:a2",
        score: 2,
        text: "Uses domain-relevant standards"
      }
    ],
    guidance: "Relevant research domains are determined by the intended user base of the software, not any possible community of use for a piece of software. A piece of software created to address the needs of a community should be aware of any standards put forward by that community or adjacent ones. Similarly, a piece of software (such as analysis code) which is intended to represent work done within a domain-community should also be aware of any standards put forward by that community or adjacent ones. Some examples of domain-relevant community standards are: (e.g. CoC, Credit to authors and collaborations, institutional standards, registry standards, nomenclature described within a community)",
    id: "r:q5",
    principle: "r",
    text: "If they exist, how much have domain-relevant community standards been considered in writing the software? it is linked to 11"
  }
];
const _withScopeId = (n) => (pushScopeId("data-v-ee6a23ff"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Self-assessment checklist for FAIR software", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  setup(__props) {
    setQuestions(questions);
    const disableButton = ref(false);
    const getFullname = (principle) => ({
      f: "Findable",
      a: "Accessible",
      i: "Interoperable",
      r: "Reusable"
    })[principle];
    const scrollToBadgesSection = () => {
      var _a;
      (_a = document.getElementById("badges-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    onMounted(() => {
      window.onscroll = () => {
        const elementInViewport = (rect) => {
          const conditions = [
            rect.top >= 0,
            rect.left >= 0,
            rect.right <= (window.innerWidth || document.documentElement.clientWidth),
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          ];
          return conditions.every((e) => e);
        };
        const elem = document.getElementById("badges-section");
        if (elem !== void 0 && elem !== null) {
          const rect = elem.getBoundingClientRect();
          disableButton.value = elementInViewport(rect);
        }
      };
      window.onbeforeunload = () => {
        const preserve = [
          window.location.origin,
          window.location.pathname,
          `?${fairQueryParams.value}`
        ].join("");
        window.history.pushState({}, "", preserve);
      };
    });
    const linkToDataChecklist = `${"/ssg/"}data/${latest.value.data}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ChecklistHeader),
        createBaseVNode("main", null, [
          _hoisted_1,
          createVNode(ChecklistBannerWIP),
          createVNode(ChecklistBannerVersions),
          createVNode(ChecklistBannerParams),
          unref(nQuestions).total > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("p", null, [
              createTextVNode(" Answer the questions below to assess your software's FAIRness, or switch to the checklist for "),
              createVNode(ChecklistLink, { href: linkToDataChecklist }, {
                default: withCtx(() => [
                  createTextVNode("data")
                ]),
                _: 1
              }),
              createTextVNode(" instead. ")
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(principles), (principle) => {
              return openBlock(), createElementBlock("div", { key: principle }, [
                createBaseVNode("h2", null, toDisplayString(getFullname(principle)), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(questions$1).filter((q) => q.principle === principle), (question) => {
                  return openBlock(), createBlock(ChecklistQuestion, {
                    key: question.id,
                    question
                  }, null, 8, ["question"]);
                }), 128))
              ]);
            }), 128)),
            createVNode(ChecklistProgressBars, {
              progress: unref(progress),
              onClick: scrollToBadgesSection,
              disableButton: disableButton.value
            }, null, 8, ["progress", "disableButton"]),
            createVNode(ChecklistBadgeSnippets, { id: "badges-section" }),
            createVNode(ChecklistAbout)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(" Loading questions data... ")
          ], 64))
        ])
      ]);
    };
  }
});
const index_page_vue_vue_type_style_index_0_scoped_ee6a23ff_lang = "";
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee6a23ff"]]);
export {
  index_page as default
};
