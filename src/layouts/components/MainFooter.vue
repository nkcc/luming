<template>
  <div class="page-footer">
    <div
      class="row justify-center information q-px-xs-sm q-px-lg-xs q-px-md-xs q-px-xl-xs lg:container lg:mx-auto"
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
      <div class="col-12 mt-4 lt-md">
        <ul class="flex justify-center">
          <li class="mobile-root-link" v-for="(v,k) in [...navList, ...navListRight]" :key="k">
            <router-link :to="v.link" class="title text-weight-bold text-center">{{ v.title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-3 col-md-3 left col-xs-12 gt-sm">
        <ul class="item-list w-full">
          <li class="item w-full" v-for="(v, key) in navList" :key="key">
            <router-link
              :to="v.link"
              class="title text-weight-bold text-center block"
            >{{ v.title }}</router-link>
            <!-- <div
              class="description text-weight-regular text-center sm:text-left block"
            >{{ v.description }}</div> -->
          </li>
        </ul>
      </div>
      <div class="col-3 col-md-3 center col-xs-4 mb-10 mt-5 sm:mb-0 sm:mt-0">
        <q-img class="logo-center" initial-ratio="1" src="logo_center.svg"></q-img>
      </div>
      <div class="col-3 col-md-3 right col-xs-12 gt-sm">
        <ul class="item-list w-full">
          <li class="item" v-for="(v, key) in navListRight" :key="key">
            <router-link :to="v.link" class="title text-center  block">{{ v.title }}</router-link>
            <!-- <div
              class="description text-weight-thin text-center sm:text-left block"
            >{{ v.description }}</div> -->
          </li>
        </ul>
      </div>
    </div>

    <div
      class="row justify-center items-center information q-pa-xs-lg q-pa-lg-xs q-pa-md-xs q-pa-xl-xs lg:container lg:mx-auto gt-sm"
    >
      <div class="col-xs-12 col-md-9 copyright row justify-center items-center">
        <div
          class="copyright-left text-weight-bolder col-xs-12 col-md-6 col-lg-6 col-xl-6 text-center sm:text-left block mb-4 sm:mb-0"
        >
          @2021 The President and
          Fellows of Maxfuture
        </div>
        <div
          class="copyright-right col-xs-12 col-md-6 col-lg-6 col-xl-6 text-center sm:text-left flex justify-center flex-wrap"
        >
          <span class="name text-weight-bolder">Wechat</span>
          <span class="name text-weight-bolder">Facebook</span>
          <span class="name text-weight-bolder">Twitter</span>

          <span class="name text-weight-bolder">Instagram</span>
          <span class="name text-weight-bolder">Weibo</span>
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
