<template>
    <div class="banner" v-if="bannerMessage !== ''" >
        {{ bannerMessage }}
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import { aspects } from './store';
import { nAnswers } from './store';
import { nQuestions } from './store';
import { setCompliance } from './store';

const bannerMessage = ref('');
onMounted(() => {
    const searchParams = new URLSearchParams(window.location.search);
    type QueryParams = {
        f: string,
        a: string,
        i: string,
        r: string
    }
    const params = {
        f: searchParams.get('f') || '',
        a: searchParams.get('a') || '',
        i: searchParams.get('i') || '',
        r: searchParams.get('r') || ''
    } as QueryParams;
    type Aspect = 'f' | 'a' | 'i' | 'r';
    const chooseBannerMessage = () => {
        const checkAspect = (aspect: Aspect) => {
            if (params[aspect].length !== nQuestions.value[aspect]) {
                return {
                    msg: `Query parameter '${aspect}' does not have the right number of elements (${nQuestions.value[aspect]})`,
                    err: true
                };
            }
            if (/^[0-9]+$/.test(params[aspect]) === false) {
                return {
                    msg: `Query parameter '${aspect}' includes unknown character`,
                    err: true
                };
            }
            const supplied = params[aspect].split('').map(c => parseInt(c, 10));
            const errors = supplied.map((iAnswer, index) => {
                if (iAnswer >= nAnswers.value[aspect][index]) {
                    return {
                        msg: `Query parameter '${aspect}' has out-of-range value on position ${index}`,
                        err: true
                    };
                }
                return { msg: '', err: false };
            }).filter(error => error.err === true);
            return {
                msg: errors.map(e => e.msg).join('; '),
                err: errors.length > 0
            };
        };
        if (Object.values(params).every(e => e === '')) {
            // none of the aspects of FAIR have been assigned some value
            return { msg: '', err: false };
        }
        if (Object.values(params).every(e => e !== '')) {
            // every aspect of FAIR has been assigned some value
        } else {
            return {
                msg: "When using query parameters, include 'f', 'a', 'i', and 'r'",
                err: true
            };
        }
        const errors = aspects.map(a => checkAspect(a)).filter(error => error.err === true);
        return {
            msg: errors.map(e => e.msg).join('; '),
            err: errors.length > 0
        };
    };
    const zeros = Array(nQuestions.value.total).fill(0);
    const { msg, err } = chooseBannerMessage();
    bannerMessage.value = msg;
    if (err === true) {
        // something's wrong, don't use the user-supplied
        // compliance state but use the default instead
        setCompliance(zeros);
    } else if (Object.values(params).every(e => e === '')) {
        // none of the aspects of FAIR have been assigned a
        // value, use the default zeros for initialization
        setCompliance(zeros);
    } else {
        const compl = `${params.f}${params.a}${params.i}${params.r}`;
        setCompliance(compl.split('').map(char => parseInt(char, 10)));
        window.history.pushState({}, '', [window.location.origin, window.location.pathname].join(''));
    }
});

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
