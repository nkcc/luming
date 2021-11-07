<template>
  <div class="offer-indicator-container">
    <ul class="offer-indicator-list" :style="{ '--left': left }">
      <li
        class="offer-indicator-item"
        v-for="(v, k) in data"
        :key="v"
        @click="showIndicator(k)"
      ></li>
    </ul>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Indicator',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    left: {
      type: String,
      default: '0rem',
    },
  },
  emits: ['show'],
  setup(props, { emit }) {
    return {
      showIndicator(k: number) {
        emit('show', k);
      },
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
      height: 1rem;
      width: 8rem;
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
      width: 8rem;
      background: $secondary;
      top: 50%;
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
