<template>
<div class="lm-about">
    <section class="lm-comes">
        <div class="lm-light-dark-background">
            <part-header name="鹿鸣来源" class=" "></part-header>
            <div class="lm-comes-introduction w-full q-px-xs-md">
                <div class="content w-full text-center pb-5" v-for="(v, k) in history" :key="k">
                    <div class="title text-base text-weight-bold pb-1" v-for="(vv, kk) in v.title" :key="kk">{{ vv }}</div>
                    <p class="description text-weight-light leading-5" v-for="(vd, kd) in v.content" :key="kd">
                        {{ vd }}
                    </p>
                </div>
            </div>
            <part-header name="鹿鸣文化" class=" "></part-header>
        </div>

    </section>

    <section class="lm-culture-points lm-light-dark-background">
        <div class="row justify-center">
            <div class="col-9 col-xs-12 col-md-9 row">
                <template v-for="(v, k) in cultureData" :key="k">
                    <div class="col-4 col-xs-12 col-md-4">
                        <div class="points-img" :class="[k==0 ? 'border-b-0' : '', k==1 ? 'border-r-0' : '', k==2 ? 'border-l-0' : '' ]">
                            <q-img :src="cultureImg[k].backgroundImage" fit="cover" :ratio="557/400"></q-img>
                        </div>
                    </div>
                    <div class="col-4 col-xs-12 col-md-4">
                        <q-responsive :ratio="557/400">
                            <div class="points-container flex align-center">
                                <div class="title text-weight-bolder">{{ v.title }}</div>
                                <div class="description text-quaternary w-full  text-base text-weight-bolder text-center"> {{ v.description }}</div>
                            </div>

                        </q-responsive>
                    </div>

                </template>
            </div>
        </div>
        <part-header name="鹿鸣团队" class=" "></part-header>
        <div class="lm-culture-team row justify-center pb-14 ">
            <div class="team-container col-9 col-xs-12 col-md-9 flex items-center pb-24 q-px-xs-md q-px-md-none" :class="[k !== 0 ? 'pt-24' :'', k === teamData.length - 1 ? 'last' : '']" v-for="(v, k) in teamData" :key="k">
                <div class="row items-center" :class=" k % 2 === 0 ? '' : 'reverse'">
                    <div class="col-7 col-xs-12 col-md-7">
                        <div class="team-english-name text-quaternary text-6xl text-weight-bold pb-10">{{v.englishName }}</div>
                        <div class="team-Chinese-name text-white text-3xl text-weight-bold pb-5"> {{ v.ChineseName }}</div>
                        <p class="text-white text-xs pb-2 leading-5" v-for="(vv, kk) in v.description" :key="kk">
                            {{ vv }}
                        </p>
                    </div>
                    <div class="col-5 col-xs-12 col-md-5" :class=" k % 2 === 0 ? 'team-avatar-p' : 'team-avatar-p-r'">
                        <q-responsive :ratio="611/643">
                            <q-img class="team-avatar" :src="v.avatarUrl"></q-img>
                        </q-responsive>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <contact></contact>
</div>
</template>

<script>
import setupData from '../ts/pages/about'
import PartHeader from '../components/PartHeader.vue'
import Contact from '../components/Contact.vue'

export default {
    name: 'About',
    components: {
        PartHeader,
        Contact
    },
    setup() {
        return setupData
    },
}
</script>

<style lang="scss">
@import '../css/about.scss';
</style>
