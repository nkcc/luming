<template>
  <q-page>
    <section class>
      <q-img
        class="lm-background"
        src="lb.jpg"
        loading="eager"
        :no-spinner="true"
        :img-class="bgFilter"
      >
        <div class="lm-introduction row justify-center">
          <div
            class="lm-text-title text-center lg:container lg:mx-auto animate__animated animate__fadeIn"
          >
            <span>鹿名国际教育</span>
          </div>
          <div class="lm-text-second-title animate__animated animate__fadeInUp animate__delay-1s">
            <q-img
              class="logo-title"
              src="logo_letter.svg"
              fit="contain"
              loading="eager"
              :no-spinner="true"
            ></q-img>
          </div>
          <p class="text-center animate__animated animate__fadeInUp animate__delay-2s">让世界名校， 不再高不可攀</p>
        </div>
        <div
          class="show-more justify-center row animate__animated animate__slow animate__repeat animate__infinite animate__slideOutUp"
          @click="scrollFullScreen"
        >
          <q-img
            class="up-scroll"
            src="up_arrow.svg"
            fit="contain"
            height="3.125rem"
            width="12.5rem"
            loading="eager"
            :no-spinner="true"
          />
        </div>
      </q-img>
    </section>
    <service></service>
    <section class="lm-green-background-container">
      <div class="lm-points row items-center lg:container lg:mx-auto sm:py-36">
        <div class="points-container relative pt-10 sm:pt-0">
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
                <div class="row justify-center items-center pb-4">
                  <div class="col-xs-12 col-sm-12 col-md-5 left">
                    <h2
                      class="text-secondary text-weight-bold text-6xl pb-3 sm:pb-14 sm:text-6xl title"
                    >{{ v.title }}</h2>
                    <div class="content">
                      <h3
                        class="text-white text-weight-bold sm:mt-0 text-4xl pb-0 sm:pb-10 sm:text-5xl"
                      >{{ v.subTitle }}</h3>
                      <p class="description gt-sm">{{ v.description }}</p>
                    </div>
                    <div class="footer"></div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 right mt-5 sm:mt-0">
                    <q-responsive :ratio="isMobile ? 376 / 183 : 692 / 511">
                      <q-img
                        class="points-img"
                        :src="v.imgLink"
                        loading="eager"
                        :no-spinner="true"
                        fit="cover"
                        position="center top"
                      ></q-img>
                    </q-responsive>
                  </div>
                  <div class="col-xs-12 mt-12 lg:mt-0 lt-md">
                    <p
                      class="description text-white text-xs sm:text-xl leading-6"
                    >{{ v.description }}</p>
                  </div>
                </div>
              </q-carousel-slide>
            </template>
          </q-carousel>
        </div>
        <div class="col-12 pb-10">
          <div class="footer text-right sm:text-center white text-xs">
            <router-link to="spot">了解更多></router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-culture lg:container lg:mx-auto">
      <div class="caption">
        <q-img
          class="logo-letter"
          src="logo_letter_dark.svg"
          fit="contain"
          loading="eager"
          :no-spinner="true"
        ></q-img>
      </div>
      <div class="row q-col-gutter-sm justify-center">
        <div
          class="col col-sm-6 col-xs-12 col-md-3 culture-item"
          v-for="(v, k) in cultureData"
          :key="k"
          :data-id="k"
          v-intersection.once="onCultureIntersection"
        >
          <transition appear :enter-active-class="cultureAnimation()">
            <div class="animation-container" v-if="cultureData[k].visible">
              <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>
              <q-responsive :ratio="542 / 511" class="mt-5 sm:mt-0">
                <q-img class="culture-img" :src="v.imgLink" loading="eager" :no-spinner="true"></q-img>
              </q-responsive>

              <div class="content lt-md q-px-xs-xs">
                <p class="my-5 text-xs leading-6">
                  <template v-for="(vd, vk) in v.description" :key="vk">{{ vd }}</template>
                </p>

                <div class="footer text-right sm:text-center pr-7 lt-md my-5">
                  <router-link to="about">了解更多></router-link>
                </div>
              </div>
              <div class="lt-md" :class="getClassType(k, 'bar-secondary', 'bar')"></div>
            </div>
          </transition>
        </div>

        <div class="col-xs-10 col-md-12 culture-item gt-sm py-5 culture-introduction">
          <template v-for="(v, k) in cultureData" :key="k">
            <template class v-for="(vv, vk) in v.description" :key="vk" :data-id="vk">{{ vv }}</template>
          </template>
          <div class="content">
            <div class="footer text-center">
              <router-link to="about">了解更多></router-link>
            </div>
          </div>
        </div>
        <div
          class="col col-sm-6 col-xs-12 col-md-3 culture-item gt-sm"
          v-for="(v, k) in cultureData"
          :key="k"
          :data-id="k"
          v-intersection.once="onCultureIntersection"
        >
          <transition appear :enter-active-class="cultureAnimation()">
            <div class="animation-container" v-if="cultureData[k].visible">
              <div class :class="getClassType(k, 'bar-secondary', 'bar')"></div>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <SlideOffer></SlideOffer>
    <section class="lm-case py-20">
      <case-carousel :light-mode="true" :hidden-description="true"></case-carousel>
    </section>
    <section class="lm-team lm-dark-background">
      <h1 class="header-title text-white text-center text-weight-bold">鹿名团队</h1>
      <div class="team-container row lg:container lg:mx-auto">
        <div
          class="team-card col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3"
          v-for="(v, k) in teamData"
          :key="k"
        >
          <div :class="k % 2 !== 0 ? 'bar' : 'bar-secondary'"></div>

          <img :src="v.imgLink"  />
          <div class="content gt-sm">
            <div
              class="name text-weight-bolder"
              :class="k === teamData.length - 1 ? 'text-3xl' : 'text-3xl'"
            >{{ v.name }}</div>
            <p class="description gt-sm">{{ v.description }}</p>
            <div class="footer">
              <router-link :to="v.link">了解更多 ></router-link>
            </div>
          </div>
          <div class="lt-md w-full bg-white p-5 relative">
            <div
              class="text-3xl text-weight-bolder mobile-name"
              v-for="(vv, kk) in v.nameMobile"
              :key="kk"
            >{{vv}}</div>
            <router-link
              class="absolute mobile-link right-0 bottom-2 text-xs text-weight-bolder"
              :to="v.link"
            >了解更多 ></router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-professor">
      <h1 class="header text-weight-bold text-center py-12 text-4xl sm:text-6xl">师资团队</h1>

      <div
        class="prof-intro"
        :class="getClassType(k, '', 'reverse')"
        v-for="(v, k) in professorData"
        :key="k"
      >
        <div
          :class="[
            'row justify-center items-center q-pa-xs-md lg:container lg:mx-auto',
            getClassType(k, '', 'reverse'),
          ]"
        >
          <div class="col-lg-2 col-3 col-md-3 col-sm-3 col-xs-6 avatar align-items-center">
            <q-responsive :ratio="1">
              <q-img class="img" :src="v.imgLink" loading="eager" :no-spinner="true"></q-img>
            </q-responsive>
          </div>
          <div class="col-7 col-lg-6 col-md-9 col-sm-12 col-xs-12 content">
            <div class="header text-weight-bolder text-center sm:text-left">{{ v.name }}</div>
            <div class="body">
              <div
                class="title text-center sm:text-left"
                v-for="(vv, kk) in v.title"
                :key="kk"
              >{{ vv }}</div>
              <div class="description gt-sm">{{ v.description }}</div>
            </div>
            <div class="footer text-center sm:text-left">
              <router-link :to="v.link">了解更多 ></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <contact></contact>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CarouselData } from 'components/models';
