/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ref } from 'vue';

const planType = ref([
  {
    title: '天梯计划',
    type: 'america',
  },
  {
    title: '青云计划',
    type: 'name1',
  },
  {
    title: '孵育计划',
    type: 'Australia',
  },
]);

const caseData = ref([
  {
    imgLink: 'case1.jpg',
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
    caseStudy: [
      '陆同学和其父亲在2020年12月底找到我们，当时她ED申请布朗大学被拒，父女俩很是焦虑，害怕从小到大的藤校梦破碎。我们首先安抚了学生情绪，然后了解了学生的背景情况，得知陆同学是一个成绩相对来说比较优秀的学生，托福考到了110并IB成绩有38分，但没有SAT考试成绩。如果正常申请的话，申请至美国30-50名的大学，问题倒不是很大。',

      '但陆同学从小就有藤校情结，坚持只选择美国常春藤大学。于是我们给陆同学推荐了鹿名国际的“青云计划”，精准录取康奈尔大学，而且只用申请这一所学校。获知此方案后，陆同学的父亲陆总对如此“完美”的方案不敢相信，前前后后沟通了不下10次，最终要求我们必须接受“公平对赌条款”（对赌一定数量金额，不录取赔付客户，录取则客户多支付其金额）才与我们签约。我们对自己方案有100%的信心，于是便答应下来。',

      '可怜天下父母心，签约之后，爱女心切的陆总频繁的与我们沟通，询问申请进度，我们一一耐心解答。官方下录取offer的时间是2021年4月7号，而我们在三月份已获知陆同学被康奈尔录取的消息。在北京时间4月7号早上7点，不出所料陆同学被康奈尔大学官方通知录取。陆总感叹：“一路走过，选择没有错，感谢我们陪伴和支持”。和同学们结伴同行在海南旅游的陆同学，也与同学们一起分享了这胜利的喜悦。我们也为圆满的结果感到欣慰。预祝陆同学在新的旅程绽放精彩人生！',
    ],
  },
  {
    imgLink: 'case2.jpg',
    name: '哥伦比亚大学-商学院',
    rank: 'U.S. News 全美排名第3',
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


export default {
  caseData,
  slide: ref('carousel0'),
  slideOffer: ref('america'),
  slideActive: ref(
    'background:#cc932e;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
  ),
  slideDefault: ref(
    'background:#26322b;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
  ),
  planType,
};
