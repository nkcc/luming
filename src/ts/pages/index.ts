/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CarouselData, OfferData } from '../../components/models';
import { ref } from 'vue';

const servicesData = ref([
  {
    title: '青云计划',
    img: 'course-1.jpg',
    description: '单所申请世界名校精准直录',
  },
  {
    title: '天梯计划',
    img: 'course-2.jpg',
    description: '低门槛宝保录取全球顶尖院校',
  },
  {
    title: '孵育计划',
    img: 'course-3.jpg',
    description: '美国名校教授培育保藤规划',
  },
  {
    title: '学业管家',
    img: 'course-4.jpg',
    description: '全托学业辅导确保顺利毕业',
  },
]);

const carouselData = ref<CarouselData[]>([
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '来自海外',
    description:
      '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: '/oxford.jpeg',
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '实力强大',
    description:
      '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: '/lb.jpg',
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '保障结果',
    description:
      '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: '/harvard_school.jpg',
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '硕果累累',
    description:
      '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: '/bg.jpg',
  },
]);
const cultureData = ref([
  {
    imgLink: '/oxford.jpeg',
    description:
      '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
  },
  {
    imgLink: '/bg.jpg',
    description:
      '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
  },
  {
    imgLink: '/oxford.jpeg',
    description:
      '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
  },
  {
    imgLink: '/oxford.jpeg',
    description:
      '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
  },
]);

const offerData = ref<OfferData[]>([
  {
    title: '',
    name: 'america',
    list: [
      {
        title: '哈佛大学',
        description:
          '哈佛大学（英语：Harvard University）为一所本部坐落于美国马萨诸塞剑桥市的私立研究型大学。其因历史、学术影响力、财富等因素而获评为世上最享负盛名的学府之一。',
        imgLink: 'https://cdn.ischoolconnect.com/logo/1313.png',
      },
      {
        title: '约翰霍普金斯大学',
        description:
          '约翰斯·霍普金斯大学采用德国古老的海德堡大学研究所的概念，被认为是美国第一所研究型大学，是美洲大学协会的12个创始会员之一。它的成功引发了美国其它大学向研究型大学转型。美国国家科学基金会连续31年将该校列为全美科研经费开支最高的大学',
        imgLink: 'https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university_logo_small_vertical_blue.png',
      },
      {
        title: '宾夕法尼亚大学',
        description:
          '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: '/harvard_school.jpg',
      },
      {
        title: '普林斯顿大学',
        description: '普林斯顿大学（Princeton University），简称“普林斯顿”，创建于1746年 ，位于美国东海岸新泽西州的普林斯顿市，是美国大学协会的14个始创院校之一，也是著名的常春藤联盟成员，是世界顶尖私立研究型大学， 常年位居U.S. News美国最佳大学排名第1位。',
        imgLink: 'https://www.logoids.com/upload/image/202007/15948739852577878.jpg'
      }
    ],
  },
  {
    title: '',
    name: 'england',
    list: [
      {
        title: '剑桥大学',
        description:
          '剑桥大学（University of Cambridge；勋衔：Cantab），是一所世界顶尖的公立研究型大学，采用书院联邦制，坐落于英国剑桥。 其与牛津大学并称为牛剑，是罗素大学集团成员，被誉为“金三角名校”和“G5超级精英大学”。',
        imgLink: 'http://www.aichinaw.com/file/upload/202006/04/15360328244.png',
      },
      {
        title: '牛津大学',
        description:
          '牛津大学（英语：University of Oxford；非正式：Oxford University，或：Oxford；勋衔简称：Oxon[注 1]）位于英格兰东南区域牛津郡牛津市。是一所世界闻名的公立研究型书院联邦制大学。它是英语世界历史最悠久的大学，也是世上现存第二古老持续办学的高等教育机构。',
        imgLink: 'http://ivy-study.com/upload/image/20201229/b7b534bc4ec0b779b15d8b36b5eed15e.png',
      },
      {
        title: '帝国理工学院',
        description:
          '伦敦帝国学院，全名为帝国理工医学院，是一所位于英国伦敦的研究型大学，伦敦帝国学院在QS世界大学排名、泰晤士高等教育世界大学排名、世界大学学术排名和U.S. News世界大学排名中长年来经常位居全球前20、英国前五。',
        imgLink: 'https://www.17liuxue.com/file/upload/201511/17/16-40-24-94-156.jpg',
      },
      {
        title: '伦敦大学学院',
        description: '伦敦大学学院为英国最难入读和最顶尖的学府之一。该校在QS世界大学排名、泰晤士高等教育世界大学排名、世界大学学术排名和U.S. News世界大学排名中位居全球前二十名、英国前五名。',
        imgLink: 'https://cose.sufe.edu.cn/_upload/article/images/1e/5f/773398044acb99dc2875475b7328/a82b3218-918d-4476-b2e1-445667195db0.jpg'
      },
      {
        title: '伦敦政治经济学院',
        description: '伦敦政经学院一直以来与牛津大学、剑桥大学、伦敦帝国学院、伦敦大学学院并称为G5超级精英大学，也是英国的金三角名校。至2016年为止，伦敦政治经济学院的校友、教员及前教员之中包括了20名诺贝尔奖得奖者、55名各国政坛领袖、31名英国下议院议员及42名上议院议员',
        imgLink: 'https://www.safchina.cn/sites/default/files/2021-04/lse.jpeg'
      }
    ],
  },
  {
    title: 'Open',
    name: 'austrilia',
    list: [
      {
        title: '澳大利亚国立大学',
        description:
          '澳洲国立大学，于1946年创立，是一所位于澳洲首都特区坎培拉的研究型国立大学。它同时也是国际研究型大学联盟（IARU）、澳洲八大名校（Go8）、大学天文研究协会（AURA）以及环太平洋大学联盟（APRU）的盟校之一。此校是澳大利亚由澳洲国会立法创建的大学，也是澳洲唯一国立的公立大学（其它澳洲公立大学均为州立）。',
        imgLink: '/school-logo/Anu.png',
        link: 'https://www.anu.edu.au',
      },
      {
        title: '约翰霍普金斯大学',
        description:
          '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
        imgLink: '/lb.jpg',
      },
      {
        title: '宾夕法尼亚大学',
        description:
          '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: '/harvard_school.jpg',
      },
    ],
  },
  {
    title: 'Open',
    name: 'singapore',
    list: [
      {
        title: '哈佛大学',
        description:
          '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
        imgLink: '/oxford.jpeg',
      },
      {
        title: '约翰霍普金斯大学',
        description:
          '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
        imgLink: '/lb.jpg',
      },
      {
        title: '宾夕法尼亚大学',
        description:
          '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: '/harvard_school.jpg',
      },
    ],
  },
  
  {
    title: 'Open',
    name: 'hongkong',
    list: [
      {
        title: '哈佛大学',
        description:
          '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
        imgLink: '/oxford.jpeg',
      },
      {
        title: '约翰霍普金斯大学',
        description:
          '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
        imgLink: '/lb.jpg',
      },
      {
        title: '宾夕法尼亚大学',
        description:
          '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: '/harvard_school.jpg',
      },
    ],
  },
]);

