<template>
    <main>
        <h1>ARDC FAIR for software self-assessment checklist</h1>
        <p>Switch to the checklist for <Link v-bind:href="linkToDataChecklist">data</Link> instead.</p>
        <BannerVersions />
        <BannerParams />
        <template v-if="nQuestions.total > 0">
            <p>Answer the {{ nQuestions.total }} questions below to assess your software's FAIRness.</p>
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
                v-bind:showButton="showButton"
            />
            <Badge id="badges-section"/>
            <About />
        </template>
        <template v-else>
            Loading questions data...
        </template>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

const showButton = ref(false);

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
        function elementInViewport(rect: DOMRect) {
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
            showButton.value = elementInViewport(rect);
        }
    }
})

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
