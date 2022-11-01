<template>
    <div class="banner">
        {{ msg }}
    </div>
</template>

<script setup lang="ts">
import { usePageContext } from '../../../renderer/usePageContext'
import { nAnswers, nQuestions, setCompliance} from './store'

type Params = Record<string, string>
const getBannerMessage = (params: Params) => {
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
    type Aspect = 'f' | 'a' | 'i' | 'r'
    const aspects: Aspect[] =  ['f', 'a', 'i', 'r']
    const hasAllAspects = aspects.map(aspect => Object.keys(params).includes(aspect)).every(e => e)
    if (!hasAllAspects) {
        return `When using query parameters, include 'f', 'a', 'i', and 'r'`
    }
    return aspects.map(aspect => checkAspect(aspect)).filter(msg => msg !== "").join('; ')
}

const queryParams = {f:'000', a: '90', i: '000a', r: '000000'} //usePageContext().urlParsed?.search
const zeros = Array(nQuestions.value.total).fill(0)
let msg = ""
if (queryParams === undefined || Object.keys(queryParams).length === 0 ) {
    setCompliance(zeros)
} else {
    msg = getBannerMessage(queryParams)
    if (msg === "") {
        const {f, a, i, r} = queryParams
        const compl = f + a + i + r
        setCompliance(compl.split('').map(char => parseInt(char, 10)))
    } else {
        setCompliance(zeros)
    }
}
</script>


<style scoped>
.banner {
    background-color: lightgoldenrodyellow;
    min-height: 3em;
    border-radius: 0.5em;
    color: #333;
    padding: 1.5em 3em;
    box-sizing: border-box;
    text-align: center;
}
</style>
