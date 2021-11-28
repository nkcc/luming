<template>
  <div class="vertical-card row w-full">
    <div :class="'col-' + left">
      <div class="title font-extrabold" :class="[titleClass, darkMode ? 'dark-mode':'']">{{title}} :</div>
    </div>
    <div :class="['col-' + right, list.length === 1 ? 'items-center flex leading-none pt-1' : '']">
      <div class="item pl-1" :class="[itemClass, darkMode ? 'dark-mode' : '']" v-for="(v, k) in list" :key="k">{{v}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VerticalCard ',
  props: {
    title: {
      type: String,
      default: '',
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    left: {
      type: String,
      default: '6',
    },
    right: {
      type: String,
      default: '6',
    },
    titleClass: {
      type: String,
      default: 'text-left text-3xl',
    },
    itemClass: {
      type: String,
      default: 'text-xs zoom-xs',
    },
  }
});
</script>

<style lang="scss" scoped>
.dark-mode {
  &.title {
    color: $quaternary;
  }

  &.item {
    color: $white;
  }
}
</style>
