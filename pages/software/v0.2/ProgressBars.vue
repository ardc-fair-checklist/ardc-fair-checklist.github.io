<template>
    <div class="footer">
        <div class="inner">
            <div class="test">
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
                                <div class="bar blue" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="bar bar-bg">
                                <div class="bar pink" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="bar bar-bg">
                                <div class="bar yellow" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="bar bar-bg">
                                <div class="bar purple" />
                            </div>
                        </div>
                    </div>
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
    }
}>()
</script>

<style scoped>

.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.inner {
    width: 100%;
    /*background-color: orange;*/
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.test {
    background-color: var(--light);
    flex-grow: 1;
    min-width: 30em;
    max-width: 50em;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    /*border-left: 2px solid #444;*/
    /*border-right: 2px solid #444;*/
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
    column-gap: 0.5em;
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    padding-bottom: 0.25em;
    padding-top: 0.25em;
    padding-left: 3em;
    padding-right: 3em;
    background-color: var(--light);
}

.labels {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    margin-left: 2em;
}
.bars {
    flex-grow: 0.8;
    display: flex;
    flex-direction: column;
}

.row {
    height: 1.75em;
    min-height: 1.75em;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.label {
    text-align: right;
    line-height: 2em;
    color: black;
}

.bar {
    height: 0.7em;
    border-top-right-radius: 0.25em;
    border-bottom-right-radius: 0.25em; 
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
</style>