import { ref, computed, onMounted } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'Index',
});
</script>

<script lang="ts" setup>
import Contact from 'components/Contact.vue';
import SlideOffer from 'components/SlideOffer.vue';
import Service from 'components/Service.vue';
import CaseCarousel from 'components/carousel/CaseCarousel.vue'

const bgFilter = ref('bg-filter-none');

const carouselData = ref<CarouselData[]>([
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '来自海外',
    description:
      '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: 'index/4.jpg',
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '实力强大',
    description:
      '拥有独家全球名校资源,包括美国TOP30、英国G5、加拿大、澳洲、香港、新加坡等世界级名校;与传统留学中介和咨询机构形成服务互补。',
    imgLink: 'index/5.jpg',
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '保障结果',
    description:
      '签约鹿名的学生有着9996+名校录取率,不录取全额退费,并且保证学员1009%顺利毕业。',
    imgLink: 'index/6.jpg',
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '硕果累累',
    description: '8年来鹿名已帮助学员斩获600+顶级名校 offer ',
    imgLink: 'index/7.jpg',
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '价格合理',
    description:
      '鹿名所有项目均自主研发,不存在中间商,能提供给客户最合理的价格。',
    imgLink: 'index/8.jpg',
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '客户放心',
    description: '正规注册公司,实体办公场所,支持低订金面签合同,保障资金安全。',
    imgLink: 'index/9.jpg',
  },
]);
const cultureData = ref([
  {
    imgLink: 'index/10.jpeg',
    description: [
      '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩，鹿名国际都可以通过其三条成熟和独特的留学申请产品线（世界名校直通车、世界名校直通车、名校教授培养计划）将学生保送到最顶尖的名校，并在留学后的校园生活中为学生提供系统性的学术辅导服务（学业管家）。',
    ],
    visible: false,
    link: 'about',
  },
  {
    imgLink: 'bg.jpg',
    description: [
      '鹿名国际凭借着多年以来独有的世界顶尖大学教授、招生官、学校管理层以及名校学长学姐资源，为学生的申请路上保驾护航。2016年至2018年，鹿名国际迅速扩张，名校保录业务不断扩展到了欧洲、澳大利亚、加拿大、新加坡和香港等地。',
    ],
    visible: false,
    link: 'about',
  },
  {
    imgLink: 'index/12.jpeg',
    description: [
      '自2014年以来鹿名国际已帮助学员斩获600+世界顶尖院校录取。随着口碑逐渐扩大，企业家子女，众多精品教育机构等选择与我们合作，但由于一直秉承小而精的运营方式和高质量服务理念，鹿名国际业务在年年增长的趋势下，每年限制最多50名本科生和80名研究生的世界名校申请名额。',
    ],
    visible: false,
    link: 'about',
  },
  {
    imgLink: 'index/13.jpeg',
    description: [
      '目前鹿名国际学员已遍布包括哈佛、耶鲁、牛津、剑桥、斯坦福、沃顿、康奈尔、及哥伦比亚等世界知名大学。对于大多数学生，我们将申请到世界顶尖名校的概率从10%提升到约90%，这也进一步证明了鹿名国际留学申请业务的保证性。在确保服务结果的同时，我们也始终以98%的用户满意度为学员服务。',
    ],
    visible: false,
    link: 'about',
  },
]);

