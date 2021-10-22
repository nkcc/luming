<template>
<div class='lm-study-abroad lm-light-dark-background'>
    <section class="transparent">
        <div>
            <div class='lg:container lg:mx-auto'>
                <part-header name='孵育计划'></part-header>
                <div class="lm-container row justify-center pb-20">
                    <div class="col-9">
                        <div class='text-quaternary text-weight-bolder text-center text-4xl mb-7'>{{programTitle}}</div>
                        <div class='text-quaternary text-weight-bolder text-center text-xl'>{{programDescription}}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="transparent mb-10">
        <div class='lm-points row items-center lg:container lg:mx-auto'>
            <div class='points-container '>
                <q-carousel v-model='slide' transition-prev='scale' transition-next='scale' swipeable animated control-color='secondary' navigation padding arrows class='lm-points-background' keep-alive :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'">
                    <template v-slot:navigation-icon="{ active, onClick }">
                        <q-btn v-if="active" size="2px" flat dense @click="onClick" :style="slideActive" />
                        <q-btn v-else size="2px" flat dense :style="slideDefault" @click="onClick" />
                    </template>
                    <template v-for='(v, k) in carouselData' :key='k'>
                        <q-carousel-slide :name="'carousel' + k" class='column no-wrap'>
                            <div class='row justify-center items-center'>
                                <div class='col-xs-12 col-sm-12 col-md-5 left q-py-xs-lg q-py-xs-lg'>
                                    <h3 class='text-white text-weight-bold text-2xl'>{{ v.title }}</h3>
                                    <div class='mt-2'>
                                        <h2 class='text-quaternary text-weight-bolder text-5xl pb-10'>
                                            {{ v.subTitle }}
                                        </h2>
                                        <p class='text-white text-sm pr-24 text-weight-thin leading-6'>
                                            {{ v.description }}
                                        </p>
                                    </div>
                                    <div class='footer'>
                                    </div>
                                </div>
                                <div class='col-xs-12 col-sm-12 col-md-4 right q-py-xs-lg q-py-sm-lg'>
                                    <q-responsive :ratio='692 / 511'>
                                        <q-img class='points-img' :src='v.imgLink'></q-img>
                                    </q-responsive>
                                </div>
                            </div>
                        </q-carousel-slide>
                    </template>
                </q-carousel>
            </div>
        </div>
    </section>
    <section class="transparent mb-20">
        <div class='lg:container lg:mx-auto'>
            <div class="lm-container row justify-center pb-20">
                <div class="col-9">
                    <description-with-img></description-with-img>
                </div>
            </div>
        </div>
    </section>
    <section class="transparent">
        <div class='lg:container lg:mx-auto'>
            <div class="lm-container row justify-center pb-20">
                <div class="col-9">
                    <div class="header">
                        <div class="title">{{offers.title}}</div>
                        <div class="subtitle"></div>
                    </div>
                    <div class="content">

                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import PartHeader from '../components/PartHeader.vue'
import DescriptionWithImg from '../components/DescriptionWithImg.vue'
import {
    CarouselData
} from 'components/models';

export default {
    name: 'IncubationProgram',
    components: {
        PartHeader,
        DescriptionWithImg
    },
    setup() {
        const offers = {
            title: '孵育计划 录取院校',
            subTitle: '（任何一所美国前30名大学）',
            data: [

            ]
        }
        const slideActive = ref(
            'background:#cc932e;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
        )
        const slideDefault = ref(
            'background:#26322b;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
        )
        const programTitle = '中长期规划型名校申请方式'
        const programDescription = '通过名校教授亲带学生完成科研和学术课题来提高背景和个人录取实力'
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
        const slide = ref('carousel0')
        const carouselData = ref < CarouselData[] > ([{
                name: '',
                title: '产品特点',
                subTitle: '学习量较大',
                description: '看似鸡蛋不要放在一个篮子里，实则鹿名确实有实力和和底气能够为学员只报一所名校并收获录取通知书，因为我们掌握着全球顶尖院校的独家资源。',
                imgLink: 'oxford.jpeg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '实力强大',
                description: '拥有独家全球名校资源,包括美国TOP30、英国G5、加拿大、澳洲、香港、新加坡等世界级名校;与传统留学中介和咨询机构形成服务互补。',
                imgLink: 'lb.jpg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '保障结果',
                description: '签约鹿名的学生有着9996+名校录取率,不录取全额退费,并且保证学员1009%顺利毕业。',
                imgLink: 'harvard_school.jpg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '硕果累累',
                description: '8年来鹿名已帮助学员斩获600+顶级名校 offer ',
                imgLink: 'bg.jpg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '价格合理',
                description: '鹿名所有项目均自主研发,不存在中间商,能提供给客户最合理的价格。',
                imgLink: 'bg.jpg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '客户放心',
                description: '正规注册公司,实体办公场所,支持低订金面签合同,保障资金安全。',
                imgLink: 'bg.jpg',
            },
        ]);
        return {
            programTitle,
            programDescription,
            questionTitle,
            questionAnswer,
            slide,
            carouselData,
            slideActive,
            slideDefault,
            offers
        }
    },
}
</script>

<style lang="scss">
.lm-points {
    min-height: 0;
}
</style>
