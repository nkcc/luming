<template>
  <div class="lm-top-bar"></div>
  <div class="lm-header q-px-md">
    <nav class="navbar row items-center">
        <q-btn flat round dense color="secondary" icon="menu" class="toggle lt-md col-sm-1 col-xs-1" />
      <img class="header-logo col-sm-10 col-xs-10 col-md-3"
           src="/logo.svg"
           alt="" />
      <ul class="navbar-nav gt-sm col-md-6">
        <li v-for="(list, key) in navList"
            :key="key"
            class="nav-item">
          <a :href="list.link"
             class="nav-link">{{list.title}}</a>
        </li>
      </ul>
      <div class="right col-xs-1 col-sm-1 col-md-3 row justify-center">
        <q-btn style="color:#cd932f"
               flat
               icon="search" />
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainHeader',
  setup() {
    const navList = ref([
      {
        id: 1,
        title: '首页',
        link: '',
      },
      {
        id: 2,
        title: '关于鹿名',
        link: '',
      },
      {
        id: 3,
        title: '鹿名留学',
        link: '',
      },
      {
        id: 4,
        title: '鹿名案例',
        link: '',
      },
      {
        id: 5,
        title: '鹿名亮点',
        link: '',
      },
      {
        id: 6,
        title: '联系我们',
        link: '',
      },
    ]);

    return { navList };
  },
});
</script>

<style lang="scss">
@import '../../css/header.scss';
</style>

