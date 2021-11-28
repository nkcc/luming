<template>
  <div class="lm-about">
    <section class="lm-comes">
      <div class="lm-light-dark-background">
        <div class="lg:container lg:mx-auto">
          <part-header name="鹿名来源" class></part-header>
          <div class="lm-comes-introduction w-full q-px-xs-xs">
            <div class="content w-full text-center pb-5" v-for="(v, k) in history" :key="k">
              <div class="pb-6 sm:pb-0" v-if="v.title.length">
                <div
                  class="title text-base text-weight-bold pb-1 animate__animated animate__fadeInUp"
                  :class="'animate__delay-' + k + 's'"
                  v-for="(vv, kk) in v.title"
                  :key="kk"
                >{{ vv }}</div>
              </div>

              <p
                class="description zoom-md text-weight-light leading-5 sm:leading-7 animate__animated animate__fadeInUp"
                :class="'animate__delay-' + k + 's'"
                v-for="(vd, kd) in v.content"
                :key="kd"
              >{{ vd }}</p>
            </div>
          </div>
          <part-header name="鹿名文化" class></part-header>
        </div>
      </div>
    </section>

    <section class="lm-culture-points lm-light-dark-background">
      <div class="row justify-center lg:container lg:mx-auto">
        <div class="col-9 col-xs-11 col-md-9 row">
          <template v-for="(v, k) in culture" :key="k">
            <div class="col-4">
              <div
                class="points-img"
                :class="[k === 0 ? 'border-b-0' : '', k === 1 ? 'border-r-0' : '', k === 2 ? 'border-l-0' : '']"
              >
                <q-img :src="cultureImg[k].backgroundImage" fit="cover" :ratio="557 / 400"></q-img>
              </div>
            </div>
            <div class="col-4">
              <q-responsive :ratio="557 / 400">
                <div class="points-container flex align-center">
                  <div class="title text-weight-bolder">{{ v.title }}</div>
                  <div
                    class="description zd-6 text-quaternary w-full text-xs sm:text-base md:text-lg text-weight-bolder text-center"
                  >{{ v.description }}</div>
                </div>
              </q-responsive>
            </div>
          </template>
        </div>
      </div>
      <part-header name="鹿名团队" class></part-header>
      <div class="lm-culture-team row justify-center pb-14 lg:container lg:mx-auto">
        <div
          class="team-container col-9 col-xs-12 col-md-9 flex items-center py-8 sm:pb-24 q-px-xs-md q-px-md-none"
          :class="[k !== 0 ? 'sm:pt-24' : '', k === team.length - 1 ? 'last' : '']"
          v-for="(v, k) in team"
          :key="k"
          :ref="divs"
        >
          <div class="row items-center gt-sm" :class="k % 2 === 0 ? '' : 'reverse'">
            <div class="col-7 col-xs-12 col-md-7">
              <div
                class="team-english-name text-quaternary text-6xl text-weight-bold pb-10 text-center sm:text-left"
              >{{ v.englishName }}</div>
              <p
                class="text-white text-xs pb-2 leading-5"
                v-for="(vv, kk) in v.description"
                :key="kk"
              >{{ vv }}</p>
            </div>
            <div
              class="col-5 col-xs-12 col-md-5"
              :class="k % 2 === 0 ? 'team-avatar-p' : 'team-avatar-p-r'"
            >
              <q-responsive :ratio="611 / 643">
                <q-img class="team-avatar" :src="v.avatarUrl"></q-img>
              </q-responsive>
            </div>
          </div>
          <div class="row items-start lt-md">
            <div class="col-6 pt-4">
              <div
                class="team-english-name text-quaternary text-5xl text-weight-bold"
                v-for="(vv, kk) in v.mobileEnglishName"
                :key="kk"
              >{{ vv }}</div>
            </div>
            <div class="col-6 team-avatar-p-r">
              <q-responsive :ratio="611 / 643">
                <q-img class="team-avatar" :src="v.avatarUrl"></q-img>
              </q-responsive>
            </div>

            <div class="col-7 col-xs-12 col-md-7 pt-4">
              <p
                class="text-white text-xs pb-4 leading-5 zoom-md text-weight-thin"
                v-for="(vv, kk) in v.description"
                :key="kk"
              >{{ vv }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <contact></contact>
  </div>
</template>

<script lang="ts">

import { ref, onBeforeUpdate, onMounted, computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import { historyData, teamData, historyMobileData, cultureData, cultureImgData } from '../data/about';

export default defineComponent({
  name: 'About',
});
</script>

<script lang="ts" setup>

import PartHeader from '../components/PartHeader.vue';
import Contact from '../components/Contact.vue';

const router = useRoute();
const itemRefs = ref([]);
const culture = ref(cultureData);
const $q = useQuasar();

const divs = (el: HTMLElement) => {
  (itemRefs.value as Array<HTMLElement>).push(el);
};

const isMobile = computed(() => {
  return <boolean>$q.platform.is.mobile;
});

const cultureImg = ref(cultureImgData);

const historyMobile = ref(historyMobileData);

const history = ref(historyData);
const team = ref(teamData);
history.value = isMobile.value ? historyMobile.value : history.value,

onBeforeUpdate(() => {
  itemRefs.value = [];
});
onMounted(() => {
  const id = router.query.id;
  if (typeof id !== 'undefined') {
    let index = Number(id);
    const currentRef = <InstanceType<typeof HTMLElement>>(
      itemRefs.value[index]
    );
    setTimeout(() => currentRef.scrollIntoView(),
      0
    )

  }
});

</script>

<style lang="scss">
@import "../css/about.scss";
</style>
