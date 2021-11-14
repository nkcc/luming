import { CarouselData, OfferData } from 'components/models';
import { ref, computed, onBeforeUpdate } from 'vue';
import { QScrollArea } from 'quasar';
import Contact from 'components/Contact.vue';
import Indicator from 'components/Indicator.vue';

const servicesData = ref([
  {
    title: '世界名校直通车',
    img: 'index/1.jpg',
    description: ['短时间内帮助学生低分高录', '实现最高学府的留学梦'],
    visible: false,
    link: 'famous-school-car',
  },
  {
    title: '名校教授培养计划',
    img: 'index/2.jpg',
    description: [
      '通过名校教授亲带学生完成',
      '科研和学术课题来提高背景和个人录取实力',
    ],
    visible: false,
    link: 'incubation',
  },
  {
    title: '学业管家',
    img: 'index/3.jpg',
    description: ['全托学业辅导确保顺利毕业'],
    visible: false,
    link: 'academic',
  },
]);

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
    description:
      '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩，鹿名国际都可以通过其三条成熟和独特的留学申请产品线（青云计划、天梯计划、孵育计划）将学生保送到最顶尖的名校，并在留学后的校园生活中为学生提供系统性的学术辅导服务（学业管家）。',
    visible: false,
    link: 'about',
  },
  {
    imgLink: 'bg.jpg',
    description:
      '鹿名国际凭借着多年以来独有的世界顶尖大学教授、招生官、学校管理层以及名校学长学姐资源，为学生的申请路上保驾护航。2016年至2018年，鹿名国际迅速扩张，名校保录业务不断扩展到了欧洲、澳大利亚、加拿大、新加坡和香港等地。',
    visible: false,
    link: 'about',
  },
  {
    imgLink: 'index/12.jpeg',
    description:
      '自2014年以来鹿名国际已帮助学员斩获600+世界顶尖院校录取。随着口碑逐渐扩大，企业家子女，众多精品教育机构等选择与我们合作，但由于一直秉承小而精的运营方式和高质量服务理念，鹿名国际业务在年年增长的趋势下，每年限制最多50名本科生和80名研究生的世界名校申请名额。',
    visible: false,
    link: 'about',
  },
  {
    imgLink: 'index/13.jpeg',
    description:
      '目前鹿名国际学员已遍布包括哈佛、耶鲁、牛津、剑桥、斯坦福、沃顿、康奈尔、及哥伦比亚等世界知名大学。对于大多数学生，我们将申请到世界顶尖名校的概率从10%提升到约90%，这也进一步证明了鹿名国际留学申请业务的保证性。在确保服务结果的同时，我们也始终以98%的用户满意度为学员服务。',
    visible: false,
    link: 'about',
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
        link: 'https://www.harvard.edu/',
      },
      {
        title: '普林斯顿大学',
        description:
          '普林斯顿大学（Princeton University），简称“普林斯顿”，创建于1746年 ，位于美国东海岸新泽西州的普林斯顿市，是美国大学协会的14个始创院校之一，也是著名的常春藤联盟成员，是世界顶尖私立研究型大学， 常年位居U.S. News美国最佳大学排名第1位。',
        imgLink: 'school-logo/248px-Princeton_shield.png',
        link: 'https://www.princeton.edu/',
      },
      {
        title: '麻省理工学院',
        description:
          '麻省理工学院在2021年QS世界大学排名中位列全球第一。截至2020年10月，麻省理工学院的校友、教授及研究人员涵盖97位诺贝尔奖得主、8名菲尔兹奖获奖者、26位图灵奖得主，以及52位国家科学奖章获奖者、45位罗德学者、38名麦克阿瑟奖得主。该校同时具很强的创业文化，由其校友所创办的公司利润总值相当于全球第十一大经济体（截至2014年）。',
        imgLink: 'school-logo/200px-MIT_Seal.svg.png',
        link: 'https://www.mit.edu/',
      },
      {
        title: '约翰霍普金斯大学',
        description:
          '约翰斯·霍普金斯大学采用德国古老的海德堡大学研究所的概念，被认为是美国第一所研究型大学，是美洲大学协会的12个创始会员之一。它的成功引发了美国其它大学向研究型大学转型。美国国家科学基金会连续31年将该校列为全美科研经费开支最高的大学',
        imgLink:
          'https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university_logo_small_vertical_blue.png',
        link: 'https://www.jhu.edu/',
      },
      {
        title: '宾夕法尼亚大学',
        description:
          '宾夕法尼亚大学（英语：University of Pennsylvania），简称宾大（UPenn）是一所位于美国宾夕法尼亚州费城的世界著名私立研究型大学，美洲大学协会的12所创始校之一，与哈佛，耶鲁等七所美国顶尖大学同属蜚声全球的常春藤盟校成员。大学宣称创建于1740年，是美国第四古老的高等教育机构，也是美国第一所从事科学技术和人文教育的现代高等学校。美国《独立宣言》的9位签字者和《美国宪法》的11位签字者和该校有关。该校的创建者是美利坚合众国著名开国元勋之一的本杰明·富兰克林。',
        imgLink: 'school-logo/250px-UPenn_shield_with_banner.svg.png',
        link: 'https://www.upenn.edu/',
      },
    ],
  },
  {
    title: '',
    name: 'England',
    list: [
      {
        title: '剑桥大学',
        description:
          '剑桥大学（University of Cambridge；勋衔：Cantab），是一所世界顶尖的公立研究型大学，采用书院联邦制，坐落于英国剑桥。 其与牛津大学并称为牛剑，是罗素大学集团成员，被誉为“金三角名校”和“G5超级精英大学”。',
        imgLink:
          'http://www.aichinaw.com/file/upload/202006/04/15360328244.png',
        link: 'https://www.cam.ac.uk/',
      },
      {
        title: '牛津大学',
        description:
          '牛津大学（英语：University of Oxford；非正式：Oxford University，或：Oxford；勋衔简称：Oxon[注 1]）位于英格兰东南区域牛津郡牛津市。是一所世界闻名的公立研究型书院联邦制大学。它是英语世界历史最悠久的大学，也是世上现存第二古老持续办学的高等教育机构。',
        imgLink:
          'http://ivy-study.com/upload/image/20201229/b7b534bc4ec0b779b15d8b36b5eed15e.png',
        link: 'https://www.ox.ac.uk/cn',
      },
      {
        title: '帝国理工学院',
        description:
          '伦敦帝国学院，全名为帝国理工医学院，是一所位于英国伦敦的研究型大学，伦敦帝国学院在QS世界大学排名、泰晤士高等教育世界大学排名、世界大学学术排名和U.S. News世界大学排名中长年来经常位居全球前20、英国前五。',
        imgLink:
          'https://www.17liuxue.com/file/upload/201511/17/16-40-24-94-156.jpg',
        link: 'https://www.imperial.ac.uk/',
      },
      {
        title: '伦敦大学学院',
        description:
          '伦敦大学学院为英国最难入读和最顶尖的学府之一。该校在QS世界大学排名、泰晤士高等教育世界大学排名、世界大学学术排名和U.S. News世界大学排名中位居全球前二十名、英国前五名。',
        imgLink:
          'https://cose.sufe.edu.cn/_upload/article/images/1e/5f/773398044acb99dc2875475b7328/a82b3218-918d-4476-b2e1-445667195db0.jpg',
        link: 'https://www.ucl.ac.uk/',
      },
      {
        title: '伦敦政治经济学院',
        description:
          '伦敦政经学院一直以来与牛津大学、剑桥大学、伦敦帝国学院、伦敦大学学院并称为G5超级精英大学，也是英国的金三角名校。至2016年为止，伦敦政治经济学院的校友、教员及前教员之中包括了20名诺贝尔奖得奖者、55名各国政坛领袖、31名英国下议院议员及42名上议院议员',
        imgLink: 'https://www.safchina.cn/sites/default/files/2021-04/lse.jpeg',
        link: 'https://www.lse.ac.uk/',
      },
    ],
  },
  {
    title: 'Open',
    name: 'Australia',
    list: [
      {
        title: '澳大利亚国立大学',
        description:
          '澳洲国立大学，于1946年创立，是一所位于澳洲首都特区坎培拉的研究型国立大学。它同时也是国际研究型大学联盟（IARU）、澳洲八大名校（Go8）、大学天文研究协会（AURA）以及环太平洋大学联盟（APRU）的盟校之一。此校是澳大利亚由澳洲国会立法创建的大学，也是澳洲唯一国立的公立大学（其它澳洲公立大学均为州立）。',
        imgLink: 'school-logo/Anu.png',
        link: 'https://www.anu.edu.au',
      },
      {
        title: '悉尼大学',
        description:
          '悉尼大学，简称悉大、USYD，是位于澳大利亚悉尼的公立研究型大学。学校创立于1850年，是澳大利亚历史最悠久的大学，为南半球首屈一指的学术殿堂和世界著名的高等学府。悉尼大学目前名列2022年QS世界大学排名第38名、2021年泰晤士高等教育世界大学排名第51名、2021年US News世界大学排名第27名。其中悉尼大学商学院在《经济学人》亚太二十五大商学院排名第15名，同时也是获得商学院三重认证的全球顶尖商学院。根据2020年QS毕业生就业力排名，悉尼大学紧随麻省理工学院、史丹佛大学和加州大学洛杉矶分校之后，高居世界第四位。',
        imgLink: 'https://p1.ssl.qhimg.com/t0120f813b6841a2d36.jpg',
        link: 'http://www.usyd.edu.au/',
      },
      {
        title: '墨尔本大学',
        description:
          '墨尔本大学 位于澳洲维多利亚州墨尔本，建校于1853年，为澳洲历史第二悠久的大学、维多利亚州最古老的大学。墨尔本大学是澳洲六所砂岩学府之一，八大名校的盟校成员，也是Universitas 21、环太平洋大学联盟和亚太国际贸易教育暨研究联盟的成员大学。',
        imgLink: 'school-logo/moerben.jpg',
        link: 'https://www.unimelb.edu.au/',
      },
      {
        title: '新南威尔士大学',
        description:
          '新南威尔士大学（英语：University of New South Wales；又称UNSW Sydney；简称UNSW），是澳大利亚的一所公立研究型大学，其主校区位于新南威尔士州首府悉尼。新南威尔士大学成立于1949年，为世界级研究学府之一。新南威尔士大学是澳大利亚八大名校成员，同时也是三个国际著名的研究型大学联盟组织环太平洋大学联盟（APRU）、全球科技大学联盟和Universitas 21（U21）的成员大学之一。',
        imgLink: 'school-logo/UNSW_coat_of_arms.svg.png',
        link: 'https://www.unsw.edu.au/',
      },
      {
        title: '昆士兰大学',
        description:
          '昆士兰大学（英语：The University of Queensland；简称UQ），1909年12月10日成立于昆士兰州首府布里斯班，为昆士兰的第一所大学，乃澳大利亞最古老、规模最大的学府之一。昆士兰大学是澳大利亞六所砂岩学府之一，澳大利亞八大名校的盟校成员，是Universitas 21联盟的一员，也是edX的会员。',
        imgLink: 'school-logo/University_of_Queensland_Logo.svg.png',
        link: 'https://www.uq.edu.au/',
      },
    ],
  },
  {
    title: 'Open',
    name: 'Singapore',
    list: [
      {
        title: '新加坡国立大学',
        description:
          '新加坡国立大学，简称国大，是新加坡的第一所高等学府，也是亚洲乃至世界的顶尖学府，其前身是一所成立于1905年的海峡殖民地医学学校。发展至今，新加坡国大已是一所共有16个学院的综合型研究大学。2021年，新加坡国大在泰晤士高等教育世界大学排名为世界第25名，QS世界大学排名为世界第11名，世界大学学术排名为世界第80名，美国新闻与世界报导为世界第32名。',
        imgLink: 'school-logo/155px-NUS_coat_of_arms.png',
        link: 'https://www.nus.edu.sg/',
      },
      {
        title: '南洋理工大学',
        description:
          '南洋理工大学，简称南大，是新加坡首屈一指的世界顶级综合类研究型大学。其校址前身是成立于1955年的南洋大学校址。南洋理工大学在2022年QS世界大学排行榜上名列全球第12位。',
        imgLink: 'school-logo/1920px-Nanyang_Technological_University.png',
        link: 'https://www.ntu.edu.sg/index',
      },
      {
        title: '新加坡管理大学',
        description:
          '新加坡管理大学（Singapore Management University），简称新大 （SMU），是新加坡政府于2000年设立的第三所研究密集型公立大学，是亚洲乃至世界顶级的财经类院校和计算机信息技术强校。',
        imgLink: 'school-logo/SIN_SMU_LOGO.jpg',
        link: 'https://www.smu.edu.sg/',
      },
    ],
  },

  {
    title: 'hongkong',
    name: 'hongkong',
    list: [
      {
        title: '香港大学',
        description:
          '香港大学（英语：The University of Hong Kong，缩写：HKU），简称港大，是香港的一所公立研究型大学，大学本部位于香港岛中西区龙虎山。香港大学成立于1911年，并于1912年3月11日正式办学，是香港最早建立的高等教育机构。成立之初，更是大英帝国在东亚成立的唯一一间大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
        imgLink: 'school-logo/200px-HKU_Coat_of_Arms.png',
        link: 'https://hku.hk/',
      },
      {
        title: '香港中文大学',
        description:
          '香港中文大学（英语：The Chinese University of Hong Kong，缩写：CUHK），简称中文大学、中大，是一所香港公立大学，也是香港第一所研究型大学，于1963年合并崇基学院、新亚书院及联合书院而成立。其中的组成书院最早源于1845年在清朝中叶成立的基督教会大学，为香港历史源流最久远的高等学院。香港中文大学现已发展成为辖九大书院的书院制大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
        imgLink: 'school-logo/cuhk.jpeg',
        link: 'https://cuhk.edu.hk/',
      },
      {
        title: '香港科技大学',
        description:
          '香港科技大学（英语：The Hong Kong University of Science and Technology，缩写：HKUST），简称科大，是香港的一所公立研究型大学，位于香港新界西贡区清水湾半岛，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
        imgLink: 'school-logo/HKUST.png',
        link: 'https://hkust.edu.hk/',
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
    type: 'England',
  },
  {
    title: '澳洲八大',
    type: 'Australia',
  },
  {
    title: '新加坡名校',
    type: 'Singapore',
  },
  {
    title: '香港名校',
    type: 'hongkong',
  },
]);

