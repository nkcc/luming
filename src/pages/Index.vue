/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
<q-page>
    <section class="lm-background">
        <div class="lm-introduction animate__animated animate__fadeIn row justify-center">
            <div class="lm-text-title text-center  lg:container lg:mx-auto">鹿 名 国 际 教 育</div>
            <div class="lm-text-second-title ">
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
          animate__repeat
          animate__infinite
          animate__slideOutUp
        lg:container lg:mx-auto
        " @click="scrollFullScreen">
            <q-img class="up-scroll" src="up_arrow.svg" fit="contain" height="3.125rem" width="12.5rem" />
        </div>
    </section>
    <section class="lm-services">
        <div class="row q-col-gutter-x-sm lg:container lg:mx-auto">
            <div class="
            col-md-3 col-sm-6 col-xs-12
            animate__animated animate__animated
            service-container
          " v-for="(v, k) in servicesData" :key="k">

                <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>

                <div class="media" :data-id="k" v-intersection.once="onServiceIntersection">
                    <transition-group appear enter-active-class="animated animate__fadeInUp">
                        <q-img class="img" :src="v.img" :ratio="537 / 336" v-if="servicesData[k].visible"></q-img>
                        <div class="introduction" :class="getClassType(k, 'bg-secondary', 'bg-primary')" v-if="servicesData[k].visible">
                            <h3 class="text-white text-weight-bold heading text-5xl py-10">{{ v.title }}</h3>
                            <p>{{ v.description }}</p>
                            <a href="">了解更多 ></a>
                        </div>
                    </transition-group>
                </div>

            </div>
        </div>
    </section>
    <section class="lm-green-background-container">
        <div class="lm-points row items-center lg:container lg:mx-auto">
            <div class="points-container ">
                <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated control-color="secondary" navigation padding arrows class="lm-points-background" keep-alive :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'">
                    <template v-slot:navigation-icon="{ active, onClick }">
                        <q-btn v-if="active" size="3px" flat dense @click="onClick" :style="slideActive" />
                        <q-btn v-else size="3px" flat dense :style="slideDefault" @click="onClick" />
                    </template>
                    <template v-for="(v, k) in carouselData" :key="k">
                        <q-carousel-slide :name="'carousel' + k" class="column no-wrap">
                            <div class="row justify-center items-center">
                                <div class="col-xs-12 col-sm-12 col-md-5 left q-py-xs-lg q-py-xs-lg">
                                    <h2 class="text-secondary text-weight-bold text-6xl pb-14">{{ v.title }}</h2>
                                    <div class="content">
                                        <h3 class="text-white text-weight-bold text-5xl pb-10">
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
                                <div class="col-xs-12 col-sm-12 col-md-4 right q-py-xs-lg q-py-sm-lg">
                                    <q-responsive :ratio="692 / 511">
                                        <q-img class="points-img" :src="v.imgLink"></q-img>
                                    </q-responsive>
                                </div>
                            </div>
                        </q-carousel-slide>
                    </template>
                </q-carousel>
            </div>
        </div>

    </section>
    <section class="lm-culture  lg:container lg:mx-auto">
        <div class="caption">
            <q-img class="logo-letter" src="logo_letter_dark.svg" fit="contain"></q-img>
        </div>
        <div class="row q-col-gutter-sm">

            <div class="col col-sm-6 col-xs-12 col-md-3 culture-item" v-for="(v, k) in cultureData" :key="k" :data-id="k" v-intersection.once="onCultureIntersection">
                <transition appear :enter-active-class="cultureAnimation(k, cultureData.length)">
                    <div class="animation-container" v-if="cultureData[k].visible">
                        <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>
                        <q-responsive :ratio="542 / 511">
                            <q-img class="culture-img" :src="v.imgLink"></q-img>
                        </q-responsive>

                        <div class="content">
                            <p class="py-5">{{ v.description }}</p>

                            <div class="footer">
                                <a href=""> 了解更多 ></a>
                            </div>
                        </div>
                        <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
    <div class="lm-green-background-container ">
        <section class="lm-offers row items-center lg:container lg:mx-auto">
            <div class="offer-container">
                <div class="row">
                    <div class="col-12 q-pa-xs-xs">
                        <h1 class="text-center text-white text-weight-bold header-title">
                            鹿名国际 录取院校
                        </h1>
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
                                            <div class="description ellipsis-3-lines overflow-y-auto">
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
    </div>
    <section class="lm-case">
        <div :class="[
          'case-item',
          k % 2 !== 0 ? 'reverse' : '',
        ]" v-for="(v, k) in caseData" :key="k">
            <div class="row justify-center items-center items-stretch lg:container lg:mx-auto" :class="k % 2 !== 0 ? 'reverse' : ''">
                <div class="img-container col-md-6 col-sm-12 col-xs-12 col-lg-6 col-xl-5">
                    <q-responsive :ratio="899 / 716" class="shadow-up-10">
                        <q-img class="img" :src="v.imgLink" fit="contain"></q-img>
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
                </div>
            </div>

        </div>
    </section>
    <section class="lm-team lm-dark-background">
        <h1 class="header-title text-white text-center text-weight-bold">
            鹿名团队
        </h1>
        <div class="team-container row lg:container lg:mx-auto">
            <div class="team-card col-sm-6 col-md-3 col-lg-3 col-xl-3" v-for="(v, k) in teamData" :key="k">
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
    <section class="lm-professor ">
        <h1 class="header text-weight-bold text-center py-12">教授孵育计划</h1>

        <div class="prof-intro" :class="getClassType(k, '', 'reverse')" v-for="(v, k) in professorData" :key="k">
            <div :class="[
            'row justify-center items-center q-pa-xs-md lg:container lg:mx-auto',
            getClassType(k, '', 'reverse'),
          ]">
                <div class="col-lg-2 col-3 col-md-3 col-sm-3 col-xs-6 avatar align-items-center">
                    <q-responsive :ratio="1">
                        <q-img class="img" :src="v.imgLink"></q-img>
                    </q-responsive>
                </div>
                <div class="col-7 col-lg-6 col-md-9 col-sm-12 col-xs-12 content">
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
    <contact></contact>
