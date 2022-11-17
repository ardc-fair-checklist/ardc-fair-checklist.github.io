<template>
    <div class="banner" v-if="bannerMessage !== ''" >
        {{ bannerMessage }}
    </div>
</template>

<script setup lang="ts">
import { nAnswers } from './store'
import { nQuestions } from './store'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { setCompliance } from './store'

const bannerMessage = ref('');
onMounted(() => {
    const chooseBannerMessage = (params: Params) => {
        const checkAspect = (aspect: 'f' | 'a' | 'i' | 'r') => {
            if (Object.keys(params).includes(aspect)) {
                if (params[aspect].length !== nQuestions.value[aspect]) {
                    return `Query parameter '${aspect}' does not have the right number of elements (${nQuestions.value[aspect]})`
                }
                if (/^[0-9]+$/.test(params[aspect]) === false) {
                    return `Query parameter '${aspect}' includes unknown character`
                }
                const supplied = params[aspect].split('').map(c => parseInt(c, 10))
                return supplied.map((iAnswer, index) => {
                    if (iAnswer >= nAnswers.value[aspect][index]) {
                        return `Query parameter '${aspect}' has out-of-range value on position ${index}`
                    } else {
                        return ""
                    }
                }).filter(msg => msg !== "").join('; ')
            }
            return ""
        }
        if (params === undefined || Object.keys(params).length === 0 ) {
            return ""
        }
        const aspects: Aspect[] =  ['f', 'a', 'i', 'r']
        const hasAllAspects = aspects.map(aspect => Object.keys(params).includes(aspect)).every(e => e)
        if (!hasAllAspects) {
            return `When using query parameters, include 'f', 'a', 'i', and 'r'`
        }
        return aspects.map(aspect => checkAspect(aspect)).filter(msg => msg !== "").join('; ')
    }
    type Params = Record<string, string>
    type Aspect = 'f' | 'a' | 'i' | 'r';
    let queryParams = {} as {f?: string, a?: string, i?: string, r?: string};
    const mySearchParams = new URLSearchParams(window.location.search)
    for (const [k, v] of mySearchParams.entries()) {
        if (k === 'f') {
            queryParams.f = v
        }
        if (k === 'a') {
            queryParams.a = v
        }
        if (k === 'i') {
            queryParams.i = v
        }
        if (k === 'r') {
            queryParams.r = v
        }
    }
    const zeros = Array(nQuestions.value.total).fill(0)
    if (queryParams === undefined || Object.keys(queryParams).length === 0 ) {
        setCompliance(zeros)
    } else {
        const msg = chooseBannerMessage(queryParams)
        bannerMessage.value = msg;
        if (msg === "") {
            const {f, a, i, r} = queryParams as {f: string, a: string, i: string, r: string}
            const compl = f + a + i + r
            setCompliance(compl.split('').map(char => parseInt(char, 10)))
            window.history.pushState({}, '', [window.location.origin, window.location.pathname].join(''));
        } else {
            setCompliance(zeros)
        }
    }
})

</script>


<style scoped>
.banner {
    background-color: lightgoldenrodyellow;
    border-radius: 0.5em;
    box-sizing: border-box;
    color: #333;
    margin-bottom: 1em;
    min-height: 3em;
    padding: 1.5em 3em;
    text-align: center;
}
</style>