const teamData = ref([
  {
    name: 'Patrick Shui',
    nameMobile: ['Patrick', 'Shui'],
    imgLink: 'team1.jpeg',
    link: {
      path: 'about',
      query: {
        id: 0,
      },
    },
    description:
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点。让学生在压力极大的申请过程中不断提高自己能力和自我认知...',
    visible: false,
  },
  {
    name: 'Andy Xue',
    nameMobile: ['Andy', 'Xue'],
    imgLink: 'team2.jpeg',
    link: {
      path: 'about',
      query: {
        id: 1,
      },
    },
    description:
      'Andy老师坚信留学申请过程不是困惑的或者令人沮丧的。事实上，如果用聪明的方法，这个过程将是学生拥有的一个绝佳的机会，去帮助他们提高自我认知和自信。',
    visible: false,
  },
  {
    name: 'Alex Gu',
    nameMobile: ['Alex', 'Gu'],
    imgLink: 'team3.jpeg',
    description:
      'Alex老师认为一次真正成功的留学申请是对自己重新发现、认识、认知的旅程。和老师一起重温自己的学术历程，挖掘每一段难忘的课外经历，发现自己内心深处的渴望，追寻自己一直以来的梦想。每一次陪伴学生走入dream school的旅程都是一段为人师者的记忆。',
    visible: false,
    link: {
      path: 'about',
      query: {
        id: 2,
      },
    },
  },
  {
    name: 'Danny Chueng',
    nameMobile: ['Danny', 'Chueng'],
    imgLink: 'team4.jpeg',
    description:
      'Danny老师善于从西方人的视角去发现和诠释东方学生的优点与优势，真正站在以白人为核心的西方招生官的角度，精准挖掘学生潜力，精确定位背景提升项目等一系列为成功入校做努力的方式，达到院校、申请学院及留学机构三方都满意的最佳结果。',
    visible: false,
    link: {
      path: 'about',
      query: {
        id: 3,
      },
    },
  },
]);

