<template>
<div class="lm-spot">
    <section class="lm-culture-points lm-light-dark-background">
        <div class="lg:container lg:mx-auto">
            <part-header name="鹿名亮点" class=" "></part-header>
            <div class="lm-spot row justify-center pb-14 ">
                <div class="spot-container col-9 col-xs-12 col-md-9 flex items-center pb-24 q-px-xs-md q-px-md-none" :class="[k !== 0 ? 'pt-24' :'', k === spotData.length - 1 ? 'last' : '']" v-for="(v, k) in spotData" :key="k">
                    <div class="row items-center" :class=" k % 2 === 0 ? '' : 'reverse'">
                        <div class="col-6 col-xs-12 col-md-7 self-start">
                            <div class="mb-8 spot-title">
                                <span class=" text-white text-weight-bold ">{{v.leftTitle }}</span>
                                <span class="text-quaternary text-weight-bold pb-5"> {{ v.rightTitle }}</span>
                            </div>

                            <p class="spot-description text-white text-lg pb-2 leading-7" v-for="(vv, kk) in v.description" :key="kk">
                                {{ vv }}
                            </p>
                        </div>
                        <div class="col-5 col-xs-12 col-md-5" :class=" k % 2 === 0 ? 'team-avatar-p' : 'team-avatar-p-r'">
                            <q-responsive :ratio="1">
                                <q-img class="team-avatar" :src="v.spotUrl"></q-img>
                            </q-responsive>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <contact></contact>
</div>
</template>

<script lang="ts">
import setupData from '../ts/pages/spot'
import PartHeader from '../components/PartHeader.vue'
import Contact from '../components/Contact.vue'

export default {
    name: 'Spot',
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
@import '../css/spot.scss';
</style>
