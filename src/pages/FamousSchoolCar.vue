<template>
  <div class="lm-study-abroad lm-light-dark-background no-gradient">
    <section class="transparent">
      <div>
        <div class="lg:container lg:mx-auto">
          <part-header name="世界名校直通车"></part-header>
          <div class="lm-container row justify-center pb-20">
            <div class="col-9">
              <div
                class="text-quaternary text-weight-bolder text-center text-2xl sm:text-4xl sm:mb-4"
              >{{ programTitle }}</div>
              <div
                class="text-quaternary text-weight-bolder text-center text-2xl sm:text-4xl"
              >{{ programDescription }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="transparent mb-10">
      <div class="lm-points row items-center lg:container lg:mx-auto">
        <div class="points-container">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="secondary"
            navigation
            padding
            arrows
            class="lm-points-background"
            keep-alive
            :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'"
          >
            <template v-slot:navigation-icon="{ active, onClick, maxIndex }">
              <div
                v-if="active"
                class="navigation-indicator-item active"
                :style="{ width: (1 / maxIndex) * 100 + '%'}"
                @click="onClick"
              ></div>
              <div
                v-else
                class="navigation-indicator-item"
                @click="onClick"
                :style="{ width: (1 / maxIndex) * 100 + '%'}"
              ></div>
            </template>
            <template v-for="(v, k) in carouselData" :key="k">
              <q-carousel-slide :name="'carousel' + k" class="column no-wrap">
                <div class="row justify-center items-center mb-10">
                  <div class="col-xs-6 col-sm-6 col-md-5 left q-py-xs-lg q-py-xs-lg">
                    <h3
                      class="text-white text-weight-bold text-2xl sm:text-3xl text-left"
                    >{{ v.title }}</h3>
                    <div class="mt-2">
                      <h2
                        class="text-quaternary text-weight-bolder text-5xl sm:text-5xl pb-10 text-left"
                      >{{ v.subTitle }}</h2>
                      <p
                        class="text-white text-sm pr-0 text-weight-thin leading-7 tracking-wide md:pr-24 lg:pr-24 gt-sm"
                      >{{ v.description }}</p>
                    </div>
                    <div class="footer"></div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-4 right q-py-xs-lg q-py-sm-lg">
                    <q-responsive :ratio="692 / 511">
                      <q-img class="points-img" :src="v.imgLink" loading="eager" :no-spinner="true"></q-img>
                    </q-responsive>
                  </div>

                  <div class="col-12 lt-md">
                    <p
                      class="text-white zoom-md font-extralight text-sm pr-0 leading-7 sm:leading-9 tracking-wide md:pr-24 lg:pr-24"
                    >{{ v.description }}</p>
                  </div>
                </div>
              </q-carousel-slide>
            </template>
          </q-carousel>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center py-20 sm:pt-20">
          <div class="col-md-9 col-xs-11">
            <description-with-img
              :info="suitableStudents"
              :darkMode="false"
              :imgStyle="{
                height: '25rem',
                opacity: '0.2',
              }"
            ></description-with-img>
          </div>
        </div>
      </div>
    </section>
    <section>
      <SlideOffer></SlideOffer>
    </section>
    <section class="bg-white py-0 sm:my-20">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center pb-20">
          <div class="col-xs-11">
            <description-with-img
              :info="serviceProgress"
              title="服务流程"
              background="service-progress.png"
              top="3"
              :darkMode="false"
              :imgStyle="{ height: '33rem', opacity: 0.2 }"
            ></description-with-img>
          </div>
        </div>
      </div>
    </section>
    <section class="transparent mb-20">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center pt-10 sm:pt-0 pb-20">
          <div class="col-12">
            <div class="text-quaternary text-center text-weight-bolder text-5xl">产品亮点</div>
            <div class="highlight mt-20 sm:mt-10">
              <div class="row lm-highlight justify-center items-start">
                <div
                  :class="['col-md-4 item flex justify-center items-center col-xs-4']"
                  v-for="(v, k) in highlight"
                  :key="k"
                >
                  <div :class="['w-full sm:w-2/4', k > 2 ? 'highlight-up' : '']">
                    <div
                      class="title text-quaternary text-weight-bolder text-3xl sm:text-8xl text-center sm:pb-0"
                    >
                    <span class="p-3">
                       {{ v.title }}
                    </span>
                   </div>
                    <div class="description py-3 sm:py-2">
                      <div
                        class="text-center zoom-xs text-white text-xs text-weight-thin leading-5 font-extralight"
                        v-for="(vv, kk) in v.list"
                        :key="kk"
                      >
                      <span>
                        {{ vv }}
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="transparent">
      <div class="lg:container lg:mx-auto">
        <div class="text-center text-quaternary text-weight-bolder text-5xl mb-10">案例解读</div>
      </div>
      <case-carousel programType="cloud"></case-carousel>
    </section>
    <contact></contact>
  </div>