const professorData = ref([
  {
    name: 'Dennis H Chookaszian教授',
    title: [
      'CNA保险公司前董事长兼CEO',
      '美国53家上市公司董事',
      '前美国国家审计署执行委员会主席',
    ],
    imgLink: 'prof1.jpeg',
    link: {
      path: '/incubation',
      query: {
        id: 0,
      },
    },
    description:
      '丹尼斯.乔卡西安是CNA保险公司的前任董事长兼首席执行官。从1992年到1999年担任CNA的主席和首席执行官。1999年至2001年任国家审计署执行委员会主席。1990年至1992年乔卡西安担任CNA总裁兼首席运营官，负责所有财产和伤亡、生命、健康和投资运营。于1975年加入CNA，担任首席财务官，直到1990年被任命为总裁。1999年至2001年他还担任互联网金融咨询服务公司MPower Inc.的董事长兼首席执行官。在加入CNA之前，他曾在德勤但任8年的管理顾问负责，各种财务和系统相关任务。2010年丹尼斯乔卡西安教授获得美国权威金融报刊《Financial Times》授予的Out-standing Director奖项 ',
  },
  {
    name: '李贝贝 讲席副教授',
    title: [
      '美国卡内基梅隆大学助理教授',
      '美国纽约大学信息系统与管理学博士',
      '美国经济、市场营销与信息科学顶级会议演讲者',
    ],
    imgLink: 'prof2.jpg',
    link: {
      path: '/incubation',
      query: {
        id: 1,
      },
    },
    description:
      '李贝贝教授现任卡内基梅隆大学(Carnegie Mel-IonUniversity）约翰.海因茨管理学院、计算机院与商学院Anna Loomis McCandless讲席教授，副教授与博士生导师。为纽约大学斯特恩商学院信息系统与管理学博士学位。专注于研究信息科技与个体行为、组织和社会的关系并，利用大规模历史和实验数据进行相关决策分析和政策制定。她的研究领域涉及智慧城市和医疗移动和物联网新零售，人工智能与大数据金融社交媒体和搜索引擎全渠道智能营销等等多篇论文发布在Managenment Science、Marketing Science、Information Systems Research和MIS Quarterly等顶级研究与商业期刊，以及一些经济，市场营销， 信息科学和计算科学的顶级会议上。并有多篇研究成果获国际大奖',
  },
  {
    name: '张庆全客座教授',
    title: [
      '伊利诺伊大学香槟分校商学院客座教授',
      'Zacks投资基金公司基金经理',
      '美国CFA协会员会员',
    ],
    imgLink: 'prof3.jpeg',
    link: {
      path: '/incubation',
      query: {
        id: 2,
      },
    },
    description:
      '张庆全博士是美国伊利诺伊大学香槟分校商学院客座教授。美国 Zacks 投资基金公司基金经理,美国 CFA 会芝加哥分会委员会委员，美国华人交易与投资协会芝加加哥分会会长，长期从事金融科技领域的研究，包括人工智能与大数据研究工作。已经在国际上发表了50多篇SCI论文，绝大部分是第一作者；张庆全博士毕业于美国芝加哥大学主攻方向金融，量化投资和创业学。张博士足美国电子电气工程协会高级会员( EEE Senior Member)，美国特许金分析( ChartedFinancial Analyst)',
  },
  {
    name: 'Scott Meadow教授',
    title: [
      '芝加哥大学商学院临床教授',
      '《商业周刊》杰出企业家教授',
      '私募股权行业主要投资者',
    ],
    imgLink: 'prof4.jpeg',
    link: {
      path: '/incubation',
      query: {
        id: 3,
      },
    },
    description:
      'Scott Meadow是私股权行业的主要投资者,理查德J.戴利奖的获得者。自2000年以来担任芝加哥大学布斯色学院的创业临床教授。2002年-2005年荣获菲尼克斯奖，2010年教师优秀奖。他被《商业周刊》的“最佳商学院指南”指定为该国杰出的企业家教授之一。为8000名学生教授创业融资和私募股权、商业化创新(他创建的)、新的风脸挑战，并担任风险投资竞争的教员顾问。是四家风险投资和私募股权公司合伙人，批准了数百项股权融资，亲自领导、发起或创建了60多项投资，被 Venture One 认可为业内杰出的医疗投资者之一。',
  },
]);

