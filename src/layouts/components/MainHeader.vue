<template>
  <div class="lm-top-bar"></div>
  <div class="lm-header">
    <nav class="navbar">
      <img class="header-logo"
           src="~/assets/logo.svg"
           alt="" />
      <ul class="navbar-nav">
        <li v-for="(list, key) in navList"
            :key="key"
            class="nav-item">
          <a :href="list.link"
             class="nav-link">{{list.title}}</a>
        </li>
      </ul>
      <div class="right">
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
        title: '关于鹿鸣',
        link: '',
      },
      {
        id: 3,
        title: '鹿鸣留学',
        link: '',
      },
      {
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
    ]);

    return { navList };
  },
});
</script>

<style lang="scss">
@import '../../css/header.scss';
</style>

