<template>
  <div class="lm-study-abroad lm-light-dark-background no-gradient">
    <section class="transparent">
      <div>
        <div class="lg:container lg:mx-auto">
          <part-header name="学业管家"></part-header>
          <div class="lm-container row justify-center">
            <div class="col-md-9 col-xs-11">
              <div
                class="text-quaternary text-weight-bolder text-center text-3xl sm:text-4xl mb-4"
              >{{ programTitle }}</div>
              <div
                class="text-quaternary text-weight-bold text-center text-xs sm:text-2xl"
              >{{ programDescription }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="transparent mb-10">
      <div class="lm-points row items-center lg:container lg:mx-auto pt-0">
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
                  <div class="col-xs-12 col-sm-12 col-md-5 left mt-10 sm:mt-0">
                    <div class="mt-2 sm:mb-0">
                      <h2
                        class="subtitle text-quaternary text-weight-bolder text-4xl sm:text-5xl sm:pb-10 sm:pr-5"
                      >{{ v.subTitle }}</h2>
                      <p
                        class="description text-white text-sm pr-0 sm:pr-24 text-weight-thin leading-7 tracking-wide gt-sm"
                      >{{ v.description }}</p>
                    </div>
                    <div class="footer"></div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 right q-py-xs-lg q-py-sm-lg">
                    <q-responsive :ratio="isMobile ? 470 / 255 : 692 / 511">
                      <q-img class="points-img" :src="v.imgLink" loading="eager" :no-spinner="true"></q-img>
                    </q-responsive>
                  </div>
                  <div class="col-12 lt-md">
                  <p
                        class="description text-white text-sm pr-0 sm:pr-24 text-weight-thin leading-7 tracking-wide pt-4"
                      >{{ v.description }}</p>
                  </div>
                </div>
              </q-carousel-slide>
            </template>
          </q-carousel>
        </div>
      </div>
    </section>
    <section class="transparent mb-20">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center sm:pb-20">
          <div class="col-md-9 col-xs-11">
            <description-with-img
              :info="productIntro"
              title="产品介绍"
              background="shield.png"
              top="2"
              :imgStyle="{ height: '30rem' }"
            ></description-with-img>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center">
          <div class="col-md-9 col-xs-6">
            <div class="lm-product-points mb-10 sm:mb-20 mt-10 sm:mt-20">
              <div class="text-center text-weight-bolder text-2xl mb-2">{{ productPoints[0].title }}</div>
              <div
                class="text-center zoom-sm text-weight-thin text-xs leading-7"
                v-for="(v, k) in productPoints[0].description"
                :key="k"
              >{{ v }}</div>
            </div>
          </div>

          <div class="col-md-9 col-xs-6 lt-md">
            <div class="lm-product-points mb-10 sm:mb-20 mt-10 sm:mt-20">
              <div class="text-center text-weight-bolder text-2xl mb-2">{{ productPoints[1].title }}</div>
              <div
                class="text-center zoom-sm text-weight-thin text-xs leading-7"
                v-for="(v, k) in productPoints[1].description"
                :key="k"
              >{{ v }}</div>
            </div>
          </div>
                    <div class="col-md-9 col-xs-6 lt-md">
            <div class="lm-product-points mb-10 sm:mb-20 mt-10 sm:mt-20">
              <div class="text-center text-weight-bolder text-2xl mb-2">{{ productPoints[3].title }}</div>
              <div
                class="text-center zoom-sm text-weight-thin text-xs leading-7"
                v-for="(v, k) in productPoints[3].description"
                :key="k"
              >{{ v }}</div>
            </div>
          </div>
                              <div class="col-md-9 col-xs-6 lt-md">
            <div class="lm-product-points mb-10 sm:mb-20 mt-10 sm:mt-20">
              <div class="text-center text-weight-bolder text-2xl mb-2">{{ productPoints[2].title }}</div>
              <div
                class="text-center zoom-sm text-weight-thin text-xs leading-7"
                v-for="(v, k) in productPoints[2].description"
                :key="k"
              >{{ v }}</div>
            </div>
          </div>
                              <div class="col-md-9 col-xs-6 lt-md">
            <div class="lm-product-points mb-10 sm:mb-20 mt-10 sm:mt-20">
              <div class="text-center text-weight-bolder text-2xl mb-2">{{ productPoints[4].title }}</div>
              <div
                class="text-center zoom-sm text-weight-thin text-xs leading-7"
                v-for="(v, k) in productPoints[4].description"
                :key="k"
              >{{ v }}</div>
            </div>
          </div>
                              <div class="col-md-9 col-xs-6 lt-md">
            <div class="lm-product-points mb-10 sm:mb-20 mt-10 sm:mt-20">
              <div class="text-center text-weight-bolder text-2xl mb-2">{{ productPoints[5].title }}</div>
              <div
                class="text-center zoom-sm text-weight-thin text-xs leading-7"
                v-for="(v, k) in productPoints[5].description"
                :key="k"
              >{{ v }}</div>
            </div>
          </div>


          <div class="col-12 row relative justify-center">
            <div class="col-md-4 col-xs-11 flex flex-col justify-center gt-sm">
              <div class="lm-product-points mb-10 sm:mb-20">
                <div
                  class="text-center text-weight-bolder text-2xl mb-2"
                >{{ productPoints[1].title }}</div>
                <div
                  class="text-center text-weight-thin text-xs leading-7"
                  v-for="(v, k) in productPoints[1].description"
                  :key="k"
                >{{ v }}</div>
              </div>
              <div class="lm-product-points mb-10 sm:mb-0">
                <div
                  class="text-center text-weight-bolder text-2xl mb-2"
                >{{ productPoints[3].title }}</div>
                <div
                  class="text-center text-weight-thin text-xs leading-7"
                  v-for="(v, k) in productPoints[3].description"
                  :key="k"
                >{{ v }}</div>
              </div>
            </div>
            <div class="col-xs-8 col-md-4">
              <q-img
                class="lm-product-img"
                src="product-intro-black.svg"
                fit="contain"
                loading="eager"
                :no-spinner="true"
              >
                <div
                  class="lm-product-container absolute-full text-weight-bolder flex flex-center transparent text-5xl sm:text-7xl"
                >
                  <div class="lm-product-caption text-center text-black">
                    <div>
                      师资
                    </div>
                    <div>配置</div>
                  </div>
                </div>
              </q-img>
            </div>
            <div class="col-md-4 col-xs-11 flex flex-col justify-center gt-sm">
              <div class="lm-product-points mb-10 sm:mb-20">
                <div
                  class="text-center text-weight-bolder text-2xl mb-2 mt-10 sm:mt-0"
                >{{ productPoints[2].title }}</div>
                <div
                  class="text-center text-weight-thin text-xs leading-7"
                  v-for="(v, k) in productPoints[2].description"
                  :key="k"
                >{{ v }}</div>
              </div>
              <div class="lm-product-points">
                <div
                  class="text-center text-weight-bolder text-2xl mb-2"
                >{{ productPoints[4].title }}</div>
                <div
                  class="text-center text-weight-thin text-xs leading-7"
                  v-for="(v, k) in productPoints[4].description"
                  :key="k"
                >{{ v }}</div>
              </div>
            </div>
          </div>
          <div class="col-12" :style="{ height: isMobile ? '20rem' : 'auto'}">
            <div class="mt-8 relative row justify-center">
              <div class="w-full col-7 relative -top-52  sm:-top-36">
                <q-img
                  class="w-full"
                  src="service-progress.png"
                  fit="contain"
                  height="34rem"
                  :style="{ opacity: 0.2 }"
                  loading="eager"
                  :no-spinner="true"
                ></q-img>
              </div>
              <div class="col-12 absolute top-0">
                <div class="lm-product-points gt-sm">
                  <div
                    class="text-center text-weight-bolder text-2xl mb-2"
                  >{{ productPoints[5].title }}</div>
                  <div
                    class="text-center text-weight-thin text-xs leading-7"
                    v-for="(v, k) in productPoints[5].description"
                    :key="k"
                  >{{ v }}</div>
                </div>
                <div class="lm-source-extra mt-16">
                  <div class="text-center text-weight-bolder text-xl sm:text-2xl mb-2">{{ sourceInfo.title }}</div>
                  <div
                    class="text-center zoom-sm text-weight-bolder text-base leading-10"
                    v-for="(v, k) in sourceInfo.description"
                    :key="k"
                  >{{ v }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="transparent mt-10 sm:mt-20">
      <div class="lg:container lg:mx-auto">
        <div class="lm-container row justify-center sm:mb-20">
          <div class="col-12">
            <div
              class="text-quaternary text-center text-weight-bolder  text-5xl mb-4"
            >{{ serviceContent.title }}</div>
            <div
              class="text-white text-center font-extralight sm:font-medium zoom-sm text-xs sm:text-base px-6"
            >{{ serviceContent.subtitle }}</div>
            <text-card
              :title="v.title"
              :list="v.list"
              v-for="(v, k) in serviceContent.list"
              :key="k"
            ></text-card>
          </div>
        </div>
      </div>
    </section>
    <section class="transparent  sm:mb-20">
      <div class="lg:container lg:mx-auto">
        <div class="lm-service-advantage row justify-center p-10">
          <div class="col-12">
            <div
              class="text-quaternary text-center text-weight-bolder text-5xl mb-10 sm:mb-20"
            >{{ serviceAdvantage.title }}</div>
          </div>
          <div
            :class="['col-12 row py-10 sm:py-20 item', k % 2 !== 0 ? 'reverse' : '']"
            v-for="(v, k) in serviceAdvantage.list"
            :key="k"
            :ref="(el) => {
                if (el) itemRefs[k] = el;
            }"
          >
            <div class="col-xs-12 col-md-7">
              <div
                class="text-quaternary text-weight-bolder text-6xl leading-20"
                v-for="(vt, kt) in v.title"
                :style="{fontSize: isMobile ? v.fontSize : ''}"
                :key="kt"
              >{{ vt }}</div>
              <div class="text-white text-weight-bolder text-4xl mt-10 mb-5"></div>
              <div
                class="text-white text-weight-thin text-base leading-6 mb-5 sm:mb-0"
              >{{ v.description }}</div>
            </div>
            <div class="col-xs-12 col-md-5 cover">
              <q-responsive :ratio="isMobile ? 448 /182 : 4 / 3">
                <q-img class="img" :src="v.cover" fit="cover" loading="eager" :no-spinner="true"></q-img>
              </q-responsive>
            </div>
          </div>
        </div>
      </div>
    </section>
    <contact></contact>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUpdate, defineComponent, computed } from 'vue';
