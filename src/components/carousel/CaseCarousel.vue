<template>
  <div class="lm-case-plan w-full">
    <div class="lg:container lg:mx-auto">
      <div class="lm-case-plan-container mb-24">
        <div class="lm-plans row justify-center mt-0 mb-4">
          <div
            class="lm-plans-title_container col-xs-12 col-sm-12 col-md-12 flex justify-center sm:pb-7"
            v-if="showType"
          >
            <div
              class="plan-title text-xl sm:text-4xl text-center cursor-pointer p-2"
              :class="v.type === currentType ? 'active' : ''"
              v-for="(v, k) in planData"
              :key="k"
              @click="changePlanType(k)"
            >{{ v.title }}</div>
          </div>
        </div>
        <div class="lm-case-plan_slider__container row justify-center">
          <div class="row justify-center items-center w-full mb-10" v-if="caseData.length === 1">
            <div class="col-md-6 col-xs-11">
              <q-responsive :ratio="1260 / 800" class="bg-white w-full">
                <q-img
                  class="case-img"
                  :src="caseData[0].imgLink"
                  fit="cover"
                  position="center top"
                ></q-img>
              </q-responsive>
            </div>
          </div>
          <el-carousel
            v-else
            :type="carouselType"
            :autoplay="false"
            class="bg-transparent lm-case-plan_slider col-md-8 col-xs-11"
            :height="carouselHeight"
            @change="carouselChange"
            :initial-index="currentCaseIndex"
            ref="carousel"
            arrow="always"
          >
            <el-carousel-item
              v-for="(v, k) in caseData"
              :key="k"
              :name="v.name"
              :style="k === 0 && isLastCarousel ? carouselClass : ''"
            >
              <div class="row justify-center items-center w-full">
                <div class="col-md-12 col-xs-12">
                  <q-responsive :ratio="1260 / 800" class="bg-white">
                    <q-img class="case-img" :src="v.imgLink" fit="cover" position="center top"></q-img>
                  </q-responsive>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>

        </div>
          <div class="row justify-center mb-6 sm:mb-12" v-if="caseData.length > 1">
            <div class="lm-plans-button_container col-md-6 col-xs-9 flex justify-center">
              <indicator
                :num="caseData.length"
                :index="currentCaseIndex"
                @show="changeCurrentCaseIndex"
              ></indicator>
            </div>
          </div>
        <div class="lm-case-plan__content row justify-center">
          <div class="lm-case-plan__content_container col-md-5 col-xs-10">
            <div class="school pb-9">
              <div class="name text-quaternary text-weight-bolder">
                录取院校：
                <span class="text-white">
                  {{
                    currentCase.name
                  }}
                </span>
              </div>
              <div class="rank text-quaternary text-weight-bolder">
                学校排名：
                <span>{{ currentCase.rank }}</span>
              </div>
            </div>
            <div class="student">
              <div class="name text-white text-weight-bold pb-1">{{ currentCase.student }}</div>
              <div class="background">
                <div class="title text-white text-weight-bolder">背景分析：</div>
                <div
                  class="info text-white text-weight-bolder pr-0 md:pr-10 lg:pr-10 xl:pr-10"
                  v-for="(v, k) in currentCase.info"
                  :key="k"
                >
                  {{ v.label }}：
                  <span class="font-extralight">{{ v.value }}</span>
                </div>

                <div class="case-study text-white text-weight-bolder pt-9">
                  <div class="title pb-1">案例解读：</div>
                  <p
                    class="font-extralight mb-7 pr-0 md:pr-10 lg:pr-10 xl:pr-10"
                    v-for="(v, k) in currentCase.caseStudy"
                    :key="k"
                  >{{ v }}</p>
                </div>
              </div>
            </div>
            <div class="content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive, ref, Ref, defineComponent, toRefs, watch, onMounted, onUpdated  } from 'vue';

