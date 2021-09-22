<template>
<div class="lm-banner container-xl">
    <div class="banner-container">
        <q-img class="banner" :src="img"></q-img>
        <h2 class="page-name text-secondary text-weight-bold">
          {{ PageName }}
        </h2>
    </div>
    <slot></slot>
</div>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    name: 'TopBanner',
    props: {
        PageName: {
            type: String,
            default: 'About'
        },
        img: {
            type: String,
            default: 'top.jpg'
        }
    },
    setup() {
        return {
            name: ref('top-banner'),

        }
    }
}
</script>

<style lang="scss">
@import '../css/components/top-banner.scss';
</style>
