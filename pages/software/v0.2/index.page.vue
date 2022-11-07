<template>
    <main>
        <h1>ARDC FAIR for software self-assessment checklist</h1>
        <p>Switch to the checklist for <Link v-bind:href="linkToDataChecklist">data</Link> instead.</p>
        <Banner />
        <template v-if="nQuestions.total > 0">
            <p>Answer the {{ nQuestions.total }} questions below to assess your software's FAIRness.</p>
            <div class="aspect" v-for="aspect in ['F', 'A', 'I', 'R']" >
                <h2 class="aspect">{{ getAspectFullname(aspect) }}</h2>
                <Question v-for="question in questions.filter(q => q.aspect === aspect)"
                    v-bind:key="question.id"
                    v-bind:question="question"
                />
                <p>{{ getAspectFullname(aspect) }} state:</p>
                <ProgressBar v-if="aspect==='F'" v-bind:progress="progress.f"/>
                <ProgressBar v-if="aspect==='A'" v-bind:progress="progress.a"/>
                <ProgressBar v-if="aspect==='I'" v-bind:progress="progress.i"/>
                <ProgressBar v-if="aspect==='R'" v-bind:progress="progress.r"/>
            </div>
            <div class="overall-progress">
                <h2>FAIR state overall:</h2>
                <ProgressBar v-bind:progress="progress.overall"/>
            </div>
            <Badge />
            <Footer />
        </template>
        <template v-else>
            Loading questions data...
        </template>
    </main>
</template>

<script setup lang="ts">
import Badge from './Badge.vue'
import Banner from './Banner.vue'
import Footer from './Footer.vue'
import Link from '~/renderer/Link.vue'
import ProgressBar from './ProgressBar.vue';
import Question from './Question.vue'
import { setQuestions, nQuestions, type QuestionType, progress, questions } from './store'
import './style.css'
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
</style>
