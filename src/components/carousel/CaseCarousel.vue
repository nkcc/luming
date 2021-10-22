<template>
  <div class='lm-case-plan w-full'>
    <div class='lg:container lg:mx-auto'>
      <div class='lm-case-plan-container mb-24'>
        <div class='lm-case-plan_slider__container row justify-center mb-14'>
          <el-carousel :type='carouselType' :autoplay='false'
                       class='bg-transparent lm-case-plan_slider col-md-8 col-xs-11'
                       :height='carouselHeight' @change='carouselChange' ref='carousel'>
            <el-carousel-item v-for='(v, k) in caseData' :key='k' :name='v.name'
                              :style='k === 0 && isLastCarousel ? carouselClass : ""'>
              <div class='row justify-center items-center w-full'>
                <div class='col-md-12 col-xs-12'>
                  <q-responsive :ratio='1260 / 800'>
                    <q-img class='case-img' :src='v.imgLink'></q-img>
                  </q-responsive>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class='lm-case-plan__content row justify-center'>
          <div class='lm-case-plan__content_container col-md-5 col-xs-10'>
            <div class='school pb-9'>
              <div class='name text-quaternary text-weight-bolder'>录取院校： <span class='text-white'>{{ currentCase.name
                }}</span></div>
              <div class='rank text-quaternary text-weight-bolder'>学校排名： <span> {{ currentCase.rank }}</span></div>
            </div>
            <div class='student'>
              <div class='name text-white text-weight-bold pb-1'> {{ currentCase.student }}</div>
              <div class='background'>
                <div class='title text-white text-weight-bolder'>背景分析：</div>
                <div class='info text-white text-weight-bolder pr-0 md:pr-10 lg:pr-10 xl:pr-10' v-for='(v, k) in currentCase.info'
                     :key='k'>
                  {{ v.label }}：<span class='text-weight-light'>{{ v.value }}</span>
                </div>

                <div class='case-study text-white text-weight-bolder pt-9'>
                  <div class='title pb-1'>案例解读：</div>
                  <p class='text-weight-light mb-7 pr-0 md:pr-10 lg:pr-10 xl:pr-10' v-for='(v, k) in currentCase.caseStudy' :key='k'> {{ v }}</p>
                </div>
              </div>
            </div>
            <div class='content'></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import setup from '../../ts/pages/case';
import Indicator from 'components/Indicator.vue';
import { ElCarousel, ElCarouselItem } from 'element-plus';
import 'element-plus/theme-chalk/index.css';
// import 'element-plus/theme-chalk/el-carousel-item.css'
import {
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'CaseCarousel',
  components: {
    ElCarousel,
    ElCarouselItem,
    Indicator
  },
  setup
});
</script>

<style lang='scss'>
@import '../../css/quasar.variables.scss';

.lm-case-plan {
  .lm-plans {
    .lm-plans-title_container {
      .plan-title {
        transition: color 1s ease;
        font-size: 2.125rem;
        color: $light-fade-green;
        font-weight: 700;
        align-self: flex-end;
        width: 12rem;

        &.active {
          font-size: 2.75rem;
          color: $quaternary;
        }
      }
    }

    .lm-plans-button_container {
      .plan-button {
        transition: all .3s ease;
        display: inline-block;
        width: 5.35rem;
        height: .25rem;
        background-color: $light-fade-green;
        margin: 0 .3rem;

        &.active {
          background-color: $quaternary;
        }
      }
    }
  }

  .lm-case-plan_slider__container {
    position: relative;

    .lm-case-plan_slider {
      padding-top: 2.5rem;

      .el-carousel__container {
      }

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
  .lm-case-plan {
    .lm-plans {
      .lm-plans-title_container {
        .plan-title {
          font-size: 2.125rem;
          color: $light-fade-green;
          font-weight: 700;
          align-self: flex-end;
          width: 12rem;

          &.active {
            font-size: 2.75rem;
            color: $quaternary;

          }
        }
      }

      .lm-plans-button_container {
        .plan-button {
          display: inline-block;
          width: 5.35rem;
          height: .25rem;
          background-color: $light-fade-green;
          margin: 0 .3rem;

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
}
</style>