const caseData = ref([
  {
    imgLink: 'case1.jpg',
    link: {
      path: 'case',
      query: {
        id: 0,
      },
    },
    name: '康奈尔大学',
    rank: 'U.S. News 全美排名第17',
    student: '陆同学',
    info: [
      {
        label: '优势',
        value: 'IB课程体系，GPA达标',
      },
      {
        label: '劣势',
        value: '综合实力不够理想，没有SAT成绩，活动背景较为薄弱',
      },
    ],
  },
  {
    imgLink: 'case2.jpg',
    name: '哥伦比亚大学-商学院',
    rank: 'U.S. News 全美排名第3',
    link: {
      path: 'case',
      query: {
        id: 1,
      },
    },
    student: '马同学',
    info: [
      {
        label: '优势',
        value: '美国本科学历，专业匹配度高',
      },
      {
        label: '劣势',
        value: 'GPA低，无GRE/GMAT成绩，学术背景、科研与工作经历较为薄弱',
      },
    ],
  },
  {
    imgLink: 'case3.jpg',
    name: '香港大学',
    rank: 'QS世界排名第22',
    student: '周同学',
    link: {
      path: 'case',
      query: {
        id: 2,
      },
    },
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
    name: 'Patrick Shui',
    imgLink: 'team1.png',
    link: {
      path: 'about',
      query: {
        id: 0,
      },
    },
    description:
      'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点。让学生在压力极大的申请过程中不断提高自己能力和自我认知，从而帮助学生成功通过人生的第一道重大关卡。',
    visible: false,
  },
  {
    name: 'Andy Xue',
    imgLink: 'team2.png',
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
    imgLink: 'team3.png',
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
    imgLink: 'team1.png',
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
    imgLink: 'prof1.jpg',
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
    imgLink: 'prof3.jpg',
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
    imgLink: 'prof4.jpg',
    link: '/incubation/3',
    description:
      'Scott Meadow是私股权行业的主要投资者,理查德J.戴利奖的获得者。自2000年以来担任芝加哥大学布斯色学院的创业临床教授。2002年-2005年荣获菲尼克斯奖，2010年教师优秀奖。他被《商业周刊》的“最佳商学院指南”指定为该国杰出的企业家教授之一。为8000名学生教授创业融资和私募股权、商业化创新(他创建的)、新的风脸挑战，并担任风险投资竞争的教员顾问。是四家风险投资和私募股权公司合伙人，批准了数百项股权融资，亲自领导、发起或创建了60多项投资，被 Venture One 认可为业内杰出的医疗投资者之一。',
  },
]);

