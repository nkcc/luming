<template>
<div class="description-img-container relative">
    <q-img class="img" :src="background" fit="contain">
    </q-img>
    <div class="transparent absolute top-0 w-full">
        <slot>
            <div class="transparent text-center text-quaternary text-weight-bold text-5xl mt-10 mb-10">适合的学生</div>
            <ul>
                <li class="text-quaternary text-center text-base leading-10" v-for="(v, k) in info" :key="k">{{v}}</li>
            </ul>
        </slot>
    </div>

</div>
</template>

<script lang="ts">
export default {
    name: 'DescriptionWithImg',
    setup() {
        const info = [
            '高中在读或毕业生',
            '本科在读或毕业生',
            '研究生在读或毕业生',
            '已经工作，希望继续深造获得硕士或博士学位等更高履历的同学',
            '有较好的学习和成绩基础，但自身条件不够稳定录取最顶尖的学校',
            '想提前适应美国大学课程',
            '对于背景提升和推荐信方面有需求',
            '距离申请截止日期不小于2个学期',
        ];

        return {
            background: 'stu-bg.png',
            info
        }
    }
}
</script>

<style lang="scss" scoped>
.description-img-container {
    .img {
        height: 25rem;
    }
}
</style>
