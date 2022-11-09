import { l as latest } from "../../../chunk-2d906bec.js";
import { u as usePageContext } from "../../../chunk-43f5a3e9.js";
import { G as ref, H as computed, d as defineComponent, o as onMounted, B as unref, u as openBlock, t as createElementBlock, C as createTextVNode, v as createBaseVNode, I as toDisplayString, J as createCommentVNode, x as pushScopeId, y as popScopeId, z as renderSlot, A as normalizeClass, F as Fragment, K as renderList, L as createBlock, D as createVNode, E as withCtx } from "../../../chunk-ef5fba30.js";
/* empty css                       */import { _ as _export_sfc } from "../../../chunk-de093346.js";
import { _ as _imports_0, a as _imports_1 } from "../../../chunk-5b637298.js";
import { u as useCssVars, w as withKeys } from "../../../chunk-cc5d185f.js";
const state = ref({
  compliance: [],
  questions: [],
  showBannerMessageVersions: false
});
const showBannerMessageVersions = computed(() => state.value.showBannerMessageVersions);
const compliance = computed(() => state.value.compliance);
const questions$1 = computed(() => state.value.questions);
const setShowBannerMessageVersions = (b) => state.value.showBannerMessageVersions = b;
const setCompliance = (newCompliance) => state.value.compliance = newCompliance;
const setQuestions = (questions2) => {
  state.value.questions = questions2.map((q, i) => ({ ...q, index: i }));
  state.value.compliance = new Array(questions2.length).fill(0);
};
const nQuestions = computed(() => {
  const deriveNumberOfQuestions = (aspect) => {
    return state.value.questions.filter((question) => question.aspect === aspect).length;
  };
  return {
    f: deriveNumberOfQuestions("F"),
    a: deriveNumberOfQuestions("A"),
    i: deriveNumberOfQuestions("I"),
    r: deriveNumberOfQuestions("R"),
    total: state.value.questions.length
  };
});
const nPointsMax = computed(() => {
  const derivePointsMax = (aspect) => {
    let selectedQuestions = state.value.questions;
    if (aspect !== "*") {
      selectedQuestions = state.value.questions.filter((question) => question.aspect === aspect);
    }
    return selectedQuestions.map((question) => Math.max(...question.answers.map((answer) => answer.score))).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };
  return {
    f: derivePointsMax("F"),
    a: derivePointsMax("A"),
    i: derivePointsMax("I"),
    r: derivePointsMax("R"),
    total: derivePointsMax("*")
  };
});
const slices = computed(() => {
  return {
    f: [0, nQuestions.value.f],
    a: [nQuestions.value.f, nQuestions.value.f + nQuestions.value.a],
    i: [nQuestions.value.f + nQuestions.value.a, nQuestions.value.f + nQuestions.value.a + nQuestions.value.i],
    r: [nQuestions.value.f + nQuestions.value.a + nQuestions.value.i, nQuestions.value.total]
  };
});
const progress = computed(() => {
  const scoreArrays = state.value.questions.map((q) => q.answers.map((a) => a.score));
  const scores = state.value.compliance.map((iAnswer, iQuestion) => scoreArrays[iQuestion][iAnswer]);
  const summation = (previousValue, currentValue) => previousValue + currentValue;
  if (nQuestions.value.total === 0) {
    return {
      f: "0%",
      a: "0%",
      i: "0%",
      r: "0%",
      overall: "0%"
    };
  }
  return {
    f: `${100 * scores.slice(...slices.value.f).reduce(summation, 0) / nPointsMax.value.f}%`,
    a: `${100 * scores.slice(...slices.value.a).reduce(summation, 0) / nPointsMax.value.a}%`,
    i: `${100 * scores.slice(...slices.value.i).reduce(summation, 0) / nPointsMax.value.i}%`,
    r: `${100 * scores.slice(...slices.value.r).reduce(summation, 0) / nPointsMax.value.r}%`,
    overall: `${100 * scores.reduce(summation, 0) / nPointsMax.value.total}%`
  };
});
const _hoisted_1$5 = {
  key: 0,
  class: "banner"
};
const _hoisted_2$5 = ["href"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BannerVersions",
  setup(__props) {
    const link = computed(() => {
      return [
        window.location.origin,
        window.location.pathname.split("/").filter((e) => e !== "").slice(0, -1).join("/"),
        latest.value.software
      ].join("/");
    });
    onMounted(() => {
      const { urlPathname } = usePageContext();
      const myVersion = urlPathname.split("/").slice(-1)[0];
      if (myVersion !== latest.value.data) {
        setShowBannerMessageVersions(true);
      }
    });
    return (_ctx, _cache) => {
      return unref(showBannerMessageVersions) ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
        createTextVNode(" A newer version of the checklist is available at "),
        createBaseVNode("a", { href: unref(link) }, toDisplayString(unref(link)), 9, _hoisted_2$5),
        createTextVNode(", consider upgrading. ")
      ])) : createCommentVNode("", true);
    };
  }
});
const BannerVersions_vue_vue_type_style_index_0_scoped_338506a9_lang = "";
const BannerVersions = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-338506a9"]]);
const Footer_vue_vue_type_style_index_0_scoped_140da7b6_lang = "";
const _sfc_main$5 = {};
const _withScopeId$2 = (n) => (pushScopeId("data-v-140da7b6"), n = n(), popScopeId(), n);
const _hoisted_1$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "logos" }, [
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
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", null, " This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons. ", -1));
const _hoisted_3$4 = [
  _hoisted_1$4,
  _hoisted_2$4
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, _hoisted_3$4);
}
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-140da7b6"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Link",
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
const Link_vue_vue_type_style_index_0_scoped_865de604_lang = "";
const Link = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-865de604"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-90dbaf62"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "outer" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, null, -1));
const _hoisted_3$3 = [
  _hoisted_2$3
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProgressBar",
  props: {
    progress: null
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "ef16bdce": __props.progress
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$3);
    };
  }
});
const ProgressBar_vue_vue_type_style_index_0_scoped_90dbaf62_lang = "";
const ProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-90dbaf62"]]);
const _hoisted_1$2 = { class: "answer-radiobutton" };
const _hoisted_2$2 = ["id", "value", "checked"];
const _hoisted_3$2 = { class: "answer-points" };
const _hoisted_4$1 = { class: "answer-text" };
const _hoisted_5 = ["for"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Answer",
  props: {
    answer: null,
    isChecked: { type: Boolean },
    onClick: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "answer",
        onClick: _cache[0] || (_cache[0] = (...args) => __props.onClick && __props.onClick(...args)),
        onKeyup: _cache[1] || (_cache[1] = withKeys(
          (...args) => __props.onClick && __props.onClick(...args),
          ["space"]
        )),
        tabindex: "0"
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("input", {
            type: "radio",
            id: __props.answer.id,
            value: __props.answer.id,
            checked: __props.isChecked,
            role: "presentation",
            tabindex: "-1"
          }, null, 8, _hoisted_2$2)
        ]),
        createBaseVNode("div", _hoisted_3$2, " (+" + toDisplayString(__props.answer.score) + ") ", 1),
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("label", {
            for: __props.answer.id
          }, toDisplayString(__props.answer.text), 9, _hoisted_5)
        ])
      ], 32);
    };
  }
});
const Answer_vue_vue_type_style_index_0_scoped_14000829_lang = "";
const Answer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-14000829"]]);
const _hoisted_1$1 = { class: "question" };
const _hoisted_2$1 = { class: "question-index shared" };
const _hoisted_3$1 = { class: "shared" };
const _hoisted_4 = { class: "question-guidance" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Question",
  props: {
    question: null
  },
  setup(__props) {
    const props = __props;
    const onClick = (answerIndex) => {
      return () => {
        const newCompliance = [
          ...compliance.value.slice(0, props.question.index),
          answerIndex,
          ...compliance.value.slice(props.question.index + 1)
        ];
        setCompliance(newCompliance);
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, toDisplayString(`${__props.question.index + 1}.`), 1),
        createBaseVNode("fieldset", null, [
          createBaseVNode("legend", _hoisted_3$1, toDisplayString(`${__props.question.text}`), 1),
          createBaseVNode("div", _hoisted_4, toDisplayString(__props.question.guidance), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.question.answers, (answer, answerIndex) => {
            return openBlock(), createBlock(Answer, {
              answer,
              isChecked: unref(compliance)[__props.question.index] === answerIndex,
              key: answer.id,
              onClick: onClick(answerIndex),
              onKeyup: withKeys(($event) => onClick(answerIndex), ["space"])
            }, null, 8, ["answer", "isChecked", "onClick", "onKeyup"]);
          }), 128))
        ])
      ]);
    };
  }
});
const Question_vue_vue_type_style_index_0_scoped_9176ba0a_lang = "";
const Question = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9176ba0a"]]);
const questions = [
  {
    answers: [
      {
        id: "F:q0:a0",
        score: 0,
        text: "No identifier"
      },
      {
        id: "F:q0:a1",
        score: 1,
        text: "Local identifier"
      },
      {
        id: "F:q0:a2",
        score: 3,
        text: "Web address (URL)"
      },
      {
        id: "F:q0:a3",
        score: 8,
        text: "Globally Unique, citable and persistent (e.g. DOI, PURL, ARK or Handle)"
      }
    ],
    aspect: "F",
    guidance: "",
    id: "F:q0",
    principle: "",
    text: "Does the dataset have any identifiers assigned?"
  },
  {
    answers: [
      {
        id: "F:q1:a0",
        score: 0,
        text: "No"
      },
      {
        id: "F:q1:a1",
        score: 1,
        text: "Yes"
      }
    ],
    aspect: "F",
    guidance: "",
    id: "F:q1",
    principle: "",
    text: "Is the dataset identifier included in all metadata records/files describing the data?"
  },
  {
    answers: [
      {
        id: "F:q2:a0",
        score: 0,
        text: "The data is not described."
      },
      {
        id: "F:q2:a1",
        score: 2,
        text: "Brief title and description."
      },
      {
        id: "F:q2:a2",
        score: 3,
        text: "Comprehensively, but in a text-based, non-standard format."
      },
      {
        id: "F:q2:a3",
        score: 4,
        text: "Comprehensively (see suggestion) using a recognised formal machine-readable metadata schema."
      }
    ],
    aspect: "F",
    guidance: "",
    id: "F:q2",
    principle: "",
    text: "How is the data described with metadata?"
  },
  {
    answers: [
      {
        id: "F:q3:a0",
        score: 0,
        text: "The data is not described in any repository"
      },
      {
        id: "F:q3:a1",
        score: 2,
        text: "Local institutional repository"
      },
      {
        id: "F:q3:a2",
        score: 2,
        text: "Domain-specific repository"
      },
      {
        id: "F:q3:a3",
        score: 2,
        text: "Generalist public repository"
      },
      {
        id: "F:q3:a4",
        score: 4,
        text: "Data is in one place but discoverable through several registries"
      }
    ],
    aspect: "F",
    guidance: "",
    id: "F:q3",
    principle: "",
    text: "What type of repository or registry is the metadata record in?"
  },
  {
    answers: [
      {
        id: "A:q0:a0",
        score: 0,
        text: "No access to data or metadata"
      },
      {
        id: "A:q0:a1",
        score: 1,
        text: "Access to metadata only"
      },
      {
        id: "A:q0:a2",
        score: 2,
        text: "Unspecified conditional access e.g. contact the data custodian for access"
      },
      {
        id: "A:q0:a3",
        score: 3,
        text: "Embargoed access after a specified date"
      },
      {
        id: "A:q0:a4",
        score: 4,
        text: "A de-identified / modified subset of the data is publicly accessible"
      },
      {
        id: "A:q0:a5",
        score: 5,
        text: "Fully accessible to persons who meet explicitly stated conditions, e.g. ethics approval for sensitive data"
      },
      {
        id: "A:q0:a6",
        score: 5,
        text: "Publicly accessible"
      }
    ],
    aspect: "A",
    guidance: "",
    id: "A:q0",
    principle: "",
    text: "How accessible is the data?"
  },
  {
    answers: [
      {
        id: "A:q1:a0",
        score: 0,
        text: "No access to data"
      },
      {
        id: "A:q1:a1",
        score: 1,
        text: "By individual arrangement"
      },
      {
        id: "A:q1:a2",
        score: 2,
        text: "File download from online location"
      },
      {
        id: "A:q1:a3",
        score: 3,
        text: "Non-standard web service (e.g. OpenAPI/Swagger/informal API)"
      },
      {
        id: "A:q1:a4",
        score: 4,
        text: "Standard web service API (e.g. OGC)"
      }
    ],
    aspect: "A",
    guidance: "",
    id: "A:q1",
    principle: "",
    text: "Is the data available online without requiring specialised protocols or tools once access has been approved?"
  },
  {
    answers: [
      {
        id: "A:q2:a0",
        score: 0,
        text: "No"
      },
      {
        id: "A:q2:a1",
        score: 0,
        text: "Unsure"
      },
      {
        id: "A:q2:a2",
        score: 1,
        text: "Yes"
      }
    ],
    aspect: "A",
    guidance: "",
    id: "A:q2",
    principle: "",
    text: "Will the metadata record be available even if the data is no longer available?"
  },
  {
    answers: [
      {
        id: "I:q0:a0",
        score: 0,
        text: "Mostly in a proprietary format"
      },
      {
        id: "I:q0:a1",
        score: 1,
        text: "In a structured, open standard, non-machine-readable format"
      },
      {
        id: "I:q0:a2",
        score: 2,
        text: "In a structured, open standard, machine-readable format"
      }
    ],
    aspect: "I",
    guidance: "",
    id: "I:q0",
    principle: "",
    text: "What (file) format(s) is the data available in?"
  },
  {
    answers: [
      {
        id: "I:q1:a0",
        score: 0,
        text: "Data elements not described"
      },
      {
        id: "I:q1:a1",
        score: 1,
        text: "No standards have been applied in the description of data elements"
      },
      {
        id: "I:q1:a2",
        score: 2,
        text: "Standardised vocabularies/ontologies/schema without global identifiers"
      },
      {
        id: "I:q1:a3",
        score: 3,
        text: "Standardised open and universal using resolvable global identifiers linking to explanations"
      }
    ],
    aspect: "I",
    guidance: "",
    id: "I:q1",
    principle: "",
    text: "What best describes the types of vocabularies/ontologies/tagging schemas used to define the data elements?"
  },
  {
    answers: [
      {
        id: "I:q2:a0",
        score: 0,
        text: "There are no links to other metadata"
      },
      {
        id: "I:q2:a1",
        score: 2,
        text: "The metadata record includes URI links to related metadata, data and definitions"
      },
      {
        id: "I:q2:a2",
        score: 3,
        text: "Metadata is represented in a machine readable format, e.g. in a linked data format such as Resource Description Framework (RDF)."
      }
    ],
    aspect: "I",
    guidance: "",
    id: "I:q2",
    principle: "",
    text: "How is the metadata linked to other data and metadata (to enhance context and clearly indicate relationships)?"
  },
  {
    answers: [
      {
        id: "R:q0:a0",
        score: 0,
        text: "No license"
      },
      {
        id: "R:q0:a1",
        score: 2,
        text: "Non-standard text-based license"
      },
      {
        id: "R:q0:a2",
        score: 3,
        text: "Non-standard machine-readable license (clearly indicating under what conditions the data may be reused)"
      },
      {
        id: "R:q0:a3",
        score: 3,
        text: "Standard text based license"
      },
      {
        id: "R:q0:a4",
        score: 4,
        text: "Standard machine-readable license (e.g. Creative Commons)"
      }
    ],
    aspect: "R",
    guidance: "",
    id: "R:q0",
    principle: "",
    text: "Which of the following best describes the license/usage rights attached to the data?"
  },
  {
    answers: [
      {
        id: "R:q1:a0",
        score: 0,
        text: "No provenance information is recorded"
      },
      {
        id: "R:q1:a1",
        score: 1,
        text: "Partially recorded"
      },
      {
        id: "R:q1:a2",
        score: 2,
        text: "Fully recorded in a text format"
      },
      {
        id: "R:q1:a3",
        score: 3,
        text: "Fully recorded in a machine readable format"
      }
    ],
    aspect: "R",
    guidance: "",
    id: "R:q1",
    principle: "",
    text: "How much provenance information has been captured to facilitate data reuse?"
  }
];
const _withScopeId = (n) => (pushScopeId("data-v-bba67843"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "ARDC FAIR for data self-assessment checklist", -1));
const _hoisted_2 = { class: "aspect" };
const _hoisted_3 = { class: "overall-progress" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  setup(__props) {
    setQuestions(questions);
    const getAspectFullname = (aspect) => {
      return {
        F: "Findable",
        A: "Accessible",
        I: "Interoperable",
        R: "Reusable"
      }[aspect];
    };
    const linkToSoftwareChecklist = `${"/ssg/"}software/v0.2`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", null, [
        _hoisted_1,
        createBaseVNode("p", null, [
          createTextVNode("Switch to the checklist for "),
          createVNode(Link, { href: linkToSoftwareChecklist }, {
            default: withCtx(() => [
              createTextVNode("software")
            ]),
            _: 1
          }),
          createTextVNode(" instead.")
        ]),
        createVNode(BannerVersions),
        unref(nQuestions).total > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("p", null, "Answer the " + toDisplayString(unref(nQuestions).total) + " questions below to assess your data's FAIRness.", 1),
          (openBlock(), createElementBlock(Fragment, null, renderList(["F", "A", "I", "R"], (aspect) => {
            return createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h2", null, toDisplayString(getAspectFullname(aspect)), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(questions$1).filter((q) => q.aspect === aspect), (question) => {
                return openBlock(), createBlock(Question, {
                  key: question.id,
                  question
                }, null, 8, ["question"]);
              }), 128)),
              createBaseVNode("p", null, toDisplayString(getAspectFullname(aspect)) + " state:", 1),
              aspect === "F" ? (openBlock(), createBlock(ProgressBar, {
                key: 0,
                progress: unref(progress).f
              }, null, 8, ["progress"])) : createCommentVNode("", true),
              aspect === "A" ? (openBlock(), createBlock(ProgressBar, {
                key: 1,
                progress: unref(progress).a
              }, null, 8, ["progress"])) : createCommentVNode("", true),
              aspect === "I" ? (openBlock(), createBlock(ProgressBar, {
                key: 2,
                progress: unref(progress).i
              }, null, 8, ["progress"])) : createCommentVNode("", true),
              aspect === "R" ? (openBlock(), createBlock(ProgressBar, {
                key: 3,
                progress: unref(progress).r
              }, null, 8, ["progress"])) : createCommentVNode("", true)
            ]);
          }), 64)),
          createBaseVNode("div", _hoisted_3, [
            createTextVNode(" FAIR state overall "),
            createVNode(ProgressBar, {
              progress: unref(progress).overall
            }, null, 8, ["progress"])
          ]),
          createVNode(Footer)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(" Loading questions data... ")
        ], 64))
      ]);
    };
  }
});
const index_page_vue_vue_type_style_index_0_scoped_bba67843_lang = "";
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bba67843"]]);
export {
  index_page as default
};
