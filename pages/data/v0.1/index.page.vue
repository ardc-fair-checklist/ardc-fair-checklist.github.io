<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <ChecklistHeader />
        <main>
            <h1>FAIR for data self-assessment checklist</h1>
            <BannerVersions />
            <template v-if="nQuestions.total > 0">
                <p>
                    Answer the {{ nQuestions.total }} questions below to assess
                    your data's FAIRness, or switch to the checklist for
                    <ChecklistLink v-bind:href="linkToSoftwareChecklist">software</ChecklistLink>
                    instead.
                </p>
                <div v-for="aspect in aspects" v-bind:key="aspect">
                    <h2>{{ getAspectFullname(aspect) }}</h2>
                    <ChecklistQuestion
                        v-for="question in questions.filter(q => q.aspect === aspect)"
                        v-bind:key="question.id"
                        v-bind:question="question"
                    />
                </div>
                <ProgressBars
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
import { latest } from '~/renderer/versions';
import { aspects } from './store';
import { nQuestions } from './store';
import { progress } from './store';
import { questions } from './store';
import { questions as data } from './questions.json';
import { setQuestions } from './store';
import { type Aspect } from './types';
import { type Question } from './types';
import ChecklistAbout from './ChecklistAbout.vue';
import BannerVersions from './BannerVersions.vue';
import ChecklistHeader from './ChecklistHeader.vue';
import ChecklistLink from './ChecklistLink.vue';
import ProgressBars from './ProgressBars.vue';
import ChecklistQuestion from './ChecklistQuestion.vue';
import '~/renderer/global.css';
import './app.css';

setQuestions(data as Question[]);

const getAspectFullname = (aspect: Aspect) => ({
    f: 'Findable',
    a: 'Accessible',
    i: 'Interoperable',
    r: 'Reusable'
}[aspect]);
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
