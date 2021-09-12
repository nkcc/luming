/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
                  <p class="description">
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
    <section class="lm-culture">
      <div class="caption">MAXFUTURE</div>
      <div class="row">
        <div
          class="col col-sm-6 col-xs-12 col-md-3 culture-item"
          v-for="(v, k) in cultureData"
          :key="k"
        >
          <div :class="k % 2 == 0 ? 'bar-secondary' : 'bar'"></div>
          <q-img class="culture-img" :src="v.imgLink"></q-img>
          <div class="content">
            <p>{{ v.description }}</p>

            <div class="footer">
              <a href=""> READ MORE ></a>
            </div>
          </div>
          <div :class="k % 2 == 0 ? 'bar-secondary' : 'bar'"></div>
        </div>
      </div>
    </section>
    <section class="lm-offers">
      <q-carousel
        v-model="slideOffer"
        swipeable
        control-color="white"
        navigation
        padding
        arrows
        animated
        transition-prev="fade"
        transition-next="fade"
        class="lm-points-background"
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

        <template v-for="(v, k) in offerData" :key="k">
          <q-carousel-slide
            :name="'offer' + k"
            class="column no-wrap flex-center"
          >
            <div class="row">
              <div class="col-12">
                <div class="caption">鹿名国际 录取院校</div>
                <ul class="area">
                  <li
                    :class="['label', slideOffer == 'offer0' ? 'active' : '']"
                  >
                    美国藤校
                  </li>
                  <li
                    :class="['label', slideOffer == 'offer1' ? 'active' : '']"
                  >
                    英国前五
                  </li>
                  <li
                    :class="['label', slideOffer == 'offer2' ? 'active' : '']"
                  >
                    澳洲八大
                  </li>
                  <li
                    :class="['label', slideOffer == 'offer3' ? 'active' : '']"
                  >
                    新加坡名校
                  </li>
                </ul>
              </div>
              <div class="col-12">
                <ul class="offer-list">
                  <li class="offer-item" v-for="(sv, sk) in v.list" :key="sk">
                    <div class="school-logo">
                      <q-img class="img" :src="sv.imgLink"></q-img>
                    </div>
                    <div class="school-desc">
                      <div class="title">{{ sv.title }}</div>
                      <div class="description">
                        {{ sv.description }}
                      </div>
                      <div class="footer">
                        <q-icon class="dot" name="fiber_manual_record"></q-icon>
                        <a href="">READ MORE ></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </q-carousel-slide>
        </template>
      </q-carousel>
    </section>
  </q-page>
</template>

<script lang="ts">
import { CarouselData, OfferData } from 'components/models';
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
    const cultureData = ref([
      {
        imgLink: require('../assets/oxford.jpeg'),
        description:
          '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
      },
      {
        imgLink: require('../assets/bg.jpg'),
        description:
          '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
      },
      {
        imgLink: require('../assets/oxford.jpeg'),
        description:
          '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
      },
      {
        imgLink: require('../assets/oxford.jpeg'),
        description:
          '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
      },
    ]);

    const offerData = ref<OfferData[]>([
      {
        title: 'Open',
        name: '',
        list: [
          {
            title: '哈佛大学',
            description:
              '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
            imgLink: require('../assets/school-logo/320px-New_York_University_Seal.png'),
          },
          {
            title: '约翰霍普金斯大学',
            description:
              '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
            imgLink: require('../assets/school-logo/john.png'),
          },
          {
            title: '宾夕法尼亚大学',
            description:
              '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
            imgLink: require('../assets/harvard_school.jpg'),
          },
        ],
      },
      {
        title: 'Open',
        name: '',
        list: [
          {
            title: '香港大学',
            description:
              '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
            imgLink: require('../assets/school-logo/HKUST.png'),
          },
          {
            title: '约翰霍普金斯大学',
            description:
              '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
            imgLink: require('../assets/lb.jpg'),
          },
          {
            title: '宾夕法尼亚大学',
            description:
              '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
            imgLink: require('../assets/harvard_school.jpg'),
          },
        ],
      },
      {
        title: 'Open',
        name: '',
        list: [
          {
            title: '哈佛大学',
            description:
              '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
            imgLink: require('../assets/oxford.jpeg'),
          },
          {
            title: '约翰霍普金斯大学',
            description:
              '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
            imgLink: require('../assets/lb.jpg'),
          },
          {
            title: '宾夕法尼亚大学',
            description:
              '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
            imgLink: require('../assets/harvard_school.jpg'),
          },
        ],
      },
      {
        title: 'Open',
        name: '',
        list: [
          {
            title: '哈佛大学',
            description:
              '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
            imgLink: require('../assets/oxford.jpeg'),
          },
          {
            title: '约翰霍普金斯大学',
            description:
              '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
            imgLink: require('../assets/lb.jpg'),
          },
          {
            title: '宾夕法尼亚大学',
            description:
              '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
            imgLink: require('../assets/harvard_school.jpg'),
          },
        ],
      },
    ]);

    return {
      carouselData,
      cultureData,
      offerData,
      controlType: ref('flat'),
      controlTypeOptions: [
        { value: 'regular', label: 'regular' },
        { value: 'unelevated', label: 'unelevated' },
        { value: 'flat', label: 'flat (default)' },
        { value: 'outline', label: 'outline' },
        { value: 'push', label: 'push' },
      ],
      slide: ref('carousel0'),
      slideOffer: ref('offer0'),
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
