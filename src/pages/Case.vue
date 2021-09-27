<template>
<div class="lm-case-plan w-full lm-bg-background">
    <part-header name="鹿鸣案例"></part-header>
    <div class="lm-case-plan-container">
            <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated control-color="secondary" navigation padding arrows class="bg-transparent" keep-alive height="auto" :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'">
                >
                <template v-slot:navigation-icon="">
                </template>
                <template v-for="(v, k) in caseData" :key="k">
                    <q-carousel-slide :name="'carousel' + k" class="column no-wrap">
                        <div class="row justify-center items-center">
                            <div class="col-9">
                                <q-responsive :ratio="1260 / 830">
                                    <q-img  :src="v.imgLink"></q-img>
                                </q-responsive>
                            </div>
                        </div>
                    </q-carousel-slide>
                </template>
            </q-carousel>
            <div class="lm-case-plan__content">

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
}
</script>
