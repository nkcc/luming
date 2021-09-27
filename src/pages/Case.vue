<template>
<div class="lm-case-plan w-full lm-bg-background">
    <part-header name="鹿名案例"></part-header>
    <div class="lm-case-plan-container mb-24">
        <div class="lm-plans row justify-center mb-10">
            <div class="lm-plans-title_container col-9 flex justify-center pb-7">
                <span class="plan-title text-center" :class="v.type === 'name1' ? 'active' : ''" v-for="(v, k) in planType" :key="k">
                    {{ v.title }}
                </span>
            </div>
            <div class="lm-plans-button_container col-9 flex justify-center">
                <span class="plan-button text-center" :class="v.type === 'name1' ? 'active' : ''" v-for="(v, k) in planType" :key="k">
                </span>
            </div>
        </div>
        <div class="lm-case-plan_slider__container row justify-center">
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated control-color="secondary" navigation padding arrows class="bg-transparent lm-case-plan_slider col-8" keep-alive height="auto" :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'" prev-icon="img:left.svg" next-icon="img:right.svg">
                <template v-slot:navigation-icon="">
                </template>
                <template v-for="(v, k) in caseData" :key="k">
                    <q-carousel-slide :name="'carousel' + k" class="column no-wrap">
                        <div class="row justify-center items-center">
                            <div class="col-11">
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
            <div class="lm-case-plan__content_container col-5">
                <div class="school pb-9">
                    <div class="name text-quaternary text-weight-bolder">录取院校： <span class="text-white">{{ currentCase.name }}</span></div>
                    <div class="rank text-quaternary text-weight-bolder">学校排名： <span> {{ currentCase.rank }}</span></div>
                </div>
                <div class="student">
                    <div class="name text-white text-weight-bold pb-1"> {{ currentCase.student }}</div>
                    <div class="background">
                        <div class="title text-white text-weight-bolder">背景分析：</div>
                        <div class="info text-white text-weight-bolder " v-for="(v, k) in currentCase.info" :key="k">{{ v.label }}：<span class="text-weight-light">{{ v.value }}</span>
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
    <contact></contact>
</div>
</template>

<script>
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
    computed: {
        currentCase() {
            return {
                imgLink: 'case1.jpg',
                name: '康奈尔大学',
                rank: 'U.S. News 全美排名第17',
                student: '陆同学',
                info: [{
                        label: '优势',
                        value: 'IB课程体系，GPA达标',
                    },
                    {
                        label: '劣势',
                        value: '综合实力不够理想，没有SAT成绩，活动背景较为薄弱',
                    },
                ],
                caseStudy: [
                    '陆同学和其父亲在2020年12月底找到我们，当时她ED申请布朗大学被拒，父女俩很是焦虑，害怕从小到大的藤校梦破碎。我们首先安抚了学生情绪，然后了解了学生的背景情况，得知陆同学是一个成绩相对来说比较优秀的学生，托福考到了110并IB成绩有38分，但没有SAT考试成绩。如果正常申请的话，申请至美国30-50名的大学，问题倒不是很大。',

                    '但陆同学从小就有藤校情结，坚持只选择美国常春藤大学。于是我们给陆同学推荐了鹿名国际的“青云计划”，精准录取康奈尔大学，而且只用申请这一所学校。获知此方案后，陆同学的父亲陆总对如此“完美”的方案不敢相信，前前后后沟通了不下10次，最终要求我们必须接受“公平对赌条款”（对赌一定数量金额，不录取赔付客户，录取则客户多支付其金额）才与我们签约。我们对自己方案有100%的信心，于是便答应下来。',

                    '可怜天下父母心，签约之后，爱女心切的陆总频繁的与我们沟通，询问申请进度，我们一一耐心解答。官方下录取offer的时间是2021年4月7号，而我们在三月份已获知陆同学被康奈尔录取的消息。在北京时间4月7号早上7点，不出所料陆同学被康奈尔大学官方通知录取。陆总感叹：“一路走过，选择没有错，感谢我们陪伴和支持”。和同学们结伴同行在海南旅游的陆同学，也与同学们一起分享了这胜利的喜悦。我们也为圆满的结果感到欣慰。预祝陆同学在新的旅程绽放精彩人生！',
                ],
            }
        }
    }
}
</script>

<style lang="scss">
@import '../css/quasar.variables.scss';

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
</style>
