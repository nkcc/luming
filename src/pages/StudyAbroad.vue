<template>
  <div class="lm-study-abroad">
    <section>
      <div class="lm-light-dark-background">
        <div class="lg:container lg:mx-auto">
          <part-header name="鹿名留学"></part-header>
          <div class="lm-container row justify-center pb-20">
            <div class="col-9 col-xs-11 col-md-9">
              <div class="mb-16 animate__animated animate__zoomIn">
                <div
                  class="text-quaternary text-weight-bolder text-center text-base leading-6"
                  v-for="(v,k) in prodTitle"
                  :key="k"
                >{{v}}</div>
                <div
                  class="text-quaternary zoom-sm text-center text-weight-thin text-sm leading-7"
                  v-for="(v,k) in prodDescription"
                  :key="k"
                >{{v}}</div>
              </div>
              <div
                class="text-quaternary text-weight-bold mb-13 text-center lm-question-title mb-14 animate__animated animate__flipInX animate__delay-1s"
              >{{questionTitle}}</div>
              <div
                class="text-quaternary text-center text-weight-bolder text-base leading-7 animate__animated animate__fadeInUp animate__delay-2s"
                v-for="(v,k) in questionAnswer"
                :key="k"
              >{{v}}</div>
            </div>
          </div>
          <service></service>
        </div>
      </div>
    </section>
    <contact></contact>
  </div>
</template>

<script lang="ts">
import PartHeader from '../components/PartHeader.vue';
import Contact from '../components/Contact.vue';
import Service from '../components/Service.vue';
import { ref, computed, defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'StudyAbroad',
  components: {
    PartHeader,
    Contact,
    Service,
  },
  setup() {
    const $q = useQuasar();
    const prodTitle = [
      '鹿名留学为不同的学生量身打造了两个留学申请产品：',
      '世界名校直通车和名校教授培养计划。',
    ];
    const prodDescription = [
      '对于每一位鹿名学员，我们都会结合他的自身优势、成绩和背景基础、',
      '申请准备时间以及学生自己的择校想法，提供一套最符合学生自己的梦校申请方案。',
    ];
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
    const servicesData = ref([
      {
        title: '世界名校直通车',
        img: 'study-abroad/1.jpg',
        description: ['短时间内帮助学生低分高录', '实现最高学府的留学梦'],
        visible: false,
        link: 'famous-school-car',
      },
      {
        title: '名校教授培养计划',
        img: 'study-abroad/2.jpg',
        description: [
          '通过名校教授亲带学生完成',
          '科研和学术课题来提高背景和个人录取实力',
        ],
        visible: false,
        link: 'incubation',
      },
      {
        title: '学业管家',
        img: 'study-abroad/3.jpg',
        description: ['全托学业辅导确保顺利毕业'],
        visible: false,
        link: 'academic',
      },
    ]);
    return {
      prodTitle,
      prodDescription,
      questionTitle,
      questionAnswer,
      servicesData,
      isMobile: computed(() => <boolean>$q.platform.is.mobile),
      getClassType(k: number, firstClass: string, secondClass: string) {
        return k % 2 == 0 ? firstClass : secondClass;
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
    };
  },
});
</script>

<style lang="scss">
.lm-question-title {
  font-size: 2.5rem;
  letter-spacing: 1.5625rem;
}
.mobile {
  .lm-question-title {
    font-size: 1.5rem;
    letter-spacing: 0;
  }
}
</style>
