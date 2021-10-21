<template>
<div class='lm-study-abroad'>
    <section>
        <div class='lm-light-dark-background'>
            <div class='lg:container lg:mx-auto'>
                <part-header name='鹿名留学'></part-header>
                <div class="lm-container row justify-center pb-20">
                    <div class="col-9">
                        <div class="mb-16">
                            <div class='text-quaternary text-weight-bolder text-center text-base leading-6' v-for='(v,k) in prodTitle' :key='k'>{{v}}</div>
                            <div class="text-quaternary text-center text-weight-thin text-sm  leading-7" v-for='(v,k) in prodDescription' :key='k'>{{v}}</div>
                        </div>
                        <div class="text-quaternary text-weight-bold mb-13 text-center lm-question-title mb-14">
                            {{questionTitle}}
                        </div>
                        <div class="text-quaternary text-center text-weight-bolder text-base leading-" v-for='(v,k) in questionAnswer' :key='k'> {{v}}</div>
                    </div>
                </div>
                <section class='lm-services pb-2'>
                    <div class='row q-col-gutter-x-sm lg:container lg:mx-auto'>
                        <div class='
            col-md-3 col-sm-6 col-xs-12
            animate__animated animate__animated
            service-container
          ' v-for='(v, k) in servicesData' :key='k'>

                            <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>

                            <div class='media' :data-id='k' v-intersection.once='onServiceIntersection'>
                                <transition-group appear enter-active-class='animated animate__fadeInUp'>
                                    <q-img class='img' :src='v.img' :ratio='537 / 336' v-if='servicesData[k].visible'></q-img>
                                    <div class='introduction' :class="getClassType(k, 'bg-secondary', 'bg-primary')" v-if='servicesData[k].visible'>
                                        <h3 class='text-white text-weight-bold heading text-5xl py-10'>{{ v.title }}</h3>
                                        <p>{{ v.description }}</p>
                                        <a href=''>了解更多 ></a>
                                    </div>
                                </transition-group>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
    <contact></contact>
</div>
</template>

<script lang="ts">
import PartHeader from '../components/PartHeader.vue'
import Contact from '../components/Contact.vue'
import {
    ref
} from 'vue'

export default {
    name: 'StudyAbroad',
    components: {
        PartHeader,
        Contact
    },
    setup() {
        const prodTitle = ['鹿名留学为不同的学生量身打造了三个留学申请产品：', '青云计划、天梯计划、孵育计划。']
        const prodDescription = ['对于每一位鹿名学员，我们都会结合他的自身优势、成绩和背景基础、',
            '申请准备时间以及学生自己的择校想法，提供一套最符合学生自己的梦校申请方案。'
        ]
        const questionTitle = '为什么选择鹿名留学申请服务?'
        const questionAnswer = ['独家全球名校资源',
            '99%+录取率',
            '已斩获600+世界顶尖院校录取',
            '100%全球名校',
            '100%毕业率',
            '98%服务满意度',
            '零门槛以及低分高录',
            '申请周期短'
        ]
        const servicesData = ref([{
                title: '青云计划',
                img: 'course-1.jpg',
                description: '单所申请世界名校精准直录',
                visible: false,
            },
            {
                title: '天梯计划',
                img: 'course-2.jpg',
                description: '低门槛宝保录取全球顶尖院校',
                visible: false,
            },
            {
                title: '孵育计划',
                img: 'course-3.jpg',
                description: '美国名校教授培育保藤规划',
                visible: false,
            },
            {
                title: '学业管家',
                img: 'course-4.jpg',
                description: '全托学业辅导确保顺利毕业',
                visible: false,
            },
        ]);
        return {
            prodTitle,
            prodDescription,
            questionTitle,
            questionAnswer,
            servicesData,
            getClassType(k: number, firstClass: string, secondClass: string) {
                return k % 2 == 0 ? firstClass : secondClass;
            },
            onServiceIntersection(entry: {
                target: {
                    dataset: {
                        id: string,
                    }
                },
                isIntersecting: boolean
            }) {
                const index = parseInt(entry.target.dataset.id, 10);

                setTimeout(() => {
                    servicesData.value[index].visible = entry.isIntersecting;
                }, 100 * index);

            },
        }
    },
}
</script>

<style lang="scss">
.lm-question-title {
    font-size: 2.5rem;
    letter-spacing: 1.5625rem;
}
</style>