const offerType = ref([
    {
        title: '美国藤校',
        type: 'america',
    },
    {
        title: '英国前五',
        type: 'england',
    },
    {
        title: '澳洲八大',
        type: 'austrilia',
    },
    {
        title: '新加坡名校',
        type: 'singapore',
    },
    {
        title: '香港名校',
        type: 'hongkong',
    }
])

const caseData = ref([
  {
    imgLink: '/oxford.jpeg',
    name: '香港大学',
    rank: 'QS世界排名第22',
    student: '周同学',
    info: [
      {
        label: 'GPA',
        value: '2.6/4.0',
      },
      {
        label: 'GRE',
        value: 'Waived',
      },
      {
        label: '本科',
        value: '美本',
      },
    ],
  },
  {
    imgLink: '/oxford.jpeg',
    name: '香港大学',
    rank: 'QS世界排名第22',
    info: [
      {
        label: 'GPA',
        value: '2.6/4.0',
      },
      {
        label: 'GRE',
        value: 'Waived',
      },
      {
        label: '本科',
        value: '美本',
      },
    ],
  },
]);

const teamData = ref([
  {
    name: 'Andy Xue',
    imgLink: '/oxford.jpeg',
    description:
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
  {
    name: 'Andy Xue',
    imgLink: '/oxford.jpeg',
    description:
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
  {
    name: 'Andy Xue',
    imgLink: '/oxford.jpeg',
    description:
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
  {
    name: 'Andy Xue',
    imgLink: '/oxford.jpeg',
    description:
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
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
    imgLink: '/teacher-1.jpg',
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
    imgLink: '/teacher-1.jpg',
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
    imgLink: '/teacher-1.jpg',
    description:
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
  {
    name: 'Dennis H Chookaszian教授',
    title: [
      'CNA保险公司前董事长兼CEO',
      '美国53家上市公司董事',
      '前美国国家审计署执行委员会主席',
    ],
    imgLink: '/teacher-1.jpg',
    description:
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
]);

export default {
  servicesData,
  carouselData,
  cultureData,
  offerData,
  caseData,
  teamData,
  professorData,
  slide: ref('carousel0'),
  slideOffer: ref('america'),
  slideActive: ref(
    'background:#cc932e;width: 100px;border-radius: 0;padding:0;'
  ),
  slideDefault: ref(
    'background:#26322b;width: 100px;border-radius: 0;padding:0;'
  ),
  offerType,
  form: ref({
    name: '',
    phone: '',
    wecaht: '',
  }),
};
