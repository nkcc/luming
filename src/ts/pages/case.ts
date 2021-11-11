import {
    computed,
    reactive,
    ref,
    Ref
} from 'vue';
import {
    CaseData,
    PlanData
} from 'src/components/models';
import {
    ElCarousel
} from 'element-plus'
import {
    useQuasar
} from 'quasar';

const bornCaseData = reactive(<CaseData[]>[{
    imgLink: 'incubation-case-1.png',
    name: '宾夕法尼亚大学',
    rank: 'U.S. News 全美商学院第一名',
    caseName: 'incubation|0',
    student: '孟同学',
    info: [{
        label: 'GPA',
        value: '3.9/4.0'
    },
    {
        label: 'SAT',
        value: '1520'
    },
    {
        label: '高中',
        value: '美高'
    },
    {
        label: '优势',
        value: '学习成绩优异，有明确的职业规划，学习态度积极'
    },
    {
        label: '劣势',
        value: '个人独特亮点不明晰，缺乏名师指导与顶尖教育资源'
    }
    ],
    caseStudy: [
        '孟同学在11年级之前的暑假找到我们，当时他的学习成绩不错，属于次优等生，但距离申请美国前15名的顶尖大学还是有一定距离的。但是可喜的是，孟同学在初期沟通的过程中明确表示自己的学习积极性很高，渴望在申请大学的过程中不断学习新的知识，提高自己的能力，同时也渴望有“引路人”，可以帮助他确保进入美国前15名的大学。所以根据孟同学的需求，顾问老师给孟同学推荐了独家的“孵育计划”。孟同学在了解到孵育计划详细情况后，很高兴的接受了。',

        '“星辰计划”初期我们首先要了解学生的兴趣爱好，特长，以及未来理想的事业目标，从而来制定整个培养计划。简单来说孟学生比较喜欢策略型游戏，对商业很感兴趣，父母也都是商人，尤其是数学能力比较突出。',

        '因此，在了解孟同学的具体情况的后，“孵育计划”的在职教授团队制定了详细的培养方案，全覆盖式辅导孟同学，综合提升学生的背景竞争力的同时兼顾学术成绩的提高。',
        '在六位权威教授的努力下，通过多个项目全方未提升学生的综合竞争力，包括康奈尔大学暑期课程，拿全A，并获得其教授推荐信；参加高含金量的商科竞赛以及数学竞赛并获奖；参加并成功完成哈佛大学经济金融学科研项目；并且参加了谷歌暑期实习项目等；',
        '孵育计划让孟同学从一开始的腼腆，变成一个谈笑风生，无比自信的人。加强了背景竞争力的同时，学术水平也有了长足进步。更重要的是，孟同学在教授的代领下找到了自己的兴趣所在，确定了自己未来想从事的事业，有了每天能为之努力的明确目标。孟同学也在老师合理的规划下，和六位权威教授共同度过了一年的美好时光，最终获得理想成绩，进入了最理想的院校。'
    ]
},
{
    imgLink: 'incubation-case-1.png',
    name: '宾夕法尼亚大学',
    rank: 'U.S. News 全美商学院第一名',
    caseName: 'incubation|1',
    student: '孟同学',
    info: [{
        label: 'GPA',
        value: '3.9/4.0'
    },
    {
        label: 'SAT',
        value: '1520'
    },
    {
        label: '高中',
        value: '美高'
    },
    {
        label: '优势',
        value: '学习成绩优异，有明确的职业规划，学习态度积极'
    },
    {
        label: '劣势',
        value: '个人独特亮点不明晰，缺乏名师指导与顶尖教育资源'
    }
    ],
    caseStudy: [
        '孟同学在11年级之前的暑假找到我们，当时他的学习成绩不错，属于次优等生，但距离申请美国前15名的顶尖大学还是有一定距离的。但是可喜的是，孟同学在初期沟通的过程中明确表示自己的学习积极性很高，渴望在申请大学的过程中不断学习新的知识，提高自己的能力，同时也渴望有“引路人”，可以帮助他确保进入美国前15名的大学。所以根据孟同学的需求，顾问老师给孟同学推荐了独家的“孵育计划”。孟同学在了解到孵育计划详细情况后，很高兴的接受了。',

        '“星辰计划”初期我们首先要了解学生的兴趣爱好，特长，以及未来理想的事业目标，从而来制定整个培养计划。简单来说孟学生比较喜欢策略型游戏，对商业很感兴趣，父母也都是商人，尤其是数学能力比较突出。',

        '因此，在了解孟同学的具体情况的后，“孵育计划”的在职教授团队制定了详细的培养方案，全覆盖式辅导孟同学，综合提升学生的背景竞争力的同时兼顾学术成绩的提高。',
        '在六位权威教授的努力下，通过多个项目全方未提升学生的综合竞争力，包括康奈尔大学暑期课程，拿全A，并获得其教授推荐信；参加高含金量的商科竞赛以及数学竞赛并获奖；参加并成功完成哈佛大学经济金融学科研项目；并且参加了谷歌暑期实习项目等；',
        '孵育计划让孟同学从一开始的腼腆，变成一个谈笑风生，无比自信的人。加强了背景竞争力的同时，学术水平也有了长足进步。更重要的是，孟同学在教授的代领下找到了自己的兴趣所在，确定了自己未来想从事的事业，有了每天能为之努力的明确目标。孟同学也在老师合理的规划下，和六位权威教授共同度过了一年的美好时光，最终获得理想成绩，进入了最理想的院校。'
    ]
},
{
    imgLink: 'incubation-case-1.png',
    name: '宾夕法尼亚大学',
    rank: 'U.S. News 全美商学院第一名',
    caseName: 'incubation|2',
    student: '孟同学',
    info: [{
        label: 'GPA',
        value: '3.9/4.0'
    },
    {
        label: 'SAT',
        value: '1520'
    },
    {
        label: '高中',
        value: '美高'
    },
    {
        label: '优势',
        value: '学习成绩优异，有明确的职业规划，学习态度积极'
    },
    {
        label: '劣势',
        value: '个人独特亮点不明晰，缺乏名师指导与顶尖教育资源'
    }
    ],
    caseStudy: [
        '孟同学在11年级之前的暑假找到我们，当时他的学习成绩不错，属于次优等生，但距离申请美国前15名的顶尖大学还是有一定距离的。但是可喜的是，孟同学在初期沟通的过程中明确表示自己的学习积极性很高，渴望在申请大学的过程中不断学习新的知识，提高自己的能力，同时也渴望有“引路人”，可以帮助他确保进入美国前15名的大学。所以根据孟同学的需求，顾问老师给孟同学推荐了独家的“孵育计划”。孟同学在了解到孵育计划详细情况后，很高兴的接受了。',

        '“星辰计划”初期我们首先要了解学生的兴趣爱好，特长，以及未来理想的事业目标，从而来制定整个培养计划。简单来说孟学生比较喜欢策略型游戏，对商业很感兴趣，父母也都是商人，尤其是数学能力比较突出。',

        '因此，在了解孟同学的具体情况的后，“孵育计划”的在职教授团队制定了详细的培养方案，全覆盖式辅导孟同学，综合提升学生的背景竞争力的同时兼顾学术成绩的提高。',
        '在六位权威教授的努力下，通过多个项目全方未提升学生的综合竞争力，包括康奈尔大学暑期课程，拿全A，并获得其教授推荐信；参加高含金量的商科竞赛以及数学竞赛并获奖；参加并成功完成哈佛大学经济金融学科研项目；并且参加了谷歌暑期实习项目等；',
        '孵育计划让孟同学从一开始的腼腆，变成一个谈笑风生，无比自信的人。加强了背景竞争力的同时，学术水平也有了长足进步。更重要的是，孟同学在教授的代领下找到了自己的兴趣所在，确定了自己未来想从事的事业，有了每天能为之努力的明确目标。孟同学也在老师合理的规划下，和六位权威教授共同度过了一年的美好时光，最终获得理想成绩，进入了最理想的院校。'
    ]
},
]);

