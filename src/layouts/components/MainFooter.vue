<template>

<div class="page-footer">
    <div class="row align-center information">
        <div class="col-3">
            <ul class="item-list">
                <li class="item" v-for="(v, key) in navList" :key="key">
                    <a href="" class="title">{{v.title}}</a>
                    <div class="description"></div>
                </li>
            </ul>
        </div>
        <div class="col-6">
            <q-img src="~assets/logo_center.svg"></q-img>
        </div>
        <div class="col-3">
            <ul class="item-list">
                <li class="item" v-for="(v, key) in navListRight" :key="key">
                    <a href="" class="title">{{v.title}}</a>
                    <div class="description"></div>
                </li>
            </ul>
        </div>
    </div>
    <div class="lm-top-bar"></div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue';

export default defineComponent({
    name: 'MainFooter',
    setup() {
        const navList = ref([{
                id: 1,
                title: '首页',
                link: '',
            },
            {
                id: 2,
                title: '关于鹿鸣',
                link: '',
            },
            {
                id: 3,
                title: '鹿鸣留学',
                link: '',
            }
        ]);

        const navListRight = ref([{
                id: 4,
                title: '鹿鸣案例',
                link: '',
            },
            {
                id: 5,
                title: '鹿鸣亮点',
                link: '',
            },
            {
                id: 6,
                title: '联系我们',
                link: '',
            },
        ])

        return {
            navList,
            navListRight
        };
    },
});
</script>

<style lang="scss">
@import '../../css/footer.scss';
</style>
