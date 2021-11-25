<template>
  <div class="lm-about">
    <section class="lm-comes">
      <div class="lm-light-dark-background">
        <div class="lg:container lg:mx-auto">
          <part-header name="鹿名来源" class></part-header>
          <div class="lm-comes-introduction w-full q-px-xs-xs">
            <div class="content w-full text-center pb-5" v-for="(v, k) in history" :key="k">
              <div class="pb-6 sm:pb-0" v-if="v.title.length">
                <div
                  class="title text-base text-weight-bold pb-1 animate__animated animate__fadeInUp"
                  :class="'animate__delay-' + k + 's'"
                  v-for="(vv, kk) in v.title"
                  :key="kk"
                >{{ vv }}</div>
              </div>

              <p
                class="description zoom-md text-weight-light leading-5 sm:leading-7 animate__animated animate__fadeInUp"
                :class="'animate__delay-' + k + 's'"
                v-for="(vd, kd) in v.content"
                :key="kd"
              >{{ vd }}</p>
            </div>
          </div>
          <part-header name="鹿名文化" class></part-header>
        </div>
      </div>
    </section>

    <section class="lm-culture-points lm-light-dark-background">
      <div class="row justify-center lg:container lg:mx-auto">
        <div class="col-9 col-xs-11 col-md-9 row">
          <template v-for="(v, k) in cultureData" :key="k">
            <div class="col-4">
              <div
                class="points-img"
                :class="[k===0 ? 'border-b-0' : '', k===1 ? 'border-r-0' : '', k===2 ? 'border-l-0' : '' ]"
              >
                <q-img :src="cultureImg[k].backgroundImage" fit="cover" :ratio="557/400"></q-img>
              </div>
            </div>
            <div class="col-4">
              <q-responsive :ratio="557/400">
                <div class="points-container flex align-center">
                  <div class="title text-weight-bolder">{{ v.title }}</div>
                  <div
                    class="description zoom-sm text-quaternary w-full text-xs sm:text-base md:text-lg text-weight-bolder text-center"
                  >{{ v.description }}</div>
                </div>
              </q-responsive>
            </div>
          </template>
        </div>
      </div>
      <part-header name="鹿名团队" class></part-header>
      <div class="lm-culture-team row justify-center pb-14 lg:container lg:mx-auto">
        <div
          class="team-container col-9 col-xs-12 col-md-9 flex items-center py-8 sm:pb-24 q-px-xs-md q-px-md-none"
          :class="[k !== 0 ? 'sm:pt-24' :'', k === teamData.length - 1 ? 'last' : '']"
          v-for="(v, k) in teamData"
          :key="k"
          :ref="
              (el) => {
                if (el) itemRefs[k] = el;
              }
            "
        >
          <div class="row items-center gt-sm" :class=" k % 2 === 0 ? '' : 'reverse'">
            <div class="col-7 col-xs-12 col-md-7">
              <div
                class="team-english-name text-quaternary text-6xl text-weight-bold pb-10 text-center sm:text-left"
              >{{v.englishName }}</div>
              <p
                class="text-white text-xs pb-2 leading-5"
                v-for="(vv, kk) in v.description"
                :key="kk"
              >{{ vv }}</p>
            </div>
            <div
              class="col-5 col-xs-12 col-md-5"
              :class=" k % 2 === 0 ? 'team-avatar-p' : 'team-avatar-p-r'"
            >
              <q-responsive :ratio="611/643">
                <q-img class="team-avatar" :src="v.avatarUrl"></q-img>
              </q-responsive>
            </div>
          </div>
          <div class="row items-start lt-md">
            <div class="col-6 pt-4">
              <div
                class="team-english-name text-quaternary text-5xl text-weight-bold"
                v-for="(vv, kk) in v.mobileEnglishName"
                :key="kk"
              >{{ vv}}</div>
            </div>
            <div class="col-6 team-avatar-p-r">
              <q-responsive :ratio="611/643">
                <q-img class="team-avatar" :src="v.avatarUrl"></q-img>
              </q-responsive>
            </div>

            <div class="col-7 col-xs-12 col-md-7 pt-4">
              <p
                class="text-white text-xs pb-4 leading-5 zoom-md text-weight-thin"
                v-for="(vv, kk) in v.description"
                :key="kk"
              >{{ vv }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <contact></contact>
  </div>
</template>

<script lang="ts">
import PartHeader from '../components/PartHeader.vue';
import Contact from '../components/Contact.vue';
import { ref, onBeforeUpdate, onMounted, computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

const cultureData = ref([
  {
    title: '愿景',
    description: '培养新一代高素质“国际中国人”',
  },
  {
    title: '使命',
    description: '让世界名校高不可攀',
  },

  {
    title: '价值',
    description: '诚信 学习 尽责 创新 团结',
  },
]);

const cultureImg = ref([
  {
    backgroundImage: 'culture/1.jpg',
  },

  {
    backgroundImage: 'culture/3.jpg',
  },
  {
    backgroundImage: 'culture/2.jpg',
  },
]);

const historyMobile = ref([
  {
    title: ['SAT1400+能上什么样的大学？GPA3.8能被顶级名校录取吗？'],
    content: [
      '学术背景和社会实践要达到怎样的标准才能够算出众…',
      '这些问题一直以来困扰着无数心怀一颗留学梦想的中国学生们。',
      '通过很多传统留学中介机构和大学官网的途径，',
      '学生们能够了解到所谓的上什么大学是什么样的一个“标准”。',
      '通常学生们以及留学机构会将这样的“标准”作为申请学校时最关键的逻辑基础。',
      '然而，没有一种“标准”是决定性的因素，',
      '学生的SAT成绩，学校成绩、语言成绩、写作、',
      '社会实践、学术背景、学校背景等都是录取时要考虑的。',
      '这么多的考量因素最终往往会导致传统留学机构无法摸清目标学校的录取偏好、',
      '考核侧重点以及最新招生政策等，',
      '最终导致学生和学校的错配，使学生无法去到自己最理想的学校，',
      '高分低录往往就是在这种情况下所造成的一个后果。',
      '那么是否可以实现低分高录，即便学生的众多“标准”不够出彩，',
      '尤其是成绩方面不够优秀，也可以实现名校梦？',
      '然而，进入名校后又担心自己的各科成绩跟不上，语言方面不适应该怎么办？',
    ],
  },
  {
    title: [
      '鹿名国际教育能够解决以上的种种问题，',
      '帮助学生们实现自己的名校梦、留学梦，并为学生们留学后的校园',
      '学习生活中提供系统性的学术辅导和陪伴。',
    ],
    content: [
      '鹿名国际教育成立于2013年美国波士顿，',
      '其使命致力于让中国留学生的名校梦不再高不可攀。',
      '不论学生是怎样的背景和成绩，鹿名国际都可以通过',
      '其两条成熟和独特的留学申请产品线（世界名校直通车和名校教授培养计划）',
      '将学生保送到最顶尖的名校，',
      '并在留学后的校园生活中为学生提供系统性的学术辅导服务（学业管家）。',
      '鹿名国际凭借着多年以来独有的世界顶尖大学教授、',
      '招生官、学校管理层以及名校学长学姐资源，为学生的申请路上保驾护航。',
      '2016年至2018年，鹿名国际迅速扩张，',
      '名校保录业务不断扩展到了欧洲、澳大利亚、加拿大、新加坡和香港等地。',
      '自2014年以来鹿名国际已帮助学员斩获600+世界顶尖院校录取。',
      '随着口碑逐渐扩大，企业家子女，众多精品教育机构等选择与我们合作，',
      '但由于一直秉承小而精的运营方式和高质量服务理念，鹿名国际业务在年年增长的趋势下，',
      '每年限制最多50名本科生和80名研究生的世界名校申请名额。',
      '目前鹿名国际学员已遍布包括哈佛、耶鲁、',
      '牛津、剑桥、斯坦福、沃顿、康奈尔、及哥伦比亚等世界知名大学。',
      '对于大多数学生，我们将申请到世界顶尖名校的概率从10%提升到约90%，',
      '这也进一步证明了鹿名国际留学申请业务的保证性。',
      '在确保服务结果的同时，我们也始终以98%的用户满意度为学员服务。',
    ],
  },
]);

const history = ref([
  {
    title: ['SAT1400+能上什么样的大学？GPA3.8能被顶级名校录取吗？'],
    content: [
      '学术背景和社会实践要达到怎样的标准才能够算出众… 这些问题一直以来困扰着无数心怀一颗留学梦想的中国学生们。',
      '通过很多传统留学中介机构和大学官网的途径，学生们能够了解到所谓的上什么大学是什么样的一个“标准”。',
      '通常学生们以及留学机构会将这样的“标准”作为申请学校时最关键的逻辑基础。',
      '然而，没有一种“标准”是决定性的因素，学生的SAT成绩，学校成绩、语言成绩、写作、社会实践、学术背景、学校背景等都是录取时要考虑的。',
      '这么多的考量因素最终往往会导致传统留学机构无法摸清目标学校的录取偏好、考核侧重点以及最新招生政策等，',
      '最终导致学生和学校的错配，使学生无法去到自己最理想的学校，高分低录往往就是在这种情况下所造成的一个后果。',
      '那么是否可以实现低分高录，即便学生的众多“标准”不够出彩，尤其是成绩方面不够优秀，也可以实现名校梦？',
      '然而，进入名校后又担心自己的各科成绩跟不上，语言方面不适应该怎么办？',
    ],
  },
  {
    title: [
      '鹿名国际教育能够解决以上的种种问题，',
      '帮助学生们实现自己的名校梦、留学梦，并为学生们留学后的校园学习生活中提供系统性的学术辅导和陪伴。',
    ],
    content: [
      '鹿名国际教育成立于2013年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。',
      '不论学生是怎样的背景和成绩，鹿名国际都可以通过其两条成熟和独特的留学申请产品线（世界名校直通车和名校教授培养计划）将学生保送到最顶尖的名校，',
      '并在留学后的校园生活中为学生提供系统性的学术辅导服务（学业管家）。',
      '鹿名国际凭借着多年以来独有的世界顶尖大学教授、招生官、学校管理层以及名校学长学姐资源，为学生的申请路上保驾护航。',
    ],
  },
  {
    title: [],
    content: [
      '2016年至2018年，鹿名国际迅速扩张，名校保录业务不断扩展到了欧洲、澳大利亚、加拿大、新加坡和香港等地。',
      '自2014年以来鹿名国际已帮助学员斩获600+世界顶尖院校录取。',
      '随着口碑逐渐扩大，企业家子女，众多精品教育机构等选择与我们合作，',
      '但由于一直秉承小而精的运营方式和高质量服务理念，鹿名国际业务在年年增长的趋势下，',
      '每年限制最多50名本科生和80名研究生的世界名校申请名额。',
      '目前鹿名国际学员已遍布包括哈佛、耶鲁、牛津、剑桥、斯坦福、沃顿、康奈尔、及哥伦比亚等世界知名大学。',
      '对于大多数学生，我们将申请到世界顶尖名校的概率从10%提升到约90%，这也进一步证明了鹿名国际留学申请业务的保证性。',
      '在确保服务结果的同时，我们也始终以98%的用户满意度为学员服务。',
    ],
  },
]);

const teamData = ref([
  {
    englishName: 'Patrick Shui',
    mobileEnglishName: ['Patrick', 'Shui'],
    ChineseName: '中文名字',
    description: [
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点。让学生在压力极大的申请过程中不断提高自己能力和自我认知，从而帮助学生成功通过人生的第一道重大关卡。',
      '作为鹿名国际教育的合伙人， Patrick老师结合亲身经历和专业知识致力于帮助一个又一个学生实现他们的梦想。 Patrick老师曾经作为留学生和创业者在美国学习和生活了8年，熟知美国教育体制、文化习俗、社会环境等。并且获得了美国独立教育咨询顾问联盟（IECA）和国家咨询顾问联盟（NACAC）双料认证。他把在美国学习和生活的经验融入到教育咨询中，结合认证教育咨询师的专业技能帮助学生找到最适合他们的申请规划方案。Patrick老师作为“大满贯”导师帮助学生录取包括：哈佛大学、MIT、耶鲁大学、哥伦比亚大学、康奈尔大学、剑桥大学、牛津大学等世界顶尖学府。',
    ],
    avatarUrl: 'team1.jpeg',
  },
  {
    englishName: 'Andy Xue',
    mobileEnglishName: ['Andy', 'Xue'],
    ChineseName: '中文名字',
    description: [
      'Andy老师坚信留学申请过程不是困惑的或者令人沮丧的。事实上，如果用聪明的方法，这个过程将是学生拥有的一个绝佳的机会，去帮助他们提高自我认知和自信。',
      'Andy老师毕业于新加坡国立大学工程学院，并获得美国哥伦比亚大学研究生学位。作为工程与商科复合背景专才，Andy老师曾在世界银行，联合国等国际组织总部任职，并曾在新加坡，香港等地从事投资银行和商业咨询工作。Andy老师擅长以职业发展角度全面分析学员的发展需求，结合多年行业深耕，在学校甄选，专业选择，职业规划，为客户提供专业方案。',
    ],
    avatarUrl: 'team2.jpeg',
  },
  {
    englishName: 'Alex Gu',
    mobileEnglishName: ['Alex', 'Gu'],
    ChineseName: '中文名字',
    description: [
      'Alex老师认为一次真正成功的留学申请是对自己重新发现、认识、认知的旅程。和老师一起重温自己的学术历程，挖掘每一段难忘的课外经历，发现自己内心深处的渴望，追寻自己一直以来的梦想。每一次陪伴学生走入dream school的旅程都是一段为人师者的记忆。',
      'Alex老师毕业于美国南加州大学USC, 金融工程硕士，并获得美国俄亥俄州立大学金融学和数学学士。Alex老师也曾参加过国内高考并在985名校武汉大学，深知国内外高校的优劣势和特点。Alex老师曾在美国留学工作10年，作为留学行业以及金融、投资行业复合型专家，Alex老师曾在美国旧金山、纽约、上海等的多家世界顶级金融机构从事投资银行和股权投资工作，并曾在多家教育留学机构担任合伙人，熟知欧美留学生的升学需求和发展需求，擅长商科、工科等专业的申请，近10年来成功帮助百余名拿到美国Top50的顶级本科和研究生offer。Alex老师擅长根据学生未来发展规划和职场目标制定个性化申请方案',
    ],
    avatarUrl: 'team3.jpeg',
  },
  {
    englishName: 'Danny Chueng',
    mobileEnglishName: ['Danny', 'Chueng'],
    ChineseName: '汉语名字/音译名字',
    description: [
      'Danny老师善于从西方人的视角去发现和诠释东方学生的优点与优势，真正站在以白人为核心的西方招生官的角度，精准挖掘学生潜力，精确定位背景提升项目等一系列为成功入校做努力的方式，达到院校、申请学院及留学机构三方都满意的最佳结果。',
      'Danny老师出生于加拿大，在香港及深圳国际国小就读后在美国完成了国中及高中。英文中文双母语的他成功的完成了加州伯克利的计算机与工商管理双学士以及哥伦比亚大学金融工程硕士。并在英国大英皇进修一年作曲及在南加大进修一年电影。在谷歌曾就职一年AI人工智能算法架构师后，就职于纽约高盛量化交易部及投资银行部个两年。Danny老师多元化的职业历程和多专业的学习背景，奠定了Danny老师能够指导各个专业的学子追逐留学道路上的梦想。',
    ],
    avatarUrl: 'team4.jpeg',
  },
]);

export default defineComponent({
  name: 'About',
  components: {
    PartHeader,
    Contact,
  },
  setup() {
    const $q = useQuasar();
    const router = useRoute();
    const itemRefs = ref([]);
    const isMobile = computed(() => {
      return <boolean>$q.platform.is.mobile;
    });
    onBeforeUpdate(() => {
      itemRefs.value = [];
    });
    onMounted(() => {
      const id = router.query.id;
      if (typeof id !== 'undefined') {
        let index = Number(id);
        const currentRef = <InstanceType<typeof HTMLElement>>(
          itemRefs.value[index]
        );
        currentRef.scrollIntoView({ behavior: 'smooth' });
      }
    });

    return {
      isMobile,
      itemRefs,
      cultureData,
      history: isMobile.value ? historyMobile : history,
      cultureImg,
      teamData,
    };
  },
});
</script>

<style lang="scss">
@import '../css/about.scss';
</style>
