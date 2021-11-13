<template>
  <div class="lm-study-abroad lm-light-dark-background">
    <section class="transparent">
      <div>
        <div class="lg:container lg:mx-auto">
          <part-header name="世界名校直通车"></part-header>
          <div class="lm-container row justify-center pb-20">
            <div class="col-9">
              <div
                class="text-quaternary text-weight-bolder text-center text-4xl mb-4"
              >{{ programTitle }}</div>
              <div
                class="text-quaternary text-weight-bolder text-center text-4xl"
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
                <div v-if="active" class="navigation-indicator-item active" :style="{ width: (1 / maxIndex) * 100 + '%'}"  @click="onClick"></div>
                <div v-else class="navigation-indicator-item"  @click="onClick" :style="{ width: (1 / maxIndex) * 100 + '%'}"></div>
            </template>
            <template v-for="(v, k) in carouselData" :key="k">
              <q-carousel-slide :name="'carousel' + k" class="column no-wrap">
                <div class="row justify-center items-center mb-10">
                  <div class="col-xs-12 col-sm-12 col-md-5 left q-py-xs-lg q-py-xs-lg">
                    <h3 class="text-white text-weight-bold text-3xl text-center sm:text-left">{{ v.title }}</h3>
                    <div class="mt-2">
                      <h2 class="text-quaternary text-weight-bolder text-5xl pb-10 text-center sm:text-left">{{ v.subTitle }}</h2>
                      <p
                        class="text-white text-sm pr-0 text-weight-thin leading-7 tracking-wide md:pr-24 lg:pr-24"
                      >{{ v.description }}</p>
                    </div>
                    <div class="footer"></div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 right q-py-xs-lg q-py-sm-lg">
                    <q-responsive :ratio="692 / 511">
                      <q-img class="points-img" :src="v.imgLink"></q-img>
                    </q-responsive>
                  </div>
                </div>
              </q-carousel-slide>
            </template>
          </q-carousel>
        </div>
      </div>
    </section>
    <section class="bg-white mb-20">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center py-20">
          <div class="col-9">
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
    <section class="transparent">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center">
          <div class="col-12">
            <div class="header">
              <div
                class="incubation-title text-quaternary text-center text-weight-bolder"
              >{{ offers.title }}</div>
              <div
                class="subtitle text-quaternary text-center text-text-weight-bolder"
              >{{ offers.subTitle }}</div>
            </div>
            <div class="content">
              <section class="lm-offers transparent row items-center lg:container lg:mx-auto">
                <div class="offer-container">
                  <q-carousel
                    v-model="slideOffer"
                    control-color="white"
                    navigation
                    padding
                    arrows
                    animated
                    transition-prev="fade"
                    transition-next="fade"
                    class="lm-points-background transparent"
                  >
                    >
                    <template v-slot:navigation-icon>
                    </template>

                    <template v-for="(v, k) in offers.list" :key="k">
                      <q-carousel-slide :name="v.name" class="flex no-wrap flex-center relative">
                        <div class="flex items-center mr-2">
                          <q-btn
                            flat
                            round
                            color="secondary"
                            icon="navigate_before"
                            @click="scrollLeft(k)"
                          />
                        </div>
                        <q-scroll-area
                          class="lm-scroll"
                          :bar-style="{ background: 'transparent' }"
                          :ref="
                            (el) => {
                              if (el) itemRefs[k] = el;
                            }
                          "
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
                              <div class="school-logo">
                                <q-img class="img" :src="sv.imgLink" fit="scale-down"></q-img>
                              </div>
                              <div class="school-desc">
                                <div
                                  class="title text-quaternary text-weight-bolder text-xl"
                                >{{ sv.title }}</div>
                                <div
                                  class="subtitle text-white text-weight-bold text-lg"
                                >{{ sv.subTitle }}</div>
                                <q-scroll-area
                                  class="description ellipsis-3-lines text-weight-thin text-xs leading-5"
                                  :bar-style="{ background: 'white' }"
                                >
                                  <span class="scale-50 transform">
                                    {{
                                    sv.description
                                    }}
                                  </span>
                                </q-scroll-area>
                              </div>
                            </li>
                          </ul>
                        </q-scroll-area>
                        <div class="ml-2">
                          <q-btn
                            flat
                            round
                            color="secondary"
                            icon="navigate_next"
                            @click="scrollRight(sk)"
                          />
                        </div>
                      </q-carousel-slide>
                    </template>
                  </q-carousel>

                <div class="row justify-center items-center">
                        <div class="col-md-9 col-xs-11">
                          <indicator
                            :num="currentOffer.list.length"
                            :left="offerIndicatorLeft"
                            @show="showIndicator"
                          ></indicator>
                        </div>
                      </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white my-20">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center pb-20">
          <div class="col-12">
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
        <div class="lm-container row justify-center pb-20">
          <div class="col-12">
            <div class="text-quaternary text-center text-weight-bolder text-5xl">产品亮点</div>
            <div class="highlight mt-10">
              <div class="row lm-highlight justify-center">
                <div
                  :class="['col-md-4 item flex justify-center col-xs-12']"
                  v-for="(v, k) in highlight"
                  :key="k"
                >
                  <div :class="['w-2/4', k > 2 ? 'highlight-up' : '']">
                    <div
                      class="title text-quaternary text-weight-bolder text-8xl text-center"
                    >{{ v.title }}</div>
                    <div class="description py-2">
                      <p
                        class="text-center text-white text-xs text-weight-thin leading-5"
                        v-for="(vv, kk) in v.list"
                        :key="kk"
                      >{{ vv }}</p>
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
import Indicator from 'components/Indicator.vue';
import CaseCarousel from 'components/carousel/CaseCarousel.vue';
import { CarouselData, OfferData } from 'components/models';
import { QScrollArea } from 'quasar';