const cloudCaseData = reactive(<CaseData[]>[
    {
        imgLink: 'case1.jpg',
        name: '康奈尔大学',
        rank: 'U.S. News 全美排名第17',
        caseName: 'laddercase|0',
        student: '陆同学',
        info: [{
            label: '优势',
            value: 'IB课程体系，GPA达标'
        },
        {
            label: '劣势',
            value: '综合实力不够理想，没有SAT成绩，活动背景较为薄弱'
        }
        ],
        caseStudy: [
            '陆同学和其父亲在2020年12月底找到我们，当时她ED申请布朗大学被拒，父女俩很是焦虑，害怕从小到大的藤校梦破碎。我们首先安抚了学生情绪，然后了解了学生的背景情况，得知陆同学是一个成绩相对来说比较优秀的学生，托福考到了110并IB成绩有38分，但没有SAT考试成绩。如果正常申请的话，申请至美国30-50名的大学，问题倒不是很大。',

            '但陆同学从小就有藤校情结，坚持只选择美国常春藤大学。于是我们给陆同学推荐了鹿名国际的“青云计划”，精准录取康奈尔大学，而且只用申请这一所学校。获知此方案后，陆同学的父亲陆总对如此“完美”的方案不敢相信，前前后后沟通了不下10次，最终要求我们必须接受“公平对赌条款”（对赌一定数量金额，不录取赔付客户，录取则客户多支付其金额）才与我们签约。我们对自己方案有100%的信心，于是便答应下来。',

            '可怜天下父母心，签约之后，爱女心切的陆总频繁的与我们沟通，询问申请进度，我们一一耐心解答。官方下录取offer的时间是2021年4月7号，而我们在三月份已获知陆同学被康奈尔录取的消息。在北京时间4月7号早上7点，不出所料陆同学被康奈尔大学官方通知录取。陆总感叹：“一路走过，选择没有错，感谢我们陪伴和支持”。和同学们结伴同行在海南旅游的陆同学，也与同学们一起分享了这胜利的喜悦。我们也为圆满的结果感到欣慰。预祝陆同学在新的旅程绽放精彩人生！'
        ]
    },
    {
        imgLink: 'cloud-case-2.jpg',
        name: '哥伦比亚大学-商学院',
        rank: 'U.S. News 全美排名第3',
        student: '马同学',
        caseName: 'cloud|0',
        info: [{
            label: '优势',
            value: '美国本科学历，专业匹配度高'
        },
        {
            label: '劣势',
            value: 'GPA低，无GRE/GMAT成绩，学术背景、科研与工作经历较为薄弱'
        }
        ],
        caseStudy: [
            '马同学，在20年申请季的时候找到我们，本科在地处曼哈顿佩斯大学的她，很喜欢纽约这座城市，并且对纽约最好的大学-哥伦比亚大学钟情许久。所以她的目标很明确，非哥伦比亚大学莫属。所以我们推荐了鹿名“青云计划”中，哥伦比亚大学商学院单所精准录取项目。',
            '哥伦比亚大学的商学院被称为世界上最难申请的学院之一，不仅录取的学生各项成绩都接近于满分，其他科研、工作经历等背景也必须是个中翘楚。但马同学3.3的本科GPA申请哥伦比亚大学的商学院显然不够看了。马同学自己也担心自己成绩不够。为了打消马同学的疑虑，我们派遣美国纽约办事处的同事与马同学见面，详细为了讲解我们如果结合商学院院长资源为其提高申请成功率，并且当面给学生观摩之前的实际成功案例。最终马同学放下疑虑，选择与我们签约。',
            '在签约后，马同学申请的过程中对我们百分百信任，并且积极配合，在鹿名强大申请团队和顶尖教育资源的共同努力下，最终帮助马同学斩获哥伦比亚大学的商学院Marketing Science专业offer。最终我们实现了对她的承诺，帮助她圆梦名校！',
        ]
    },
    {
        imgLink: 'ladder-case-1.jpg',
        name: '香港大学',
        rank: 'QS世界排名第22',
        caseName: 'laddercase|0',
        student: '龚同学',
        info: [{
            label: 'GPA',
            value: '2.6/4.0'
        },
        {
            label: 'GRE',
            value: 'Waived'
        },
        {
            label: '本科',
            value: '国本'
        }
        ],
        caseStudy: [
            '龚同学本科毕业于美国排名100名以外的学校，大三大四的时由于患有抑郁症导致全科成绩滑铁卢，毕业的时候只有GPA2.6，对名校已经放弃追求的他，通过亲戚介绍重燃希望找到我们。在了解了鹿名“天梯计划”后，龚同学研究生想选择在离中国比较近的地区就读，于是我们推荐了香港大学的低门槛保录取给他。拿到offer时龚同学喜出望外，印象深刻的是曾患有抑郁症且性格腼腆的龚同学，竟然给了负责其申请的顾问老师一个大大的拥抱。希望他在香港大学里能摆脱内心的阴霾，走上灿烂的人生道路。',
        ]
    },
    {
        imgLink: 'ladder-case-2.png',
        name: '伦敦政治经济学院',
        rank: 'QS世界排名第22',
        student: '常同学',
        caseName: 'laddercase|1',
        info: [{
            label: 'GPA',
            value: '2.8/4.0'
        },
        {
            label: 'GRE',
            value: 'Waived'
        }
        ],
        caseStudy: [
            '常同学是来自国内一所普通大学的学生，由于对自己未来可能的出路都并不满意所以找到了我们。本来目标是英国G5，但是由于当时伦敦政经正好有一个名额，最后常同学选择了伦敦政治经济学院。收到录取通知书后常同学在兴奋之余由于怕进了学校不能跟上课程，是十分紧张的，担心自己不能毕业。于是，我们给常同学推荐了保毕业项目“学业管家”服务。根据学生上的专业课程给其配备多名辅导老师，在硕士期间可以无限次数答疑和无限课时上课。有了“学业管家”服务后常同学放心了很多。相信他日后的学习上是不会有问题的。',
        ]
    },
    {
        imgLink: 'ladder-case-3.jpg',
        name: '芝加哥大学',
        rank: 'U.S. News 全美排名第6',
        student: '张同学',
        caseName: 'laddercase|2',
        info: [{
            label: 'GPA',
            value: '2.7/4.0'
        },
        {
            label: 'GRE',
            value: 'Waived'
        },
        {
            label: '本科',
            value: '英本'
        }
        ],
        caseStudy: [
            '张同学本科在全英排名五十多的一所大学，由老客户推荐找到我们的时候由于本科成绩较低，不具备GRE分数，本来已经不抱希望了，已经准备好回国工作了。在详细了解鹿名“天梯计划”后，决定与我们签约。印象特别深的是收到录取通知书的时候他的那句“这可能是我遇到过的最幸运的事了吧”，但其实就像我们一直说的那样，在我们这里，成功从来不是因为幸运，而是因为你找到了我们，所以必然如此。',
        ]
    }
]);

