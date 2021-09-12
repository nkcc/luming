<template>
  <q-page class="row items-center justify-evenly">
    <section class="home-background">
      <div class="lm-introduction">
        <div class="lm-text-title">鹿 名 国 际 教 育</div>
        <div class="lm-text-second-title">MAXFUTURE</div>
        <p class="text-center">让世界名校， 不再高不可攀</p>
      </div>
    </section>
    <section class="lm-services">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12 bg-secondary">
          <div class="bar-secondary"></div>
          <div class="media">
            <q-img class="img" src="~/assets/course-1.jpg"></q-img>
            <div class="introduction">
              <div class="sub-title">MAXFUTURE PRODUCTS</div>
              <div class="heading">青云计划</div>
              <p>单所申请世界名校精准直录</p>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 bg-primary">
          <div class="bar"></div>
          <div class="media">
            <q-img class="img" src="~/assets/course-2.jpg"></q-img>
            <div class="introduction">
              <div class="sub-title">MAXFUTURE PRODUCTS</div>
              <div class="heading">青云计划</div>
              <p>单所申请世界名校精准直录</p>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 bg-secondary">
          <div class="bar-secondary"></div>
          <div class="media">
            <q-img class="img" src="~/assets/course-3.jpg"></q-img>
            <div class="introduction">
              <div class="sub-title">MAXFUTURE PRODUCTS</div>
              <div class="heading">青云计划</div>
              <p>单所申请世界名校精准直录</p>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 bg-primary">
          <div class="bar"></div>
          <div class="media">
            <q-img class="img" src="~/assets/course-4.jpg"></q-img>
            <div class="introduction">
              <div class="sub-title">MAXFUTURE PRODUCTS</div>
              <div class="heading">青云计划</div>
              <p>单所申请世界名校精准直录</p>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-points">
      <template v-for="(v, k) in carouselData" :key="k"
        >carousel{{ k }}
      </template>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        class="lm-points-background"
        keep-alive
        :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'"
      >
        >
        <template v-slot:navigation-icon="{ active, onClick }">
          <q-btn
            v-if="active"
            size="3px"
            flat
            dense
            @click="onClick"
            :style="slideActive"
          />
          <q-btn
            v-else
            size="3px"
            flat
            dense
            :style="slideDefault"
            @click="onClick"
          />
        </template>

        <template v-for="(v, k) in carouselData" :key="k">
          <q-carousel-slide
            :name="'carousel' + k"
            class="column no-wrap flex-center"
          >
            <div class="row">
              <div class="col col-sm-12 offset-sm-1 col-md-5 offset-1 left">
                <div class="header">{{ v.title }}</div>
                <div class="content">
                  <div class="title">{{ v.subTitle }}</div>
                  <p class="discription">
                    {{ v.description }}
                  </p>
                </div>
                <div class="footer">
                  <q-icon class="dot" name="fiber_manual_record"></q-icon>
                  <a href="">READ MORE ></a>
                </div>
              </div>
              <div class="col col-sm-12 offset-sm-1 col-md-5 offset-1 right">
                <q-img class="points-img" :src="v.imgLink"></q-img>
              </div>
            </div>
          </q-carousel-slide>
        </template>
      </q-carousel>
    </section>
  </q-page>
</template>

<script lang="ts">
import { CarouselData, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const carouselData = ref<CarouselData[]>([
      {
        name: '',
        title: '为什么选择鹿名',
        subTitle: '来自海外',
        description:
          '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../assets/oxford.jpeg'),
      },
      {
        name: '',
        title: '为什么选择鹿名',
        subTitle: '来自海外',
        description:
          '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../assets/lb.jpg'),
      },
      {
        name: '',
        title: '为什么选择鹿名',
        subTitle: '来自海外',
        description:
          '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../assets/harvard_school.jpg'),
      },
      {
        name: '',
        title: '为什么选择鹿名',
        subTitle: '来自海外',
        description:
          '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../assets/bg.jpg'),
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });

    return {
      carouselData,
      meta,
      controlType: ref('flat'),
      controlTypeOptions: [
        { value: 'regular', label: 'regular' },
        { value: 'unelevated', label: 'unelevated' },
        { value: 'flat', label: 'flat (default)' },
        { value: 'outline', label: 'outline' },
        { value: 'push', label: 'push' },
      ],
      slide: ref('carousel0'),
      slideActive: ref(
        'background:#cc932e;width: 100px;border-radius: 0;padding:0;'
      ),
      slideDefault: ref(
        'background:#26322b;width: 100px;border-radius: 0;padding:0;'
      ),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
});
</script>
