<template>
<q-header :reveal="true">
    <div class="lm-top-bar"></div>
    <div class="lm-header  relative">
        <nav class="navbar row items-center gt-sm ">

            <div class=" col-sm-10 col-xs-10 col-md-3 left">
                <div class="lm-margin"> </div>
                <img class="header-logo" src="logo.svg" alt="" />
            </div>

            <ul class="navbar-nav col-md-6 ">
                <li v-for="(list, key) in navList" :key="key" class="nav-item px-4" @mouseover="list.show = true" @mouseleave="list.show = false">
                    <router-link :to="list.link" class="nav-link">{{list.label}}</router-link>
                    <transition name="custom-classes-transition" enter-active-class='animate__animated  animate__fadeIn' leave-active-class='animate__animated animate__fadeOut'>
                        <ul class="absolute sub-nav top-full -mx-4" v-if="list.show">
                            <li class="p-4 my-1 bg-primary relative sub-item w-full" v-for="(vv, kk) in list.list" :key="kk">
                                <router-link :to="vv.link" class="nav-link">{{vv.label}}</router-link>
                            </li>

                        </ul>
                    </transition>
                </li>
            </ul>
            <div class="right col-xs-1 col-sm-1 col-md-3">
                <q-btn flat icon="search" color="secondary" />
                <div class="lm-margin"></div>
            </div>
        </nav>

        <q-toolbar class="bg-primary text-secondary lm-head-drawer lt-md">
            <div class="q-mr-sm col-xs-1">
                <q-btn flat round dense icon="menu" class="" padding="xs" @click="drawer = !drawer" />
            </div>
            <div class="logo-container col-xs-auto col-10"><img src="logo.svg" class=""></div>

            <div class="col-xs-1">
                <q-btn flat round dense icon="search" />
            </div>
        </q-toolbar>
        <q-drawer v-model="drawer" :breakpoint="100" :width="windowWidth" overlay class="bg-primary">

            <q-separator color="secondary" />
            <q-list class="q-mt-md">
                <template v-for="(menuItem, index) in navList" :key="index">
                    <router-link :to="menuItem.link" class="nav-link">
                        <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                            <q-item-section avatar>
                                <q-icon :name="menuItem.icon" color="secondary" />
                            </q-item-section>
                            <q-item-section class="text-secondary">
                                {{ menuItem.label }}
                            </q-item-section>
                            <q-separator />
                        </q-item>
                    </router-link>
                </template>

            </q-list>

        </q-drawer>
    </div>

</q-header>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue';

export default defineComponent({
    name: 'MainHeader',
    setup() {
        const windowWidth = window.innerHeight;
        const navList = ref([{
                id: 1,
                label: '首页',
                link: '/',
                icon: 'home',
                list: [],
                show: false
            },
            {
                id: 2,
                label: '关于鹿名',
                link: 'about',
                icon: 'error_outline',
                list: [],
                show: false
            },
            {
                id: 3,
                label: '鹿名留学',
                link: 'study-abroad',
                icon: 'flight',
                show: false,
                list: [{
                        label: '青云计划',
                        link: 'study-abroad',
                        icon: 'flight',
                        show: false
                    },
                    {
                        label: '天梯计划',
                        link: 'ladder',
                        icon: 'flight',
                        show: false
                    },
                    {
                        label: '孵育计划',
                        link: 'incubation',
                        icon: 'flight',
                        show: false
                    }, {
                        label: '学业管家',
                        link: 'academic',
                        icon: 'flight',
                        show: false
                    }
                ]
            },
            {
                id: 4,
                label: '鹿名案例',
                link: 'case',
                icon: 'today',
                show: false,
                list: []
            },
            {
                id: 5,
                label: '鹿名亮点',
                link: 'spot',
                icon: 'tips_and_updates',
                show: false,
                list: []
            },
            {
                id: 6,
                label: '联系鹿名',
                link: 'contact',
                icon: 'phone',
                show: false,
                list: []
            },
        ]);
        const drawer = ref(false);

        return {
            navList,
            drawer,
            windowWidth,
        };
    },
});
</script>

<style lang="scss">
@import '../../css/header.scss';
</style>
