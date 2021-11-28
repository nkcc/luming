<template>
  <div class="lm-case-plan w-full lm-bg-background lm-light-dark-background">
    <div class="lg:container lg:mx-auto">
      <part-header name="鹿名案例"></part-header>
      <div ref="caseRef"></div>
      <case-carousel programType="famousCar" :current-index="currentCaseIndex"></case-carousel>

    </div>
    <contact></contact>
  </div>
</template>

<script lang='ts'>
import PartHeader from '../components/PartHeader.vue';
import Contact from '../components/Contact.vue';

import CaseCarousel from 'src/components/carousel/CaseCarousel.vue';

import { ref, onMounted, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Case',
  components: {
    PartHeader,
    Contact,
    CaseCarousel,
  },
  setup() {
    const router = useRoute();
    const currentCaseIndex = ref(0)

    const caseRef = ref<HTMLElement>();
    onMounted(() => {
      const id = router.query.id;
      if (typeof id !== 'undefined') {
        currentCaseIndex.value = Number(id);
        setTimeout(
          () => caseRef.value?.scrollIntoView(),
          100
        );
      }
    });

    return {
      currentCaseIndex,
      caseRef,
    };
  },
});
</script>

<style lang='scss'>
@import '../css/quasar.variables.scss';
</style>
