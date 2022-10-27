<template>
    <div class="banner" v-if="msg !== ''">
        {{ msg }}
    </div>
</template>

<script setup lang="ts">
import { usePageContext } from '../../../renderer/usePageContext'
import { nAnswers, nQuestions, setCompliance} from './store'

type Params = Record<string, string>
const validateFairParams = (params: Params) => {
    const keys = Object.keys(params);
    if (keys.includes("f") && keys.includes("a") && keys.includes("i") && keys.includes("r")) {
        // pass
    } else {
        return `When using query parameters, include 'f', 'a', 'i', and 'r'`
    }

    const runChecks = (aspect: 'f' | 'a' | 'i' | 'r') => {
        if (keys.includes(aspect)) {
            if (params[aspect].length !== nQuestions.value[aspect]) {
                return `Query parameter '${aspect}' does not have the right number of elements (${nQuestions.value[aspect]})`
            }
            if (/^[0-9]+$/.test(params[aspect]) === false) {
                return `Query parameter '${aspect}' includes unknown character`
            }
            const supplied = params[aspect].split('').map(c => parseInt(c, 10))
            return supplied.map((iAnswer, index) => {
                if (iAnswer > nAnswers.value[aspect][index]) {
                    return `Query parameter '${aspect}' has out-of-range value on position ${index}`
                } else {
                    return ""
                }
            }).filter(msg => msg !== "").join('; ')
        }
        return ""
    }
    return ['f', 'a', 'i', 'r'].map(aspect => runChecks(aspect as 'f' | 'a' | 'i' | 'r')).filter(msg => msg !== "").join('; ')
}

const pageContext = usePageContext();
const queryParams = pageContext.urlParsed?.search
const zeroes = Array(nQuestions.value.total).fill(0)
let msg = ""
if (queryParams === undefined || Object.keys(queryParams).length === 0 ) {
    setCompliance(zeroes)
} else {
    msg = validateFairParams(queryParams)
    if (msg === "") {
        const compl: string = queryParams.f + queryParams.a + queryParams.i + queryParams.r
        setCompliance(compl.split('').map(char => parseInt(char, 10)))
    } else {
        setCompliance(zeroes)
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
