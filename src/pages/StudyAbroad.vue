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
                        <div class="text-quaternary text-center text-weight-bolder text-base leading-" v-for='(v,k) in questionAnswer' :key='k' > {{v}}</div>
                    </div>
                </div>

            </div>
        </div>
    </section>

</div>
</template>

<script lang="ts">
import PartHeader from '../components/PartHeader.vue'

export default {
    name: 'StudyAbroad',
    components: {
        PartHeader
    },
    setup() {
        const prodTitle = ['鹿名留学为不同的学生量身打造了三个留学申请产品：', '青云计划、天梯计划、孵育计划。']
        const prodDescription = ['对于每一位鹿名学员，我们都会结合他的自身优势、成绩和背景基础、',
            '申请准备时间以及学生自己的择校想法，提供一套最符合学生自己的梦校申请方案。'
        ];
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
        return {
            prodTitle,
            prodDescription,
            questionTitle,
            questionAnswer,
        }
    },
}
</script>

<style lang='scss'>
.lm-question-title {
  font-size: 2.5rem;
  letter-spacing: 1.5625rem;
}
</style>