const slide = ref('carousel0');
const slideOffer = ref('america');
const slideActive = ref(
  'background:#cc932e;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
);
const slideDefault = ref(
  'background:#26322b;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
);
const currentOfferSchool = ref(0);
const offerIndicatorLeft = ref('0rem');
const currentPosition = ref(0);
const currentOfferSchoolTypeIndex = ref(0);

const setup = function () {
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
  return {
    itemRefs,
    currentPosition,
    servicesData,
    carouselData,
    cultureData,
    offerData,
    caseData,
    teamData,
    professorData,
    slide,
    slideOffer,
    slideActive,
    slideDefault,
    offerType,
    currentOfferSchool,
    currentOfferSchoolTypeIndex,
    offerIndicatorLeft,
    currentOffer: computed((): OfferData => {
      return <OfferData>offerData.value.find((offer) => {
        return offer.name === slideOffer.value;
      });
    }),
    getCurrentOfferSchool(index: number) {
      const currentOfferSchoolLength =
        offerData.value[currentOfferSchoolTypeIndex.value].list.length;

      offerIndicatorLeft.value = `${(index * 100) / currentOfferSchoolLength}%`;
      currentOfferSchool.value = index;
    },
    currentScrollAreaRef,
    showIndicator(index: number) {
      const currentOfferSchoolLength =
        offerData.value[currentOfferSchoolTypeIndex.value].list.length;
      offerIndicatorLeft.value = `${(index * 100) / currentOfferSchoolLength}%`;
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

    changeSlideOfferType(type: string, index: number) {
      slideOffer.value = type;
      offerIndicatorLeft.value = '0';
      currentOfferSchool.value = 0;
      currentPosition.value = 0;
      currentOfferSchoolTypeIndex.value = index;
    },
    cultureAnimation(k: number, length: number) {
      return k > length / 2 - 1
        ? 'animated animate__fadeInUp'
        : 'animated animate__fadeInUp';
    },

    getClassType(k: number, firstClass: string, secondClass: string) {
      return k % 2 == 0 ? firstClass : secondClass;
    },
    onCultureIntersection(entry: {
      target: {
        dataset: {
          id: string;
        };
      };
      isIntersecting: boolean;
    }) {
      const index = parseInt(entry.target.dataset.id, 10);

      const delayMap = [0, 1, 2, 3];

      setTimeout(() => {
        cultureData.value[index].visible = entry.isIntersecting;
      }, 100 * delayMap[index]);
    },
    onServiceIntersection(entry: {
      target: {
        dataset: {
          id: string;
        };
      };
      isIntersecting: boolean;
    }) {
      const index = parseInt(entry.target.dataset.id, 10);

      setTimeout(() => {
        servicesData.value[index].visible = entry.isIntersecting;
      }, 100 * index);
    },
    onTeamIntersection(entry: {
      target: {
        dataset: {
          id: string;
        };
      };
      isIntersecting: boolean;
    }) {
      const index = parseInt(entry.target.dataset.id, 10);

      const delayMap = [2, 1, 1, 2];

      setTimeout(() => {
        teamData.value[index].visible = entry.isIntersecting;
      }, 100 * delayMap[index]);
    },
    scrollFullScreen() {
      const height = window.innerHeight - 20;
      window.scrollTo({
        top: height,
        behavior: 'smooth',
      });
    },
    visibilityChanged() {
      console.log(123);
    },
    scrollLeft() {
      currentPosition.value -=
        2 / offerData.value[currentOfferSchoolTypeIndex.value].list.length;
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
        2 / offerData.value[currentOfferSchoolTypeIndex.value].list.length;
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
};

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    Contact,
    Indicator,
  },
  setup,
  methods: {},
});
