<template>
<div>
    <q-header :reveal="true">

        <div class="lm-top-bar"></div>
        <div class="lm-header q-px-md  container-xl">
            <nav class="navbar row items-center gt-sm">

                <div class=" col-sm-10 col-xs-10 col-md-3 left">
                    <div class="lm-margin"> </div>
                    <img class="header-logo" src="logo.svg" alt="" />
                </div>

                <ul class="navbar-nav gt-sm col-md-6">
                    <li v-for="(list, key) in navList" :key="key" class="nav-item">
                        <a :href="list.link" class="nav-link">{{list.label}}</a>
                    </li>
                </ul>
                <div class="right col-xs-1 col-sm-1 col-md-3">
                    <q-btn style="color:#cd932f" flat icon="search" />
                    <div class="lm-margin"></div>
                </div>
            </nav>

            <q-toolbar class="bg-primary text-secondary lm-head-drawer lt-md">
                <q-btn flat round dense icon="menu" class="q-mr-sm col-xs-1 " @click="drawer = !drawer" />
                <div class="logo-container col-xs-auto col-10"><img src="logo.svg" class=""></div>
                <q-btn flat round dense icon="search" class="col-xs-1" />
            </q-toolbar>
            <q-drawer v-model="drawer" :breakpoint="500" class="bg-primary lt-md">
                <div class="lm-top-bar"></div>
                <div class="drawer-logo-container"><img src="logo.svg" class="drawer-logo"></div>
                <q-separator color="secondary" inset class="" />
                <q-list class="q-mt-md">
                    <template v-for="(menuItem, index) in navList" :key="index">

                        <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                            <q-item-section avatar>
                                <q-icon :name="menuItem.icon" color="secondary"/>
                            </q-item-section>
                            <q-item-section class="text-secondary">
                                {{ menuItem.label }}
                            </q-item-section>
                            <q-separator />
                        </q-item>
                    </template>

                </q-list>

            </q-drawer>
        </div>

    </q-header>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue';

export default defineComponent({
    name: 'MainHeader',
    setup() {
        const navList = ref([{
                id: 1,
                label: '首页',
                link: '',
                icon: 'home',
            },
            {
                id: 2,
                label: '关于鹿名',
                link: '',
                icon: 'error_outline',
            },
            {
                id: 3,
                label: '鹿名留学',
                link: '',
                icon: 'flight',
            },
            {
                id: 4,
                label: '鹿名案例',
                link: '',
                icon: 'today',
            },
            {
                id: 5,
                label: '鹿名亮点',
                link: '',
                icon: 'tips_and_updates',
            },
            {
                id: 6,
                label: '联系鹿名',
                link: '',
                icon: 'phone',
            },
        ]);
        const drawer = ref(true);

        return {
            navList,
            drawer
        };
    },
});
</script>

<style lang="scss">
@import '../../css/header.scss';
</style>
