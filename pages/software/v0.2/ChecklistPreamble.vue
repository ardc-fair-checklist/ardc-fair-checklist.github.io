<template>
    <div>
        <h2>How to use this page</h2>
        <p>
            If you are a research software author, please answer the questions below to
            assess your software's FAIRness. As you go through them, the progress bars at
            the bottom of the screen will update according to your answers. When you're done
            with the questions, copy the badge at the bottom of the page and put it in your
            software's README.
            <span v-if="showCollapsedHowtouse"
                v-bind:tabindex="showCollapsedHowtouse ? 0 : -1"
                v-on:click="expandHowtouse"
                v-on:keydown.enter="expandHowtouse"
                class="anchor-like"
            >
                Read more.
            </span>
        </p>
        <div
            class="expands"
            v-bind:class="{expanded: showExpandedHowtouse, collapsed: showCollapsedHowtouse}"
        >
            This way, you
            <ol>
                <li>
                    <i>Promote transparency</i>: the badge links back to this page, and
                    contains the required data to check the appropriate answers. This way,
                    users of your software can easily get an idea of the FAIRness state of
                    the project.
                </li>
                <li>
                    <i>Discover best practices</i>: as you go through the questions, you may
                    learn about practices to improve FAIRness that you were not aware of
                    previously.
                </li>
                <li>
                    <i>Become an ambassador of FAIR</i>: By putting the badge in your
                    README, your project will help promote the previous 2 aspects.
                </li>
            </ol>
            <p>
                The questions are inspired by the outcomes of the FAIR4RS Working Group (see
                <a href="https://doi.org/10.15497/RDA00068" target="_blank" v-bind:tabindex="showCollapsedHowtouse ? -1 : 0">
                doi:10.15497/RDA00068</a>). We gratefully acknowledge their contribution. <span
                    v-bind:tabindex="showCollapsedHowtouse ? -1 : 0"
                    v-on:click="collapseHowtouse"
                    v-on:keydown.enter="collapseHowtouse"
                    class="anchor-like"
                >
                    Collapse this section.
                </span>
            </p>
        </div>
        <h2>Definitions</h2>
        <p>
            For the questions that follow, it is helpful to specify what we
            mean by "the software". Our recommendation is to interpret that
            phrase as "a specific copy of a specific version of your software-as-a-concept".
            <span v-if="showCollapsedDefinitions">
                For many projects,...
                <span
                    v-bind:tabindex="showCollapsedDefinitions ? 0 : -1"
                    v-on:click="expandDefinitions"
                    v-on:keydown.enter="expandDefinitions"
                    class="anchor-like"
                >
                    Read more.
                </span>
            </span>
        </p>
        <div
            class="expands"
            v-bind:class="{expanded: showExpandedDefinitions, collapsed: showCollapsedDefinitions}">
            <p>
                For many projects, the
                specific copy will be some kind of nested directory tree structure with files
                and folders, simply what would result from a <code>git clone</code> or <code>svn
                checkout</code>, or perhaps from uncompressing a
                <code>zip</code> or a <code>tar</code> file. Some files in the tree will be
                source files that define the software's functional behavior, these are
                collectively referred to as the software source files. The other files are
                metadata files that come bundled with the software:
            </p>
            <img
                src="/venn-the-software.svg"
                alt="venn diagram showing the definition of software"
            />
            <p>
                The metadata includes files that are meant to be read by humans, such
                as READMEs, documentation files, source files for documentation, image files,
                etc. The metadata may additionally include files that are meant to be read by
                machines, such as package manager files (e.g. <code>package.json</code>,
                <code>pyproject.toml</code>, <code>DESCRIPTION</code>,
                <code>CMakeLists.txt</code>, <code>setup.cfg</code>, etc.), citation files (e.g.
                <code>CITATION.cff</code>, <code>codemeta.json</code>), publishing files
                (<code>.zenodo.json</code>), etc.
            </p>
            <p>
                Any additional data that may be gotten from
                APIs (for example the GitHub, GitLab, Zenodo, PyPI, CRAN, or NPM API) should not
                be considered metadata for the purposes of this checklist.
                <span
                    v-bind:tabindex="showCollapsedDefinitions ? -1 : 0"
                    v-on:click="collapseDefinitions"
                    v-on:keydown="collapseDefinitions"
                    class="anchor-like"
                >
                    Collapse this section.
                </span>
            </p>
        </div>
        <p>
            Let's get started!
        </p>
        <div class="vspace"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
</script>

<style scoped>
h2 {
    color: var(--white);
    font-size: 1.2em;
}
li {
    padding-bottom: 0.5em;
    padding-top: 0.5em;
}

span.anchor-like {
    text-decoration: underline;
    text-underline-offset: 0.3em;
    color: #71caff;
}

span.anchor-like:hover {
    color: var(--white);
}
div.vspace {
    height: 1.5em
}
img {
    width: 50%;
    padding-left: 25%;
    padding-right: 25%;
    margin-bottom: 2em;
    margin-top: 2em;
}
.expands {
    overflow: hidden;
    opacity: 0;
    max-height: 0;
}
.expanded {
    max-height: 200em;
    opacity: 1;
    transition: max-height 2s ease,
                opacity 1s ease;
}
.collapsed {
    max-height: 0;
    opacity: 0;
    transition: max-height 0.75s ease,
                opacity 0.2s ease;
}

</style>