export default defineComponent({
  name: 'CaseCarousel',
  props: {
    programType: {
      type: String,
      default: 'famousCar',
    },
    showType: {
      type: Boolean,
      default: true,
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<script lang="ts" setup>
import { CaseData, PlanData } from 'src/components/models';
import { useQuasar } from 'quasar';
import { famousCarData, incubationCaseData } from 'src/data/case-carousel'
import { ElCarousel, ElCarouselItem } from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import 'element-plus/theme-chalk/el-carousel-item.css';
import Indicator from 'src/components/Indicator.vue';

const props = defineProps({
    programType: {
      type: String,
      default: 'famousCar',
    },
    showType: {
      type: Boolean,
      default: true,
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
})
const incubationCase = reactive(<CaseData[]>incubationCaseData);

const famousCar = reactive(<CaseData[]>famousCarData);

const planData = ref(<PlanData[]>[
  {
    title: '世界名校直通车',
    type: 'famousCar',
    data: famousCar,
  },
  {
    title: '名校教授培养计划',
    type: 'incubation',
    data: incubationCase,
  },
]);
const currentType = ref('famousCar');
const isLastCarousel = ref(false);
const carouselType = ref('card');
const carouselHeight = ref('30rem');
const carouselClass = ref('left:-18.2%;');
const currentSlider = ref(0);

const { programType, currentIndex } = toRefs(props);
const currentCaseIndex = ref(currentIndex.value);

currentType.value = programType.value;

const carousel: Ref<InstanceType<typeof ElCarousel> | null> = ref(null);
const $q = useQuasar();
if ($q.platform.is.mobile) {
  carouselType.value = '';
  carouselHeight.value = '65vw';
}

const caseData = computed((): CaseData[] => {
  let currentData = planData.value.find((element) => {
    return element.type === currentType.value;
  });

  if (currentData === undefined) {
    currentData = <PlanData>planData.value[0];
  }

  return currentData.data;
});



const currentCase = computed((): CaseData => {
  return caseData.value[currentCaseIndex.value];
});

onMounted(() => {
  currentCaseIndex.value = currentIndex.value;
});

watch(currentIndex, (newVal: number) => {
  currentCaseIndex.value = newVal;
  carousel.value?.setActiveItem(newVal);
});

const carouselChange = function (index: number) {
  isLastCarousel.value = index === caseData.value.length - 1;
  currentCaseIndex.value = index;
};

const changeCurrentCaseIndex = function (index: number) {
  currentCaseIndex.value = index;
  carousel.value?.setActiveItem(index);
};

const changePlanType = function (index: number) {
  currentType.value = planData.value[index].type;
  currentCaseIndex.value = 0;
};
</script>

<style lang="scss">

.case-img {
  border: 4px solid $quaternary;
  border-radius: 2px;
}

.lm-case-plan {
  .lm-plans {
    .lm-plans-title_container {
      .plan-title {
        transition: color 1s ease;
        color: $light-fade-green;
        font-weight: 700;
        align-self: flex-end;

        &.active {
          color: $quaternary;
        }
      }
    }

    .lm-plans-button_container {
      .plan-button {
        transition: all 0.3s ease;
        display: inline-block;
        width: 5.35rem;
        height: 0.25rem;
        background-color: $light-fade-green;
        margin: 0 0.3rem;

        &.active {
          background-color: $quaternary;
        }
      }
    }
  }

  .lm-case-plan_slider__container {
    position: relative;

    .lm-case-plan_slider {
      scrollbar-width: none;
      .el-carousel__mask {
        background-color: transparent;
      }

      .el-carousel__indicators {
        display: none;
      }

      .el-carousel__item {
        width: 70%;
        left: -10%;

        .case-img {
          border: 4px solid $quaternary;
          border-radius: 2px;
        }

        &.is-in-stage {
          left: -1.711%;
        }

        &.is-active {
          margin-top: 0;
          width: 70%;
          position: relative;
          top: 0;
          left: -10%;

          & + .is-in-stage.el-carousel__item {
            left: -18.2%;
          }

          .case-img {
            border: 8px solid $quaternary;
          }
        }
      }
    }
  }

  .lm-case-plan__content {
    .lm-case-plan__content_container {
      .school {
        .name {
          font-size: 1.8125rem;
        }

        .rank {
          font-size: 1.8125rem;
        }
      }

      .student {
        .name {
          font-size: 2.125rem;
        }

        .background {
          font-size: 1rem;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .case-img {
    border: 1px solid $quaternary;
    border-radius: 2px;
  }

  .lm-case-plan {
    .lm-plans {
      .lm-plans-title_container {
        .plan-title {
          color: $light-fade-green;
          font-weight: 700;
          align-self: flex-end;

          &.active {
            color: $quaternary;
          }
        }
      }

      .lm-plans-button_container {
        .plan-button {
          display: inline-block;
          width: 5.35rem;
          height: 0.25rem;
          background-color: $light-fade-green;
          margin: 0 0.3rem;

          &.active {
            background-color: $quaternary;
          }
        }
      }
    }

    .lm-case-plan_slider__container {
      position: relative;

      .lm-case-plan_slider {
        padding-top: 0;
        scrollbar-width: none;

        .el-carousel__item {
          left: 0;
          width: 100%;

          .case-img {
            border: 1px solid $quaternary;
            border-radius: 0;
          }

          &.is-active {
            left: 0;
            width: 100%;

            .case-img {
              border: 1px solid $quaternary;
              border-radius: 0;
            }
          }
        }
      }
    }

    .lm-case-plan__content {
      .lm-case-plan__content_container {
        .school {
          .name {
            font-size: 1.6125rem;
          }

          .rank {
            font-size: 1.6125rem;
          }
        }

        .student {
          .name {
            font-size: 1.8125rem;
          }

          .background {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
