<template>
    <div>
        <Header />
        <main>
            <h1>FAIR for software self-assessment checklist</h1>
            <BannerVersions />
            <BannerParams />
            <template v-if="nQuestions.total > 0">
                <p>Answer the {{ nQuestions.total }} questions below to assess your software's FAIRness, or switch to the checklist for <Link v-bind:href="linkToDataChecklist">data</Link> instead.</p>
                <div v-for="aspect in ['F', 'A', 'I', 'R']">
                    <h2>{{ getAspectFullname(aspect) }}</h2>
                    <Question v-for="question in questions.filter(q => q.aspect === aspect)"
                        v-bind:key="question.id"
                        v-bind:question="question"
                    />
                </div>
                <ProgressBars
                    v-bind:progress="progress"
                    v-bind:onClick="scrollToBadgesSection"
                    v-bind:disableButton="disableButton"
                />
                <BadgeSnippets id="badges-section"/>
                <About />
            </template>
            <template v-else>
                Loading questions data...
            </template>
        </main>
    </div>
</template>

<script setup lang="ts">
import { latest } from '~/renderer/versions'
import { nQuestions } from './store'
import { onMounted } from 'vue'
import { progress } from './store'
import { questions } from './store'
import { questions as data } from './questions.json'
import { ref } from 'vue'
import { setQuestions } from './store'
import { type QuestionType } from './store'
import About from './About.vue'
import BadgeSnippets from './BadgeSnippets.vue'
import BannerParams from './BannerParams.vue'
import BannerVersions from './BannerVersions.vue'
import Header from './Header.vue'
import Link from './Link.vue'
import ProgressBars from './ProgressBars.vue';
import Question from './Question.vue'
import '~/renderer/global.css'
import './app.css'

setQuestions(data as QuestionType[]);

const disableButton = ref(false);

const getAspectFullname = (aspect: string) => {
    return {
        F: "Findable",
        A: "Accessible",
        I: "Interoperable",
        R: "Reusable"
    }[aspect]
}
const scrollToBadgesSection = () => {
    document.getElementById("badges-section")?.scrollIntoView({behavior: "smooth"})
}
onMounted(() => {
    window.onscroll = () => {
        const elementInViewport = (rect: DOMRect) => {
            const conditions = [
                rect.top >= 0,
                rect.left >= 0,
                rect.right <= (window.innerWidth || document.documentElement.clientWidth),
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ]
            return conditions.every(e => e)
        }
        const elem = document.getElementById("badges-section")
        if (elem !== undefined && elem !== null) {
            const rect = elem.getBoundingClientRect();
            disableButton.value = elementInViewport(rect);
        }
    }
})

const linkToDataChecklist = `${import.meta.env.BASE_URL}data/${latest.value.data}`
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
