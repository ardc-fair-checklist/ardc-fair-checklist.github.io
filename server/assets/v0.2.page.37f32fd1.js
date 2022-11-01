import { defineComponent, mergeProps, useSSRContext, ref, computed, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-de093346.js";
import { _ as _sfc_main$4 } from "./chunk-458f8a02.js";
import "./chunk-1b82c9dc.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProgressBar",
  __ssrInlineRender: true,
  props: {
    progress: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--13532ba2": __props.progress
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "outer" }, _attrs, _cssVars))} data-v-2a621585><div class="inner" data-v-2a621585></div></div>`);
    };
  }
});
const ProgressBar_vue_vue_type_style_index_0_scoped_2a621585_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data/v0.2/ProgressBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2a621585"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Answer",
  __ssrInlineRender: true,
  props: {
    answer: null,
    isChecked: { type: Boolean },
    onClick: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "answer" }, _attrs))}><input type="radio"${ssrRenderAttr("id", __props.answer.id)}${ssrRenderAttr("value", __props.answer.id)}${ssrIncludeBooleanAttr(__props.isChecked) ? " checked" : ""}><label${ssrRenderAttr("for", __props.answer.id)}>(+${ssrInterpolate(__props.answer.score)}) ${ssrInterpolate(__props.answer.text)}</label></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data/v0.2/Answer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const state = ref({
  compliance: [],
  questions: []
});
const compliance = computed(() => state.value.compliance);
const questions$1 = computed(() => state.value.questions);
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
computed(() => {
  return `&f=${state.value.compliance.slice(...slices.value.f).map((elem) => elem.toString()).join("")}&a=${state.value.compliance.slice(...slices.value.a).map((elem) => elem.toString()).join("")}&i=${state.value.compliance.slice(...slices.value.i).map((elem) => elem.toString()).join("")}&r=${state.value.compliance.slice(...slices.value.r).map((elem) => elem.toString()).join("")}`;
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Question",
  __ssrInlineRender: true,
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question" }, _attrs))}><h3>${ssrInterpolate(`${__props.question.index + 1}. ${__props.question.text}`)}</h3><fieldset><p class="guidance">${ssrInterpolate(__props.question.guidance)}</p><!--[-->`);
      ssrRenderList(__props.question.answers, (answer, answerIndex) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          answer,
          isChecked: unref(compliance)[__props.question.index] === answerIndex,
          key: answer.id,
          onClick: onClick(answerIndex)
        }, null, _parent));
      });
      _push(`<!--]--></fieldset></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data/v0.2/Question.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const style = "";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  setup(__props) {
    setQuestions(questions);
    const getFullAspect = (aspect) => {
      return {
        F: "Findable",
        A: "Accessible",
        I: "Interoperable",
        R: "Reusable"
      }[aspect];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}><h1>ARDC FAIR for data self-assessment checklist</h1><p>Switch to the checklist for `);
      _push(ssrRenderComponent(_sfc_main$4, { href: "/ssg/software/v0.2" }, {
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
      _push(` instead.</p>`);
      if (unref(nQuestions).total > 0) {
        _push(`<!--[--><p>Answer the ${ssrInterpolate(unref(nQuestions).total)} questions below to assess your data&#39;s FAIRness.</p><!--[-->`);
        ssrRenderList(["F", "A", "I", "R"], (aspect) => {
          _push(`<div class="aspect"><h2>${ssrInterpolate(getFullAspect(aspect))}</h2><!--[-->`);
          ssrRenderList(unref(questions$1).filter((q) => q.aspect === aspect), (question) => {
            _push(ssrRenderComponent(_sfc_main$1, {
              key: question.id,
              question
            }, null, _parent));
          });
          _push(`<!--]--><p>${ssrInterpolate(getFullAspect(aspect))} state:</p>`);
          if (aspect === "F") {
            _push(ssrRenderComponent(ProgressBar, {
              progress: unref(progress).f
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (aspect === "A") {
            _push(ssrRenderComponent(ProgressBar, {
              progress: unref(progress).a
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (aspect === "I") {
            _push(ssrRenderComponent(ProgressBar, {
              progress: unref(progress).i
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (aspect === "R") {
            _push(ssrRenderComponent(ProgressBar, {
              progress: unref(progress).r
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="overall-progress"><h2>FAIR state overall:</h2>`);
        _push(ssrRenderComponent(ProgressBar, {
          progress: unref(progress).overall
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!--[--> Loading questions data... <!--]-->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data/v0.2/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
