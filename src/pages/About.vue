<template>
<div class="lm-about">
    <top-banner>
    </top-banner>

    <div class="lm-about-history row justify-center ">
        <div class="col-12 row shadow-10">
            <div class="left col-4">
                <q-img class="lm-history_img" src="about-2.jpg"></q-img>
            </div>
            <div class="right col-8 bg-primary">
                <q-separator dark color="secondary" />
                <h3 class="lm-history_title text-secondary text-weight-bold ">
                    鹿鸣来源
                </h3>
                <div class="lm-history_content">
                    <q-scroll-area style="height: 200px;">
                        <p v-for="(v, k) in history" :key="k" class="text-white">
                            {{v}}
                        </p>
                    </q-scroll-area>
                </div>
                <!-- <q-separator dark color="secondary" /> -->
            </div>
        </div>

    </div>

    <!-- <div class="lm-about-culture row justify-center ">
      <div class="col-9 row justify-center">
        <div class="lm-about-culture_top col-5">
            <q-separator dark color="black"  inset/>
            <h2 class="lm-about-culture_title text-center text-weight-bold">鹿鸣文化</h2>
        </div>
      </div>

        <div class="lm-about-culture_points col-8 row">
            <div class="col-6 lm-about-culture_container" v-for="(v, k) in cultureData" :key="k">
              <div class="culture-name text-weight-bold text-center">{{v.title}}</div>
              <div
               class="culture-description"> <span>
                 {{v.description}}</span></div>
            </div>
        </div>
        <div class="col-4">
            <q-img src="web-developer.jpg"></q-img>
        </div>
    </div> -->

    <div class="lm-about-culture row justify-center ">
        <div class="card-container col-8 row justify-center">
            <q-card class="culture-card col-3" v-for="(v, k) in cultureData" :key="k">
                <q-img :src="v.backgroundImage" :ratio="1">
                    <div class="text-subtitle2 absolute-bottom text-center text-secondary text-weight-bolder">
                        {{ v.title}}
                    </div>
                </q-img>
                <q-card-section>
                    {{ v.description }}
                </q-card-section>
            </q-card>
        </div>

    </div>
</div>
</template>

<script>
import TopBanner from '../components/TopBanner.vue'
import setupData from '../ts/pages/about'

export default {
    name: 'About',
    components: {
        TopBanner
    },
    setup() {
        return setupData
    },
}
</script>

<style lang="scss">
@import '../css/about.scss';
</style>