const planData = ref(<PlanData[]>[{
    title: '世界名校直通车',
    type: 'laddercase',
    data: cloudCaseData
},
{
    title: '名校教授培养计划',
    type: 'born',
    data: bornCaseData
}
]);


const currentType = ref('laddercase');
const indicatorLeft = ref('0rem');
const carouselClass = ref('left:-18.2%;');
const isLastCarousel = ref(false);
const carouselType = ref('card');
const carouselHeight = ref('29rem');

const caseData = computed((): CaseData[] => {
    let currentData = planData.value.find((element) => {
        return element.type === currentType.value;
    });

    if (currentData === undefined) {
        currentData = <PlanData>planData.value[0];
    }

    return currentData.data;
});

const centerIndex = computed(() => {
    return Math.floor(((caseData.value.length) / 2))
})

const currentCaseIndex = ref(Math.floor(((caseData.value.length) / 2)));

const currentCase = computed((): CaseData => {
    return caseData.value[currentCaseIndex.value];
});

export default function (props: {
    id?: string
}) {
    console.log(props);
    const carousel: Ref<InstanceType<typeof ElCarousel> | null> = ref(null)
    const $q = useQuasar()
    const offset = $q.platform.is.mobile ? 4.25 : 9.25
    indicatorLeft.value = `${centerIndex.value * offset}rem`
    if ($q.platform.is.mobile) {
        carouselType.value = ''
        carouselHeight.value = '20rem'
    }

    return {
        carouselClass,
        isLastCarousel,
        currentType,
        centerIndex,
        planData,
        indicatorLeft,
        carousel,
        caseData,
        currentCase,
        currentCaseIndex,
        carouselType,
        carouselHeight,
        carouselChange (index: number) {
            indicatorLeft.value = `${index * offset}rem`

            currentCaseIndex.value = index;
            isLastCarousel.value = index === caseData.value.length - 1;
        },
        changePlanType (index: number) {
            currentType.value = planData.value[index].type;

            indicatorLeft.value = `${centerIndex.value * offset}rem`
            console.log(indicatorLeft.value)

            currentCaseIndex.value = centerIndex.value
            carousel.value?.setActiveItem(centerIndex.value);
        }
    };
};
