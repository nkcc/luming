/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
<q-page class="row items-center justify-evenly">
    <section class="home-background">
        <div class="lm-introduction animate__animated animate__fadeIn">
            <div class="lm-text-title text-center">鹿 名 国 际 教 育</div>
            <div class="lm-text-second-title">
                <q-img class="logo-title" src="logo_letter.svg" fit="contain"></q-img>
            </div>
            <p class="text-center">让世界名校， 不再高不可攀</p>
        </div>
        <div class="
          show-more
          justify-center
          row
          animate__animated
          animate__slow
          animate__slideOutUp
          animate__repeat
          animate__infinite
        ">
            <q-icon class="" size="50px" name="keyboard_double_arrow_up" color="secondary"></q-icon>
        </div>
    </section>
    <section class="lm-services">
        <div class="row q-col-gutter-sm">
            <div class="
            col-md-3 col-sm-6 col-xs-12
            animate__animated animate__animated
            service-container
          " v-for="(v, k) in servicesData" :key="k">
                <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>
                <div class="media">
                    <q-img class="img" :src="v.img" :ratio="537 / 336"></q-img>
                    <div class="introduction" :class="getClassType(k, 'bg-secondary', 'bg-primary')">
                        <div class="heading">{{ v.title }}</div>
                        <p>{{ v.description }}</p>
                        <a href="">了解更多 ></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lm-points row items-center">
        <div class="points-container">
            <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated control-color="secondary" navigation padding arrows class="lm-points-background" keep-alive :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'">
                >
                <template v-slot:navigation-icon="{ active, onClick }">
                    <q-btn v-if="active" size="3px" flat dense @click="onClick" :style="slideActive" />
                    <q-btn v-else size="3px" flat dense :style="slideDefault" @click="onClick" />
                </template>
                <template v-for="(v, k) in carouselData" :key="k">
                    <q-carousel-slide :name="'carousel' + k" class="column no-wrap">
                        <div class="row justify-center items-center">
                            <div class="col-xs-12 col-sm-12 col-md-5 left">
                                <h2 class="text-secondary text-weight-bold">{{ v.title }}</h2>
                                <div class="content">
                                    <h3 class="text-white text-weight-bold">
                                        {{ v.subTitle }}
                                    </h3>
                                    <p class="description">
                                        {{ v.description }}
                                    </p>
                                </div>
                                <div class="footer">
                                    <q-icon class="dot" name="fiber_manual_record"></q-icon>
                                    <a href="">了解更多 ></a>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 right">
                                <q-responsive :ratio="692 / 511">
                                    <q-img class="points-img" :src="v.imgLink"></q-img>
                                </q-responsive>
                            </div>
                        </div>
                    </q-carousel-slide>
                </template>
            </q-carousel>
        </div>
    </section>
    <section class="lm-culture">
        <div class="caption">
            <q-img class="logo-letter" src="logo_letter_dark.svg" fit="contain"></q-img>
        </div>
        <div class="row q-col-gutter-sm">
            <div class="col col-sm-6 col-xs-12 col-md-3 culture-item" v-for="(v, k) in cultureData" :key="k">
                <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>
                <q-responsive :ratio="542 / 511">
                    <q-img class="culture-img" :src="v.imgLink"></q-img>
                </q-responsive>

                <div class="content">
                    <p>{{ v.description }}</p>

                    <div class="footer">
                        <a href=""> 了解更多 ></a>
                    </div>
                </div>
                <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>
            </div>
        </div>
    </section>
    <section class="lm-offers row items-center">
        <div class="offer-container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center text-white text-weight-bold header-title">鹿名国际 录取院校</h1>
                    <ul class="area">
                        <li :class="['label', slideOffer == v.type ? 'active' : '']" v-for="(v, k) in offerType" :key="k" @click="changeSlideOfferType(v.type)">
                            {{ v.title }}
                        </li>
                    </ul>
                </div>
            </div>
            <q-carousel v-model="slideOffer" control-color="white" navigation padding arrows animated transition-prev="fade" transition-next="fade" class="lm-points-background">
                >
                <template v-slot:navigation-icon="{ active, onClick }">
                    <q-btn v-if="active" size="3px" flat dense @click="onClick" :style="slideActive" />
                    <q-btn v-else size="3px" flat dense :style="slideDefault" @click="onClick" />
                </template>

                <template v-for="(v, k) in offerData" :key="k">
                    <q-carousel-slide :name="v.name" class="column no-wrap flex-center">
                        <q-scroll-area class="lm-scroll" :bar-style="{ background: 'white' }">
                            <ul class="
                    offer-list
                    row
                    fit
                    justify-start
                    items-center
                    q-gutter-xs q-col-gutter
                    no-wrap
                  ">
                                <li class="offer-item" v-for="(sv, sk) in v.list" :key="sk">
                                    <div class="school-logo">
                                        <q-img class="img" :src="sv.imgLink" fit="scale-down"></q-img>
                                    </div>
                                    <div class="school-desc">
                                        <div class="title">{{ sv.title }}</div>
                                        <div class="description ellipsis-3-lines">
                                            {{ sv.description }}
                                        </div>
                                        <div class="footer">
                                            <q-icon class="dot" name="fiber_manual_record"></q-icon>
                                            <a :href="sv.link">了解更多 ></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </q-scroll-area>
                    </q-carousel-slide>
                </template>
            </q-carousel>
        </div>
    </section>
    <section class="lm-case">
        <div :class="[
          'case-item',
          'row',
          'justify-center',
          'items-center',
          k % 2 !== 0 ? 'reverse' : '',
        ]" v-for="(v, k) in caseData" :key="k">
            <div class="img-container col-md-6 col-sm-12 col-lg-6 col-xl-5">
                <q-responsive :ratio="899 / 716" class="shadow-up-10">
                    <q-img class="img" :src="v.imgLink" fit="contain"></q-img>
                </q-responsive>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-6 col-xl-5 content-container">
                <q-responsive :ratio="899 / 716">
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
                            <a href="">了解更多 ></a>
                        </div>
                    </div>
                </q-responsive>
            </div>
        </div>
    </section>
    <section class="lm-team lm-dark-background">
        <h1 class=" header-title text-white text-center text-weight-bold">鹿名团队</h1>
        <div class="team-container row">
            <div class="team-card col-sm-6 col-md-6 col-lg-3" v-for="(v, k) in teamData" :key="k">
                <div :class="k % 2 !== 0 ? 'bar' : 'bar-secondary'"></div>

                <q-responsive :ratio="505 / 396">
                    <q-img class="img" :src="v.imgLink"></q-img>
                </q-responsive>

                <div class="content">
                    <div class="name text-weight-bolder">{{ v.name }}</div>
                    <p class="description">{{ v.description }}</p>
                    <div class="footer">
                        <a href=""> 了解更多 ></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lm-professor">
        <h1 class="header text-weight-bold text-center">教授孵育计划</h1>

        <div class="prof-intro" :class="getClassType(k, '', 'reverse')" v-for="(v, k) in professorData" :key="k">
            <div :class="['row justify-center items-center', getClassType(k, '', 'reverse')]">
                <div class="col-lg-2 col-3 col-md-3 col-sm-12 avatar align-items-center">
                    <q-responsive :ratio="1">
                        <q-img class="img" :src="v.imgLink"></q-img>
                    </q-responsive>

                </div>
                <div class="col-7 col-lg-6 col-md-9 col-sm-12 content">
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
                        <a href=""> 了解更多 > </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lm-contact">
        <q-parallax src="bg.jpg" :height="650">
            <div class="green-background">
                <div class="row justify-center">
                    <div class="col-lg-8 col-md-10 q-pa-md q-ma-md">
                        <h1 class="text-secondary title">联系我们</h1>
                        <h4 class="text-white text-weight-bold">
                            本科硕士精准直录，实现最高学府留学梦
                        </h4>
                        <div class="form">
                            <q-input input-style="color: #cd932f" color="secondary" label-color="white" v-model="form.name" label="姓名">
                                <template v-slot:prepend>
                                    <q-icon color="secondary" name="person" />
                                </template>
                            </q-input>
                            <q-input input-style="color: #cd932f" color="secondary" label-color="white" v-model="form.phone" label="电话">
                                <template v-slot:prepend>
                                    <q-icon color="secondary" name="phone" />
                                </template>
                            </q-input>
                            <q-input color="secondary" label-color="white" input-style="color: #cd932f" v-model="form.wechat" label="微信">
                                <template v-slot:prepend>
                                    <q-icon color="secondary" name="wechat" />
                                </template>
                            </q-input>
                            <q-btn class="submit" outline type="submit" style="color: goldenrod">
                                <q-icon class="dot" name="fiber_manual_record"></q-icon>
                                了解更多
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
import {
    defineComponent
} from 'vue';

export default defineComponent({
    name: 'PageIndex',
    setup() {
        return data;
    },
    methods: {
        visibilityChanged() {
            console.log(123);
        },

        getClassType(k: number, firstClass: string, secondClass: string) {
            return k % 2 == 0 ? firstClass : secondClass;
        },

        changeSlideOfferType(type: string) {
            this.slideOffer = type;
        },
    },
});
</script>
