/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CarouselData,
  OfferData
} from '../../components/models';
import {
  ref
} from 'vue';

const carouselData = ref < CarouselData[] > ([{
    name: '',
    title: '为什么选择鹿名',
    subTitle: '来自海外',
    description: '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: require('../../assets/oxford.jpeg'),
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '来自海外',
    description: '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: require('../../assets/lb.jpg'),
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '来自海外',
    description: '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: require('../../assets/harvard_school.jpg'),
  },
  {
    name: '',
    title: '为什么选择鹿名',
    subTitle: '来自海外',
    description: '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
    imgLink: require('../../assets/bg.jpg'),
  },
]);
const cultureData = ref([{
    imgLink: require('../../assets/oxford.jpeg'),
    description: '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
  },
  {
    imgLink: require('../../assets/bg.jpg'),
    description: '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
  },
  {
    imgLink: require('../../assets/oxford.jpeg'),
    description: '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
  },
  {
    imgLink: require('../../assets/oxford.jpeg'),
    description: '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
  },
]);

const offerData = ref < OfferData[] > ([{
    title: 'Open',
    name: '',
    list: [{
        title: '哈佛大学',
        description: '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
        imgLink: require('../../assets/school-logo/320px-New_York_University_Seal.png'),
      },
      {
        title: '约翰霍普金斯大学',
        description: '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
        imgLink: require('../../assets/school-logo/john.png'),
      },
      {
        title: '宾夕法尼亚大学',
        description: '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../../assets/harvard_school.jpg'),
      },
    ],
  },
  {
    title: 'Open',
    name: '',
    list: [{
        title: '香港大学',
        description: '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
        imgLink: require('../../assets/school-logo/HKUST.png'),
      },
      {
        title: '约翰霍普金斯大学',
        description: '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
        imgLink: require('../../assets/lb.jpg'),
      },
      {
        title: '宾夕法尼亚大学',
        description: '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../../assets/harvard_school.jpg'),
      },
    ],
  },
  {
    title: 'Open',
    name: '',
    list: [{
        title: '哈佛大学',
        description: '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
        imgLink: require('../../assets/oxford.jpeg'),
      },
      {
        title: '约翰霍普金斯大学',
        description: '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
        imgLink: require('../../assets/lb.jpg'),
      },
      {
        title: '宾夕法尼亚大学',
        description: '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../../assets/harvard_school.jpg'),
      },
    ],
  },
  {
    title: 'Open',
    name: '',
    list: [{
        title: '哈佛大学',
        description: '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
        imgLink: require('../../assets/oxford.jpeg'),
      },
      {
        title: '约翰霍普金斯大学',
        description: '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
        imgLink: require('../../assets/lb.jpg'),
      },
      {
        title: '宾夕法尼亚大学',
        description: '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../../assets/harvard_school.jpg'),
      },
    ],
  },
]);

const caseData = ref([{
    imgLink: require('../../assets/oxford.jpeg'),
    name: '香港大学',
    rank: 'QS世界排名第22',
    student: '周同学',
    info: [{
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
    imgLink: require('../../assets/oxford.jpeg'),
    name: '香港大学',
    rank: 'QS世界排名第22',
    info: [{
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

const teamData = ref([{
    name: 'Andy Xue',
    imgLink: require('../../assets/oxford.jpeg'),
    description: 'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
  {
    name: 'Andy Xue',
    imgLink: require('../../assets/oxford.jpeg'),
    description: 'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
  {
    name: 'Andy Xue',
    imgLink: require('../../assets/oxford.jpeg'),
    description: 'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
  {
    name: 'Andy Xue',
    imgLink: require('../../assets/oxford.jpeg'),
    description: 'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  }
])

const professorData = ref([{
    name: 'Dennis H Chookaszian教授',
    title: [
      'CNA保险公司前董事长兼CEO',
      '美国53家上市公司董事',
      '前美国国家审计署执行委员会主席',
    ],
    imgLink: require('../../assets/teacher-1.jpg'),
    description: '丹尼斯·乔卡西安是CNA保险公司的前任事长兼首席执行官。从1992年到1999年担任CNA的主席和首席执行官。1999年至2001年任国家审计署执行委员会主席。1990年至1992年，乔卡西安担任CNA总裁兼首席运营官，负责所有财产和伤亡、生命、健康和投资运营。于1975年加入CNA，担任首席财务官，直到1990年被任……',
  },
  {
    name: '李贝贝 讲席副教授',
    title: [
      '美国卡内基梅隆大学助理教授',
      '美国纽约大学信息系统与管理学博士',
      '美国经济、市场营销与信息科学顶级会议演讲者',
    ],
    imgLink: require('../../assets/teacher-1.jpg'),
    description: '李贝贝教授现任卡内基梅隆大学(Caregie Mel-lonUniversity)约翰·海因茨管理学院、计算机学院与商学院Anna Loomis McCandless讲席教授，副教授与博士生导师。为纽约大学斯特恩商学院信息系统与管理学博士学位。专注于研究信息科技与个体行为、组织和社会的关系，并利 用大规模历史和实验数据进行相关决策……',
  }, {
    name: 'Dennis H Chookaszian教授',
    title: [
      'CNA保险公司前董事长兼CEO',
      '美国53家上市公司董事',
      '前美国国家审计署执行委员会主席',
    ],
    imgLink: require('../../assets/teacher-1.jpg'),
    description: 'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  }, {
    name: 'Dennis H Chookaszian教授',
    title: [
      'CNA保险公司前董事长兼CEO',
      '美国53家上市公司董事',
      '前美国国家审计署执行委员会主席',
    ],
    imgLink: require('../../assets/teacher-1.jpg'),
    description: 'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
  },
])

export default {
  carouselData,
  cultureData,
  offerData,
  caseData,
  teamData,
  professorData,
  slide: ref('carousel0'),
  slideOffer: ref('offer0'),
  slideActive: ref(
    'background:#cc932e;width: 100px;border-radius: 0;padding:0;'
  ),
  slideDefault: ref(
    'background:#26322b;width: 100px;border-radius: 0;padding:0;'
  ),
  lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
};
