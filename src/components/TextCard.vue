<template>
  <div class="text-card py-10 sm:py-20">
    <div class="row justify-center relative">
      <div class="col-12">
        <div
          class="background-title text-center background-title text-fade-green text-xl sm:text-5xl text-weight-bolder pb-6 text-white"
        >{{ title }}</div>
      </div>
      <div
        class="col-xs-12 col-md-12 row justify-center points relative"
        :class="list.length > 4 ? 'points-border' : ''"
      >
        <div :class="['mb-4 z-10', getListCol(list.length, k)]" v-for="(v, k) in list" :key="k">
          <div class="title">
            <div class="info flex justify-center" v-for="(vt, kt) in v.title" :key="kt">
              <span
                class="text-center text-quaternary text-weight-bolder text-2xl sm:text-7xl leading-tight px-2 sm:px-7"
              >{{ vt }}</span>
            </div>
          </div>
          <div class="description pt-2 sm:pt-6">
            <div
              class="px-4 description-text text-xs zoom-xs leading-6 text-center text-text-weight-medium text-white"
              v-for="(vd, kd) in v.description"
              :key="kd"
            >{{ vd }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'TextCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    const $q = useQuasar();
    return {
      getListCol(length: number, key: number) {
        const modNum = length % 4;
        let colNum = '3';
        if (key >= length - modNum || length < 4) {
          colNum = Math.floor(12 / modNum).toString();
        }
        return 'col-' + colNum;
      },
      isMobile: computed(() => {
        return <boolean>$q.platform.is.mobile;
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
.mobile {
  .points {
    &:before {
      height: 1px;
      top: 32%;
    }

    &.points-border {
      &:before {
        border: 1px solid $quaternary;
        top: 32%;
        height: 45%;
      }
    }
  }

  //   &.points-border {
  //     &:before {
  //       height: 0;
  //       border: none;
  //     }
  //   }
  // }
}

.points {
  &:before {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 3px;
    background-color: $quaternary;
  }

  &.points-border {
    &:before {
      border: 3px solid $quaternary;
      height: 55%;
      width: 74%;
      background: transparent;
    }
  }
}

.title {
  .info {
    span {
      background-color: $light-dark-green;
    }
  }
}

.description {
  background-color: $light-dark-green;
}
</style>
