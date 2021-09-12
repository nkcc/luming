/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
  <q-page class="row items-center justify-evenly">
    <section class="home-background">
      <div class="lm-introduction animate__animated animate__fadeIn">
        <div class="lm-text-title">鹿 名 国 际 教 育</div>
        <div class="lm-text-second-title">MAXFUTURE</div>
        <p class="text-center">让世界名校， 不再高不可攀</p>
      </div>
    </section>
    <section class="lm-services">
      <div class="row">
        <div
          class="
            col-md-3 col-sm-6 col-xs-12
            bg-secondary
            animate__animated animate__animated
          "
        >
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
            </div>
            <ul class="offer-list row">
              <li class="offer-item col-4" v-for="(sv, sk) in v.list" :key="sk">
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
          </q-carousel-slide>
        </template>
      </q-carousel>
    </section>
    <section class="lm-case">
      <div
        :class="[
          'case-item',
          'row',
          'justify-center',
          k % 2 !== 0 ? 'reverse' : '',
        ]"
        v-for="(v, k) in caseData"
        :key="k"
      >
        <div class="img-container col col-md-6 col-sm-12 col-lg-6 col-xl-4">
          <q-img class="img" :src="v.imgLink"></q-img>
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6 col-xl-4 justify-center">
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
                  <span class="label text-weight-bolder">
                    {{ vv.label }}:
                  </span>
                  <span class="value text-weight-light"> {{ vv.value }}</span>
                </div>
              </div>
            </div>
            <div class="footer">
              <q-icon class="dot" name="fiber_manual_record"></q-icon>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-team lm-dark-background">
      <div class="header text-weight-bold">鹿名团队</div>
      <div class="team-container row">
        <div
          class="team-card col-sm-6 col-md-6 col-lg-3"
          v-for="(v, k) in teamData"
          :key="k"
        >
          <div :class="k % 2 !== 0 ? 'bar' : 'bar-secondary'"></div>
          <q-img class="img" :src="v.imgLink"></q-img>
          <div class="content">
            <div class="name text-weight-bolder">{{ v.name }}</div>
            <p class="description">{{ v.description }}</p>
          </div>

          <div class="footer">
            <a href=""> READ MORE ></a>
          </div>
        </div>
      </div>
    </section>
    <setion class="lm-professor">
      <h1 class="header text-weight-bold text-center">教授孵育计划</h1>

      <div
        class="prof-intro q-pa-xl q-pa-md"
        :class="k % 2 == 0 ? '' : 'reverse'"
        v-for="(v, k) in professorData"
        :key="k"
      >
        <div :class="[' row justify-center', k % 2 == 0 ? '' : 'reverse']">
          <div
            class="col-lg-2 col-3 col-md-3 col-sm-12 avatar align-items-center"
          >
            <q-img class="img" :src="v.imgLink"></q-img>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-7 col-lg-4 col-md-9 col-sm-12 content">
            <div class="header text-weight-bolder">{{ v.name }}</div>
            <div class="body">
              <div class="title" v-for="(vv, kk) in v.title" :key="kk">
                {{ vv }}
              </div>
              <div class="description">
                {{ v.description }}
              </div>
            </div>
            <div class="footer">
              <a href=""> READ MORE > </a>
            </div>
          </div>
        </div>
      </div>
    </setion>
    <section class="lm-contact">
      <q-parallax src="https://www.stanford.edu/wp-content/uploads/2021/07/20210527_Stanford_OvalDJI_0037-DG-2048x1108.jpg" :height="600" >
        <div class="green-background">
          <div class="row justify-center">
            <div class="col-lg-8 col-md-10 q-pa-md q-ma-md">
              <h1 class="text-secondary">联系我们</h1>
              <div class="information text-white text-weight-bold">
                本科硕士精准直录，实现最高学府留学梦
              </div>
              <div class="form">
                <q-input
                  input-style="color: #cd932f"
                  color="secondary"
                  label-color="white"
                  v-model="text"
                  label="姓名"
                >
                  <template v-slot:prepend>
                    <q-icon color="secondary" name="person" />
                  </template>
                </q-input>
                <q-input
                  input-style="color: #cd932f"
                  color="secondary"
                  label-color="white"
                  v-model="text"
                  label="电话"
                >
                  <template v-slot:prepend>
                    <q-icon color="secondary" name="phone" />
                  </template>
                </q-input>
                <q-input
                  color="secondary"
                  label-color="white"
                  input-style="color: #cd932f"
                  v-model="text"
                  label="微信"
                >
                  <template v-slot:prepend>
                    <q-icon color="secondary" name="wechat" />
                  </template>
                </q-input>
                <q-btn
                  class="submit"
                  outline
                  type="submit"
                  style="color: goldenrod"
                >
                  <q-icon class="dot" name="fiber_manual_record"></q-icon>
                  SUBMIT >
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </q-parallax>
    </section>
  </q-page>
</template>

<script lang="ts">
import data from '../ts/pages/index';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return data;
  },
  methods: {
    visibilityChanged() {
      console.log(123);
    },
  },
});
</script>
