<template>
    <main>
        <h1>ARDC FAIR for data self-assessment checklist</h1>
        <p>Switch to the checklist for <Link v-bind:href="linkToSoftwareChecklist">software</Link> instead.</p>
        <BannerVersions />
        <template v-if="nQuestions.total > 0">
            <p>Answer the {{ nQuestions.total }} questions below to assess your data's FAIRness.</p>
            <div v-for="aspect in ['F', 'A', 'I', 'R']">
                <h2>{{ getAspectFullname(aspect) }}</h2>
                <Question v-for="question in questions.filter(q => q.aspect === aspect)"
                    v-bind:key="question.id"
                    v-bind:question="question"
                />
            </div>
            <ProgressBars
                v-bind:progress="progress"
                v-bind:onClick="() => {}"
                v-bind:showButton="false"
            />
            <About />
        </template>
        <template v-else>
            Loading questions data...
        </template>
    </main>
</template>

<script setup lang="ts">
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
const linkToSoftwareChecklist = `${import.meta.env.BASE_URL}software/v0.2`
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
