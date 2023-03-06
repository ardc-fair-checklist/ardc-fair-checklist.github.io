<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <ChecklistHeader />
        <main>
            <h1>Self-assessment for FAIR research software</h1>
            <p>
                For the data variant, click
                <ChecklistLink v-bind:href="linkToDataChecklist">here</ChecklistLink>.
            </p>
            <ChecklistBannerWIP />
            <ChecklistBannerVersions />
            <ChecklistBannerParams />
            <h2>How to use this checklist</h2>
            <div class="preamble">
                <p>
                    If you are a research software author, please answer the questions below to
                    assess your software's FAIRness. As you go through them, the progress bars at
                    the bottom of the screen will update according to your answers. When you're done
                    with the questions, copy the badge at the bottom of the page and put it in your
                    software's README.
                </p>
                <p>
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
                </p>
                <p>
                    The questions are inspired by the outcomes of the FAIR4RS Working Group (see
                    <a href="https://doi.org/10.15497/RDA00068">doi:10.15497/RDA00068</a>). We
                    gratefully acknowledge their contribution.
                </p>
                <p>
                    Let's get started!
                </p>
            </div>
            <div class="vspace"></div>
            <template v-if="nQuestions.total > 0">
                <div v-for="principle in principles" v-bind:key="principle">
                    <h2>{{ getFullname(principle) }}</h2>
                    <p class="principle-quote">{{ getQuote(principle) }}</p>
                    <ChecklistQuestion
                        v-for="question in questions.filter(q => q.principle === principle)"
                        v-bind:key="question.id"
                        v-bind:question="question"
                    />
                </div>
                <ChecklistProgressBars
                    v-bind:progress="progress"
                    v-bind:onClick="scrollToBadgesSection"
                    v-bind:disableButton="disableButton"
                />
                <ChecklistBadgeSnippets id="badges-section"/>
                <ChecklistAbout />
            </template>
            <template v-else>
                Loading questions data...
            </template>
        </main>
    </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { latest } from '~/renderer/versions';
import { fairQueryParams } from './store';
import { nQuestions } from './store';
import { principles } from './store';
import { progress } from './store';
import { questions } from './store';
import { setQuestions } from './store';
import { type Principle } from './types';
import { type Question } from './types';
import ChecklistAbout from './ChecklistAbout.vue';
import ChecklistBadgeSnippets from './ChecklistBadgeSnippets.vue';
import ChecklistBannerParams from './ChecklistBannerParams.vue';
import ChecklistBannerVersions from './ChecklistBannerVersions.vue';
import ChecklistBannerWIP from './ChecklistBannerWIP.vue';
import ChecklistHeader from './ChecklistHeader.vue';
import ChecklistLink from './ChecklistLink.vue';
import ChecklistProgressBars from './ChecklistProgressBars.vue';
import ChecklistQuestion from './ChecklistQuestion.vue';
import { questions as data } from './questions.json';
import '~/renderer/global.css';
import './app.css';

setQuestions(data as Question[]);

const disableButton = ref(false);

const getFullname = (principle: Principle) => ({
    f: 'Findable',
    a: 'Accessible',
    i: 'Interoperable',
    r: 'Reusable'
}[principle]);
const getQuote = (principle: Principle) => ({
    f: 'The first step in reusing software is to discover that it exists in the first place.',
    a: 'In order to reuse software, one must have access to it.',
    i: 'Software must interact with data and other software to maximize its potential.',
    r: 'Software should be usable and reusable.'
}[principle]);
const scrollToBadgesSection = () => {
    document.getElementById('badges-section')?.scrollIntoView({ behavior: 'smooth' });
};
onMounted(() => {
    window.onscroll = () => {
        const elementInViewport = (rect: DOMRect) => {
            const conditions = [
                rect.top >= 0,
                rect.left >= 0,
                rect.right <= (window.innerWidth || document.documentElement.clientWidth),
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ];
            return conditions.every(e => e);
        };
        const elem = document.getElementById('badges-section');
        if (elem !== undefined && elem !== null) {
            const rect = elem.getBoundingClientRect();
            disableButton.value = elementInViewport(rect);
        }
    };
    window.onbeforeunload = () => {
        const preserve = [
            window.location.origin,
            window.location.pathname,
            `?${fairQueryParams.value}`
        ].join('');
        window.history.pushState({}, '', preserve);
    };
});

const linkToDataChecklist = `${import.meta.env.BASE_URL}data/${latest.value.data}`;
</script>

<style scoped>
main {
    min-width: 30em;
    max-width: 50em;
    margin-left: auto;
    margin-right: auto;
    color: var(--white);
}
@media screen and (min-width: 70em) {
    main {
        padding-left: 3em;
        padding-right: 3em;
    }
}
@media screen and (max-width: 70em) {
    main {
        padding-left: 3em;
        padding-right: 3em;
    }
}
@media screen and (max-width: 41.5em) {
    main {
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
}
h1 {
    line-height: 1.2em;
    margin-top: 1em;
}
h2 {
    width: 40%;
    color: var(--white);
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
div.preamble {
    margin-left: 4em;
    margin-right: 4em;
    text-align: justify;
}
div.preamble li {
    padding-bottom: 0.5em;
    padding-top: 0.5em;
}
div.vspace {
    height: 1em
}

div.preamble a {
    text-underline-offset: 0.3em;
    color: #71caff;
}

div.preamble a:hover {
    color: var(--white);
}

p.principle-quote {
    font-size: 1.3em;
    font-style: italic;
    margin-bottom: 1.5em;
    margin-left: 4em;
    margin-right: 4em;
    text-align: center;
}

p.principle-quote:before {
    content: open-quote;
}
p.principle-quote:after {
    content: close-quote;
}
</style>
