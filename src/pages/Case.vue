<template>
<div class="lm-case-plan w-full lm-bg-background">
    <div class="lg:container lg:mx-auto">
        <part-header name="鹿名案例"></part-header>
        <div class="lm-case-plan-container mb-24">
            <div class="lm-plans row justify-center mb-10">
                <div class="lm-plans-title_container col-9 flex justify-center pb-7">
                    <span class="plan-title text-center cursor-pointer" :class="v.type === currentCaseType ? 'active' : ''" v-for="(v, k) in planType" :key="k" @click="changeSlideCaseType(v.type)">
                        {{ v.title }}
                    </span>
                </div>
                <div class="lm-plans-button_container col-9 flex justify-center">
                    <span class="plan-button text-center cursor-pointer" :class="v.type === currentCaseType ? 'active' : ''" v-for="(v, k) in planType" :key="k" @click="changeSlideCaseType(v.type)">
                    </span>
                </div>
            </div>
            <div class="lm-case-plan_slider__container row justify-center">
                <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated control-color="secondary" navigation padding arrows class="bg-transparent lm-case-plan_slider col-md-8 col-xs-12" keep-alive height="auto" prev-icon="img:left.svg" next-icon="img:right.svg">
                    <template v-slot:navigation-icon="">
                    </template>
                    <template v-for="(v, k) in caseData" :key="k">
                        <q-carousel-slide :name="v.caseName" class="column no-wrap">
                            <div class="row justify-center items-center">
                                <div class="col-md-11 col-xs-12">
                                    <q-responsive :ratio="1260 / 800">
                                        <q-img class="case-img shadow-24" :src="v.imgLink"></q-img>
                                    </q-responsive>
                                </div>
                            </div>
                        </q-carousel-slide>
                    </template>
                </q-carousel>
            </div>

            <div class="lm-case-plan__content row justify-center">
                <div class="lm-case-plan__content_container col-md-5 col-xs-10">
                    <div class="school pb-9">
                        <div class="name text-quaternary text-weight-bolder">录取院校： <span class="text-white">{{ currentCase.name }}</span></div>
                        <div class="rank text-quaternary text-weight-bolder">学校排名： <span> {{ currentCase.rank }}</span></div>
                    </div>
                    <div class="student">
                        <div class="name text-white text-weight-bold pb-1"> {{ currentCase.student }}</div>
                        <div class="background">
                            <div class="title text-white text-weight-bolder">背景分析：</div>
                            <div class="info text-white text-weight-bolder  pr-10" v-for="(v, k) in currentCase.info" :key="k">{{ v.label }}：<span class="text-weight-light">{{ v.value }}</span>
                            </div>

                            <div class="case-study text-white text-weight-bolder pt-9">
                                <div class="title pb-1">案例解读：</div>
                                <p class="text-weight-light mb-7 pr-10" v-for="(v, k) in currentCase.caseStudy" :key="k"> {{v}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content"></div>
                </div>

            </div>
        </div>
    </div>

    <contact></contact>
</div>
</template>

<script lang="ts">
import setupData from '../ts/pages/case'
import PartHeader from '../components/PartHeader.vue'
import Contact from '../components/Contact.vue'

export default {
    name: 'Case',
    components: {
        PartHeader,
        Contact,
    },
    setup() {

        return setupData
    },
    methods: {
        changeSlideCaseType(caseName: string) {
            this.slide = caseName + '|0'
        }
    },
    watch: {
        slide(val) {
            switch (this.currentCaseType) {
                case 'staircase':
                  this.currentCaseIndex = this.currentCaseTypeIndex
                    break
                case 'cloud':
                  this.currentCaseIndex = this.currentCaseTypeIndex + this.staircaseNum
                    break
                case 'born':
                  this.currentCaseIndex = this.currentCaseTypeIndex + this.staircaseNum + this.bornNum
                    break
            }

        }
    },
    computed: {
        currentCase() {
            return this.caseData[this.currentCaseIndex]
        },
        currentCaseType() {
            let caseTypeData: string[]
            let caseType: string
            caseTypeData = this.slide.split('|');
            caseType = caseTypeData[0];
            return caseType
        },
        currentCaseTypeIndex() {
            let caseTypeData: string[]
            let caseTypeIndex: string
            caseTypeData = this.slide.split('|');
            caseTypeIndex = caseTypeData[1];
            return parseInt(caseTypeIndex, 10)
        },
    }
}
</script>

<style lang="scss">
@import '../css/quasar.variables.scss';

.lm-case-plan {
    .lm-plans {
        .lm-plans-title_container {
            .plan-title {
                transition: color 1s ease;
                font-size: 2.125rem;
                color: $light-fade-green;
                font-weight: 700;
                align-self: flex-end;
                width: 12rem;

                &.active {
                    font-size: 2.75rem;
                    color: $quaternary;
                }
            }
        }

        .lm-plans-button_container {
            .plan-button {
                transition: all .3s ease;
                display: inline-block;
                width: 5.35rem;
                height: .25rem;
                background-color: $light-fade-green;
                margin: 0 .3rem;

                &.active {
                    background-color: $quaternary;
                }
            }
        }
    }

    .lm-case-plan_slider__container {
        position: relative;

        .lm-case-plan_slider {
            padding-top: 2.5rem;

            .case-img {
                border: 8px solid $quaternary;
                border-radius: 2px;
            }

        }

        &::before {
            content: " ";
            width: 70%;
            height: 60%;
            background-color: $white;
            position: absolute;
            top: 50%;
            left: 50%;
            border: 4px solid $quaternary;
            border-radius: 2px;
            transform: translate(-50%, -50%);
        }
    }

    .lm-case-plan__content {
        .lm-case-plan__content_container {
            .school {
                .name {
                    font-size: 1.8125rem;
                }

                .rank {
                    font-size: 1.8125rem;
                }
            }

            .student {
                .name {
                    font-size: 2.125rem;
                }

                .background {
                    font-size: 1rem;
                }
            }
        }
    }

}

@media (max-width: 768px) {
    .lm-case-plan {
        .lm-plans {
            .lm-plans-title_container {
                .plan-title {
                    font-size: 2.125rem;
                    color: $light-fade-green;
                    font-weight: 700;
                    align-self: flex-end;
                    width: 12rem;

                    &.active {
                        font-size: 2.75rem;
                        color: $quaternary;

                    }
                }
            }

            .lm-plans-button_container {
                .plan-button {
                    display: inline-block;
                    width: 5.35rem;
                    height: .25rem;
                    background-color: $light-fade-green;
                    margin: 0 .3rem;

                    &.active {
                        background-color: $quaternary;
                    }
                }
            }
        }

        .lm-case-plan_slider__container {
            position: relative;

            .lm-case-plan_slider {
                padding-top: 2.5rem;

                .case-img {
                    border: 2px solid $quaternary;
                }

            }

            &::before {
                content: "";
                width: 0;
                height: 60%;
                background-color: $white;
                position: absolute;
                top: 50%;
                left: 50%;
                border: none;
                border-radius: none;
                transform: translate(-50%, -50%);
            }
        }

        .lm-case-plan__content {
            .lm-case-plan__content_container {
                .school {
                    .name {
                        font-size: 1.8125rem;
                    }

                    .rank {
                        font-size: 1.8125rem;
                    }
                }

                .student {
                    .name {
                        font-size: 2.125rem;
                    }

                    .background {
                        font-size: 1rem;
                    }
                }
            }
        }

    }
}
</style>
