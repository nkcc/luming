<template>
<div class='lm-study-abroad lm-light-dark-background'>
    <section class="transparent">
        <div>
            <div class='lg:container lg:mx-auto'>
                <part-header name='世界名校直通车'></part-header>
                <div class="lm-container row justify-center pb-20">
                    <div class="col-9">
                        <div class='text-quaternary text-weight-bolder text-center text-4xl mb-4'>{{programTitle}}</div>
                        <div class='text-quaternary text-weight-bolder text-center text-4xl'>{{programDescription}}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="transparent mb-10">
        <div class='lm-points row items-center lg:container lg:mx-auto'>
            <div class='points-container '>
                <q-carousel v-model='slide' transition-prev='scale' transition-next='scale' swipeable animated control-color='secondary' navigation padding arrows class='lm-points-background' keep-alive :keep-alive-include="'carousel0, carousel1, carousel2, carousel3'">
                    <template v-slot:navigation-icon="{ active, onClick }">
                        <q-btn v-if="active" size="2px" flat dense @click="onClick" :style="slideActive" />
                        <q-btn v-else size="2px" flat dense :style="slideDefault" @click="onClick" />
                    </template>
                    <template v-for='(v, k) in carouselData' :key='k'>
                        <q-carousel-slide :name="'carousel' + k" class='column no-wrap'>
                            <div class='row justify-center items-center mb-10'>
                                <div class='col-xs-12 col-sm-12 col-md-5 left q-py-xs-lg q-py-xs-lg'>
                                    <h3 class='text-white text-weight-bold text-3xl'>{{ v.title }}</h3>
                                    <div class='mt-2'>
                                        <h2 class='text-quaternary text-weight-bolder text-5xl pb-10'>
                                            {{ v.subTitle }}
                                        </h2>
                                        <p class='text-white text-sm pr-24 text-weight-thin leading-7 tracking-wide'>
                                            {{ v.description }}
                                        </p>
                                    </div>
                                    <div class='footer'>
                                    </div>
                                </div>
                                <div class='col-xs-12 col-sm-12 col-md-4 right q-py-xs-lg q-py-sm-lg'>
                                    <q-responsive :ratio='692 / 511'>
                                        <q-img class='points-img' :src='v.imgLink'></q-img>
                                    </q-responsive>
                                </div>
                            </div>
                        </q-carousel-slide>
                    </template>
                </q-carousel>
            </div>
        </div>
    </section>
    <section class="transparent mb-20">
        <div class='lg:container lg:mx-auto'>
            <div class="lm-container row justify-center pb-20">
                <div class="col-9">
                    <description-with-img :info="suitableStudents"></description-with-img>
                </div>
            </div>
        </div>
    </section>
    <section class="transparent">
        <div class='lg:container lg:mx-auto'>
            <div class="lm-container row justify-center pb-20">
                <div class="col-12">
                    <div class="header">
                        <div class="incubation-title text-quaternary text-center text-weight-bolder">{{offers.title}}</div>
                        <div class="subtitle text-quaternary text-center text-text-weight-bolder">{{offers.subTitle}}</div>
                    </div>
                    <div class="content">
                        <section class='lm-offers transparent row items-center lg:container lg:mx-auto'>
                            <div class='offer-container'>
                                <q-carousel v-model='slideOffer' control-color='white' navigation padding arrows animated transition-prev='fade' transition-next='fade' class='lm-points-background transparent'>
                                    >
                                    <template v-slot:navigation-icon=''>
                                    </template>

                                    <template v-for='(v, k) in offers.list' :key='k'>
                                        <q-carousel-slide :name='v.name' class='column no-wrap flex-center'>
                                            <q-scroll-area class='lm-scroll' :bar-style="{ background: 'white' }">
                                                <ul class='
                                                offer-list
                                                row
                                                fit
                                                justify-start
                                                items-center
                                                q-gutter-xs q-col-gutter
                                                no-wrap
                                                '>
                                                    <li class='offer-item' v-for='(sv, sk) in v.list' :key='sk' @mouseenter='getCurrentOfferSchool(sk)'>
                                                        <q-responsive class="school-logo">
                                                          <div class="flex items-center justify-center">
                                                            <q-img class="img" :src="sv.imgLink" fit="contain"></q-img>
                                                          </div>
                                                        </q-responsive>
                                                        <div class='school-desc'>
                                                            <div class='title text-quaternary text-weight-bolder text-xl'>{{ sv.title }}</div>
                                                            <div class='subtitle text-white text-weight-bold text-lg'>{{ sv.subTitle }}</div>
                                                            <q-scroll-area class='description ellipsis-3-lines text-weight-thin text-xs leading-5' :bar-style="{ background: 'white' }">
                                                                <span class="scale-50 transform">
                                                                    {{ sv.description }}
                                                                </span>

                                                            </q-scroll-area>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </q-scroll-area>
                                        </q-carousel-slide>
                                    </template>
                                </q-carousel>
                                <indicator :data='currentOffer.list' :left='offerIndicatorLeft'></indicator>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="transparent mb-20">
        <div class='lg:container lg:mx-auto'>
            <div class="lm-container row justify-center pb-20">
                <div class="col-12">
                    <description-with-img :info="serviceProgress" title="服务流程" background="service-progress.png" top="6" :imgStyle="{height: '33rem'}">
                    </description-with-img>
                </div>
            </div>
        </div>
    </section>
    <section class="transparent mb-20">
        <div class='lg:container lg:mx-auto'>
            <div class="lm-container row justify-center pb-20">
                <div class="col-12">
                    <div class="text-quaternary text-center text-weight-bolder text-5xl">产品亮点</div>
                    <div class="highlight mt-10">
                        <div class="row lm-highlight justify-center">
                            <div :class="['col-4 item flex justify-center']" v-for="(v, k) in highlight" :key="k">
                                <div :class="[k === highlight.length - 1 ? 'w-5/6' : 'w-2/4', k > 2 ? '' : '']">
                                    <div class="title text-quaternary text-weight-bolder text-8xl text-center">
                                        {{v.title}}
                                    </div>
                                    <div class="description py-2 ">
                                        <p class="text-center text-white text-xs text-weight-thin leading-5" v-for="(vv, kk) in v.list" :key="kk">{{vv}}</p>
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
        <div class='lg:container lg:mx-auto'>
            <div class="text-center text-quaternary text-weight-bolder text-5xl mb-10">案例解读</div>
        </div>
        <case-carousel></case-carousel>
    </section>
    <contact></contact>
