<template>
  <div class="lm-case-plan w-full lm-bg-background lm-light-dark-background">
    <div class="lg:container lg:mx-auto">
      <part-header name="鹿名案例"></part-header>
      <div ref="caseRef"></div>
      <case-carousel class="pb-10" :program-type="programType" :current-index="currentCaseIndex"></case-carousel>

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
    const programType = ref('famousCar');

    const caseRef = ref<HTMLElement>();
    onMounted(() => {
      const id = router.query.id;
      const typeData = router.query.type;
      if (typeof id !== 'undefined') {
        currentCaseIndex.value = Number(id);
        programType.value = <string>typeData;
        setTimeout(
          () => caseRef.value?.scrollIntoView(),
          100
        );
      }
    });

    return {
      currentCaseIndex,
      caseRef,
      programType,
    };
  },
});
</script>

<style lang='scss'>
@import '../css/quasar.variables.scss';
</style>
