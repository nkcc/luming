/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CarouselData, OfferData } from '../../components/models';
import { ref } from 'vue';

const carouselData = ref<CarouselData[]>([
    {
        name: '',
        title: '为什么选择鹿名',
        subTitle: '来自海外',
        description:
            '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../../assets/oxford.jpeg'),
    },
    {
        name: '',
        title: '为什么选择鹿名',
        subTitle: '来自海外',
        description:
            '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../../assets/lb.jpg'),
    },
    {
        name: '',
        title: '为什么选择鹿名',
        subTitle: '来自海外',
        description:
            '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../../assets/harvard_school.jpg'),
    },
    {
        name: '',
        title: '为什么选择鹿名',
        subTitle: '来自海外',
        description:
            '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
        imgLink: require('../../assets/bg.jpg'),
    },
]);
const cultureData = ref([
    {
        imgLink: require('../../assets/oxford.jpeg'),
        description:
            '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
    },
    {
        imgLink: require('../../assets/bg.jpg'),
        description:
            '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
    },
    {
        imgLink: require('../../assets/oxford.jpeg'),
        description:
            '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
    },
    {
        imgLink: require('../../assets/oxford.jpeg'),
        description:
            '鹿名国际教育成立于2014年美国波士顿，其使命致力于让中国留学生的名校梦不再高不可攀。不论学生是怎样的背景和成绩……',
    },
]);

const offerData = ref<OfferData[]>([
    {
        title: 'Open',
        name: '',
        list: [
            {
                title: '哈佛大学',
                description:
                    '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
                imgLink: require('../../assets/school-logo/320px-New_York_University_Seal.png'),
            },
            {
                title: '约翰霍普金斯大学',
                description:
                    '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
                imgLink: require('../../assets/school-logo/john.png'),
            },
            {
                title: '宾夕法尼亚大学',
                description:
                    '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
                imgLink: require('../../assets/harvard_school.jpg'),
            },
        ],
    },
    {
        title: 'Open',
        name: '',
        list: [
            {
                title: '香港大学',
                description:
                    '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
                imgLink: require('../../assets/school-logo/HKUST.png'),
            },
            {
                title: '约翰霍普金斯大学',
                description:
                    '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
                imgLink: require('../../assets/lb.jpg'),
            },
            {
                title: '宾夕法尼亚大学',
                description:
                    '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
                imgLink: require('../../assets/harvard_school.jpg'),
            },
        ],
    },
    {
        title: 'Open',
        name: '',
        list: [
            {
                title: '哈佛大学',
                description:
                    '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
                imgLink: require('../../assets/oxford.jpeg'),
            },
            {
                title: '约翰霍普金斯大学',
                description:
                    '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
                imgLink: require('../../assets/lb.jpg'),
            },
            {
                title: '宾夕法尼亚大学',
                description:
                    '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
                imgLink: require('../../assets/harvard_school.jpg'),
            },
        ],
    },
    {
        title: 'Open',
        name: '',
        list: [
            {
                title: '哈佛大学',
                description:
                    '简称“哈佛”，享誉世界的私立研究型大学，著名的常春藤盟校成员……',
                imgLink: require('../../assets/oxford.jpeg'),
            },
            {
                title: '约翰霍普金斯大学',
                description:
                    '创立于1876年，是一所世界顶级的著名私立大学，美国第一所研究型大学……',
                imgLink: require('../../assets/lb.jpg'),
            },
            {
                title: '宾夕法尼亚大学',
                description:
                    '鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……',
                imgLink: require('../../assets/harvard_school.jpg'),
            },
        ],
    },
]);

export default {
    carouselData,
    cultureData,
    offerData,
    controlType: ref('flat'),
    controlTypeOptions: [
        { value: 'regular', label: 'regular' },
        { value: 'unelevated', label: 'unelevated' },
        { value: 'flat', label: 'flat (default)' },
        { value: 'outline', label: 'outline' },
        { value: 'push', label: 'push' },
    ],
    slide: ref('carousel0'),
    slideOffer: ref('offer0'),
    slideActive: ref(
        'background:#cc932e;width: 100px;border-radius: 0;padding:0;'
    ),
    slideDefault: ref(
        'background:#26322b;width: 100px;border-radius: 0;padding:0;'
    ),
    lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
};