</template>

<script lang="ts">
import { ref, computed, onBeforeUpdate } from 'vue';
import PartHeader from '../components/PartHeader.vue';
import DescriptionWithImg from '../components/DescriptionWithImg.vue';
import Contact from '../components/Contact.vue';
import SlideOffer from '../components/SlideOffer.vue';
import CaseCarousel from 'components/carousel/CaseCarousel.vue';
import { CarouselData } from 'components/models';
import { QScrollArea, useQuasar } from 'quasar';

export default {
  name: 'CloudProgram',
  components: {
    PartHeader,
    DescriptionWithImg,
    Contact,
    SlideOffer,
    CaseCarousel,
  },
  setup() {
    const $q = useQuasar();
    const suitableStudents = [
      '高中在读或毕业生',
      '本科在读或毕业生',
      '研究生在读或毕业生',
      '已经工作，希望继续深造获得硕士或博士学位等更高履历的同学',
      '学习和考试成绩方面较为薄弱，自身条件不够稳定录取最顶尖的学校',
      '距离申请截止日期不小于1个月',
    ];
    const currentOfferSchoolTypeIndex = ref(0);
    const currentPosition = ref(0);
    const itemRefs = ref([]);
    const currentScrollAreaRef = computed(
      (): InstanceType<typeof QScrollArea> => {
        return <InstanceType<typeof QScrollArea>>(
          itemRefs.value[currentOfferSchoolTypeIndex.value]
        );
      }
    );
    onBeforeUpdate(() => {
      itemRefs.value = [];
    });
    const highlight = [
      {
        title: '资源',
        list: [
          '真实、优质、独家的',
          '名校申请资源，',
          '学生评估通过后可确保学生录取',
        ],
      },
      {
        title: '师资',
        list: [
          '资深和专业的名校教授、前招生官、学长学姐、',
          '咨询顾问、论文老师，使学生在获得',
          '理想的录取通知书的同时，发现自己的长处，提高学习能力，',
          '提前深入了解留学生活',
        ],
      },
      {
        title: '院校',
        list: [
          '我们致力于和学生一起精挑细选出',
          '最适合他自己特点和理想的世界级名校',
        ],
      },
      {
        title: '流程',
        list: [
          '简单、快速的服务流程，',
          '学生将配有一位',
          '全职顾问老师',
          '在申请流程中',
          '以及出国前7*24小时',
          '保驾护航',
        ],
      },

      {
        title: '录取',
        list: ['99%极高录取率%绝对录取率'],
      },
      {
        title: '未来',
        list: [
          '名校就如同成功人生的一块敲门砖，',
          '只有进了名校',
          '再加上学生之后的不断努力，',
          '梦想才会实现，学生入学后',
          '我们还会提供可选择的留学后服务，',
          '包括学业管家，实习介绍等',
        ],
      },
    ];
    const serviceProgress = [
      '前期咨询沟通 打造名校留学申请方案',
      '精准定位学校和专业（不会出现只确定学校，专业随机分配的情况）',
      '利用社会和学校双重资源准备优质推荐信',
      '打造完美简历和文书，进行更全面的背景塑造',
      '与招生办相关人员进行提前沟通（本科申请）；与目标学院教授进行提前沟通（研究生申请）',
      '锁定录取名额，完善后续相关申请工作，确定录取资格',
      '拿到录取通知书',
      '一站式后留学服务，贴心保障留学生活（可选）',
    ];
    const currentOfferSchool = ref(0);
    const offerIndicatorLeft = ref('0rem');
    const slideActive = ref(
      'background:#cc932e;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
    );
    const slideDefault = ref(
      'background:#26322b;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
    );
    const programTitle = '在短时间内帮助学生低分高录，';
    const programDescription = '实现最高学府的留学梦。';
    const questionTitle = '为什么选择鹿名留学申请服务?';
    const questionAnswer = [
      '独家全球名校资源',
      '99%+录取率',
      '已斩获600+世界顶尖院校录取',
      '100%全球名校',
      '100%毕业率',
      '98%服务满意度',
      '零门槛以及低分高录',
      '申请周期短',
    ];
    const slide = ref('carousel0');
    const carouselData = ref<CarouselData[]>([
      {
        name: '',
        title: '产品特点',
        subTitle: '短时间',
        description:
          '传统留学中介和咨询公司通常需要学生提前半年至两年的时间开始准备申请工作，而鹿名世界名校直通车只需要学生距离申请截止日期一个月便可以确保申请流程高效且高质量顺利完成',
        imgLink: 'car/1.jpg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '低分高录',
        description:
          '和其他留学和中介公司不同的是，鹿名学员不需要自身成绩和背景多么优秀，也不需要后续参加任何成绩和背景提升的额外培训，鹿名能够保证学员进入比其自身条件更高的名校',
        imgLink: 'car/2.jpg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '单所名校精准保录',
        description:
          '看似鸡蛋不要放在一个篮子里，实则鹿名确实有实力和和底气能够为学员只报一所名校并收获录取通知书，因为我们掌握着全球顶尖院校的独家资源',
        imgLink: 'car/3.jpeg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '独家资源',
        description:
          '随着多年以来的积累，鹿名凝聚着最核心、最顶尖的国际名校招生官、校董、校园管理层、名师以及资源。这些独有的资源渠道是鹿名世界名校直通车短时间帮助学员完成申请、低分高录、名校精准保录的最坚实保障',
        imgLink: 'car/4.jpg',
      },
    ]);
    return {
      itemRefs,
      currentPosition,
      programTitle,
      currentScrollAreaRef,
      currentOfferSchoolTypeIndex,
      programDescription,
      questionTitle,
      questionAnswer,
      slide,
      carouselData,
      slideActive,
      slideDefault,
      currentOfferSchool,
      offerIndicatorLeft,
      serviceProgress,
      highlight,
      suitableStudents,
      isMobile: computed(() => {
        return <boolean>$q.platform.is.mobile;
      }),
      getClassType(k: number, firstClass: string, secondClass: string) {
        return k % 2 == 0 ? firstClass : secondClass;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.lm-points {
  min-height: 0;
}

.lm-offers {
  min-height: 0;
  padding: 0;

  &.transparent {
    background-color: transparent;
  }
}

.incubation-title {
  font-size: 2.5rem;
}

.prof-intro {
  background-color: transparent;

  &.reverse {
    background-color: transparent;
  }

  .reverse {
    background-color: transparent;
  }

  &:not(:last-child) {
    border-bottom: 3px solid $quaternary;
  }
}

.lm-professor {
  .prof-intro {
    min-height: 25rem;

    .avatar {
      .img {
        border: 0.6rem solid $quaternary;
      }
    }
  }
}

.lm-highlight {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 60%;
    width: 68%;
    border: 3px solid $quaternary;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .item {
    position: relative;

    div {
      background-color: #0b150e;
      height: fit-content;

      &.highlight-up {
        position: relative;
        top: 3rem;
      }
    }

    &::after {
      content: '';
      position: absolute;
      // height: 3px;
      background-color: $quaternary;
      width: 30%;
      top: 25%;
      right: -15%;
    }

    &.no-link {
      &::after {
        height: 0;
      }
    }

    &.link-bottom {
      &::before {
        content: '';
        position: absolute;
        // height: 1.5rem;
        background-color: $quaternary;
        width: 3px;
        bottom: -2rem;
        right: 50%;
      }
    }
  }
}

.mobile {
  .lm-highlight {
    &::before {
      border: 1px solid $quaternary;
          height: 75%;
    }
    .item {
      div {
        background: transparent;
        span {
          background: #0b150e;
        }
      }
    }
  }

  .lm-points .lm-points-background .row .right .points-img {
    box-shadow: 6px 6px $quaternary;
  }

  .q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
    padding-left: 50px;
    padding-right: 50px;
  }
  .q-carousel__navigation {
    width: 60vw;
  }
}
</style>