const slide = ref('carousel0');

const $q = useQuasar();

if ($q.platform.is.mobile) {
  const allDescription: string[] = [];
  cultureData.value = cultureData.value.map((item) => {
    allDescription.push(...item.description);
    item.visible = true;
    return item;
  });
  cultureData.value[0].description = allDescription;
  cultureData.value = [cultureData.value[0]];
}

onMounted(() => {
  bgFilter.value = 'bg-filter';
});

const cultureAnimation = function () {
  return 'animated animate__fadeIn';
};

const getClassType = function (
  k: number,
  firstClass: string,
  secondClass: string
) {
  return k % 2 == 0 ? firstClass : secondClass;
};
const onCultureIntersection = function (entry: {
  target: {
    dataset: {
      id: string;
    };
  };
  isIntersecting: boolean;
}) {
  if ($q.platform.is.mobile) {
    return;
  }
  const index = parseInt(entry.target.dataset.id, 10);

  const delayMap = [0, 0, 0, 0];

  setTimeout(() => {
    cultureData.value[index].visible = entry.isIntersecting;
  }, 100 * delayMap[index]);
};
const scrollFullScreen = function () {
  const height = window.innerHeight - 20;
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  });
};
const isMobile = computed(() => {
  return <boolean>$q.platform.is.mobile;
});
</script>

<style lang="scss">
.bg-filter {
  filter: brightness(0.6);
}

.mobile {
  .bg-filter {
    filter: brightness(0.4);
  }

  .footer {
    a {
      font-size: 0.75rem;
    }
  }

  .lm-points {
    .lm-points-background {
      .row .right .points-img {
        box-shadow: 1rem 1rem #cd932f;
      }
      .description {
        width: calc(100% + 1rem);
      }
    }
  }

  .lm-culture {
    padding-bottom: 3.5rem;
  }

  .lm-culture .content p {
    font-size: 0.75rem;
  }

  .lm-culture .content .footer a {
    font-size: 0.75rem;
    text-align: right;
  }
}

.bg-filter-none {
  filter: brightness(1);
}
</style>
