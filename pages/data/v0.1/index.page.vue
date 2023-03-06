<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <ChecklistHeader />
        <main>
            <h1>Self-assessment for FAIR data</h1>
            <p>
                For the research software variant, click
                <ChecklistLink v-bind:href="linkToSoftwareChecklist">here</ChecklistLink>.
            </p>
            <ChecklistBannerWIP />
            <ChecklistBannerVersions />
            <template v-if="nQuestions.total > 0">
                <p>
                    Answer the questions below to assess your data's FAIRness.
                </p>
                <div v-for="principle in principles" v-bind:key="principle">
                    <h2>{{ getFullname(principle) }}</h2>
                    <ChecklistQuestion
                        v-for="question in questions.filter(q => q.principle === principle)"
                        v-bind:key="question.id"
                        v-bind:question="question"
                    />
                </div>
                <ChecklistProgressBars
                    v-bind:progress="progress"
                />
                <ChecklistAbout />
            </template>
            <template v-else>
                Loading questions data...
            </template>
        </main>
    </div>
</template>

<script setup lang="ts">
import { principles } from './store';
import { latest } from '~/renderer/versions';
import { nQuestions } from './store';
import { progress } from './store';
import { questions } from './store';
import { setQuestions } from './store';
import { type Principle } from './types';
import { type Question } from './types';
import ChecklistAbout from './ChecklistAbout.vue';
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

const getFullname = (principle: Principle) => ({
    f: 'Findable',
    a: 'Accessible',
    i: 'Interoperable',
    r: 'Reusable'
}[principle]);
const linkToSoftwareChecklist = `${import.meta.env.BASE_URL}software/${latest.value.software}`;
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
    border-bottom: 2px solid var(--white);
    width: 40%;
    color: var(--white);
    margin-bottom: 1.5em;
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 10px;
    text-align: center;
}
</style>
