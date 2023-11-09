import { x as ref, y as computed, u as openBlock, t as createElementBlock, v as createBaseVNode, z as toDisplayString, A as createStaticVNode, d as defineComponent, o as onMounted, I as createTextVNode, B as unref, C as pushScopeId, D as popScopeId, E as createCommentVNode, G as renderSlot, H as normalizeClass, J as createVNode, K as withCtx, F as Fragment, L as renderList, M as createBlock } from "../../chunk-546a4201.js";
import { _ as _export_sfc, a as _imports_0$1, b as _imports_1, c as _imports_0$2 } from "../../chunk-048deeaf.js";
import { l as latest } from "../../chunk-d031348f.js";
import { u as usePageContext, w as withKeys, a as useCssVars, b as withModifiers } from "../../chunk-edbeda5a.js";
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
  const addIndex = (q, i) => ({ ...q, index: i });
  const normalizeScorePerQuestion = (q) => {
    const maxScore = Math.max(...q.answers.map((a) => a.score));
    const normalizedAnswers = q.answers.map((a) => ({ ...a, score: a.score / maxScore }));
    return { ...q, answers: normalizedAnswers };
  };
  state.value.questions = questionsNoIndex.map(normalizeScorePerQuestion).map(addIndex);
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
const ChecklistAbout_vue_vue_type_style_index_0_scoped_11cecc46_lang = "";
const _sfc_main$a = {};
const _hoisted_1$9 = /* @__PURE__ */ createStaticVNode('<div class="logos" data-v-11cecc46><a href="https://esciencecenter.nl" target="_blank" data-v-11cecc46><img class="logo" src="' + _imports_0$1 + '" alt="nlesc logo" data-v-11cecc46></a><a href="https://ardc.edu.au" target="_blank" data-v-11cecc46><img class="logo" src="' + _imports_1 + '" alt="ardc logo" data-v-11cecc46></a></div>', 1);
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, [
    _hoisted_1$9,
    createBaseVNode("p", null, toDisplayString("This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons."), 1)
  ]);
}
const ChecklistAbout = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$1], ["__scopeId", "data-v-11cecc46"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-7804cc5a"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { class: "badges" };
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h2", null, "Get the badge", -1));
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-markdown-badge" }, "Markdown")
], -1));
const _hoisted_4$3 = { class: "row" };
const _hoisted_5$3 = ["value"];
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
const _hoisted_7$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-rst-badge" }, "ReStructured Text")
], -1));
const _hoisted_8$1 = { class: "row" };
const _hoisted_9$1 = ["value"];
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-html-badge" }, "HTML")
], -1));
const _hoisted_12 = { class: "row" };
const _hoisted_13$1 = ["value"];
const _hoisted_14$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
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
      appBaseUrl.value = `${window.location.origin}${"/"}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        _hoisted_2$5,
        createTextVNode(" Use the buttons next to the snippets below to copy your badge and paste it into your project's README. The hyperlink in each snippet points back to this page, and includes the necessary data to check the appropriate answers. "),
        _hoisted_3$5,
        createBaseVNode("div", _hoisted_4$3, [
          createBaseVNode("textarea", {
            id: "textarea-markdown-badge",
            readonly: "",
            value: unref(markdownBadge),
            wrap: "off"
          }, null, 8, _hoisted_5$3),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_6$2
          ])
        ]),
        _hoisted_7$3,
        createBaseVNode("div", _hoisted_8$1, [
          createBaseVNode("textarea", {
            id: "textarea-rst-badge",
            readonly: "",
            value: unref(rstBadge),
            wrap: "off"
          }, null, 8, _hoisted_9$1),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_10$1
          ])
        ]),
        _hoisted_11,
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("textarea", {
            id: "textarea-html-badge",
            readonly: "",
            value: unref(htmlBadge),
            wrap: "off"
          }, null, 8, _hoisted_13$1),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_14$1
          ])
        ])
      ]);
    };
  }
});
const ChecklistBadgeSnippets_vue_vue_type_style_index_0_scoped_7804cc5a_lang = "";
const ChecklistBadgeSnippets = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7804cc5a"]]);
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
const ChecklistBannerParams_vue_vue_type_style_index_0_scoped_38867b75_lang = "";
const ChecklistBannerParams = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-38867b75"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistLink",
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
      latest.value
    ].join("/"));
    const showBanner = ref(false);
    onMounted(() => {
      const { urlPathname } = usePageContext();
      const myVersion = urlPathname.split("/").filter((e) => e !== "").slice(-1)[0];
      showBanner.value = myVersion !== latest.value;
    });
    return (_ctx, _cache) => {
      return showBanner.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createTextVNode(" A newer version of this checklist is available at "),
        createVNode(_sfc_main$7, { href: unref(link) }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(link)), 1)
          ]),
          _: 1
        }, 8, ["href"]),
        createTextVNode(", consider upgrading. ")
      ])) : createCommentVNode("", true);
    };
  }
});
const ChecklistBannerVersions_vue_vue_type_style_index_0_scoped_699196ea_lang = "";
const ChecklistBannerVersions = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-699196ea"]]);
const ChecklistHeader_vue_vue_type_style_index_0_scoped_bf8029ec_lang = "";
const _sfc_main$5 = {};
const _hoisted_1$5 = /* @__PURE__ */ createStaticVNode('<div class="spacer" data-v-bf8029ec></div><div class="view-source" data-v-bf8029ec><a href="https://github.com/ardc-fair-checklist/ardc-fair-checklist.github.io/issues/new?labels=user-feedback&amp;template=10_feedback.md" data-v-bf8029ec> Report an issue </a><a href="https://github.com/ardc-fair-checklist/ardc-fair-checklist.github.io/issues/new?labels=user-feedback&amp;template=10_feedback.md" data-v-bf8029ec><img src="' + _imports_0$2 + '" alt="octocat logo" data-v-bf8029ec></a></div>', 2);
const _hoisted_3$4 = [
  _hoisted_1$5
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("header", null, _hoisted_3$4);
}
const ChecklistHeader = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-bf8029ec"]]);
const _imports_0 = "/venn-the-software.svg";
const _withScopeId$1 = (n) => (pushScopeId("data-v-6b02313b"), n = n(), popScopeId(), n);
const _hoisted_1$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", null, "How to use this page", -1));
const _hoisted_2$4 = ["tabindex", "onKeydown"];
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("i", null, "Promote transparency"),
    /* @__PURE__ */ createTextVNode(": the badge links back to this page, and contains the required data to check the appropriate answers. This way, users of your software can easily get an idea of the FAIRness state of the project. ")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("i", null, "Discover best practices"),
    /* @__PURE__ */ createTextVNode(": as you go through the questions, you may learn about practices to improve FAIRness that you were not aware of previously. ")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("i", null, "Become an ambassador of FAIR"),
    /* @__PURE__ */ createTextVNode(": By putting the badge in your README, your project will help promote the previous 2 aspects. ")
  ])
], -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://ardc.edu.au/resource/fair-data-self-assessment-tool/",
  target: "_blank"
}, "ARDC's FAIR data self-assessment tool", -1));
const _hoisted_5$2 = ["tabindex"];
const _hoisted_6$1 = ["tabindex", "onKeydown"];
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", null, "Definitions", -1));
const _hoisted_8 = { key: 0 };
const _hoisted_9 = ["tabindex", "onKeydown"];
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<p data-v-6b02313b> For many projects, the specific copy will be some kind of nested directory tree structure with files and folders, simply what would result from a <code data-v-6b02313b>git clone</code> or <code data-v-6b02313b>svn checkout</code>, or perhaps from uncompressing a <code data-v-6b02313b>zip</code> or a <code data-v-6b02313b>tar</code> file. Some files in the tree will be source files that define the software&#39;s functional behavior, these are collectively referred to as the software source files. The other files are metadata files that come bundled with the software: </p><img src="' + _imports_0 + '" alt="venn diagram showing the definition of software" data-v-6b02313b><p data-v-6b02313b> The metadata includes files that are meant to be read by humans, such as READMEs, documentation files, source files for documentation, image files, etc. The metadata may additionally include files that are meant to be read by machines, such as package manager files (e.g. <code data-v-6b02313b>package.json</code>, <code data-v-6b02313b>pyproject.toml</code>, <code data-v-6b02313b>DESCRIPTION</code>, <code data-v-6b02313b>CMakeLists.txt</code>, <code data-v-6b02313b>setup.cfg</code>, etc.), citation files (e.g. <code data-v-6b02313b>CITATION.cff</code>, <code data-v-6b02313b>codemeta.json</code>), publishing files (<code data-v-6b02313b>.zenodo.json</code>), etc. </p>', 3);
const _hoisted_13 = ["tabindex"];
const _hoisted_14 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, " Let's get started! ", -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "vspace" }, null, -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistPreamble",
  setup(__props) {
    const showCollapsedDefinitions = ref(true);
    const showExpandedDefinitions = ref(false);
    const expandDefinitions = () => {
      showCollapsedDefinitions.value = false;
      showExpandedDefinitions.value = true;
    };
    const collapseDefinitions = () => {
      showCollapsedDefinitions.value = true;
      showExpandedDefinitions.value = false;
    };
    const showCollapsedHowtouse = ref(true);
    const showExpandedHowtouse = ref(false);
    const expandHowtouse = () => {
      showCollapsedHowtouse.value = false;
      showExpandedHowtouse.value = true;
    };
    const collapseHowtouse = () => {
      showCollapsedHowtouse.value = true;
      showExpandedHowtouse.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1$4,
        createBaseVNode("p", null, [
          createTextVNode(" If you are a research software author, please answer the questions below to assess your software's FAIRness. As you go through them, the progress bars at the bottom of the screen will update according to your answers. When you're done with the questions, copy the badge at the bottom of the page and put it in your software's README. "),
          showCollapsedHowtouse.value ? (openBlock(), createElementBlock("span", {
            key: 0,
            tabindex: showCollapsedHowtouse.value ? 0 : -1,
            onClick: expandHowtouse,
            onKeydown: withKeys(expandHowtouse, ["enter"]),
            class: "anchor-like"
          }, " Read more. ", 40, _hoisted_2$4)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["expands", { expanded: showExpandedHowtouse.value, collapsed: showCollapsedHowtouse.value }])
        }, [
          createTextVNode(" This way, you "),
          _hoisted_3$3,
          createBaseVNode("p", null, [
            createTextVNode(" The questions are inspired by "),
            _hoisted_4$2,
            createTextVNode(" and by the outcomes of the FAIR4RS Working Group (see "),
            createBaseVNode("a", {
              href: "https://doi.org/10.15497/RDA00068",
              target: "_blank",
              tabindex: showCollapsedHowtouse.value ? -1 : 0
            }, "doi:10.15497/RDA00068", 8, _hoisted_5$2),
            createTextVNode("). We gratefully acknowledge their contribution. "),
            createBaseVNode("span", {
              tabindex: showCollapsedHowtouse.value ? -1 : 0,
              onClick: collapseHowtouse,
              onKeydown: withKeys(collapseHowtouse, ["enter"]),
              class: "anchor-like"
            }, " Collapse this section. ", 40, _hoisted_6$1)
          ])
        ], 2),
        _hoisted_7$2,
        createBaseVNode("p", null, [
          createTextVNode(' For the questions that follow, it is helpful to specify what we mean by "the software". Our recommendation is to interpret that phrase as "a specific copy of a specific version of your software-as-a-concept". '),
          showCollapsedDefinitions.value ? (openBlock(), createElementBlock("span", _hoisted_8, [
            createTextVNode(" For many projects,... "),
            createBaseVNode("span", {
              tabindex: showCollapsedDefinitions.value ? 0 : -1,
              onClick: expandDefinitions,
              onKeydown: withKeys(expandDefinitions, ["enter"]),
              class: "anchor-like"
            }, " Read more. ", 40, _hoisted_9)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["expands", { expanded: showExpandedDefinitions.value, collapsed: showCollapsedDefinitions.value }])
        }, [
          _hoisted_10,
          createBaseVNode("p", null, [
            createTextVNode(" Any additional data that may be gotten from APIs (for example the GitHub, GitLab, Zenodo, PyPI, CRAN, or NPM API) should not be considered metadata for the purposes of this checklist. "),
            createBaseVNode("span", {
              tabindex: showCollapsedDefinitions.value ? -1 : 0,
              onClick: collapseDefinitions,
              onKeydown: collapseDefinitions,
              class: "anchor-like"
            }, " Collapse this section. ", 40, _hoisted_13)
          ])
        ], 2),
        _hoisted_14,
        _hoisted_15
      ]);
    };
  }
});
const ChecklistPreamble_vue_vue_type_style_index_0_scoped_6b02313b_lang = "";
const ChecklistPreamble = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6b02313b"]]);
const _hoisted_1$3 = { class: "footer" };
const _hoisted_2$3 = { class: "inner" };
const _hoisted_3$2 = { class: "another-inner" };
const _hoisted_4$1 = { class: "progressbars" };
const _hoisted_5$1 = /* @__PURE__ */ createStaticVNode('<div class="labels" data-v-4f54fd78><div class="row" data-v-4f54fd78><div class="label" data-v-4f54fd78> Findable </div></div><div class="row" data-v-4f54fd78><div class="label" data-v-4f54fd78> Accessible </div></div><div class="row" data-v-4f54fd78><div class="label" data-v-4f54fd78> Interoperable </div></div><div class="row" data-v-4f54fd78><div class="label" data-v-4f54fd78> Reusable </div></div></div><div class="bars" data-v-4f54fd78><div class="row" data-v-4f54fd78><div class="bar bar-bg" data-v-4f54fd78><div class="bar blue" data-v-4f54fd78></div></div></div><div class="row" data-v-4f54fd78><div class="bar bar-bg" data-v-4f54fd78><div class="bar pink" data-v-4f54fd78></div></div></div><div class="row" data-v-4f54fd78><div class="bar bar-bg" data-v-4f54fd78><div class="bar yellow" data-v-4f54fd78></div></div></div><div class="row" data-v-4f54fd78><div class="bar bar-bg" data-v-4f54fd78><div class="bar purple" data-v-4f54fd78></div></div></div></div>', 2);
const _hoisted_7$1 = ["disabled"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistProgressBars",
  props: {
    disableButton: { type: Boolean },
    onClick: null,
    progress: null
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "2617d86a": __props.progress.f,
      "2617d874": __props.progress.a,
      "2617d864": __props.progress.i,
      "2617d852": __props.progress.r
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$1, [
              _hoisted_5$1,
              createBaseVNode("button", {
                disabled: __props.disableButton,
                role: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => __props.onClick())
              }, "Get the badge", 8, _hoisted_7$1)
            ])
          ])
        ])
      ]);
    };
  }
});
const ChecklistProgressBars_vue_vue_type_style_index_0_scoped_4f54fd78_lang = "";
const ChecklistProgressBars = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4f54fd78"]]);
const _hoisted_1$2 = ["aria-labelledby"];
const _hoisted_2$2 = { class: "answer-radiobutton" };
const _hoisted_3$1 = ["id", "value", "checked"];
const _hoisted_4 = { class: "answer-points" };
const _hoisted_5 = { class: "answer-text" };
const _hoisted_6 = ["for", "id"];
const _hoisted_7 = ["innerHTML"];
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
        tabindex: "0",
        onClick: _cache[0] || (_cache[0] = (...args) => __props.onClick && __props.onClick(...args)),
        onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(
          (...args) => __props.onClick && __props.onClick(...args),
          ["stop"]
        ), ["enter"])),
        role: "radio"
      }, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("input", {
            type: "radio",
            id: __props.answer.id,
            value: __props.answer.id,
            checked: __props.isChecked,
            role: "presentation",
            tabindex: "-1",
            "aria-label": "",
            autocomplete: "off"
          }, null, 8, _hoisted_3$1)
        ]),
        createBaseVNode("div", _hoisted_4, " (+" + toDisplayString(__props.answer.score) + ") ", 1),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("label", {
            for: __props.answer.id,
            id: `label-${__props.answer.id}`
          }, [
            createTextVNode(toDisplayString(__props.answer.text) + " ", 1),
            __props.answer.elaboration !== "" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "answer-elaboration",
              innerHTML: __props.answer.elaboration
            }, null, 8, _hoisted_7)) : createCommentVNode("", true)
          ], 8, _hoisted_6)
        ])
      ], 40, _hoisted_1$2);
    };
  }
});
const ChecklistAnswer_vue_vue_type_style_index_0_scoped_343daf34_lang = "";
const ChecklistAnswer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-343daf34"]]);
const _hoisted_1$1 = { class: "question" };
const _hoisted_2$1 = { class: "question-index shared" };
const _hoisted_3 = { class: "shared" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistQuestion",
  props: {
    question: null
  },
  setup(__props) {
    const props = __props;
    const generateClickHandler = (answerIndex) => (e) => {
      const eventSource = e.target;
      if (eventSource.tagName === "A") {
        return;
      }
      const newCompliance = [
        ...compliance.value.slice(0, props.question.index),
        answerIndex,
        ...compliance.value.slice(props.question.index + 1)
      ];
      setCompliance(newCompliance);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, toDisplayString(`${__props.question.index + 1}.`), 1),
        createBaseVNode("fieldset", null, [
          createBaseVNode("legend", _hoisted_3, toDisplayString(`${__props.question.text}`), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.question.answers, (answer, answerIndex) => {
            return openBlock(), createBlock(ChecklistAnswer, {
              answer,
              isChecked: unref(compliance)[__props.question.index] === answerIndex,
              key: answer.id,
              onClick: generateClickHandler(answerIndex)
            }, null, 8, ["answer", "isChecked", "onClick"]);
          }), 128))
        ])
      ]);
    };
  }
});
const ChecklistQuestion_vue_vue_type_style_index_0_scoped_90d2b7b0_lang = "";
const ChecklistQuestion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-90d2b7b0"]]);
const questions = [
  {
    answers: [
      {
        id: "f:q0:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "f:q0:a1",
        elaboration: "E.g. There is a setup.cfg file with keywords, authors, and a description, but the software is not published to PyPI.",
        score: 1,
        text: "No, but some of the metadata is machine-readable"
      },
      {
        id: "f:q0:a2",
        elaboration: "E.g. the software is on GitHub or GitLab.",
        score: 2,
        text: "No, the software is published on a platform with minimal Search Engine Optimization"
      },
      {
        id: "f:q0:a3",
        elaboration: `E.g. the software is published to a package manager (e.g. PyPI, CRAN, NPM) or a dedicated publishing platform (e.g. the <a href="https://research-software-directory.org/" target="_blank">Research Software Directory</a>). The associated pages on those platforms can be shown to contain relevant metadata by using Search Engine Optimization tools such as schema.org's <a href="https://validator.schema.org" target="_blank">validator</a> or OpenLink's <a href="https://osds.openlinksw.com/" target="_blank">Structured Data Sniffer</a>.`,
        score: 3,
        text: "Yes, the software is findable via an associated web page which employs Search Engine Optimization."
      }
    ],
    id: "f:q0",
    principle: "f",
    text: 'Is information from the metadata consumed by search engines to help rank their results? For the definition of "the metadata", see section above.'
  },
  {
    answers: [
      {
        id: "f:q1:a0",
        elaboration: "E.g. The software is only identified by its name, which is not guaranteed to be or remain unique.",
        score: 0,
        text: "No"
      },
      {
        id: "f:q1:a1",
        elaboration: "E.g. The software is identifiable by its URL, or by its DOI.",
        score: 1,
        text: "Yes for at least some of the identifiers"
      }
    ],
    id: "f:q1",
    principle: "f",
    text: `Are the software's identifiers globally unique? For the definition of "the software", see section above.`
  },
  {
    answers: [
      {
        id: "a:q0:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "a:q0:a1",
        elaboration: "E.g. the software is identified by URL or DOI, but the software source files are proprietary, closed-source, or otherwise hidden from public view.",
        score: 1,
        text: "No, the identifiers only resolve to a page about the software, not the source files themselves."
      },
      {
        id: "a:q0:a2",
        elaboration: "E.g. the software is identified by name and version, but there is no information on where to get a copy.",
        score: 2,
        text: "Maybe"
      },
      {
        id: "a:q0:a3",
        elaboration: "E.g. the software is identified by its URL or DOI. Or, a copy of the software may be obtained after going through an administrative procedure, e.g. vetting, sending an email, etc.",
        score: 3,
        text: "Yes for at least some of the identifiers"
      }
    ],
    id: "a:q0",
    principle: "a",
    text: "Can someone else use the software's identifiers to get a copy of the software?"
  },
  {
    answers: [
      {
        id: "a:q1:a0",
        elaboration: "E.g. the identifiers include only the name of the software as a concept, but each version of that concept will have a different feature set. Or, the identifiers only include a URL, whose content may be subject to change.",
        score: 0,
        text: "Maybe"
      },
      {
        id: "a:q1:a1",
        elaboration: 'E.g. The identifiers include a DOI, PURL, Handle, or some other <a href="https://en.wikipedia.org/wiki/Persistent_identifier" target="_blank">persistent identifier</a>. If the identifier is a concept DOI or collection DOI, the identifiers must also specify a version or version list.',
        score: 1,
        text: "Yes, at least some of the identifiers are persistent"
      },
      {
        id: "a:q1:a2",
        elaboration: "E.g. The software is a deposition on Zenodo.",
        score: 2,
        text: "Yes, as previous answer, and additionally the metadata will be available for some time after the software itself is no longer available"
      }
    ],
    id: "a:q1",
    principle: "a",
    text: "A few years from now, will the software's identifiers resolve to exactly the same content as they do today?"
  },
  {
    answers: [
      {
        id: "a:q2:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "a:q2:a1",
        elaboration: "E.g. The software is retrievable through a URL that uses HTTP, HTTPS, FTP, or SFTP.",
        score: 1,
        text: "Yes"
      }
    ],
    id: "a:q2",
    principle: "a",
    text: "Is the software retrievable using a protocol that is open, free, and universally implementable?"
  },
  {
    answers: [
      {
        id: "a:q3:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "a:q3:a1",
        elaboration: "",
        score: 1,
        text: "Yes, or the software is openly available"
      }
    ],
    id: "a:q3",
    principle: "a",
    text: "Is the software retrievable using a protocol that allows for authentication and authorization?"
  },
  {
    answers: [
      {
        id: "a:q4:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "a:q4:a1",
        elaboration: "",
        score: 1,
        text: "Yes, the metadata includes the software's name"
      },
      {
        id: "a:q4:a2",
        elaboration: "E.g. The metadata includes a URL that points to the software on GitHub, GitLab, SourceForge, PyPI, NPM or CRAN.",
        score: 2,
        text: "Yes, the metadata includes a unique identifier to reference the software"
      },
      {
        id: "a:q4:a3",
        elaboration: "E.g. The metadata includes a DOI, PURL or Handle that points to an archived copy of the software.",
        score: 3,
        text: "Yes, the metadata includes a unique and persistent identifier to reference the software"
      }
    ],
    id: "a:q4",
    principle: "a",
    text: "Does the metadata include an identifier to reference the associated software?"
  },
  {
    answers: [
      {
        id: "i:q0:a0",
        elaboration: "",
        score: 0,
        text: "Not applicable"
      },
      {
        id: "i:q0:a1",
        elaboration: "",
        score: 1,
        text: "The software reads, writes and exchanges data using proprietary formats only"
      },
      {
        id: "i:q0:a2",
        elaboration: "",
        score: 2,
        text: "The software uses open formats for at least some of the data it reads, writes, or exchanges"
      },
      {
        id: "i:q0:a3",
        elaboration: "",
        score: 3,
        text: "As previous answer, and additionally the formats are common for the domain"
      }
    ],
    id: "i:q0",
    principle: "i",
    text: "If the software reads, writes, or exchanges data, what type of formats are being used?"
  },
  {
    answers: [
      {
        id: "i:q1:a0",
        elaboration: "E.g. the software does not make releases. Updates may or may not be available, but when they are, no version or release is indicated.",
        score: 0,
        text: "Different versions of the software are not identified separately"
      },
      {
        id: "i:q1:a1",
        elaboration: "E.g. Software versions are labeled according to the release date, the build number, etc.",
        score: 1,
        text: "Different software versions are identified using some form of increment at every release"
      },
      {
        id: "i:q1:a2",
        elaboration: 'E.g. Software versions are labeled according to <a href="https://semver.org/" target="_blank">semantic versioning</a>.',
        score: 2,
        text: "As previous answer, and additionally, the version identifier communicates information about compatibility"
      }
    ],
    id: "i:q1",
    principle: "i",
    text: "What approach does the software take to versioning?"
  },
  {
    answers: [
      {
        id: "i:q2:a0",
        elaboration: "",
        score: 0,
        text: "The metadata does not include explicit information about the dependencies"
      },
      {
        id: "i:q2:a1",
        elaboration: "",
        score: 1,
        text: "The metadata includes the names of the dependencies"
      },
      {
        id: "i:q2:a2",
        elaboration: "",
        score: 2,
        text: "The metadata includes URI links to the software's dependencies"
      },
      {
        id: "i:q2:a3",
        elaboration: "",
        score: 3,
        text: "As previous answer, and additionally each link points to a specific version or version range of the dependency, and the list of dependencies includes all dependencies needed to get the software running again on a fresh install of the targeted operating systems"
      }
    ],
    id: "i:q2",
    principle: "i",
    text: "How are the software's dependencies specified?"
  },
  {
    answers: [
      {
        id: "i:q3:a0",
        elaboration: "",
        score: 0,
        text: "The metadata does not include links to related software"
      },
      {
        id: "i:q3:a1",
        elaboration: "",
        score: 1,
        text: "The metadata includes at least some URI links to related software"
      },
      {
        id: "i:q3:a2",
        elaboration: "",
        score: 2,
        text: "As previous answer, with at least some of the links qualified and machine-readable"
      }
    ],
    id: "i:q3",
    principle: "i",
    text: "How is the software's relationship to related software, other than its dependencies, described?"
  },
  {
    answers: [
      {
        id: "i:q4:a0",
        elaboration: "",
        score: 0,
        text: "The metadata does not include links to related data"
      },
      {
        id: "i:q4:a1",
        elaboration: "",
        score: 1,
        text: "The metadata includes at least some URI links to related data"
      },
      {
        id: "i:q4:a2",
        elaboration: "",
        score: 2,
        text: "As previous answer, with at least some of the links qualified and machine-readable"
      }
    ],
    id: "i:q4",
    principle: "i",
    text: "How is the software's relationship to related data described?"
  },
  {
    answers: [
      {
        id: "r:q0:a0",
        elaboration: "E.g. the software's dependency tree or compilation tool chain are insufficiently specified to facilitate reliable recompilation",
        score: 0,
        text: "No, the software is available as-is. No attempt is made to make the software easily executed"
      },
      {
        id: "r:q0:a1",
        elaboration: "E.g. the software includes package manager files like package-lock.json, conanfile.txt, pyproject.toml, or requirements.txt that can be used to compile and run the software, or the software includes sufficient documentation to do so.",
        score: 1,
        text: "Yes, the software can be compiled using information bundled with the software sources"
      }
    ],
    id: "r:q0",
    principle: "r",
    text: "Is the software executable?"
  },
  {
    answers: [
      {
        id: "r:q1:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "r:q1:a1",
        elaboration: "",
        score: 1,
        text: "Yes, the software's source files are available"
      },
      {
        id: "r:q1:a2",
        elaboration: "",
        score: 2,
        text: "Yes, as previous answer, and additionally the software includes documentation"
      },
      {
        id: "r:q1:a4",
        elaboration: "",
        score: 3,
        text: "Yes, as previous answer, and additionally the software is available via a package manager"
      }
    ],
    id: "r:q1",
    principle: "r",
    text: "Is the software made available in a form that allows for it to be understood, modified, built upon, or incorporated into other software?"
  },
  {
    answers: [
      {
        id: "r:q2:a0",
        elaboration: "",
        score: 0,
        text: "The software is unlicensed"
      },
      {
        id: "r:q2:a1",
        elaboration: "E.g. the software's README includes a few lines about how the software may be used, but the legal meaning has not been tested or subjected to an audit.",
        score: 1,
        text: "The software is licensed with a license that is not widely used"
      },
      {
        id: "r:q2:a2",
        elaboration: "E.g. the software is bundled with a license text such as that of the Apache-2.0, MIT, or MPL license.",
        score: 2,
        text: "The software is licensed with a widely used license"
      },
      {
        id: "r:q2:a3",
        elaboration: "E.g. the software specifies its license in a metadata file such as pyproject.toml, package.json, CITATION.cff, .zenodo.json, codemeta.json, or R DESCRIPTION file.",
        score: 3,
        text: "As previous answer, and additionally, the license is machine-readable"
      }
    ],
    id: "r:q2",
    principle: "r",
    text: "Which of the following best describes the software's usage rights?"
  }
];
const _withScopeId = (n) => (pushScopeId("data-v-e8806c6f"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Self-assessment for FAIR research software", -1));
const _hoisted_2 = { class: "principle-quote" };
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
    const getQuote = (principle) => ({
      f: "The first step in reusing software is to discover that it exists in the first place.",
      a: "In order to reuse software, one must have access to it.",
      i: "Software must interact with data and other software to maximize its potential.",
      r: "Software should be usable and reusable."
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ChecklistHeader),
        createBaseVNode("main", null, [
          _hoisted_1,
          createVNode(ChecklistBannerVersions),
          createVNode(ChecklistBannerParams),
          createVNode(ChecklistPreamble),
          unref(nQuestions).total > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(principles), (principle) => {
              return openBlock(), createElementBlock("div", { key: principle }, [
                createBaseVNode("h2", null, toDisplayString(getFullname(principle)), 1),
                createBaseVNode("p", _hoisted_2, toDisplayString(getQuote(principle)), 1),
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
const index_page_vue_vue_type_style_index_0_scoped_e8806c6f_lang = "";
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8806c6f"]]);
export {
  index_page as default
};
