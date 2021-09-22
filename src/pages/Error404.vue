<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-secondary" style="font-size: 30vh">
        404
      </div>

      <div class="text-h2 text-secondary text-weight-bold" style="opacity:.4">
       无法访问该页面...
      </div>

      <q-btn
        class="q-mt-xl"

        text-color="secondary"
        unelevated
        to="/"
        label="返回主页"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
