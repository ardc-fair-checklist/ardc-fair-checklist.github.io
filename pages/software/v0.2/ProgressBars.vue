<template>
    <div class="footer">
        <div class="inner">
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
    min-width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
}

.inner {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.4) 100%);
    width: 100%;
    height: 100%;
    min-height: 10em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.progressbars {
    border-radius: 0.5em;
    column-gap: 0.5em;
    display: flex;
    flex-direction: row;
    max-width: 50em;
    min-width: 30em;
    padding-bottom: 0.25em;
    padding-top: 0.25em;
    padding-left: 3em;
    padding-right: 3em;
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
    color: white;
}

.bar {
    height: 0.7em;
    border-top-right-radius: 0.25em;
    border-bottom-right-radius: 0.25em; 
}

.bar-bg {
    background-color: #eee;
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
