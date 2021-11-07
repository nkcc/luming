<template>
  <div class="text-card py-20">
    <div class="row justify-center relative">
      <div class="col-12">
        <div
          class="
            background-title
            text-center
            background-title
            text-fade-green text-5xl text-weight-bolder
            pb-6
            text-white
          "
        >
          {{ title }}
        </div>
      </div>
      <div
        class="col-12 row justify-center points relative"
        :class="list.length > 4 ? 'points-border' : ''"
      >
        <div
          :class="['mb-4 z-10', getListCol(list.length, k)]"
          v-for="(v, k) in list"
          :key="k"
        >
          <div class="title">
            <div
              class="info flex justify-center"
              v-for="(vt, kt) in v.title"
              :key="kt"
            >
              <span
                class="
                  text-center text-quaternary text-weight-bolder text-7xl
                  leading-tight
                  px-7
                "
              >
                {{ vt }}
              </span>
            </div>
          </div>
          <div class="description pt-6">
            <div
              class="
                px-4
                description-text
                text-center text-text-weight-medium text-white
              "
              v-for="(vd, kd) in v.description"
              :key="kd"
            >
              {{ vd }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
    return {
      getListCol(length: number, key: number) {
        const modNum = length % 4;
        let colNum = '3';
        if (key >= length - modNum || length < 4) {
          colNum = Math.floor(12 / modNum).toString();
        }
        return 'col-' + colNum;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
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
      background-color: #0b150e;
    }
  }
}

.description {
  background-color: #0b150e;
}
</style>