export default {
  name: 'CloudProgram',
  components: {
    PartHeader,
    DescriptionWithImg,
    Indicator,
    Contact,
    CaseCarousel,
  },
  setup() {
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
    const professorData = ref([
      {
        name: 'Dennis H Chookaszian教授',
        title: [
          'CNA保险公司前董事长兼CEO',
          '美国53家上市公司董事',
          '前美国国家审计署执行委员会主席',
        ],
        imgLink: 'teacher-1.jpg',
        description:
          '丹尼斯·乔卡西安是CNA保险公司的前任事长兼首席执行官。从1992年到1999年担任CNA的主席和首席执行官。1999年至2001年任国家审计署执行委员会主席。1990年至1992年，乔卡西安担任CNA总裁兼首席运营官，负责所有财产和伤亡、生命、健康和投资运营。于1975年加入CNA，担任首席财务官，直到1990年被任……',
      },
      {
        name: '李贝贝 讲席副教授',
        title: [
          '美国卡内基梅隆大学助理教授',
          '美国纽约大学信息系统与管理学博士',
          '美国经济、市场营销与信息科学顶级会议演讲者',
        ],
        imgLink: 'teacher-1.jpg',
        description:
          '李贝贝教授现任卡内基梅隆大学(Caregie Mel-lonUniversity)约翰·海因茨管理学院、计算机学院与商学院Anna Loomis McCandless讲席教授，副教授与博士生导师。为纽约大学斯特恩商学院信息系统与管理学博士学位。专注于研究信息科技与个体行为、组织和社会的关系，并利 用大规模历史和实验数据进行相关决策……',
      },
      {
        name: 'Dennis H Chookaszian教授',
        title: [
          'CNA保险公司前董事长兼CEO',
          '美国53家上市公司董事',
          '前美国国家审计署执行委员会主席',
        ],
        imgLink: 'teacher-1.jpg',
        description:
          'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
      },
    ]);
    const currentOfferSchool = ref(0);
    const offerIndicatorLeft = ref('0rem');
    const slideOffer = ref('america');
    const offers = {
      title: '录取院校',
      subTitle: '',
      list: [
        {
          title: '',
          name: 'america',
          list: [
            {
              title: '康奈尔大学',
              subTitle: '文理学院',
              description:
                '康奈尔大学（英语：Cornell University）是一所位于美国纽约州伊萨卡的私立研究型大学，另有两所分校位于纽约市曼哈顿和卡塔尔教育城，是美洲大学协会的十二个创会成员之一，及NCAA体育赛事联盟常春藤盟校的成员，截止2020年10月，先后有超过61位校友、教职工和研究人员获颁诺贝尔奖（世界第十二）、1位菲尔兹奖得主、4位图灵奖得主',
              imgLink: 'school-logo/225px-Cornell_University.png',
              link: 'https://www.cornell.edu/',
            },
            {
              title: '康奈尔大学',
              subTitle: '酒店管理学院',
              description:
                '康奈尔大学（英语：Cornell University）是一所位于美国纽约州伊萨卡的私立研究型大学，另有两所分校位于纽约市曼哈顿和卡塔尔教育城，是美洲大学协会的十二个创会成员之一，及NCAA体育赛事联盟常春藤盟校的成员，截止2020年10月，先后有超过61位校友、教职工和研究人员获颁诺贝尔奖（世界第十二）、1位菲尔兹奖得主、4位图灵奖得主',
              imgLink: 'school-logo/225px-Cornell_University.png',
              link: 'https://www.cornell.edu/',
            },
            {
              title: '约翰霍普金斯大学',
              subTitle: '文理学院',
              description:
                '约翰斯·霍普金斯大学采用德国古老的海德堡大学研究所的概念，被认为是美国第一所研究型大学，是美洲大学协会的12个创始会员之一。它的成功引发了美国其它大学向研究型大学转型。美国国家科学基金会连续31年将该校列为全美科研经费开支最高的大学',
              imgLink:
                'https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university_logo_small_vertical_blue.png',
              link: 'https://www.jhu.edu/',
            },
            {
              title: '南加利福尼亚大学',
              subTitle: '文理学院',
              description:
                '南加利福尼亚大学，位于加州洛杉矶市中心，由Robert M. Widney于1880年创立，是加州最古老的私立研究型大学。南加大拥有曾被评为全美国排名第一的电影学院、全美国排名第一的老龄学院、全美国排名第三的公共政策学院、全美国排名的第十的工程学院。',
              imgLink: 'school-logo/Usc_seal.gif',
              link: 'https://www.usc.edu/',
            },
            {
              title: '埃默里大学',
              subTitle: '文理学院',
              description:
                '埃默里大学（英语：Emory University），或译艾文理大学、艾默利大学，创校于1836年，为一位于美国乔治亚州亚特兰大都市地区迪卡尔布县德鲁伊山之私立菁英大学。默里大学的学校基金会财产在美国排第16名，在全世界是第21富有的，根据《美国新闻与世界报道》2017年美国大学排行榜排第20名，综合排名第82名。',
              imgLink: 'school-logo/Emory-University642.jpg',
              link: 'https://www.jhu.edu/',
            },
            {
              title: '密歇根大学-安娜堡分校',
              subTitle: '文理学院',
              description:
                '密歇根大学（英语：University of Michigan，简称：U-M、UM、U of M、UMich 或 Michigan），简称密大，位于美国密歇根州安娜堡，是一所公立研究型大学，为美洲大学协会的创始院校之一，是美国乃至世界顶尖的大学之一。',
              imgLink:
                'school-logo/270px-Seal_of_the_University_of_Michigan.svg.png',
              link: 'https://umich.edu/',
            },
            {
              title: '纽约大学',
              subTitle: '文理学院',
              description:
                '纽约大学（英语：New York University，缩写为NYU），于1831年成立，是一所位于纽约市曼哈顿的研究型私立大学。主要的校区位于曼哈顿格林威治村的附近区域，以华盛顿广场为中心，是全美国境内规模最大的私立非营利高等教育机构。',
              imgLink: 'school-logo/320px-New_York_University_Seal.png',
              link: 'https://www.nyu.edu/',
            },
            {
              title: '香港大学',
              subTitle: '专业任选',
              description:
                '香港大学（英语：The University of Hong Kong，缩写：HKU），简称港大，是香港的一所公立研究型大学，大学本部位于香港岛中西区龙虎山。香港大学成立于1911年，并于1912年3月11日正式办学，是香港最早建立的高等教育机构。成立之初，更是大英帝国在东亚成立的唯一一间大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
              imgLink: 'school-logo/200px-HKU_Coat_of_Arms.png',
              link: 'https://hku.hk/',
            },
            {
              title: '香港科技大学',
              subTitle: '专业任选',
              description:
                '香港科技大学（英语：The Hong Kong University of Science and Technology，缩写：HKUST），简称科大，是香港的一所公立研究型大学，位于香港新界西贡区清水湾半岛，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
              imgLink: 'school-logo/HKUST.png',
              link: 'https://hkust.edu.hk/',
            },
            {
              title: '哥伦比亚大学',
              subTitle: '商学院',
              description:
                '纽约市哥伦比亚大学（英语：Columbia University in the City of New York；通称：“哥伦比亚大学”；简称：“哥大”）是一所坐落于美国纽约曼哈顿上城晨边高地的私立研究型大学，是美洲大学协会的12个创始校之一，及NCAA体育赛事联盟常春藤盟校的成员。哥大是纽约州最古老的高等教育学府，也是美国历史第五悠久的高等教育机构',
              imgLink: 'school-logo/ColumbiaSeal.png',
              link: 'https://www.columbia.edu/',
            },
            {
              title: '南加利福尼亚大学',
              subTitle: '工学院',
              description:
                '南加利福尼亚大学，位于加州洛杉矶市中心，由Robert M. Widney于1880年创立，是加州最古老的私立研究型大学。南加大拥有曾被评为全美国排名第一的电影学院、全美国排名第一的老龄学院、全美国排名第三的公共政策学院、全美国排名的第十的工程学院。',
              imgLink: 'school-logo/Usc_seal.gif',
              link: 'https://www.usc.edu/',
            },
            {
              title: '纽约大学',
              subTitle: '工学院',
              description:
                '纽约大学（英语：New York University，缩写为NYU），于1831年成立，是一所位于纽约市曼哈顿的研究型私立大学。主要的校区位于曼哈顿格林威治村的附近区域，以华盛顿广场为中心，是全美国境内规模最大的私立非营利高等教育机构。',
              imgLink: 'school-logo/320px-New_York_University_Seal.png',
              link: 'https://www.nyu.edu/',
            },
            {
              title: '香港大学',
              subTitle: '商学院',
              description:
                '香港大学（英语：The University of Hong Kong，缩写：HKU），简称港大，是香港的一所公立研究型大学，大学本部位于香港岛中西区龙虎山。香港大学成立于1911年，并于1912年3月11日正式办学，是香港最早建立的高等教育机构。成立之初，更是大英帝国在东亚成立的唯一一间大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
              imgLink: 'school-logo/200px-HKU_Coat_of_Arms.png',
              link: 'https://hku.hk/',
            },
            {
              title: '香港大学',
              subTitle: '工学院',
              description:
                '香港大学（英语：The University of Hong Kong，缩写：HKU），简称港大，是香港的一所公立研究型大学，大学本部位于香港岛中西区龙虎山。香港大学成立于1911年，并于1912年3月11日正式办学，是香港最早建立的高等教育机构。成立之初，更是大英帝国在东亚成立的唯一一间大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
              imgLink: 'school-logo/200px-HKU_Coat_of_Arms.png',
              link: 'https://hku.hk/',
            },
            {
              title: '香港科技大学',
              subTitle: '商学院',
              description:
                '香港科技大学（英语：The Hong Kong University of Science and Technology，缩写：HKUST），简称科大，是香港的一所公立研究型大学，位于香港新界西贡区清水湾半岛，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
              imgLink: 'school-logo/HKUST.png',
              link: 'https://hkust.edu.hk/',
            },
          ],
        },
      ],
    };
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
          '传统留学中介和咨询公司通常需要学生提前半年至两年的时间开始准备申请工作，而鹿名青云计划只需要学生距离申请截止日期一个月便可以确保申请流程高效且高质量顺利完成',
        imgLink: 'oxford.jpeg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '低分高录',
        description:
          '和其他留学和中介公司不同的是，鹿名学员不需要自身成绩和背景多么优秀，也不需要后续参加任何成绩和背景提升的额外培训，鹿名能够保证学员进入比其自身条件更高的名校',
        imgLink: 'lb.jpg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '单所名校精准保录',
        description:
          '看似鸡蛋不要放在一个篮子里，实则鹿名确实有实力和和底气能够为学员只报一所名校并收获录取通知书，因为我们掌握着全球顶尖院校的独家资源',
        imgLink: 'harvard_school.jpg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '独家资源',
        description:
          '随着多年以来的积累，鹿名凝聚着最核心、最顶尖的国际名校招生官、校董、校园管理层、名师以及资源。这些独有的资源渠道是鹿名青云计划短时间帮助学员完成申请、低分高录、名校精准保录的最坚实保障',
        imgLink: 'bg.jpg',
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
      offers,
      slideOffer,
      currentOfferSchool,
      offerIndicatorLeft,
      professorData,
      serviceProgress,
      highlight,
      suitableStudents,
      currentOffer: computed((): OfferData => {
        return <OfferData>offers.list.find((offer) => {
          return offer.name === slideOffer.value;
        });
      }),
      getClassType(k: number, firstClass: string, secondClass: string) {
        return k % 2 == 0 ? firstClass : secondClass;
      },
      showIndicator(index: number) {
        const currentOfferSchoolLength =
          offers.list[currentOfferSchoolTypeIndex.value].list.length;

        offerIndicatorLeft.value = `${
          (index * 100) / currentOfferSchoolLength
        }%`;
        currentOfferSchool.value = index;

        if (index === 0) {
          currentPosition.value = 0;
        } else if (index === currentOfferSchoolLength - 1) {
          currentPosition.value = 1;
        } else {
          currentPosition.value = (index + 1) / currentOfferSchoolLength;
        }

        currentScrollAreaRef.value.setScrollPercentage(
          'horizontal',
          currentPosition.value,
          300
        );
      },

      getCurrentOfferSchool(index: number) {
        const currentOfferSchoolLength =
          offers.list[currentOfferSchoolTypeIndex.value].list.length;

        offerIndicatorLeft.value = `${
          (index * 100) / currentOfferSchoolLength
        }%`;
        currentOfferSchool.value = index;
      },
      scrollLeft() {
        currentPosition.value -=
          2 / offers.list[currentOfferSchoolTypeIndex.value].list.length;
        if (currentPosition.value < 0) {
          currentPosition.value = 0;
        }
        currentScrollAreaRef.value.setScrollPercentage(
          'horizontal',
          currentPosition.value,
          300
        );
      },
      scrollRight() {
        currentPosition.value +=
          2 / offers.list[currentOfferSchoolTypeIndex.value].list.length;
        if (currentPosition.value > 1) {
          currentPosition.value = 1;
        }
        currentScrollAreaRef.value.setScrollPercentage(
          'horizontal',
          currentPosition.value,
          300
        );
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
    top: 40%;
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
</style>
