import { H as ref, I as computed, d as defineComponent, u as openBlock, t as createElementBlock, v as createBaseVNode, G as toDisplayString, D as pushScopeId, E as popScopeId, o as onMounted, C as unref, L as createCommentVNode, F as Fragment, J as renderList, K as createBlock, x as createTextVNode, y as createVNode, z as withCtx } from "../../../chunk-376a9fed.js";
import { _ as _export_sfc } from "../../../chunk-de093346.js";
import { _ as _imports_0, a as _imports_1 } from "../../../chunk-5b637298.js";
import { _ as _sfc_main$7 } from "../../../chunk-70756e11.js";
import { u as useCssVars } from "../../../chunk-5a244714.js";
import "../../../chunk-89e65c56.js";
const state = ref({
  bannerMessage: "",
  compliance: [],
  questions: []
});
const bannerMessage = computed(() => state.value.bannerMessage);
const compliance = computed(() => state.value.compliance);
const questions$1 = computed(() => state.value.questions);
const setBannerMessage = (msg) => state.value.bannerMessage = msg;
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
const nAnswers = computed(() => {
  const numbers = questions$1.value.map((q) => q.answers.length);
  return {
    f: numbers.slice(...slices.value.f),
    a: numbers.slice(...slices.value.a),
    i: numbers.slice(...slices.value.i),
    r: numbers.slice(...slices.value.r)
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
const fairQueryParams = computed(() => {
  return [
    `f=${state.value.compliance.slice(...slices.value.f).map((elem) => elem.toString()).join("")}`,
    `a=${state.value.compliance.slice(...slices.value.a).map((elem) => elem.toString()).join("")}`,
    `i=${state.value.compliance.slice(...slices.value.i).map((elem) => elem.toString()).join("")}`,
    `r=${state.value.compliance.slice(...slices.value.r).map((elem) => elem.toString()).join("")}`
  ].join("&");
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
const _withScopeId$1 = (n) => (pushScopeId("data-v-cb44f43b"), n = n(), popScopeId(), n);
const _hoisted_1$6 = { class: "badge" };
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", null, "Get the badge", -1));
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "Markdown", -1));
const _hoisted_4$1 = {
  readonly: "",
  wrap: "off"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "ReStructured Text", -1));
const _hoisted_6 = {
  readonly: "",
  wrap: "off"
};
const _hoisted_7 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "HTML", -1));
const _hoisted_8 = {
  readonly: "",
  wrap: "off"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  setup(__props) {
    const APP_BASE_URL = `https://ardc-fair-checklist.github.io${"/"}`;
    const badge = {
      html: computed(() => `<a href="${APP_BASE_URL}software/v0.2?${fairQueryParams.value}">
  <img src="${APP_BASE_URL}badge.svg" alt="FAIR checklist badge">
</a>`),
      markdown: computed(() => `[![FAIRness badge image](${APP_BASE_URL}badge.svg)](${APP_BASE_URL}software/v0.2?${fairQueryParams.value})`),
      rst: computed(() => `.. image:: ${APP_BASE_URL}badge.svg
   :target: ${APP_BASE_URL}software/v0.2?${fairQueryParams.value}
   :alt: FAIR checklist badge`)
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        _hoisted_2$5,
        _hoisted_3$4,
        createBaseVNode("textarea", _hoisted_4$1, toDisplayString(badge.markdown.value), 1),
        _hoisted_5,
        createBaseVNode("textarea", _hoisted_6, toDisplayString(badge.rst.value) + " ", 1),
        _hoisted_7,
        createBaseVNode("textarea", _hoisted_8, toDisplayString(badge.html.value), 1)
      ]);
    };
  }
});
const Badge_vue_vue_type_style_index_0_scoped_cb44f43b_lang = "";
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-cb44f43b"]]);
const _hoisted_1$5 = {
  key: 0,
  class: "banner"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  setup(__props) {
    onMounted(() => {
      const chooseBannerMessage = (params) => {
        const checkAspect = (aspect) => {
          if (Object.keys(params).includes(aspect)) {
            if (params[aspect].length !== nQuestions.value[aspect]) {
              return `Query parameter '${aspect}' does not have the right number of elements (${nQuestions.value[aspect]})`;
            }
            if (/^[0-9]+$/.test(params[aspect]) === false) {
              return `Query parameter '${aspect}' includes unknown character`;
            }
            const supplied = params[aspect].split("").map((c) => parseInt(c, 10));
            return supplied.map((iAnswer, index) => {
              if (iAnswer >= nAnswers.value[aspect][index]) {
                return `Query parameter '${aspect}' has out-of-range value on position ${index}`;
              } else {
                return "";
              }
            }).filter((msg) => msg !== "").join("; ");
          }
          return "";
        };
        if (params === void 0 || Object.keys(params).length === 0) {
          return "";
        }
        const aspects = ["f", "a", "i", "r"];
        const hasAllAspects = aspects.map((aspect) => Object.keys(params).includes(aspect)).every((e) => e);
        if (!hasAllAspects) {
          return `When using query parameters, include 'f', 'a', 'i', and 'r'`;
        }
        return aspects.map((aspect) => checkAspect(aspect)).filter((msg) => msg !== "").join("; ");
      };
      let queryParams = {};
      const mySearchParams = new URLSearchParams(window.location.search);
      for (const [k, v] of mySearchParams.entries()) {
        if (k === "f") {
          queryParams.f = v;
        }
        if (k === "a") {
          queryParams.a = v;
        }
        if (k === "i") {
          queryParams.i = v;
        }
        if (k === "r") {
          queryParams.r = v;
        }
      }
      const zeros = Array(nQuestions.value.total).fill(0);
      if (queryParams === void 0 || Object.keys(queryParams).length === 0) {
        setCompliance(zeros);
      } else {
        const msg = chooseBannerMessage(queryParams);
        setBannerMessage(msg);
        if (msg === "") {
          const { f, a, i, r } = queryParams;
          const compl = f + a + i + r;
          setCompliance(compl.split("").map((char) => parseInt(char, 10)));
        } else {
          setCompliance(zeros);
        }
      }
    });
    return (_ctx, _cache) => {
      return unref(bannerMessage) !== "" ? (openBlock(), createElementBlock("div", _hoisted_1$5, toDisplayString(unref(bannerMessage)), 1)) : createCommentVNode("", true);
    };
  }
});
const Banner_vue_vue_type_style_index_0_scoped_d4ffcff8_lang = "";
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d4ffcff8"]]);
const _sfc_main$4 = {};
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("div", { class: "logos" }, [
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
], -1);
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("p", null, " This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons. ", -1);
const _hoisted_3$3 = [
  _hoisted_1$4,
  _hoisted_2$4
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, _hoisted_3$3);
}
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
const _withScopeId = (n) => (pushScopeId("data-v-580e5af2"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "outer" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, null, -1));
const _hoisted_3$2 = [
  _hoisted_2$3
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProgressBar",
  props: {
    progress: null
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "4e49e693": __props.progress
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$2);
    };
  }
});
const ProgressBar_vue_vue_type_style_index_0_scoped_580e5af2_lang = "";
const ProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-580e5af2"]]);
const _hoisted_1$2 = { class: "answer" };
const _hoisted_2$2 = ["id", "value", "checked"];
const _hoisted_3$1 = ["for"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Answer",
  props: {
    answer: null,
    isChecked: { type: Boolean },
    onClick: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("input", {
          type: "radio",
          id: __props.answer.id,
          value: __props.answer.id,
          checked: __props.isChecked,
          onClick: _cache[0] || (_cache[0] = (...args) => __props.onClick && __props.onClick(...args))
        }, null, 8, _hoisted_2$2),
        createBaseVNode("label", {
          for: __props.answer.id
        }, "(+" + toDisplayString(__props.answer.score) + ") " + toDisplayString(__props.answer.text), 9, _hoisted_3$1)
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "question" };
const _hoisted_2$1 = { class: "guidance" };
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
        createBaseVNode("h3", null, toDisplayString(`${__props.question.index + 1}. ${__props.question.text}`), 1),
        createBaseVNode("fieldset", null, [
          createBaseVNode("p", _hoisted_2$1, toDisplayString(__props.question.guidance), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.question.answers, (answer, answerIndex) => {
            return openBlock(), createBlock(_sfc_main$2, {
              answer,
              isChecked: unref(compliance)[__props.question.index] === answerIndex,
              key: answer.id,
              onClick: onClick(answerIndex)
            }, null, 8, ["answer", "isChecked", "onClick"]);
          }), 128))
        ])
      ]);
    };
  }
});
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
        text: "Local identifier or reasonably unique name"
      },
      {
        id: "F:q0:a2",
        score: 2,
        text: "Web address (URL)"
      },
      {
        id: "F:q0:a3",
        score: 3,
        text: "Globally unique and persistent identifier (e.g. DOI, PURL, or Handle)"
      }
    ],
    aspect: "F",
    guidance: "A uniquely named piece of software is not the same as an identifier as it might be linked to a registry or programming language. A Uniform Resource Locator (URL) is a kind of unique identifier, but might not be persistent.",
    id: "F:q0",
    principle: "F1. Software is assigned a globally unique and persistent identifier",
    text: "Does the software have any identifier assigned?"
  },
  {
    answers: [
      {
        id: "F:q1:a0",
        score: 0,
        text: "No identifier"
      },
      {
        id: "F:q1:a1",
        score: 1,
        text: "There is only one identifier for the entire bundle/package"
      },
      {
        id: "F:q1:a2",
        score: 2,
        text: "Some components have distinct identifiers"
      },
      {
        id: "F:q1:a3",
        score: 3,
        text: "Each component has a PID with reference to a top level PID"
      }
    ],
    aspect: "F",
    guidance: "A persistent identifier (PID) like a DOI, PURL or Handle has the following characteristics: globally unique, citable and persistent. The granularity is decided for each software and its maturity.",
    id: "F:q1",
    principle: "F1.1. Different components of the software are assigned distinct identifiers representing different levels of granularity",
    text: "Are different components of the software assigned distinct identifiers representing different levels of granularity?"
  },
  {
    answers: [
      {
        id: "F:q2:a0",
        score: 0,
        text: "No identifier"
      },
      {
        id: "F:q2:a1",
        score: 1,
        text: "Each major version (version X) is assigned an identifier"
      },
      {
        id: "F:q2:a2",
        score: 2,
        text: "available versions distinctly identified"
      }
    ],
    aspect: "F",
    guidance: "Version is one of the granularity levels identified as most relevant. Depending on the maturity of the software development, not only major versions but minor and point versions are also encouraged. For example: - each minor version (version X.Y) is assigned an identifier - Each point version (version X.Y.Z) is assigned an identifier",
    id: "F:q2",
    principle: "F1.2. Different versions of the same software are assigned distinct identifiers.",
    text: "Are different versions of the same software identified?"
  },
  {
    answers: [
      {
        id: "F:q3:a0",
        score: 0,
        text: "The software is not described with any metadata"
      },
      {
        id: "F:q3:a1",
        score: 1,
        text: "The software has a title and a brief description"
      },
      {
        id: "F:q3:a2",
        score: 2,
        text: "Title, description, and multiple fields are provided, albeit informally (not using a standard format)"
      },
      {
        id: "F:q3:a3",
        score: 3,
        text: "Described comprehensively using a formal machine-readable metadata schema "
      }
    ],
    aspect: "F",
    guidance: "See also Interoperable and Reusable for specific questions about relationships between objects, and about specific kinds of metadata. Rich metadata constitutes a plurality of attributes (for R1): (e.g. name, version, contributors roles, programming language, description of the purpose, science domain, key words, licence, PID, related identifiers) Examples of formal machine-readable metadata schemas are (e.g. Citation.CFF, .zenodo.json, codemeta.jsonld)",
    id: "F:q3",
    principle: "F2. Software is described with rich metadata.",
    text: "Is the software described with rich metadata?"
  },
  {
    answers: [
      {
        id: "F:q4:a0",
        score: 0,
        text: "No metadata"
      },
      {
        id: "F:q4:a1",
        score: 1,
        text: "Metadata does not include an identifier for the software"
      },
      {
        id: "F:q4:a2",
        score: 2,
        text: "The identifier is captured in the metadata that describes the software"
      }
    ],
    aspect: "F",
    guidance: "The identifier is recommended to be globally unique and persistent. Those features enable citability. F3 calls for that identifier to be included within the metadata record that the identifier points to",
    id: "F:q4",
    principle: "F3. Metadata clearly and explicitly include the identifier of the software they describe.",
    text: "Is the identifier included in the metadata that describes the software?"
  },
  {
    answers: [
      {
        id: "F:q5:a0",
        score: 0,
        text: "No metadata"
      },
      {
        id: "F:q5:a1",
        score: 1,
        text: "Metadata is not structured"
      },
      {
        id: "F:q5:a2",
        score: 2,
        text: "Metadata might be searchable and indexable but not FAIR"
      },
      {
        id: "F:q5:a3",
        score: 3,
        text: "Metadata is structured in a FAIR way"
      }
    ],
    aspect: "F",
    guidance: "Many of the questions here relate to making the metadata associated with software FAIR. Principles F2, F3, A2, R1, and R2 all relate to making the metadata associated with software FAIR. Here the focus is on that metadata being captured in a way that enables searching and indexing of that metadata. For instance, a codemeta file may hold the relevant metadata, but if it is not exposed (or integrated) in a way that enables indexing, then it will not fulfil this criterion. Here this consideration is not just that the metadata exists, but also that it is available in a system that enables it to be FAIR.",
    id: "F:q5",
    principle: "F4. Metadata are FAIR, and are searchable and indexable.",
    text: "Are metadata FAIR, searchable and indexable?"
  },
  {
    answers: [
      {
        id: "A:q0:a0",
        score: 0,
        text: "No access to software, or there are unspecified access conditions, or software is not retrievable by its identifier"
      },
      {
        id: "A:q0:a1",
        score: 1,
        text: "Software is retrieved via its identifier with defined access conditions, but access is closed or mediated by individual arrangement"
      },
      {
        id: "A:q0:a2",
        score: 2,
        text: "Stated minimal restrictions for software to be downloaded from an online location (e.g personal or group website or FTP server)"
      },
      {
        id: "A:q0:a3",
        score: 3,
        text: "Software can be retrieved from a publicly-accessible code development repository, package or library manager or software registry or archive"
      }
    ],
    aspect: "A",
    guidance: "Software is retrievable from: - a publicly-accessible code development repository (e.g. GitHub, GitLab, BitBucket, etc), - a package or library manager (e.g apt, CRAN, PyPI, etc), - a research software registry  (e.g. see this list), or - an archive.",
    id: "A:q0",
    principle: "A1. Software is retrievable by its identifier using a standardised communications protocol.",
    text: "Can the software be retrieved via its identifier using standardised protocols?"
  },
  {
    answers: [
      {
        id: "A:q1:a0",
        score: 0,
        text: "No metadata record exists"
      },
      {
        id: "A:q1:a1",
        score: 1,
        text: "Metadata exists, but is not accessible via an identifier"
      },
      {
        id: "A:q1:a2",
        score: 2,
        text: "Metadata is retrievable via an identifier"
      },
      {
        id: "A:q1:a3",
        score: 3,
        text: "And is machine readable"
      }
    ],
    aspect: "A",
    guidance: "Some formal machine-readable metadata schema exist specifically for software (e.g. Citation.CFF, .zenodo.json, codemeta.jsonld). Mechanisms for retrieving metadata include DataCite DOI metadata, encoding of metadata using schema.org on the page resolved to by the identifier, and retrieval via a package manager",
    id: "A:q1",
    principle: "A1. Software is retrievable by its identifier using a standardised communications protocol.",
    text: "Can metadata be retrieved via is identifier using standardised protocols?"
  },
  {
    answers: [
      {
        id: "A:q2:a0",
        score: 0,
        text: "No (e.g. a specialized client using a closed protocol might be required to download the software)"
      },
      {
        id: "A:q2:a1",
        score: 1,
        text: "Protocol is not open or free and allows for authentication and authorisation"
      },
      {
        id: "A:q2:a2",
        score: 2,
        text: "Protocol is open and free but does not allow for authentication and authorisation"
      },
      {
        id: "A:q2:a3",
        score: 3,
        text: "Yes"
      }
    ],
    aspect: "A",
    guidance: "This question refers to the combinations of these two principles [define protocol] [describe authentication and authorisation]",
    id: "A:q2",
    principle: "A1.1. The protocol is open, free, and universally implementable. A1.2. The protocol allows for an authentication and authorisation procedure, where necessary.",
    text: "Is the protocol open, free and universally implementable? and does it allow for authentication and autorisation procedures?"
  },
  {
    answers: [
      {
        id: "A:q3:a0",
        score: 0,
        text: "Not applicable, no metadata record exists"
      },
      {
        id: "A:q3:a1",
        score: 1,
        text: "No, metadata is lost if software is no longer accessible"
      },
      {
        id: "A:q3:a2",
        score: 2,
        text: "Unsure, whether the institution/registry provides this feature"
      },
      {
        id: "A:q3:a3",
        score: 3,
        text: "Yes"
      }
    ],
    aspect: "A",
    guidance: "Mostly a feature of the metadata registry",
    id: "A:q3",
    principle: "A2. Metadata are accessible, even when the software is no longer available.",
    text: "Are metadata accessible, even when the software is no longer available?"
  },
  {
    answers: [
      {
        id: "I:q0:a0",
        score: 0,
        text: "No Domain-relevant data input/output standard is implemented"
      },
      {
        id: "I:q0:a1",
        score: 1,
        text: "Standard data input/output"
      },
      {
        id: "I:q0:a2",
        score: 2,
        text: "Input/output meets domain-relevant standards"
      }
    ],
    aspect: "I",
    guidance: "A domain-relevant standard is an agreed standard that addresses the needs of a given community (or communities). For interoperation between software it is necessary that more than one software tool supports common standards for interchange. Ideally, related research software are capable of exchanging data or metadata because they all implement common standards. The way in which the data is transmitted might be via reading and writing files, or by passing arguments to an API and receiving responses. Barriers to meeting this guiding principle include a lack of relevant standards, a lack of community consensus on relevant standards, a lack of implementations of agreed upon standards. Work outside the software itself may need to be done before this guiding principle can be addressed.",
    id: "I:q0",
    principle: "I1. Software reads, writes and exchanges data in a way that meets domain-relevant community standards.",
    text: "Are the data written/read or exchanged by the software machine readable and in (an) open (file) format(s)?"
  },
  {
    answers: [
      {
        id: "I:q1:a0",
        score: 0,
        text: "There are no links to other metadata or data"
      },
      {
        id: "I:q1:a1",
        score: 1,
        text: "The metadata record includes URI links to related metadata, data and definitions"
      },
      {
        id: "I:q1:a2",
        score: 2,
        text: "Qualified links to other resources are recorded in a machine readable format"
      }
    ],
    aspect: "I",
    guidance: "I2. Software includes qualified references to other objects.",
    id: "I:q1",
    principle: "Software may utilise external data, metadata and other similar objects. Ideally, these should also be FAIR when possible. A qualified reference is a pointer to the other object, with a clear authority for resolving/confirming that identity given in the form of the reference. Ideally this is in a form that includes a resolver within the reference (e.g., in the form of a URL).",
    text: "How is the relationship to data and metadata described in the metadata and software? (see R:q4 for relationship to other software)"
  },
  {
    answers: [
      {
        id: "R:q0:a0",
        score: 0,
        text: "Non-accessible form"
      },
      {
        id: "R:q0:a1",
        score: 1,
        text: "Undocumented binary form"
      },
      {
        id: "R:q0:a2",
        score: 2,
        text: "Documented binary form"
      },
      {
        id: "R:q0:a3",
        score: 3,
        text: "Source code available in a repository and documented"
      },
      {
        id: "R:q0:a4",
        score: 4,
        text: "Source code available via a package manager or similar"
      }
    ],
    aspect: "R",
    guidance: "Specifically it considers reusability in the sense of software being understood, built upon or incorporated into other software, but not necessarily executed (again). Sensitivities may restrict access to the software. The form of the software or the way in which it is made available restricts the way in which it can be understood. A service may obscure all internal workings of the software if no alternate form is made available. A compiled binary form is not as easily pulled apart or understood as a source code representation. Binaries in some cases can be built upon or incorporated into other software, but this is especially the case when it the programming interface to that software is fully documented. Source code is the most straightforwardly interrogable form of software, but in some circumstances making this form available may not be possible, practical or desirable.",
    id: "R:q0",
    principle: "Reuseable: Software is both usable (it can be executed) and reusable (it can be understood, modified, built upon, or incorporated into other software).",
    text: "Can software be understood, modified, built upon, or incorporated into other software? Is software made available in a form that makes this easy to do? Links to A:q0"
  },
  {
    answers: [
      {
        id: "R:q1:a0",
        score: 0,
        text: "No, access to the binary or source code is not available"
      },
      {
        id: "R:q1:a1",
        score: 1,
        text: "Yes, a binary is available and it has an executable environment clearly described in order to execute the software"
      },
      {
        id: "R:q1:a2",
        score: 2,
        text: "Yes, the software is packaged with access to dependencies."
      }
    ],
    aspect: "R",
    guidance: "Specifically it considers reusability in the sense of software be able to be executed, not in the sense of it being understood, built upon or incorporated into other software. Factors affecting the executability of the software include documentation of configuration, dependencies and execution environment (software and hardware). These can be captured in a human readable format (such as text), but are ideally captured in a machine readable format as well. In some cases, it may be possible or desirable to make the software available in a packaged form to facilitate reuse. For example, an emulation environment where the software is run executable. Also a container where the software and its dependencies are all encapsulated. Or it could be that the software is made available via a package management system.",
    id: "R:q1",
    principle: "Reuseable: Software is both usable (it can be executed) and reusable (it can be understood, modified, built upon, or incorporated into other software).",
    text: "Is the software (re)executable? Can it easily be run (again)?"
  },
  {
    answers: [
      {
        id: "R:q2:a0",
        score: 0,
        text: "No license is attached"
      },
      {
        id: "R:q2:a1",
        score: 1,
        text: "Non-standard license is attached"
      },
      {
        id: "R:q2:a2",
        score: 2,
        text: "Machine-readable non-standard license"
      },
      {
        id: "R:q2:a3",
        score: 3,
        text: "Standard license"
      },
      {
        id: "R:q2:a4",
        score: 4,
        text: "Machine readable standard license"
      }
    ],
    aspect: "R",
    guidance: "Standard licenses are those that are widely recognised. Licences are often referred to by name, but machine readable licenses can be specified by reference to a standard vocabulary such as SPDX, or are encoded in a machine readable format such as RDF/XML in the metadata record for the software.  Ideally the license deed is available in the package or linked to by a standard URL. Note that Creative Commons licenses are not recommended for software.",
    id: "R:q2",
    principle: "R1.1. Software is given a clear and accessible licence.",
    text: "Which of the following best describes the license (usage rights) attached to the software?"
  },
  {
    answers: [
      {
        id: "R:q3:a0",
        score: 0,
        text: "No provenance detail given"
      },
      {
        id: "R:q3:a1",
        score: 1,
        text: "Partially recorded as human readable text"
      },
      {
        id: "R:q3:a2",
        score: 2,
        text: "Comprehensively recorded"
      },
      {
        id: "R:q3:a3",
        score: 3,
        text: "Comprehensively recorded in a machine readable format"
      }
    ],
    aspect: "R",
    guidance: 'Provenance answers the "who, what, when, where, why and how" for the development of the software. Providing detailed provenance gives a user the details they need to trust that the software will do what they expect it to do. This extends well beyond whether the software and its development over time has been captured in a version control system. A record of provenance captures information such as the people, their roles in making contributions, the resources committed (for instance grants, people-time, hardware), the time span of a project (or projects) focussed on the work,  the geographic location of the authors or their affiliations with organisations, the project objectives or intent in producing the software and the agreed upon process, systems and/or constraints (including changes in licensing) on the development of the software. All of this detail can help to interpret and understand how and why the software came to be, and to engender trust in reuse. A partial capture of provenance captures only some of this detail. This detail can also be comprehensive but not machine readable. Examples of machine readable provenance standards include PROV, and formats include RDF, JSON, NetCDF, XML, etc.',
    id: "R:q3",
    principle: "R1.2. Software is associated with detailed provenance.",
    text: "How much provenance information has been captured to facilitate software reuse? (e.g., project objectives, processes, authors, roles, contributions, use of other components)."
  },
  {
    answers: [
      {
        id: "R:q4:a0",
        score: 0,
        text: "Dependencies are expressed by name only, or not at all"
      },
      {
        id: "R:q4:a1",
        score: 1,
        text: "Dependencies named, but no version detail is provided"
      },
      {
        id: "R:q4:a2",
        score: 2,
        text: "The metadata record includes URI links to related software dependencies"
      },
      {
        id: "R:q4:a3",
        score: 3,
        text: "Qualified links to other software are recorded in a machine readable format"
      }
    ],
    aspect: "R",
    guidance: "A qualified reference is a pointer to an external object, with a clear authority for resolving/confirming that identity given in the form of the reference. Ideally this is in a form that includes a resolver within the reference (e.g., in the form of a URI). For software this would mean referring to other software via a resolvable, qualified permanent identifier. In metadata this is only possible when software is able to be referred to in this fashion. Not all software can be referred to in this way. A qualified reference in software is presently technically difficult or impossible in many languages, where conventional practice is to use a (unqualified) reference via a (possibly non-unique) name, possibly in combination with a version number.",
    id: "R:q4",
    principle: "R2. Software includes qualified references to other software.",
    text: "How is the relationship to software described in the metadata and software? (see I:q1 for relationship to other components such as data and metadata)"
  },
  {
    answers: [
      {
        id: "R:q5:a0",
        score: 0,
        text: "No standards looked for, or applied"
      },
      {
        id: "R:q5:a1",
        score: 1,
        text: "Looked for standards, but unclear or unavailable"
      },
      {
        id: "R:q5:a2",
        score: 2,
        text: "Uses domain-relevant standards"
      }
    ],
    aspect: "R",
    guidance: "Relevant research domains are determined by the intended user base of the software, not any possible community of use for a piece of software. A piece of software created to address the needs of a community should be aware of any standards put forward by that community or adjacent ones. Similarly, a piece of software (such as analysis code) which is intended to represent work done within a domain-community should also be aware of any standards put forward by that community or adjacent ones. Some examples of domain-relevant community standards are: (e.g. CoC, Credit to authors and collaborations, institutional standards, registry standards, nomenclature described within a community)",
    id: "R:q5",
    principle: "R3. Software meets domain-relevant community standards.",
    text: "If they exist, how much have domain-relevant community standards been considered in writing the software? it is linked to I:q0"
  }
];
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "ARDC FAIR for software self-assessment checklist", -1);
const _hoisted_2 = { class: "aspect" };
const _hoisted_3 = { class: "overall-progress" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", null, "FAIR state overall:", -1);
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
    const linkToDataChecklist = `${"/"}data/v0.2`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", null, [
        _hoisted_1,
        createBaseVNode("p", null, [
          createTextVNode("Switch to the checklist for "),
          createVNode(_sfc_main$7, { href: linkToDataChecklist }, {
            default: withCtx(() => [
              createTextVNode("data")
            ]),
            _: 1
          }),
          createTextVNode(" instead.")
        ]),
        createVNode(Banner),
        unref(nQuestions).total > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("p", null, "Answer the " + toDisplayString(unref(nQuestions).total) + " questions below to assess your software's FAIRness.", 1),
          (openBlock(), createElementBlock(Fragment, null, renderList(["F", "A", "I", "R"], (aspect) => {
            return createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h2", null, toDisplayString(getAspectFullname(aspect)), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(questions$1).filter((q) => q.aspect === aspect), (question) => {
                return openBlock(), createBlock(_sfc_main$1, {
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
            _hoisted_4,
            createVNode(ProgressBar, {
              progress: unref(progress).overall
            }, null, 8, ["progress"])
          ]),
          createVNode(Badge),
          createVNode(Footer)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(" Loading questions data... ")
        ], 64))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
