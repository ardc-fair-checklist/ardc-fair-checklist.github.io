<template>
    <main>
        <h1>ARDC FAIR for software self-assessment checklist</h1>
        <p>Switch to the checklist for <Link v-bind:href="linkToDataChecklist">data</Link> instead.</p>
        <BannerVersions />
        <BannerParams />
        <template v-if="nQuestions.total > 0">
            <p>Answer the {{ nQuestions.total }} questions below to assess your software's FAIRness.</p>
            <div class="aspect" v-for="aspect in ['F', 'A', 'I', 'R']" >
                <h2>{{ getAspectFullname(aspect) }}</h2>
                <Question v-for="question in questions.filter(q => q.aspect === aspect)"
                    v-bind:key="question.id"
                    v-bind:question="question"
                />
            </div>
            <ProgressBars v-bind:progress="progress" />
            <Badge />
            <About />
        </template>
        <template v-else>
            Loading questions data...
        </template>
    </main>
</template>

<script setup lang="ts">
import Badge from './Badge.vue'
import BannerParams from './BannerParams.vue'
import BannerVersions from './BannerVersions.vue'
import About from './About.vue'
import Link from './Link.vue'
import ProgressBars from './ProgressBars.vue';
import Question from './Question.vue'
import { setQuestions, nQuestions, type QuestionType, progress, questions } from './store'
import '~/renderer/global.css'
import './app.css'
import { questions as data } from './questions.json'

setQuestions(data as QuestionType[]);

const getAspectFullname = (aspect: string) => {
    return {
        F: "Findable",
        A: "Accessible",
        I: "Interoperable",
        R: "Reusable"
    }[aspect]
}
const linkToDataChecklist = `${import.meta.env.BASE_URL}data/v0.2`
</script>

<style scoped>
main {
    color: var(--white);
}
h1 {
    line-height: 1.2em;
    margin-top: 3em;
}
h2 {
    /*border-bottom: 2px solid var(--white);*/
    color: var(--white);
    /*margin-bottom: 2em;*/
    padding: 20px 10px;
    text-align: center;
}
.aspect {
    background-color: var(--dark);
    border-radius: 0.5em;
    border: 2px solid #444;
    color: var(--light);
    margin-bottom: 4em;
    padding-bottom: 1em;
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 1em;
}

@media screen and (max-width: 41.5em) {
    .aspect {
        padding-left: 1em;
        padding-right: 1em;
    }
}
</style>
