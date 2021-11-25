<template>
  <div class="vertical-card row w-full">
    <div :class="'col-' + left">
      <div class="title font-extrabold text-xl leading-5" :class="titleAlign">{{title}} :</div>
    </div>
    <div :class="'col-' + right">
      <div class="item text-xs leading-3 pl-2" v-for="(v, k) in list" :key="k">{{v}}</div>
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
    titleAlign: {
      type: String,
      default: 'text-left',
    },
  }
});
</script>

<style lang="scss" scoped>
</style>
