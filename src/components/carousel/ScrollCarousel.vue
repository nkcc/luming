<template>
  <q-carousel
    v-model="carouselName"
    padding
    animated
    transition-prev="fade"
    transition-next="fade"
    class="lm-points-background"
    ref="carousel"
  >
    <template v-slot:navigation-icon></template>
    <template v-for="(v, k) in data" :key="k">
      <q-carousel-slide :name="v.name" class="flex no-wrap flex-center relative">
        <div class="flex items-center mr-2">
          <q-btn flat round color="secondary" icon="navigate_before" @click="scroll('left')" />
        </div>
        <q-scroll-area
          class="lm-scroll"
          :bar-style="{ background: 'transparent' }"
          :thumb-style="{ background: 'transparent' }"
          :ref="divs"
        >
          <ul
            class="offer-list row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <li
              class="offer-item"
              v-for="(sv, sk) in v.list"
              :key="sk"
              @mouseenter="getCurrentOfferSchool(sk)"
            >
              <q-responsive class="school-logo">
                <div class="flex items-center justify-center">
                  <q-img
                    class="img"
                    :src="sv.imgLink"
                    fit="contain"
                    loading="eager"
                    :no-spinner="true"
                  ></q-img>
                </div>
              </q-responsive>
              <div class="school-desc">
                <div class="title">{{ sv.title }}</div>
                <q-scroll-area
                  class="description ellipsis-3-lines"
                  :bar-style="{ background: 'white' }"
                >{{ sv.description }}</q-scroll-area>
              </div>
            </li>
          </ul>
        </q-scroll-area>
        <div class="ml-2">
          <q-btn flat round color="secondary" icon="navigate_next" @click="scroll('right')" />
        </div>
      </q-carousel-slide>
    </template>
  </q-carousel>
  <div class="row justify-center items-center">
    <div class="col-6">
      <indicator :num="currentList.list.length" :index="listIndex" @show="showIndicator"></indicator>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, PropType, computed, defineComponent, watch, onBeforeUpdate } from 'vue';
import { QScrollArea, QCarousel } from 'quasar';
import { OfferData } from 'components/models';
import Indicator from 'components/Indicator.vue';

export default defineComponent({
  name: 'ScrollCarousel',
  components: { Indicator },
  props: {
    data: {
      type: Array as PropType<OfferData[]>,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const itemRefs = ref([]);
    const carousel = ref<QCarousel | null>(null);
    const divs = (el: QScrollArea) => {
      (itemRefs.value as Array<QScrollArea>).push(el);
    };
    const carouselName = ref('');
    const position = ref(0);
    const carouselIndex = ref(0);
    const listIndex = ref(0);
    const currentList = computed(() => {
      return props.data[carouselIndex.value];
    });

    onBeforeUpdate(() => {
      itemRefs.value = [];
    });

    watch(
      () => props.index,
      (val) => {
        carouselIndex.value = val;
        listIndex.value = 0;
        position.value = 0;

        carousel.value?.goTo(currentList.value.name);
      }
    );

    carouselName.value = currentList.value.name;
    const currentScrollAreaRef = computed(
      (): InstanceType<typeof QScrollArea> => {
        return <InstanceType<typeof QScrollArea>>(
          itemRefs.value[0] ?? itemRefs.value[1]
        );
      }
    );

    return {
      itemRefs,
      divs,
      carousel,
      carouselName,
      currentList,
      listIndex,
      scroll(direction: 'left' | 'right') {
        const move =
          direction === 'left'
            ? -1 / currentList.value.list.length
            : 1 / currentList.value.list.length;
        position.value += move;

        position.value = Math.min(1, Math.max(0, position.value));
        currentScrollAreaRef.value.setScrollPercentage(
          'horizontal',
          position.value,
          300
        );
        listIndex.value =
          Math.floor(position.value * currentList.value.list.length) - 1;
        listIndex.value = listIndex.value < 0 ? 0 : listIndex.value;
        listIndex.value;
      },
      getCurrentOfferSchool(index: number) {
        listIndex.value = index;
      },
      showIndicator(index: number) {
        const currentOfferSchoolLength = currentList.value.list.length;
        if (index === 0) {
          position.value = 0;
        } else if (index === currentOfferSchoolLength - 1) {
          position.value = 1;
        } else {
          position.value = (index + 1) / currentOfferSchoolLength;
        }

        currentScrollAreaRef.value.setScrollPercentage(
          'horizontal',
          position.value,
          300
        );
      },
    };
  },
});
</script>
