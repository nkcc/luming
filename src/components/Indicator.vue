<template>
  <div class="offer-indicator-container">
    <ul
      class="offer-indicator-list w-full relative"
      :style="{ '--left': leftNum+'%', '--width': indicatorWidth + '%' }"
      ref="listRef"
    >
      <li
        class="offer-indicator-item"
        v-for="k in dataNum"
        :key="k"
        @click="showIndicator(k)"
        :style="{
          width: indicatorWidth + '%',
        }"
      ></li>
    </ul>
  </div>
</template>


<script lang='ts'>
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'Indicator',
  props: {
    num: {
      type: Number,
      default: 1,
    },
  },
  emits: ['show'],
  setup(
    props: {
      num: number;
    },
    { emit }
  ) {
    const $q = useQuasar();
    const indicatorWidth = ref(8);
    const dataNum = ref(props.num);
    const leftNum = ref(0);
    onMounted(() => {
      indicatorWidth.value = $q.platform.is.mobile ? 3 : 8;
      indicatorWidth.value = 100 / props.num;
    });
    watch(
      () => props.num,
      (val) => {
        dataNum.value = val;
        leftNum.value = 0;
        indicatorWidth.value = $q.platform.is.mobile ? 3 : 8;
        indicatorWidth.value = 100 / props.num;
      }
    );
    return {
      showIndicator(k: number) {
        leftNum.value = ((k - 1) / dataNum.value) * 100;
        emit('show', k);
      },
      dataNum,
      leftNum,
      indicatorWidth,
    };
  },
});
</script>

<style lang="scss">
@import '../css/quasar.variables.scss';

.offer-indicator-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  .offer-indicator-list {
    position: relative;
    padding-left: 0;
    display: flex;
    justify-content: center;

    .offer-indicator-item {
      position: relative;
      height: 3rem;
      //   background: $light-fade-green;
      list-style-type: none;
      margin: 0.625rem;
      transition: all 0.4s ease-in-out;

      &.active {
        background: $secondary;
      }

      &:hover {
        cursor: pointer;
      }

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 0.3rem;
        background: $light-fade-green;
        transform: translateY(-50%);
      }
    }

    &:after {
      content: '';
      height: 0.3rem;
      background: $secondary;
      top: 50%;
      width: calc(var(--width) - 1.25rem);
      transform: translateY(-50%);
      position: absolute;
      margin: 0 0.625rem;
      left: var(--left);
      transition: all 0.4s ease-in-out;
    }
  }
}

.mobile {
  .offer-indicator-container {
    .offer-indicator-list {
      .offer-indicator-item {
        width: 3rem;
      }
      &:after {
        width: 3rem;
      }
    }
  }
}
</style>
