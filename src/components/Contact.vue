<template>
  <section class>
    <q-img class="lm-contact" src="bg.jpg" fit="cover" img-class="bg-filter">
      <div class="absolute-full lm-contact-container">
        <div class="row justify-center lg:container lg:mx-auto">
          <div class="col-lg-8 col-md-10 q-pa-md q-ma-md">
            <h1 class="text-secondary title py-12">联系我们</h1>
            <h4 class="text-white text-weight-bold pb-10 text-4xl">本科硕士精准直录，实现最高学府留学梦</h4>
            <div class="form">
              <q-input
                input-style="color: #cd932f"
                color="secondary"
                label-color="white"
                v-model="form.name"
                label="姓名"
              >
                <template v-slot:prepend>
                  <q-icon color="secondary" name="person" />
                </template>
              </q-input>
              <q-input
                input-style="color: #cd932f"
                color="secondary"
                label-color="white"
                v-model="form.phone"
                label="电话"
              >
                <template v-slot:prepend>
                  <q-icon color="secondary" name="phone" />
                </template>
              </q-input>
              <q-input
                color="secondary"
                label-color="white"
                input-style="color: #cd932f"
                v-model="form.wechat"
                label="微信"
              >
                <template v-slot:prepend>
                  <q-icon color="secondary" name="wechat" />
                </template>
              </q-input>
              <q-btn class="submit" outline type="submit" style="color: goldenrod">
                <q-icon class="dot" name="fiber_manual_record"></q-icon>了解更多
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </q-img>
  </section>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

export default {
  name: 'Contact',
  setup() {
    const $q = useQuasar();
    return {
      form: ref({
        name: '',
        phone: '',
        wechat: '',
      }),
      isMobile: computed(() => {
        return <boolean>$q.platform.is.mobile;
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.lm-contact {
  height: 45rem;
  .lm-contact-container {
    background-color: rgba(6, 12, 7, 0.85);
  }
}

.mobile {
  .lm-contact {
    height: 48rem;

    .title {
      font-size: 5rem;
    }
  }
}
</style>
