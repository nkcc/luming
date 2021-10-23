<template>
<div class="text-card">
    <div class="row justify-center relative">
        <div class="col-12 ">
            <div class="background-title text-center text-fade-green background-title text-10xl text-weight-bolder ">
                {{ title }}
            </div>
        </div>
        <div class="col-12 row justify-center absolute top-1/2 ">
            <div :class="['mb-2', getListCol(list.length, k)]" v-for="(v, k) in list" :key="k">
                <div class="title mb-6">
                    <div class="text-center text-quaternary text-weight-bolder text-7xl" v-for="(vt, kt) in v.title" :key="kt"> {{ vt }}</div>
                </div>
                <div class="description">
                    <div class="px-4 description-text text-center text-text-weight-medium text-white" v-for="(vd, kd) in v.description" :key="kd"> {{ vd }}</div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'TextCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default () {
                return []
            }
        }
    },
    setup() {
        return {
            getListCol(length: number, key: number) {
                const modNum = length % 4
                let colNum = '3'
                if (key > length - modNum) {
                    colNum = Math.floor(12 / modNum).toString()

                }
                return 'col-' + colNum
            }
        }
    },
})
</script>

<style lang="scss" scoped>
.background-title {
    font-size: 16rem;
}
</style>
