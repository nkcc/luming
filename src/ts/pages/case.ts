/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ref } from 'vue';

const caseType = ref([
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
  caseType,
};
