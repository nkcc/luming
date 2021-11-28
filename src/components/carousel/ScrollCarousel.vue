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
        <div class="flex items-center mr-0 sm:mr-2">
          <q-btn flat round color="secondary" icon="navigate_before" @click="scroll('left')" />
        </div>
        <q-scroll-area
          class="lm-scroll w-full"
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
                <div class="subtitle text-white text-weight-bold text-base">{{ sv.subTitle }}</div>
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

<style lang="scss">
.q-carousel {
  background-color: transparent;
  height: auto;
}

.lm-scroll {
  width: 100%;
  height: 13.25rem;
  overflow: hidden;

    .offer-list {
      display: flex;
      justify-content: center;

      .offer-item {
        height: 11.25rem;
        display: flex;
        border-right: 0.3125rem solid $secondary;
        padding: 0 1.875rem;
        align-items: center;


        &:last-child {
          border-right: none;
        }

        .school-logo {
          height: 10rem;
          width: 10rem;
          background: $white;

          .img {
            height: 7rem;
            width: 7rem;
            background: $white;
          }
        }

        .school-desc {
          color: $white;
          width: 100%;
          padding: 0.625rem 0 0.625rem 1.875rem;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 100%;

          .title {
            font-size: 1.25rem;
          }

          .description {
            margin-top: 1.375rem;
            width: 12.5rem;
            height: 100%;
          }

          .footer {
            margin-top: 1.25rem;
            margin-left: -0.3125rem;
          }
        }
      }
    }
}

.mobile {
  .q-carousel__slide, .q-carousel .q-carousel--padding {
    padding: 16px 0 0 0;
  }
  .lm-offers .lm-points-background .offer-list .offer-item {
    padding: 0 4px;
  }
  .lm-offers .lm-points-background .offer-list .offer-item .school-desc .title  {
    font-weight: bold;
  }
  .lm-offers .lm-points-background .offer-list .offer-item .school-desc .description {
    // font-size: 0.75rem;
    // zoom: 0.75;
    // width: 16.6667rem;
    font-weight: 200;
  }
}
</style>
