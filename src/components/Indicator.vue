<template>
  <div class='offer-indicator-container'>
    <ul class='offer-indicator-list' :style='{"--left": left }'>
      <li class='offer-indicator-item' v-for='k in data' :key='k'></li>
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
        return []
      }
    },
    left: {
      type: String,
      default: '0rem'
    }
  },
  setup(props) {
    console.log(props)
    return {

    }
  }
})
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
      height: .3rem;
      width: 8rem;
      background: $light-fade-green;
      list-style-type: none;
      margin: 0.625rem;
      transition: all 0.4s ease-in-out;

      &.active {
        background: $secondary;
      }
    }

    &:after {
      content: '';
      height: .3rem;
      width: 8rem;
      background: $secondary;
      position: absolute;
      margin: 0.625rem;
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
