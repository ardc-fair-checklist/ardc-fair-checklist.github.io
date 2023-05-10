import { H as ref, I as computed, u as openBlock, t as createElementBlock, v as createBaseVNode, J as toDisplayString, x as createStaticVNode, d as defineComponent, y as renderSlot, z as normalizeClass, A as unref, o as onMounted, B as createTextVNode, C as createVNode, D as withCtx, K as createCommentVNode, E as pushScopeId, G as popScopeId, F as Fragment, L as renderList, M as createBlock } from "../../../chunk-34b0814a.js";
import { l as latest } from "../../../chunk-18cccac3.js";
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
    return selectedQuestions.map((q) => Math.max(...q.answers.map((a) => a.score))).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
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
const ChecklistAbout_vue_vue_type_style_index_0_scoped_7d371f09_lang = "";
const _sfc_main$8 = {};
const _hoisted_1$7 = /* @__PURE__ */ createStaticVNode('<div class="logos" data-v-7d371f09><a href="https://esciencecenter.nl" target="_blank" data-v-7d371f09><img class="logo" src="' + _imports_0 + '" alt="nlesc logo" data-v-7d371f09></a><a href="https://ardc.edu.au" target="_blank" data-v-7d371f09><img class="logo" src="' + _imports_1 + '" alt="ardc logo" data-v-7d371f09></a></div>', 1);
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, [
    _hoisted_1$7,
    createBaseVNode("p", null, toDisplayString("This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons."), 1)
  ]);
}
const ChecklistAbout = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$1], ["__scopeId", "data-v-7d371f09"]]);
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
const ChecklistLink_vue_vue_type_style_index_0_scoped_7c19731c_lang = "";
const ChecklistLink = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7c19731c"]]);
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
      latest.value.data
    ].join("/"));
    const showBanner = ref(false);
    onMounted(() => {
      const { urlPathname } = usePageContext();
      const myVersion = urlPathname.split("/").filter((e) => e !== "").slice(-1)[0];
      showBanner.value = myVersion !== latest.value.data;
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
const ChecklistBannerVersions_vue_vue_type_style_index_0_scoped_320eb019_lang = "";
const ChecklistBannerVersions = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-320eb019"]]);
const ChecklistBannerWIP_vue_vue_type_style_index_0_scoped_b79ea234_lang = "";
const _sfc_main$5 = {};
const _hoisted_1$5 = { class: "banner" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, " This website is a work in progress. Note that for the time being, the number of questions in the checklist, their order, and their content is subject to change. ");
}
const ChecklistBannerWIP = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-b79ea234"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-30b9123a"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "home" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", {
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
              _hoisted_2$4
            ]),
            _: 1
          })
        ]),
        _hoisted_3$3
      ]);
    };
  }
});
const ChecklistHeader_vue_vue_type_style_index_0_scoped_30b9123a_lang = "";
const ChecklistHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-30b9123a"]]);
const _hoisted_1$3 = { class: "footer" };
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<div class="inner" data-v-17b669a6><div class="another-inner" data-v-17b669a6><div class="progressbars" data-v-17b669a6><div class="labels" data-v-17b669a6><div class="row" data-v-17b669a6><div class="label" data-v-17b669a6> Findable </div></div><div class="row" data-v-17b669a6><div class="label" data-v-17b669a6> Accessible </div></div><div class="row" data-v-17b669a6><div class="label" data-v-17b669a6> Interoperable </div></div><div class="row" data-v-17b669a6><div class="label" data-v-17b669a6> Reusable </div></div></div><div class="bars" data-v-17b669a6><div class="row" data-v-17b669a6><div class="bar bar-bg" data-v-17b669a6><div class="bar blue" data-v-17b669a6></div></div></div><div class="row" data-v-17b669a6><div class="bar bar-bg" data-v-17b669a6><div class="bar pink" data-v-17b669a6></div></div></div><div class="row" data-v-17b669a6><div class="bar bar-bg" data-v-17b669a6><div class="bar yellow" data-v-17b669a6></div></div></div><div class="row" data-v-17b669a6><div class="bar bar-bg" data-v-17b669a6><div class="bar purple" data-v-17b669a6></div></div></div></div></div></div></div>', 1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistProgressBars",
  props: {
    progress: null
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "4ba552e6": __props.progress.f,
      "4ba552f0": __props.progress.a,
      "4ba552e0": __props.progress.i,
      "4ba552ce": __props.progress.r
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$2);
    };
  }
});
const ChecklistProgressBars_vue_vue_type_style_index_0_scoped_17b669a6_lang = "";
const ChecklistProgressBars = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-17b669a6"]]);
const _hoisted_1$2 = ["aria-labelledby"];
const _hoisted_2$2 = { class: "answer-radiobutton" };
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
const ChecklistAnswer_vue_vue_type_style_index_0_scoped_4b043086_lang = "";
const ChecklistAnswer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4b043086"]]);
const _hoisted_1$1 = { class: "question" };
const _hoisted_2$1 = { class: "question-index shared" };
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
        createBaseVNode("div", _hoisted_2$1, toDisplayString(`${__props.question.index + 1}.`), 1),
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
const ChecklistQuestion_vue_vue_type_style_index_0_scoped_9c1d54a2_lang = "";
const ChecklistQuestion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9c1d54a2"]]);
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
        text: "Local identifier"
      },
      {
        id: "f:q0:a2",
        score: 3,
        text: "Web address (URL)"
      },
      {
        id: "f:q0:a3",
        score: 8,
        text: "Globally Unique, citable and persistent (e.g. DOI, PURL, ARK or Handle)"
      }
    ],
    guidance: "",
    id: "f:q0",
    principle: "f",
    text: "Does the dataset have any identifiers assigned?"
  },
  {
    answers: [
      {
        id: "f:q1:a0",
        score: 0,
        text: "No"
      },
      {
        id: "f:q1:a1",
        score: 1,
        text: "Yes"
      }
    ],
    guidance: "",
    id: "f:q1",
    principle: "f",
    text: "Is the dataset identifier included in all metadata records/files describing the data?"
  },
  {
    answers: [
      {
        id: "f:q2:a0",
        score: 0,
        text: "The data is not described."
      },
      {
        id: "f:q2:a1",
        score: 2,
        text: "Brief title and description."
      },
      {
        id: "f:q2:a2",
        score: 3,
        text: "Comprehensively, but in a text-based, non-standard format."
      },
      {
        id: "f:q2:a3",
        score: 4,
        text: "Comprehensively (see suggestion) using a recognised formal machine-readable metadata schema."
      }
    ],
    guidance: "",
    id: "f:q2",
    principle: "f",
    text: "How is the data described with metadata?"
  },
  {
    answers: [
      {
        id: "f:q3:a0",
        score: 0,
        text: "The data is not described in any repository"
      },
      {
        id: "f:q3:a1",
        score: 2,
        text: "Local institutional repository"
      },
      {
        id: "f:q3:a2",
        score: 2,
        text: "Domain-specific repository"
      },
      {
        id: "f:q3:a3",
        score: 2,
        text: "Generalist public repository"
      },
      {
        id: "f:q3:a4",
        score: 4,
        text: "Data is in one place but discoverable through several registries"
      }
    ],
    guidance: "",
    id: "f:q3",
    principle: "f",
    text: "What type of repository or registry is the metadata record in?"
  },
  {
    answers: [
      {
        id: "a:q0:a0",
        score: 0,
        text: "No access to data or metadata"
      },
      {
        id: "a:q0:a1",
        score: 1,
        text: "Access to metadata only"
      },
      {
        id: "a:q0:a2",
        score: 2,
        text: "Unspecified conditional access e.g. contact the data custodian for access"
      },
      {
        id: "a:q0:a3",
        score: 3,
        text: "Embargoed access after a specified date"
      },
      {
        id: "a:q0:a4",
        score: 4,
        text: "A de-identified / modified subset of the data is publicly accessible"
      },
      {
        id: "a:q0:a5",
        score: 5,
        text: "Fully accessible to persons who meet explicitly stated conditions, e.g. ethics approval for sensitive data"
      },
      {
        id: "a:q0:a6",
        score: 5,
        text: "Publicly accessible"
      }
    ],
    guidance: "",
    id: "a:q0",
    principle: "a",
    text: "How accessible is the data?"
  },
  {
    answers: [
      {
        id: "a:q1:a0",
        score: 0,
        text: "No access to data"
      },
      {
        id: "a:q1:a1",
        score: 1,
        text: "By individual arrangement"
      },
      {
        id: "a:q1:a2",
        score: 2,
        text: "File download from online location"
      },
      {
        id: "a:q1:a3",
        score: 3,
        text: "Non-standard web service (e.g. OpenAPI/Swagger/informal API)"
      },
      {
        id: "a:q1:a4",
        score: 4,
        text: "Standard web service API (e.g. OGC)"
      }
    ],
    guidance: "",
    id: "a:q1",
    principle: "a",
    text: "Is the data available online without requiring specialised protocols or tools once access has been approved?"
  },
  {
    answers: [
      {
        id: "a:q2:a0",
        score: 0,
        text: "No"
      },
      {
        id: "a:q2:a1",
        score: 0,
        text: "Unsure"
      },
      {
        id: "a:q2:a2",
        score: 1,
        text: "Yes"
      }
    ],
    guidance: "",
    id: "a:q2",
    principle: "a",
    text: "Will the metadata record be available even if the data is no longer available?"
  },
  {
    answers: [
      {
        id: "i:q0:a0",
        score: 0,
        text: "Mostly in a proprietary format"
      },
      {
        id: "i:q0:a1",
        score: 1,
        text: "In a structured, open standard, non-machine-readable format"
      },
      {
        id: "i:q0:a2",
        score: 2,
        text: "In a structured, open standard, machine-readable format"
      }
    ],
    guidance: "",
    id: "i:q0",
    principle: "i",
    text: "What (file) format(s) is the data available in?"
  },
  {
    answers: [
      {
        id: "i:q1:a0",
        score: 0,
        text: "Data elements not described"
      },
      {
        id: "i:q1:a1",
        score: 1,
        text: "No standards have been applied in the description of data elements"
      },
      {
        id: "i:q1:a2",
        score: 2,
        text: "Standardised vocabularies/ontologies/schema without global identifiers"
      },
      {
        id: "i:q1:a3",
        score: 3,
        text: "Standardised open and universal using resolvable global identifiers linking to explanations"
      }
    ],
    guidance: "",
    id: "i:q1",
    principle: "i",
    text: "What best describes the types of vocabularies/ontologies/tagging schemas used to define the data elements?"
  },
  {
    answers: [
      {
        id: "i:q2:a0",
        score: 0,
        text: "There are no links to other metadata"
      },
      {
        id: "i:q2:a1",
        score: 2,
        text: "The metadata record includes URI links to related metadata, data and definitions"
      },
      {
        id: "i:q2:a2",
        score: 3,
        text: "Metadata is represented in a machine readable format, e.g. in a linked data format such as Resource Description Framework (RDF)."
      }
    ],
    guidance: "",
    id: "i:q2",
    principle: "i",
    text: "How is the metadata linked to other data and metadata (to enhance context and clearly indicate relationships)?"
  },
  {
    answers: [
      {
        id: "r:q0:a0",
        score: 0,
        text: "No license"
      },
      {
        id: "r:q0:a1",
        score: 2,
        text: "Non-standard text-based license"
      },
      {
        id: "r:q0:a2",
        score: 3,
        text: "Non-standard machine-readable license (clearly indicating under what conditions the data may be reused)"
      },
      {
        id: "r:q0:a3",
        score: 3,
        text: "Standard text based license"
      },
      {
        id: "r:q0:a4",
        score: 4,
        text: "Standard machine-readable license (e.g. Creative Commons)"
      }
    ],
    guidance: "",
    id: "r:q0",
    principle: "r",
    text: "Which of the following best describes the license/usage rights attached to the data?"
  },
  {
    answers: [
      {
        id: "r:q1:a0",
        score: 0,
        text: "No provenance information is recorded"
      },
      {
        id: "r:q1:a1",
        score: 1,
        text: "Partially recorded"
      },
      {
        id: "r:q1:a2",
        score: 2,
        text: "Fully recorded in a text format"
      },
      {
        id: "r:q1:a3",
        score: 3,
        text: "Fully recorded in a machine readable format"
      }
    ],
    guidance: "",
    id: "r:q1",
    principle: "r",
    text: "How much provenance information has been captured to facilitate data reuse?"
  }
];
const _withScopeId = (n) => (pushScopeId("data-v-951f41f4"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Self-assessment for FAIR data", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, " Answer the questions below to assess your data's FAIRness. ", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  setup(__props) {
    setQuestions(questions);
    const getFullname = (principle) => ({
      f: "Findable",
      a: "Accessible",
      i: "Interoperable",
      r: "Reusable"
    })[principle];
    const linkToSoftwareChecklist = `${"/ssg/"}software/${latest.value.software}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ChecklistHeader),
        createBaseVNode("main", null, [
          _hoisted_1,
          createBaseVNode("p", null, [
            createTextVNode(" For the research software variant, click "),
            createVNode(ChecklistLink, { href: linkToSoftwareChecklist }, {
              default: withCtx(() => [
                createTextVNode("here")
              ]),
              _: 1
            }),
            createTextVNode(". ")
          ]),
          createVNode(ChecklistBannerWIP),
          createVNode(ChecklistBannerVersions),
          unref(nQuestions).total > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _hoisted_2,
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
            createVNode(ChecklistProgressBars, { progress: unref(progress) }, null, 8, ["progress"]),
            createVNode(ChecklistAbout)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(" Loading questions data... ")
          ], 64))
        ])
      ]);
    };
  }
});
const index_page_vue_vue_type_style_index_0_scoped_951f41f4_lang = "";
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-951f41f4"]]);
export {
  index_page as default
};
