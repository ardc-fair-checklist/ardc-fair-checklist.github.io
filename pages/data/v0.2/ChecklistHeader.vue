<template>
    <header>
        <div class="home">
            <ChecklistLink v-bind:href="linkToHome">
                <svg
                width="128"
                height="128"
                viewBox="0 0 128 128"
                version="1.1"
                id="svg5"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <defs
                    id="defs2" />
                <g
                    id="layer1">
                    <g
                    id="outline"
                    transform="matrix(1.032058,0,0,1.032058,-2.0517123,-5.997519)">
                    <path d="m 64,13.845703 -57.4746094,41.068359 4.6894534,6.5625 7.96289,-5.689453 V 121.80078 H 49.626953 V 91.585938 H 65.746094 V 121.80078 H 108.82227 V 55.787109 l 7.96289,5.689453 4.68945,-6.5625 C 114.12178,49.660112 106.76885,44.406295 99.416016,39.152344 V 17.582031 H 83.607422 V 27.855469 C 77.071721,23.185398 70.535701,18.515774 64,13.845703 Z m 0,15.738281 34.822266,24.882813 V 111.80078 H 75.746094 V 81.585938 H 39.626953 V 111.80078 H 29.177734 V 54.466797 Z" />
                    <g>
                        <path d="m 89.706841,22.049501 h 5.808742 v 12.368457 h -5.808742 z" />
                    </g>
                    </g>
                    <path
                    d="M 63.999995,24.525796 99.938597,50.206302 V 109.3783 H 76.122651 V 78.194827 H 38.845604 V 109.3783 H 28.061403 V 50.206302 Z"
                    id="inside" />
                </g>
                </svg>
            </ChecklistLink>
        </div>
        <div class="view-source">
            <a href="https://github.com/ardc-fair-checklist/ssg/issues/new">
                Report an issue
            </a>
            <a href="https://github.com/ardc-fair-checklist/ssg/issues/new">
                <img src="/octocat.svg" alt="octocat logo" />
            </a>
        </div>
    </header>
</template>

<script setup lang="ts">
import ChecklistLink from './ChecklistLink.vue';

const linkToHome = `${import.meta.env.BASE_URL}`;
</script>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1em 0.5em;
}

.view-source {
    min-width: min-content;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    cursor: pointer;
}
.view-source a {
    text-decoration: none;
    color: var(--light);
    padding-right: 0.6em;
    padding-top: 0.2em;
    line-height: 1.6;
    text-underline-offset: 0.7em;
}
.view-source:hover a {
    text-decoration: underline;
    color: white;
}
.view-source:hover img {
    opacity: 1;
    transform: scale(1.05);
}
.view-source img {
    width: 2em;
    height: 2em;
    opacity: 0.8;
}
@media screen and (min-width: 70em) {
    .view-source {
        padding-right: 1em;
    }
    .home {
        padding-left: 1em;
    }
}
svg {
    width: 2em;
    height: 2em;
}
svg:hover {
    transform: scale(1.05);
}

#outline {
    fill: var(--light);
}
svg:hover #outline {
    fill: white;
}
#inside {
    fill: black;
}
</style>
