<template>
    <div class="footer">
        <div class="inner">
            <div class="another-inner">
                <div class="progressbars">
                    <div class="labels">
                        <div class="row">
                            <div class="label">
                                Findable
                            </div>
                        </div>
                        <div class="row">
                            <div class="label">
                                Accessible
                            </div>
                        </div>
                        <div class="row">
                            <div class="label">
                                Interoperable
                            </div>
                        </div>
                        <div class="row">
                            <div class="label">
                                Reusable
                            </div>
                        </div>
                    </div>

                    <div class="bars">
                        <div class="row">
                            <div class="bar bar-bg">
                                <div class="bar blue">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="bar bar-bg">
                                <div class="bar pink">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="bar bar-bg">
                                <div class="bar yellow">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="bar bar-bg">
                                <div class="bar purple">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button v-bind:disabled="disableButton"
                        role="button"
                        v-on:click="onClick()">Get the badge</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    progress: {
        f: string;
        a: string;
        i: string;
        r: string;
    },
    onClick: () => void,
    disableButton: boolean
}>();
</script>

<style scoped>

.footer {
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    left: 0;
    position: fixed;
    width: 100%;
}

.inner {
    align-items: center;
    background-color: var(--light);
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    max-width: 56em;
    width: 100%;
}

.another-inner {
    background-color: var(--light);
    box-sizing: border-box;
    flex-grow: 1;
    max-width: 50em;
    min-width: 30em;
}

@media screen and (min-width: 70em) {
    .inner {
        padding-left: 3em;
        padding-right: 3em;
    }
}


@media screen and (max-width: 70em) {
    .inner {
        padding-left: 3em;
        padding-right: 3em;
    }
}

@media screen and (max-width: 41.5em) {
    .inner {
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
}

.progressbars {
    background-color: var(--light);
    column-gap: 0.5em;
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5em;
    margin-top: 1em;
    padding-bottom: 0.25em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.25em;
}

.labels {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
}
.bars {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.row {
    display: flex;
    flex-direction: column;
    height: 1.75em;
    justify-content: center;
    min-height: 1.75em;
}

.label {
    color: black;
    line-height: 2em;
    text-align: right;
}

.bar {
    border-bottom-right-radius: 0.25em; 
    border-top-right-radius: 0.25em;
    height: 0.7em;
}

.bar-bg {
    background-color: #eee;
    border: 1px solid var(--dark);
}
.blue {
    background-color: var(--ardc-blue);
    width: v-bind('progress.f');  /* CSS Vue magic here */
}
.pink {
    background-color: var(--ardc-pink);
    width: v-bind('progress.a');  /* CSS Vue magic here */
}
.yellow {
    background-color: var(--ardc-yellow);
    width: v-bind('progress.i');  /* CSS Vue magic here */
}
.purple {
    background-color: var(--ardc-purple);
    width: v-bind('progress.r');  /* CSS Vue magic here */
}

button {
    align-self: center;
    background-color: #eee;
    border-radius: 0.15em;
    border: 1px solid rgba(0,0,0,0.5);
    color: black;
    flex-grow: 0;
    height: min-content;
    margin-left: 2em;
    margin-right: 1em;
    padding: 0.5em 1.5em;
}

button:hover {
    border: 1px solid rgba(0,0,0,0.7);
    background-color: white;
    cursor: pointer;
}

button:disabled {
    opacity: 0.5;
}

</style>
