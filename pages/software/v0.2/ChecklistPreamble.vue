<template>
    <div class="preamble">
        <h2>How to use this checklist</h2>
        <p>
            If you are a research software author, please answer the questions below to
            assess your software's FAIRness. As you go through them, the progress bars at
            the bottom of the screen will update according to your answers. When you're done
            with the questions, copy the badge at the bottom of the page and put it in your
            software's README.
        </p>
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
            <a href="https://doi.org/10.15497/RDA00068">doi:10.15497/RDA00068</a>). We
            gratefully acknowledge their contribution.
        </p>
        <h2>Definitions</h2>
        <p v-if="showCollapsed">
            {{ txtShort }}...
            <span
                v-on:click="expand"
                class="anchor-like">
                Read more.
            </span>
        </p>
        <p v-if="showExpanded">
            {{ txtLong }}
            <span
                v-on:click="collapse"
                class="anchor-like">
                Collapse.
            </span>
        </p>
        <p>
            Let's get started!
        </p>
        <div class="vspace"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showCollapsed = ref(true);
const showExpanded = ref(false);
const expand = () => {
    showCollapsed.value = false;
    showExpanded.value = true;
};
const collapse = () => {
    showCollapsed.value = true;
    showExpanded.value = false;
};
const txtLong = `For this question and the questions that follow, it is helpful to specify what we mean
            by "the software and its metadata". Our recommendation is to interpret that phrase as "a
            specific copy of a specific version of your software-as-a-concept". For many projects,
            this will be some kind of nested directory tree structure with files and folders, simply
            what would result from a git clone or svn checkout, or perhaps
            from uncompressing a zip or a tar file. Some files in the tree
            will be source files that define functional behavior, these are collectively referred to
            as the software sources. The other files are the metadata. The metadata includes files
            that are meant to be read by humans, such as READMEs, documentation files, source files
            for documentation, image files, etc. The metadata may additionally include files that
            are meant to be read by machines, such as package manager files (e.g. package.json,
            pyproject.toml, DESCRIPTION, CMakeList.txt, setup.cfg, etc.), citation files (e.g.
            CITATION.cff, codemeta.json), publishing files (.zenodo.json), etc. Any additional data
            that may be gotten from APIs (for example the GitHub, GitLab, Zenodo, PyPI, CRAN, or NPM
            API) should not be considered metadata for the purposes of this checklist.`;
const txtShort = txtLong.slice(0, 281);
</script>

<style scoped>
h2 {
    /*width: 40%;*/
    color: var(--white);
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
div.preamble {
    margin-left: 4em;
    margin-right: 4em;
    /*text-align: justify;*/
}
li {
    padding-bottom: 0.5em;
    padding-top: 0.5em;
}

a, span.anchor-like {
    text-decoration: underline;
    text-underline-offset: 0.3em;
    color: #71caff;
}

a:hover, span.anchor-like:hover {
    color: var(--white);
}
div.vspace {
    height: 1em
}
</style>
