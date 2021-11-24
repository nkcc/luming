<template>
  <section class="lm-services">
    <div class="row q-col-gutter-x-sm lg:container lg:mx-auto">
      <div
        class="col-md-4 col-sm-12 col-xs-12 animate__animated animate__animated service-container"
        v-for="(v, k) in servicesData"
        :key="k"
      >
        <div :class="getClassType(k, 'bar-secondary', 'bar')"></div>

        <div class="media" :data-id="k" v-intersection.once="onServiceIntersection">
          <transition-group appear enter-active-class="animated animate__fadeInUp">
            <q-img
              class="img"
              :src="v.img"
              :ratio=" isMobile ? 5 / 2  :537 / 336"
              v-if="servicesData[k].visible"
              loading="eager"
              :no-spinner="true"
            ></q-img>
            <div
              class="introduction relative px-10 pt-3 pb-6 sm:pb-8"
              :class="getClassType(k, 'bg-secondary', 'bg-primary')"
              v-if="servicesData[k].visible"
            >
              <h3
                class="text-white text-weight-bold heading text-4xl pb-1 sm:pb-10 sm:pt-5"
              >{{ v.title }}</h3>
              <div class="sm:h-24">
                <p
                  class="text-white text-xs sm:text-lg py-1 sm:py-0 pr-24 sm:pr-0 text-weight-light"
                  v-for="(vd, vk) in v.description"
                  :key="vk"
                >{{ vd }}</p>
              </div>

              <router-link
                class="root-link text-xs sm:text-lg absolute sm:relative right-10 bottom-6 sm:right-0 sm:bottom-0 py-1 sm:py-0"
                :to="v.link"
              >了解更多></router-link>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'Service',
});
</script>

<script lang="ts" setup>
const $q = useQuasar();
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
    description: ['全托学业辅导', '确保顺利毕业'],
    visible: false,
    link: 'academic',
  },
]);

if ($q.platform.is.mobile) {
  servicesData.value = servicesData.value.map((item) => {
    item.visible = true;
    return item;
  });
}

const onServiceIntersection = function (entry: {
  target: {
    dataset: {
      id: string;
    };
  };
  isIntersecting: boolean;
}) {
  if ($q.platform.is.mobile) {
    return;
  }
  const index = parseInt(entry.target.dataset.id, 10);

  setTimeout(() => {
    servicesData.value[index].visible = entry.isIntersecting;
  }, 100 * index);
};

const isMobile = computed(() => <boolean>$q.platform.is.mobile);

const getClassType = function (k: number, firstClass: string, secondClass: string) {
      return k % 2 == 0 ? firstClass : secondClass;
};
</script>

<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.mobile {
  .lm-services {
    .bar {
      height: 20px
    }
    .bar-secondary {
      height: 20px;
    }
  }
}

.lm-services {
  width: 100%;
  background-color: #000;
  .bar {
    height: $services-bar-height;
  }

  .bar-secondary {
    height: $services-bar-height;
  }

  .service-container {
    .media {
      .introduction {

        .sub-title {
          color: $white;
          font-size: 1.125rem;
        }

        a {
          color: $white;
          text-decoration: none;
          transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
        }

        &.bg-primary {
          a {
            &:hover {
              color: $secondary;
            }
          }
        }

        &.bg-secondary {
          a {
            &:hover {
              color: $primary;
            }
          }
        }
      }
    }
  }


}
</style>