</q-page>
</template>

<script lang="ts">
import data from '../ts/pages/index';
import Contact from '../components/Contact.vue'
import {
    defineComponent
} from 'vue';

export default defineComponent({
    name: 'PageIndex',
    components: {
        Contact
    },
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
        scrollFullScreen() {
            let height = window.innerHeight - 20;
            window.scrollTo({
                top: height,
                behavior: 'smooth'
            })
        },
        onServiceIntersection(entry: {
            target: {
                dataset: {
                    id: string,
                }
            },
            isIntersecting: boolean
        }) {
            const index = parseInt(entry.target.dataset.id, 10)

            setTimeout(() => {
                this.servicesData[index].visible = entry.isIntersecting;
            }, 100 * index)

        },
        onCultureIntersection(entry: {
            target: {
                dataset: {
                    id: string,
                }
            },
            isIntersecting: boolean
        }) {
            const index = parseInt(entry.target.dataset.id, 10)

            this.cultureData[index].visible = entry.isIntersecting;

        },
        onTeamIntersection(entry: {
            target: {
                dataset: {
                    id: string,
                }
            },
            isIntersecting: boolean
        }) {
            const index = parseInt(entry.target.dataset.id, 10)

            setTimeout(() => {
                this.teamData[index].visible = entry.isIntersecting;
            }, 100 * index)

        },
        cultureAnimation(k: number, length: number) {
            let className

            className = k > length / 2 - 1 ? 'animated animate__fadeInRight' : 'animated animate__fadeInLeft'

            return className;
        }
    },
});
</script>