</div>
</template>

<script lang="ts">
import {
    ref,
    computed
} from 'vue'
import PartHeader from '../components/PartHeader.vue'
import DescriptionWithImg from '../components/DescriptionWithImg.vue'
import Contact from '../components/Contact.vue'
import Indicator from 'components/Indicator.vue';
import CaseCarousel from 'components/carousel/CaseCarousel.vue'
import {
    CarouselData,
    OfferData
} from 'components/models';
import {
    useQuasar
} from 'quasar';

export default {
    name: 'LadderProgram',
    components: {
        PartHeader,
        DescriptionWithImg,
        Indicator,
        Contact,
        CaseCarousel
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
        const highlight = [{
                title: '资源',
                list: ['真实、优质、独家的',
                    '名校申请资源，',
                    '确保申请全流程的顺利进行',
                    '和最终的名校录取结果',
                ]
            },
            {
                title: '录取',
                list: ['99%极高录取率', ]
            },
            {
                title: '未来',
                list: ['名校就如同成功人生的一块敲门砖，',
                    '只有进了名校',
                    '再加上学生之后的不断努力，',
                    '梦想才会实现，学生入学后',
                    '我们还会提供可选择的留学后服务，',
                    '包括学业管家，实习介绍等',
                ]
            }, {
                title: '院校',
                list: ['我们致力于',
                    '和学生一起精挑细选出',
                    '最适合他自己',
                    '特点和理想的世界级名校',
                ]
            }, {
                title: '师资',
                list: [
                    '资深和专业的名校教授、前招生官、学长学姐、',
                    '咨询顾问、论文老师，使学生在获得',
                    '理想的录取通知书的同时，发现自己的长处，提高学习能力，',
                    '提前深入了解留学生活',
                ]
            }
        ];
        const serviceProgress = [
            '前期咨询沟通 打造名校留学申请方案',
            '精准定位学校和专业（不会出现只确定学校，专业随机分配的情况）',
            '利用社会和学校双重资源准备优质推荐信',
            '打造完美简历和文书，进行更全面的背景塑造',
            '与招生办相关人员进行提前沟通（本科申请）；与目标学院教授进行提前沟通（研究生申请）',
            '锁定录取名额，完善后续相关申请工作，确定录取资格',
            '拿到录取通知书',
        ];
        const professorData = ref([{
                name: 'Dennis H Chookaszian教授',
                title: [
                    'CNA保险公司前董事长兼CEO',
                    '美国53家上市公司董事',
                    '前美国国家审计署执行委员会主席',
                ],
                imgLink: 'teacher-1.jpg',
                description: '丹尼斯·乔卡西安是CNA保险公司的前任事长兼首席执行官。从1992年到1999年担任CNA的主席和首席执行官。1999年至2001年任国家审计署执行委员会主席。1990年至1992年，乔卡西安担任CNA总裁兼首席运营官，负责所有财产和伤亡、生命、健康和投资运营。于1975年加入CNA，担任首席财务官，直到1990年被任……',
            },
            {
                name: '李贝贝 讲席副教授',
                title: [
                    '美国卡内基梅隆大学助理教授',
                    '美国纽约大学信息系统与管理学博士',
                    '美国经济、市场营销与信息科学顶级会议演讲者',
                ],
                imgLink: 'teacher-1.jpg',
                description: '李贝贝教授现任卡内基梅隆大学(Caregie Mel-lonUniversity)约翰·海因茨管理学院、计算机学院与商学院Anna Loomis McCandless讲席教授，副教授与博士生导师。为纽约大学斯特恩商学院信息系统与管理学博士学位。专注于研究信息科技与个体行为、组织和社会的关系，并利 用大规模历史和实验数据进行相关决策……',
            },
            {
                name: 'Dennis H Chookaszian教授',
                title: [
                    'CNA保险公司前董事长兼CEO',
                    '美国53家上市公司董事',
                    '前美国国家审计署执行委员会主席',
                ],
                imgLink: 'teacher-1.jpg',
                description: 'Patrick老师坚信力量来源于知识，在申请服务过程不断激发学生的潜能，挖掘学生的亮点……',
            },
        ]);
        const offerData = ref < OfferData[] > ([{
                title: '',
                name: 'america',
                list: [{
                        title: '哈佛大学',
                        description: '哈佛大学（英语：Harvard University）为一所本部坐落于美国马萨诸塞剑桥市的私立研究型大学。其因历史、学术影响力、财富等因素而获评为世上最享负盛名的学府之一。',
                        imgLink: 'https://cdn.ischoolconnect.com/logo/1313.png',
                        link: 'https://www.harvard.edu/',
                    },
                    {
                        title: '普林斯顿大学',
                        description: '普林斯顿大学（Princeton University），简称“普林斯顿”，创建于1746年 ，位于美国东海岸新泽西州的普林斯顿市，是美国大学协会的14个始创院校之一，也是著名的常春藤联盟成员，是世界顶尖私立研究型大学， 常年位居U.S. News美国最佳大学排名第1位。',
                        imgLink: 'school-logo/248px-Princeton_shield.png',
                        link: 'https://www.princeton.edu/',
                    },
                    {
                        title: '麻省理工学院',
                        description: '麻省理工学院在2021年QS世界大学排名中位列全球第一。截至2020年10月，麻省理工学院的校友、教授及研究人员涵盖97位诺贝尔奖得主、8名菲尔兹奖获奖者、26位图灵奖得主，以及52位国家科学奖章获奖者、45位罗德学者、38名麦克阿瑟奖得主。该校同时具很强的创业文化，由其校友所创办的公司利润总值相当于全球第十一大经济体（截至2014年）。',
                        imgLink: 'school-logo/200px-MIT_Seal.svg.png',
                        link: 'https://www.mit.edu/',
                    },
                    {
                        title: '约翰霍普金斯大学',
                        description: '约翰斯·霍普金斯大学采用德国古老的海德堡大学研究所的概念，被认为是美国第一所研究型大学，是美洲大学协会的12个创始会员之一。它的成功引发了美国其它大学向研究型大学转型。美国国家科学基金会连续31年将该校列为全美科研经费开支最高的大学',
                        imgLink: 'https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university_logo_small_vertical_blue.png',
                        link: 'https://www.jhu.edu/',
                    },
                    {
                        title: '宾夕法尼亚大学',
                        description: '宾夕法尼亚大学（英语：University of Pennsylvania），简称宾大（UPenn）是一所位于美国宾夕法尼亚州费城的世界著名私立研究型大学，美洲大学协会的12所创始校之一，与哈佛，耶鲁等七所美国顶尖大学同属蜚声全球的常春藤盟校成员。大学宣称创建于1740年，是美国第四古老的高等教育机构，也是美国第一所从事科学技术和人文教育的现代高等学校。美国《独立宣言》的9位签字者和《美国宪法》的11位签字者和该校有关。该校的创建者是美利坚合众国著名开国元勋之一的本杰明·富兰克林。',
                        imgLink: 'school-logo/250px-UPenn_shield_with_banner.svg.png',
                        link: 'https://www.upenn.edu/',
                    },
                ],
            },
            {
                title: '',
                name: 'England',
                list: [{
                        title: '剑桥大学',
                        description: '剑桥大学（University of Cambridge；勋衔：Cantab），是一所世界顶尖的公立研究型大学，采用书院联邦制，坐落于英国剑桥。 其与牛津大学并称为牛剑，是罗素大学集团成员，被誉为“金三角名校”和“G5超级精英大学”。',
                        imgLink: 'http://www.aichinaw.com/file/upload/202006/04/15360328244.png',
                        link: 'https://www.cam.ac.uk/',
                    },
                    {
                        title: '牛津大学',
                        description: '牛津大学（英语：University of Oxford；非正式：Oxford University，或：Oxford；勋衔简称：Oxon[注 1]）位于英格兰东南区域牛津郡牛津市。是一所世界闻名的公立研究型书院联邦制大学。它是英语世界历史最悠久的大学，也是世上现存第二古老持续办学的高等教育机构。',
                        imgLink: 'http://ivy-study.com/upload/image/20201229/b7b534bc4ec0b779b15d8b36b5eed15e.png',
                        link: 'https://www.ox.ac.uk/cn',
                    },
                    {
                        title: '帝国理工学院',
                        description: '伦敦帝国学院，全名为帝国理工医学院，是一所位于英国伦敦的研究型大学，伦敦帝国学院在QS世界大学排名、泰晤士高等教育世界大学排名、世界大学学术排名和U.S. News世界大学排名中长年来经常位居全球前20、英国前五。',
                        imgLink: 'https://www.17liuxue.com/file/upload/201511/17/16-40-24-94-156.jpg',
                        link: 'https://www.imperial.ac.uk/',
                    },
                    {
                        title: '伦敦大学学院',
                        description: '伦敦大学学院为英国最难入读和最顶尖的学府之一。该校在QS世界大学排名、泰晤士高等教育世界大学排名、世界大学学术排名和U.S. News世界大学排名中位居全球前二十名、英国前五名。',
                        imgLink: 'https://cose.sufe.edu.cn/_upload/article/images/1e/5f/773398044acb99dc2875475b7328/a82b3218-918d-4476-b2e1-445667195db0.jpg',
                        link: 'https://www.ucl.ac.uk/',
                    },
                    {
                        title: '伦敦政治经济学院',
                        description: '伦敦政经学院一直以来与牛津大学、剑桥大学、伦敦帝国学院、伦敦大学学院并称为G5超级精英大学，也是英国的金三角名校。至2016年为止，伦敦政治经济学院的校友、教员及前教员之中包括了20名诺贝尔奖得奖者、55名各国政坛领袖、31名英国下议院议员及42名上议院议员',
                        imgLink: 'https://www.safchina.cn/sites/default/files/2021-04/lse.jpeg',
                        link: 'https://www.lse.ac.uk/',
                    },
                ],
            },
            {
                title: 'Open',
                name: 'Australia',
                list: [{
                        title: '澳大利亚国立大学',
                        description: '澳洲国立大学，于1946年创立，是一所位于澳洲首都特区坎培拉的研究型国立大学。它同时也是国际研究型大学联盟（IARU）、澳洲八大名校（Go8）、大学天文研究协会（AURA）以及环太平洋大学联盟（APRU）的盟校之一。此校是澳大利亚由澳洲国会立法创建的大学，也是澳洲唯一国立的公立大学（其它澳洲公立大学均为州立）。',
                        imgLink: 'school-logo/Anu.png',
                        link: 'https://www.anu.edu.au',
                    },
                    {
                        title: '悉尼大学',
                        description: '悉尼大学，简称悉大、USYD，是位于澳大利亚悉尼的公立研究型大学。学校创立于1850年，是澳大利亚历史最悠久的大学，为南半球首屈一指的学术殿堂和世界著名的高等学府。悉尼大学目前名列2022年QS世界大学排名第38名、2021年泰晤士高等教育世界大学排名第51名、2021年US News世界大学排名第27名。其中悉尼大学商学院在《经济学人》亚太二十五大商学院排名第15名，同时也是获得商学院三重认证的全球顶尖商学院。根据2020年QS毕业生就业力排名，悉尼大学紧随麻省理工学院、史丹佛大学和加州大学洛杉矶分校之后，高居世界第四位。',
                        imgLink: 'https://p1.ssl.qhimg.com/t0120f813b6841a2d36.jpg',
                        link: 'http://www.usyd.edu.au/',
                    },
                    {
                        title: '墨尔本大学',
                        description: '墨尔本大学 位于澳洲维多利亚州墨尔本，建校于1853年，为澳洲历史第二悠久的大学、维多利亚州最古老的大学。墨尔本大学是澳洲六所砂岩学府之一，八大名校的盟校成员，也是Universitas 21、环太平洋大学联盟和亚太国际贸易教育暨研究联盟的成员大学。',
                        imgLink: 'school-logo/moerben.jpg',
                        link: 'https://www.unimelb.edu.au/',
                    },
                    {
                        title: '新南威尔士大学',
                        description: '新南威尔士大学（英语：University of New South Wales；又称UNSW Sydney；简称UNSW），是澳大利亚的一所公立研究型大学，其主校区位于新南威尔士州首府悉尼。新南威尔士大学成立于1949年，为世界级研究学府之一。新南威尔士大学是澳大利亚八大名校成员，同时也是三个国际著名的研究型大学联盟组织环太平洋大学联盟（APRU）、全球科技大学联盟和Universitas 21（U21）的成员大学之一。',
                        imgLink: 'school-logo/UNSW_coat_of_arms.svg.png',
                        link: 'https://www.unsw.edu.au/',
                    },
                    {
                        title: '昆士兰大学',
                        description: '昆士兰大学（英语：The University of Queensland；简称UQ），1909年12月10日成立于昆士兰州首府布里斯班，为昆士兰的第一所大学，乃澳大利亞最古老、规模最大的学府之一。昆士兰大学是澳大利亞六所砂岩学府之一，澳大利亞八大名校的盟校成员，是Universitas 21联盟的一员，也是edX的会员。',
                        imgLink: 'school-logo/University_of_Queensland_Logo.svg.png',
                        link: 'https://www.uq.edu.au/',
                    },
                ],
            },
            {
                title: 'Open',
                name: 'Singapore',
                list: [{
                        title: '新加坡国立大学',
                        description: '新加坡国立大学，简称国大，是新加坡的第一所高等学府，也是亚洲乃至世界的顶尖学府，其前身是一所成立于1905年的海峡殖民地医学学校。发展至今，新加坡国大已是一所共有16个学院的综合型研究大学。2021年，新加坡国大在泰晤士高等教育世界大学排名为世界第25名，QS世界大学排名为世界第11名，世界大学学术排名为世界第80名，美国新闻与世界报导为世界第32名。',
                        imgLink: 'school-logo/155px-NUS_coat_of_arms.png',
                        link: 'https://www.nus.edu.sg/',
                    },
                    {
                        title: '南洋理工大学',
                        description: '南洋理工大学，简称南大，是新加坡首屈一指的世界顶级综合类研究型大学。其校址前身是成立于1955年的南洋大学校址。南洋理工大学在2022年QS世界大学排行榜上名列全球第12位。',
                        imgLink: 'school-logo/1920px-Nanyang_Technological_University.png',
                        link: 'https://www.ntu.edu.sg/index',
                    },
                    {
                        title: '新加坡管理大学',
                        description: '新加坡管理大学（Singapore Management University），简称新大 （SMU），是新加坡政府于2000年设立的第三所研究密集型公立大学，是亚洲乃至世界顶级的财经类院校和计算机信息技术强校。',
                        imgLink: 'school-logo/SIN_SMU_LOGO.jpg',
                        link: 'https://www.smu.edu.sg/',
                    },
                ],
            },

            {
                title: 'hongkong',
                name: 'hongkong',
                list: [{
                        title: '香港大学',
                        description: '香港大学（英语：The University of Hong Kong，缩写：HKU），简称港大，是香港的一所公立研究型大学，大学本部位于香港岛中西区龙虎山。香港大学成立于1911年，并于1912年3月11日正式办学，是香港最早建立的高等教育机构。成立之初，更是大英帝国在东亚成立的唯一一间大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
                        imgLink: 'school-logo/200px-HKU_Coat_of_Arms.png',
                        link: 'https://hku.hk/',
                    },
                    {
                        title: '香港中文大学',
                        description: '香港中文大学（英语：The Chinese University of Hong Kong，缩写：CUHK），简称中文大学、中大，是一所香港公立大学，也是香港第一所研究型大学，于1963年合并崇基学院、新亚书院及联合书院而成立。其中的组成书院最早源于1845年在清朝中叶成立的基督教会大学，为香港历史源流最久远的高等学院。香港中文大学现已发展成为辖九大书院的书院制大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
                        imgLink: 'school-logo/cuhk.jpeg',
                        link: 'https://cuhk.edu.hk/',
                    },
                    {
                        title: '香港科技大学',
                        description: '香港科技大学（英语：The Hong Kong University of Science and Technology，缩写：HKUST），简称科大，是香港的一所公立研究型大学，位于香港新界西贡区清水湾半岛，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
                        imgLink: 'school-logo/HKUST.png',
                        link: 'https://hkust.edu.hk/',
                    },
                ],
            },
        ]);
        const $q = useQuasar()
        const currentOfferSchool = ref(0)
        const offerIndicatorLeft = ref('0rem')
        const slideOffer = ref('america')
        const offers = {
            title: '世界名校直通车 录取院校',
            subTitle: '',
            list: [{
                title: '',
                name: 'america',
                list: [{
                        title: '哈佛大学',
                        subTitle: '文理学院',
                        description: '哈佛大学（英语：Harvard University）为一所本部坐落于美国马萨诸塞剑桥市的私立研究型大学。其因历史、学术影响力、财富等因素而获评为世上最享负盛名的学府之一。',
                        imgLink: 'https://cdn.ischoolconnect.com/logo/1313.png',
                        link: 'https://www.harvard.edu/',
                    },
                    {
                        title: '普林斯顿大学',
                        subTitle: '文理学院',
                        description: '普林斯顿大学（Princeton University），简称“普林斯顿”，创建于1746年 ，位于美国东海岸新泽西州的普林斯顿市，是美国大学协会的14个始创院校之一，也是著名的常春藤联盟成员，是世界顶尖私立研究型大学， 常年位居U.S. News美国最佳大学排名第1位。',
                        imgLink: 'school-logo/248px-Princeton_shield.png',
                        link: 'https://www.princeton.edu/',
                    },
                    {
                        title: '麻省理工学院',
                        subTitle: '文理学院',
                        description: '麻省理工学院在2021年QS世界大学排名中位列全球第一。截至2020年10月，麻省理工学院的校友、教授及研究人员涵盖97位诺贝尔奖得主、8名菲尔兹奖获奖者、26位图灵奖得主，以及52位国家科学奖章获奖者、45位罗德学者、38名麦克阿瑟奖得主。该校同时具很强的创业文化，由其校友所创办的公司利润总值相当于全球第十一大经济体（截至2014年）。',
                        imgLink: 'school-logo/200px-MIT_Seal.svg.png',
                        link: 'https://www.mit.edu/',
                    },
                    {
                        title: '约翰霍普金斯大学',
                        subTitle: '文理学院',
                        description: '约翰斯·霍普金斯大学采用德国古老的海德堡大学研究所的概念，被认为是美国第一所研究型大学，是美洲大学协会的12个创始会员之一。它的成功引发了美国其它大学向研究型大学转型。美国国家科学基金会连续31年将该校列为全美科研经费开支最高的大学',
                        imgLink: 'https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university_logo_small_vertical_blue.png',
                        link: 'https://www.jhu.edu/',
                    },
                    {
                        title: '宾夕法尼亚大学',
                        subTitle: '文理学院',
                        description: '宾夕法尼亚大学（英语：University of Pennsylvania），简称宾大（UPenn）是一所位于美国宾夕法尼亚州费城的世界著名私立研究型大学，美洲大学协会的12所创始校之一，与哈佛，耶鲁等七所美国顶尖大学同属蜚声全球的常春藤盟校成员。大学宣称创建于1740年，是美国第四古老的高等教育机构，也是美国第一所从事科学技术和人文教育的现代高等学校。美国《独立宣言》的9位签字者和《美国宪法》的11位签字者和该校有关。该校的创建者是美利坚合众国著名开国元勋之一的本杰明·富兰克林。',
                        imgLink: 'school-logo/250px-UPenn_shield_with_banner.svg.png',
                        link: 'https://www.upenn.edu/',
                    },
                ],
            }]
        }
        const slideActive = ref(
            'background:#cc932e;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
        )
        const slideDefault = ref(
            'background:#26322b;width: 6.25rem;max-width:6.25vw;border-radius: 0;padding:0;'
        )
        const programTitle = '在短时间内帮助学生低分高录，'
        const programDescription = '实现最高学府的留学梦。'
        const questionTitle = '为什么选择鹿名留学申请服务?'
        const questionAnswer = ['独家全球名校资源',
            '99%+录取率',
            '已斩获600+世界顶尖院校录取',
            '100%全球名校',
            '100%毕业率',
            '98%服务满意度',
            '零门槛以及低分高录',
            '申请周期短'
        ]
        const slide = ref('carousel0')
        const carouselData = ref < CarouselData[] > ([{
                name: '',
                title: '产品特点',
                subTitle: '单所名校精准保录',
                description: '看似鸡蛋不要放在一个篮子里，实则鹿名确实有实力和和底气能够为学员只报一所名校并收获录取通知书，因为我们掌握着全球顶尖院校的独家资源。',
                imgLink: 'oxford.jpeg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '实力强大',
                description: '拥有独家全球名校资源,包括美国TOP30、英国G5、加拿大、澳洲、香港、新加坡等世界级名校;与传统留学中介和咨询机构形成服务互补。',
                imgLink: 'lb.jpg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '保障结果',
                description: '签约鹿名的学生有着9996+名校录取率,不录取全额退费,并且保证学员1009%顺利毕业。',
                imgLink: 'harvard_school.jpg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '硕果累累',
                description: '8年来鹿名已帮助学员斩获600+顶级名校 offer ',
                imgLink: 'bg.jpg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '价格合理',
                description: '鹿名所有项目均自主研发,不存在中间商,能提供给客户最合理的价格。',
                imgLink: 'bg.jpg',
            },
            {
                name: '',
                title: '为什么选择鹿名',
                subTitle: '客户放心',
                description: '正规注册公司,实体办公场所,支持低订金面签合同,保障资金安全。',
                imgLink: 'bg.jpg',
            },
        ]);
        return {
            programTitle,
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
                return <OfferData > offerData.value.find((offer) => {
                    return offer.name === slideOffer.value
                })
            }),
            getClassType(k: number, firstClass: string, secondClass: string) {
                return k % 2 == 0 ? firstClass : secondClass;
            },
            getCurrentOfferSchool(index: number) {
                const offset = $q.platform.is.mobile ? 4.25 : 9.25

                offerIndicatorLeft.value = `${index * offset}rem`
                currentOfferSchool.value = index
            },
        }
    },
}
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
        content: "";
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
            background-color: $light-dark-green;
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
</style>
