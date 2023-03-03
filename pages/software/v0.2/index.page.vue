<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <ChecklistHeader />
        <main>
            <h1>Self-assessment checklist for FAIR software</h1>
            <ChecklistBannerWIP />
            <ChecklistBannerVersions />
            <ChecklistBannerParams />
            <template v-if="nQuestions.total > 0">
                <p>
                    Answer the questions below to assess
                    your software's FAIRness, or switch to the checklist for
                    <ChecklistLink v-bind:href="linkToDataChecklist">data</ChecklistLink>
                    instead.
                </p>
                <div class="vspace"></div>
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

div.vspace {
    height: 3em
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
