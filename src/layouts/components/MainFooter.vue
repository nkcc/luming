<template>
  <div class="page-footer">
    <div
      class="row justify-center information lg:container lg:mx-auto"
    >
      <div class="col-12 row justify-center">
        <div class="col-md-9 col-xs-12 relative">
          <div class="back-to-top">
            <q-btn
              class="page-scroll-btn"
              padding="10px 10px"
              icon="keyboard_arrow_up"
              color="secondary"
              @click="scrollToTop"
            />
          </div>
        </div>
      </div>
      <div class="col-md-12 col-xs-11 mt-4 mb-10 sm:mb-10">
        <ul class="flex justify-center">
          <li class="mobile-root-link" v-for="(v,k) in [...navList, ...navListRight]" :key="k">
            <router-link :to="v.link" class="title text-m30/10vw sm:text-xl text-weight-bold text-center p-0 sm:px-4">{{ v.title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-3 col-md-3 center col-xs-4 mb-10 mt-5 sm:mt-0">
        <q-img class="logo-center" initial-ratio="1" src="logo_center.svg"></q-img>
      </div>
    </div>

    <div
      class="row justify-center items-center information lg:container lg:mx-auto"
    >
      <div class="col-xs-11 col-md-9 row justify-center items-center">
        <div
          class="text-weight-bolder text-left sm:text-center text-m22/10vw sm:text-lg block mb-4 sm:mb-0"
        >
         Copyright © 2021 MAXFUTURE.  All Rights Reserved. 鹿名国际 版权所有
        </div>
      </div>
    </div>

    <div class="lm-top-bar"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainFooter',
  setup() {
    const navList = ref([
      {
        id: 1,
        title: '首页',
        link: '/',
        description: '这里留给二级标题一个位置去填写一些东西让它看起来更舒服',
      },
      {
        id: 2,
        title: '关于鹿名',
        link: 'about',
        description: '这里留给二级标题一个位置去填写一些东西让它看起来更舒服',
      },
      {
        id: 3,
        title: '鹿名留学',
        link: 'study-abroad',
        description: '这里留给二级标题一个位置去填写一些东西让它看起来更舒服',
      },
    ]);

    const navListRight = ref([
      {
        id: 4,
        title: '鹿名案例',
        link: 'case',
        description: '这里留给二级标题一个位置去填写一些东西让它看起来更舒服',
      },
      {
        id: 5,
        title: '鹿名亮点',
        link: 'spot',
        description: '这里留给二级标题一个位置去填写一些东西让它看起来更舒服',
      },
      {
        id: 6,
        title: '联系我们',
        link: 'contact',
        description: '这里留给二级标题一个位置去填写一些东西让它看起来更舒服',
      },
    ]);

    return {
      navList,
      navListRight,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
});
</script>

<style lang='scss'>
@import '../../css/footer.scss';
</style>
