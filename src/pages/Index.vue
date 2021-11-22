<template>
  <q-page>
    <section class>
      <q-img
        class="lm-background"
        src="lb.jpg"
        loading="eager"
        :no-spinner="true"
        :img-class="bgFilter"
      >
        <div class="lm-introduction row justify-center">
          <div
            class="lm-text-title text-center lg:container lg:mx-auto animate__animated animate__fadeIn"
          >
            <span>鹿名国际教育</span>
          </div>
          <div class="lm-text-second-title animate__animated animate__fadeInUp animate__delay-1s">
            <q-img
              class="logo-title"
              src="logo_letter.svg"
              fit="contain"
              loading="eager"
              :no-spinner="true"
            ></q-img>
          </div>
          <p class="text-center animate__animated animate__fadeInUp animate__delay-2s">让世界名校， 不再高不可攀</p>
        </div>
        <div
          class="show-more justify-center row animate__animated animate__slow animate__repeat animate__infinite animate__slideOutUp"
          @click="scrollFullScreen"
        >
          <q-img
            class="up-scroll"
            src="up_arrow.svg"
            fit="contain"
            height="3.125rem"
            width="12.5rem"
            loading="eager"
            :no-spinner="true"
          />
        </div>
      </q-img>
    </section>
    <section class="lm-services">
      <div class="row q-col-gutter-x-sm lg:container lg:mx-auto">
        <div
          class="col-md-4 col-sm-12 col-xs-12 animate__animated animate__animated service-container"
          v-for="(v, k) in servicesData"
          :key="k"
        >
          <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>

          <div class="media" :data-id="k" v-intersection.once="onServiceIntersection">
            <transition-group appear enter-active-class="animated animate__fadeInUp">
              <q-img
                class="img"
                :src="v.img"
                :ratio="537 / 336"
                v-if="servicesData[k].visible"
                loading="eager"
                :no-spinner="true"
              ></q-img>
              <div
                class="introduction"
                :class="getClassType(k, 'bg-secondary', 'bg-primary')"
                v-if="servicesData[k].visible"
              >
                <h3 class="text-white text-weight-bold heading text-4xl pb-10 pt-5">{{ v.title }}</h3>
                <div class="h-24">
                  <p class="text-white text-lg" v-for="(vd, vk) in v.description" :key="vk">{{ vd }}</p>
                </div>

                <router-link class="root-link" :to="v.link">了解更多></router-link>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-green-background-container">
      <div class="lm-points row items-center lg:container lg:mx-auto py-36">
        <div class="points-container">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="secondary"
            navigation
            padding
            arrows
            class="lm-points-background"
            keep-alive
            :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'"
          >
            <template v-slot:navigation-icon></template>
            <template v-for="(v, k) in carouselData" :key="k">
              <q-carousel-slide :name="'carousel' + k" class="column no-wrap">
                <div class="row justify-center items-center">
                  <div class="col-xs-12 col-sm-12 col-md-5 left">
                    <h2
                      class="text-secondary text-weight-bold text-5xl pb-2 sm:pb-14 sm:text-6xl"
                    >{{ v.title }}</h2>
                    <div class="content">
                      <h3
                        class="text-white text-weight-bold text-4xl pb-2 sm:pb-10 sm:text-5xl"
                      >{{ v.subTitle }}</h3>
                      <p class="description gt-sm">{{ v.description }}</p>
                    </div>
                    <div class="footer"></div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 right mt-10 sm:mt-0">
                    <q-responsive :ratio="692 / 511">
                      <q-img class="points-img" :src="v.imgLink" loading="eager" :no-spinner="true"></q-img>
                    </q-responsive>
                  </div>
                  <div class="col-xs-12 mt-16 lg:mt-0 lt-md">
                    <p class="description text-white text-xl">{{ v.description }}</p>
                  </div>
                </div>
              </q-carousel-slide>
            </template>
          </q-carousel>
        </div>
        <div class="col-12">
            <div class="footer text-center white">
              <router-link to="culture">了解更多></router-link>
            </div>
        </div>
      </div>
    </section>
    <section class="lm-culture lg:container lg:mx-auto">
      <div class="caption">
        <q-img
          class="logo-letter"
          src="logo_letter_dark.svg"
          fit="contain"
          loading="eager"
          :no-spinner="true"
        ></q-img>
      </div>
      <div class="row q-col-gutter-sm justify-center">
        <div
          class="col col-sm-6 col-xs-12 col-md-3 culture-item"
          v-for="(v, k) in cultureData"
          :key="k"
          :data-id="k"
          v-intersection.once="onCultureIntersection"
        >
          <transition appear :enter-active-class="cultureAnimation()">
            <div class="animation-container" v-if="cultureData[k].visible">
              <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>
              <q-responsive :ratio="542 / 511" class="mt-5 sm:mt-0">
                <q-img class="culture-img" :src="v.imgLink" loading="eager" :no-spinner="true"></q-img>
              </q-responsive>

              <div class="content lt-md q-px-xs-sm">
                <p class="my-5" v-for="(vd, vk) in v.description" :key="vk">{{ vd }}</p>
                <div class="footer text-center lt-md my-5">
                  <router-link to="about">了解更多></router-link>
                </div>
              </div>
              <div class="lt-md" :class="getClassType(k, 'bar-secondary', 'bar')"></div>
            </div>
          </transition>
        </div>

        <div class="col-xs-10 col-md-12 culture-item gt-sm py-5">
          <template v-for="(v, k) in cultureData" :key="k">
            <p class="my-4" v-for="(vv, vk) in v.description" :key="vk" :data-id="vk">{{ vv }}</p>
          </template>
          <div class="content">
            <div class="footer text-center">
              <router-link to="about">了解更多></router-link>
            </div>
          </div>
        </div>
        <div
          class="col col-sm-6 col-xs-12 col-md-3 culture-item gt-sm"
          v-for="(v, k) in cultureData"
          :key="k"
          :data-id="k"
          v-intersection.once="onCultureIntersection"
        >
          <transition appear :enter-active-class="cultureAnimation()">
            <div class="animation-container" v-if="cultureData[k].visible">
              <div class :class="getClassType(k, 'bar-secondary', 'bar')"></div>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <div class="lm-green-background-container">
      <section class="lm-offers row items-center lg:container lg:mx-auto py-32">
        <div class="offer-container">
          <div class="row">
            <div class="col-12 q-pa-xs-xs mb-14">
              <h1 class="text-center text-white text-weight-bold header-title">录取院校</h1>
              <ul class="area">
                <li
                  :class="['label', slideOffer === v.type ? 'active' : '']"
                  v-for="(v, k) in offerType"
                  :key="k"
                  @click="changeSlideOfferType(v.type, k)"
                >{{ v.title }}</li>
              </ul>
            </div>
            <div class="col-12">
              <scroll-carousel :data="offerData" :index="currentOfferSchoolTypeIndex"></scroll-carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="lm-case">
      <div :class="['case-item', k % 2 !== 0 ? 'reverse' : '']" v-for="(v, k) in caseData" :key="k">
        <div
          class="row justify-center items-center items-stretch lg:container lg:mx-auto"
          :class="k % 2 !== 0 ? 'reverse' : ''"
        >
          <div class="img-container col-md-6 col-sm-12 col-xs-12 col-lg-6 col-xl-5">
            <q-responsive :ratio="899 / 716" class="shadow-up-10">
              <q-img
                class="img"
                :src="v.imgLink"
                fit="cover"
                position="center top"
                loading="eager"
                :no-spinner="true"
              ></q-img>
            </q-responsive>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 col-xl-5 content-container">
            <div class="content">
              <div class="header">
                <div class="title">
                  <span class="caption text-weight-bolder">录取院校：</span>
                  <span class="value text-secondary">{{ v.name }}</span>
                </div>
                <div class="rank">
                  <span class="caption text-weight-bolder">学校排名：</span>
                  <span class="value text-weight-bolder">{{ v.rank }}</span>
                </div>
              </div>
              <div class="body">
                <div class="name text-weight-bolder">{{ v.student }}</div>
                <div class="title text-weight-bolder">背景分析：</div>
                <div class="background">
                  <div class="info" v-for="(vv, kk) in v.info" :key="kk">
                    <span class="label text-weight-bolder">{{ vv.label }}:</span>
                    <span class="value text-weight-light">{{ vv.value }}</span>
                  </div>
                </div>
              </div>
              <div class="footer">
                <!--                <q-icon class='dot' name='fiber_manual_record'></q-icon>-->
                <router-link :to="v.link">了解更多 ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-team lm-dark-background">
      <h1 class="header-title text-white text-center text-weight-bold">鹿名团队</h1>
      <div class="team-container row lg:container lg:mx-auto">
        <div
          class="team-card col-sm-6 col-md-3 col-lg-3 col-xl-3"
          v-for="(v, k) in teamData"
          :key="k"
        >
          <div :class="k % 2 !== 0 ? 'bar' : 'bar-secondary'"></div>

          <q-responsive :ratio="505 / 396" class="shadow-10">
            <q-img class="img" :src="v.imgLink" fit="scale-down" loading="eager" :no-spinner="true"></q-img>
          </q-responsive>

          <div class="content">
            <div
              class="name text-weight-bolder"
              :class="k === teamData.length - 1 ? 'text-2xl' : 'text-3xl'"
            >{{ v.name }}</div>
            <p class="description">{{ v.description }}</p>
            <div class="footer">
              <router-link :to="v.link">了解更多 ></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-professor">
      <h1 class="header text-weight-bold text-center py-12 text-4xl sm:text-6xl">教授名校教授培养计划</h1>

      <div
        class="prof-intro"
        :class="getClassType(k, '', 'reverse')"
        v-for="(v, k) in professorData"
        :key="k"
      >
        <div
          :class="[
            'row justify-center items-center q-pa-xs-md lg:container lg:mx-auto',
            getClassType(k, '', 'reverse'),
          ]"
        >
          <div class="col-lg-2 col-3 col-md-3 col-sm-3 col-xs-6 avatar align-items-center">
            <q-responsive :ratio="1">
              <q-img class="img" :src="v.imgLink" loading="eager" :no-spinner="true"></q-img>
            </q-responsive>
          </div>
          <div class="col-7 col-lg-6 col-md-9 col-sm-12 col-xs-12 content">
            <div class="header text-weight-bolder text-center sm:text-left">{{ v.name }}</div>
            <div class="body">
              <div
                class="title text-center sm:text-left"
                v-for="(vv, kk) in v.title"
                :key="kk"
              >{{ vv }}</div>
              <div class="description">{{ v.description }}</div>
            </div>
            <div class="footer text-center sm:text-left">
              <router-link :to="v.link">了解更多 ></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <contact></contact>
  </q-page>
</template>

<script lang='ts' src='../ts/pages/index.ts'>
</script>

<style lang="scss">
.bg-filter {
  filter: brightness(0.6);
}

.mobile {
  .bg-filter {
    filter: brightness(0.4);
  }
}

.bg-filter-none {
  filter: brightness(1);
}
</style>