import PartHeader from '../components/PartHeader.vue';
import DescriptionWithImg from '../components/DescriptionWithImg.vue';
import TextCard from '../components/TextCard.vue';
import Contact from '../components/Contact.vue';
import { CarouselData } from 'components/models';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'AcademicManager',
  components: {
    PartHeader,
    DescriptionWithImg,
    Contact,
    TextCard,
  },
  setup() {
    const $q = useQuasar();
    const route = useRoute();
    const itemRefs = ref([]);
    onMounted(() => {
      const id = route.query.id;

      console.log(route.query.id);
      if (typeof id !== 'undefined') {
        let index = parseInt('0', 10);
        const currentProfRef = <InstanceType<typeof HTMLElement>>(
          itemRefs.value[index]
        );

        setTimeout(() => currentProfRef.scrollIntoView(), 0);
      }
    });
    onBeforeUpdate(() => {
      itemRefs.value = [];
    });
    const serviceAdvantage = {
      title: '服务优势',
      list: [
        {
          title: ['金牌导师团队', '专属管家服务'],
          subtitle: '服务优势',
          description:
            '名校经营导师团：教授和学霸导师来自哈佛大学、耶鲁大学、麦吉尔大学、英属哥伦比亚大学、剑桥牛津大学、麻省理工大学、澳洲国立大学、悉尼大学等遍布全球300+搞校，全面覆盖不同学科和专业。学霸导师皆经过严格的考核、选拔与培训，GPA都在3.8/4.0以上。',
          cover: 'academic/6.jpg',
          fontSize: 'calc((100vw - 6rem) / 6)',
        },
        {
          title: ['每学期选课规划'],
          subtitle: '服务优势',
          description:
            '个性定制化服务,学生自由选择课程组合，由导师提供一对一的指导。导师充分结合学生的学术能力、专业需求、发展目标等因素全方位定制学习规划，并根据学生的学习情况和个人志向及时优化调整课业方案与授课内容。',
          cover: 'academic/7.jpg',
          fontSize: 'calc((100vw - 6rem) / 7)',
        },
        {
          title: ['全方位支持与协同'],
          subtitle: '服务优势',
          description:
            '不限课时，不限答疑，贯穿整个学期每周更新的每周学习时间计划表；学校上课、office   hour、作业deadline、考试时间地点、GPA辅导课安排等一目了然。每一位学员都配有专属助教，全方位实时跟进学习情况。微信群内同步教学系统，提醒学生重要事项、发布课件/笔记、跟踪平时成绩、分析评语反馈，投喂We- Education专属学习资源; 全方位帮助学生快速进入学习状态、学期中查漏补缺、期末提早复习备考。与导师、专家、家长、学生保持沟通，及时了解并处理学生家长提出的问题与反馈，协调多方之间的信息沟通，有益于家长随时了解学生近况。',
          cover: 'academic/8.jpg',
          fontSize: 'calc((100vw - 6rem) / 8)',
        },
        {
          title: ['职业规划与就业'],
          subtitle: '服务优势',
          description:
            '八节职业小班课，为国际青少年提供最优质的高端人才成长平台，通过案例分析与实战课题，提高解决实际问题的能力以及团队协作能力，多方位提升专业技能与职业素养，帮助在校大学生了解行业前沿信息，增加职场实战经验，发掘自身潜力，提升专业技能和综合素养。',
          cover: 'academic/9.jpg',
          fontSize: 'calc((100vw - 6rem) / 7)',
        },
        {
          title: ['关注孩子身心发展'],
          subtitle: '服务优势',
          fontSize: 'calc((100vw - 6rem) / 8)',
          description:
            '24小时身心健康对接服务，学业管家计划不仅看重学生的学业表现和提升过程，同时也关注孩子海外求学的身心健康。专业心理咨询专家提供压力舒缓、情绪管理等问题解答。搭建社会公益平台，全面关注世界公民的身心发展，培养孩子的社会公益视野及领袖能力。',
          cover: 'academic/10.jpg',
        },
      ],
    };
    const serviceContent = {
      title: '服务内容',
      subtitle:
        '服务总目标：确保学生通过学业管家计划提高自身学习成绩，并顺利毕业',
      list: [
        {
          title: '开学前',
          list: [
            {
              title: ['树立', '目标'],
              description: [
                '确立学生下阶段目标（研究生专业/职业）',
                '引导学术确定自己最适合专业让学业最终与职业接轨',
              ],
            },
            {
              title: ['选课', '指导'],
              description: ['结合个人优势与官方要求', '制定个性化选课方案'],
            },
            {
              title: ['学术', '衔接'],
              description: ['根据学生的专业和所选课程', '提前预习，做好准备。'],
            },
          ],
        },
        {
          title: '学期中',
          list: [
            {
              title: ['学习', '规划'],
              description: [
                '量身定制学习计划，',
                '做好时间和资源的分配，提升执行力',
              ],
            },
            {
              title: ['量身', '授课'],
              description: [
                '根据每个学生的个性化需求，',
                '针对性地提供学业辅导',
              ],
            },
            {
              title: ['论文', '辅导'],
              description: [
                '分层次循序渐进辅导论文写作，',
                '潜移默化中提升写作能力',
              ],
            },
            {
              title: ['论文', '辅导'],
              description: [
                '定期跟踪与反馈学生情况，',
                '对面对的问题和挑战提供对应建议',
              ],
            },
          ],
        },
        {
          title: '一路护航',
          list: [
            {
              title: ['升学', '辅助'],
              description: [
                '针对有转学和申请硕博项目的学生，',
                '提供升学规划与指导',
              ],
            },
            {
              title: ['科研', '实习'],
              description: [
                '为学生提供参与科研实习的机会，',
                '为学生职业生涯增加砝码',
              ],
            },
            {
              title: ['高端', '社交'],
              description: [
                '为学生对接名校教授、社会名流、',
                '行业领军人物等稀缺社交资源',
              ],
            },
          ],
        },
        {
          title: '其他',
          list: [
            {
              title: ['邮件', '助手'],
              description: [
                '可以提供帮助学生查收学校邮件，撰写和学习相关的邮件等服务',
              ],
            },
            {
              title: ['语音', '反馈'],
              description: [
                ' 每周规定时间与家长学生电话沟通一次（30分钟时长）',
                '给予跟进反馈并解决问题',
              ],
            },
            {
              title: ['学习资料', '整理'],
              description: [
                '拿到学生学校账号密码，帮助学生下载整理作业，',
                '并提醒作业提交时间。',
              ],
            },
            {
              title: ['课表', '制作'],
              description: [
                '帮助学生制作学习时间规划课程表',
                '以及学期作业提交时间表，供家长参考',
              ],
            },
            {
              title: ['调研', '学校情况'],
              description: [
                '如家长有关于学生特定学校以及课程情况',
                '给予咨询和详细解答',
                '如学生有与导师上课以外相关学习和生活问题',
                '例如保险，衣食住行等问题',
              ],
            },
            {
              title: ['心理', '咨询'],
              description: [
                '大多数一个人独自在外的学生总会感到孤独，且压力大困难多',
                '很容易产生消极情绪，抵触学习导致自闭',
                '学习管家会在上课额外时间帮助疏导',
                '沟通，正面影响孩子，确保孩子心理健康',
              ],
            },
            {
              title: ['课外活动', '介绍'],
              description: [
                '各类学校内外发生的',
                '课外活动介绍和推荐',
                '培养孩子乐观向上的积极态度',
              ],
            },
          ],
        },
      ],
    };
    const sourceInfo = {
      title: '我们的高端资源还包括',
      description: [
        '康奈尔的前副校长，宾大的校董，M I T的校董，哥大TC的院长，茱莉亚的现任院长，',
        '耶鲁音乐学院的现任院长，哈佛教育学院的现任院长，',
        '布朗大学现任副校长，斯坦福大学智能机器人实验室教授等',
      ],
    };
    const productPoints = [
      {
        title: '各行业职业精英',
        description: ['独家深度研习课程导师', '全面覆盖热门行业与高科技领域'],
      },
      {
        title: '理想考研院校导师',
        description: [
          '转学/硕博',
          '目标学校教授资源',
          '授课、科研、学业领航',
          '全方位对接',
        ],
      },
      {
        title: '双语教育顾问',
        description: ['实时监控课程进度', '老师—学生—家长', '高效沟通桥梁'],
      },
      {
        title: '专业科目学辅导老师',
        description: [
          '量身定制一对一学科辅导',
          '同步提升能力与技巧',
          '助力高GPA',
        ],
      },
      {
        title: '学术教授',
        description: ['量身定制学术进阶课程', '辅导学术', '保证高GPA'],
      },
      {
        title: '同校学长学姐',
        description: ['过来人全方位领航', '帮助新生快速融入', '开启高能状态'],
      },
    ];
    const productIntro = [
      '学业管家服务旨在从“培养符合未来发展高素质人才”角度出发',
      '全方位考虑学生和家庭的需求。',
      '整合美加英澳1000+同校导师、500+教授、500+职场精英、300+学术专家等资',
      '匹配学生和导师，提供学术学科辅导（提高GPA成绩）',
      '身心安全健康和社会责任心；实战培训和职业潜能培养',
      '让留学生挖掘潜能、提高竞争力、脱颖而出，实现名校名企双重成功！',
    ];
    const serviceProgress = [
      '前期咨询沟通',
      '提交材料进行评估',
      '合同签约',
      '拿到梦校录取通知书',
      '一站式后留学服务，贴心保障留学生活（可选）',
    ];
    // const $q = useQuasar()
    const currentOfferSchool = ref(0);
    const offerIndicatorLeft = ref('0rem');
    const slideActive = ref(
      'background:#cc932e;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
    );
    const slideDefault = ref(
      'background:#26322b;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
    );
    const programTitle = '中长期规划型名校申请方式';
    const programDescription =
      '进入梦校只是你梦想的起点，而并非终点…… 你有曾想过……';
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
        subTitle: '如何选择合适专业？',
        description:
          '专业选择很大程度上影响着一个人的未来发展。正确的引导学生找到合适的专业，让学业与职业正确接轨，学以致用，其中的统筹作用尤为重要。80%的大一学生，甚至是已经决定专业的学生，都表示对自己的专业选择不确定，超半数的学生在确定专业后有换专业的想法。没有系统地了解专业的特性以及职业的发展性，导致学生在入学后不喜欢自己的专业，毕业后难以就业。',
        imgLink: 'academic/1.jpg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '如何融入学校生活？',
        description:
          '每一位中国留学生都要经历一场艰苦的蜕变与成长，授课模式和考试形式的改变。海外大学里的教授授课有很大的自由度，授课内容完全不受到教材的限制。学生除了要掌握教材上的内容，还要阅读教授补充的阅读和学习资料，这让习惯国内“填鸭式”教育的留学生感到非常不适应。同时倒时差、水土不服、饮食习惯、语言社交等困难在方方面面影响着留学生的日常生活。',
        imgLink: 'academic/2.jpeg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '如何一入校就能拿稳高GPA',
        description:
          '国外学校的教授通常不会提供类似于教辅材料、考试重点、复习资料等帮助学生总结知识点和备考冲刺工具。“水土不服”的中国留学生学习效率低、作业分数低、复习效率低、考试分数低、不得不面临低GPA、挂科重修、延迟毕业、勒令退学等严重后果，身心俱疲，自信心遭受打击从而自暴自弃，拿到高GPA更成奢望。这种情况在赴海留学的第一学期和学年尤为严重。',
        imgLink: 'academic/3.jpeg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '如何选课既能学到东西又能拿到高分？',
        description:
          '选课是开启海外学习的第一步，量身定制的选课方案将成为优异成绩和个人发展奠定坚实基础。然而，出于对西方教学系统的不熟悉，很多海外留学生在选课上折戟沉沙，苦恼不已。',
        imgLink: 'academic/5.jpg',
      },
      {
        name: '',
        title: '产品特点',
        subTitle: '如何能快速加入课堂讨论？',
        description:
          '国内课堂内交流氛围淡薄、留学语言能力薄弱、交流欲望低或者语言不自信等问题都在困扰着当今的留学生。课堂缺乏交流在学习生活社交等各个方面都会对留学生造成负面影响。甚至造成出国后英语反而倒退的现象。',
        imgLink: 'academic/4.jpg',
      },
    ]);
    return {
      itemRefs,
      programTitle,
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
      productIntro,
      productPoints,
      sourceInfo,
      serviceContent,
      serviceAdvantage,
      isMobile: computed(() => <boolean>$q.platform.is.mobile)
    };
  },
});
</script>

<style lang="scss" scoped>
.mobile {
  .lm-points {
    .left {
      height: auto;
    }

    // .description {
    //   width: calc(100% + 1.25rem);
    // }
  }
  .lm-service-advantage {
    .reverse {
      .cover {
        padding: 0 1rem 1rem 0;
      }
    }
    .cover {
      padding: 0 1rem 1rem 0;
    }
  }
}

.lm-points {
  min-height: 0;
  padding: 0;

  .left {
    height: 23rem;
  }
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
        top: -4rem;
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

.lm-product-img {
  // height: 30rem;

  .lm-product-container {
    .lm-product-caption {
      width: 10rem;
    }
  }
}

.lm-service-advantage {
  .item:not(:last-child) {
    border-bottom: 2px solid $quaternary;
  }

  .reverse {
    .cover {
      padding-left: 0;
      padding-right: 6rem;
    }
  }

  .cover {
    padding-left: 5rem;
    padding-right: 1rem;

    .img {
      box-shadow: 1rem 1rem $secondary;
    }
  }
}
</style>
