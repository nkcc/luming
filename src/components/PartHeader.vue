<template>
  <div class="part-header relative">
    <div
      class="
        logo-container
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <q-img
        class="logo absolute left-1/2 transform -translate-x-1/2"
        src="logo_center.svg"
        ratio="1"
      ></q-img>
      <div class="part-name-container absolute flex justify-center w-full">
        <div class="title text-weight-bold text-center pb-5 w-full">
          {{ name }}
        </div>
        <q-img class="w-60 h-4" src="logo_letter.svg" fit="contain"></q-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartHeader',
  props: {
    name: {
      type: String,
      default: '鹿 名 来 源',
    },
  },
};
</script>

<style lang="scss">
.part-header {
  height: 31.88rem;

  .logo-container {
    width: 35rem;
    height: 20rem;

    .logo {
      width: 18rem;
      height: 18rem;
      opacity: 0.3;
    }

    .part-name-container {
      top: 40%;

      .title {
        text-indent: 0.5rem;
        color: $quaternary;
        font-size: 2.75rem;
        letter-spacing: 1rem;
      }
    }
  }
}
</style>
