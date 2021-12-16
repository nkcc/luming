<template>
<div class="lm-contact w-full lm-bg-background lm-light-dark-background">
    <part-header name="联系鹿名"></part-header>
    <div class="contact-container row justify-center">
        <div class="col-md-9 col-xs-12 row q-gutter-lg pb-36 justify-center">
            <div class="col-3 col-xs-5 col-sm-5 col-md-3">
                <q-responsive :ratio="isMobile ? 1 :504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-3 zoom-md">
                            鹿名国际教育地址：
                        </div>
                        <div class="contact-content">
                            <div class="text-white text-weight-bold text-xl text-center w-full pb-1 zoom-md">
                                上海市
                            </div>
                            <p class="text-center text-white leading-4 text-location zoom-sm">黄浦区</p>
                            <p class="text-center text-white leading-4 text-location zoom-sm ">九江路288号</p>
                            <p class="text-center text-white leading-3 text-location zoom-sm">宏伊国际广场807室</p>
                        </div>
                    </div>
                </q-responsive>

            </div>
            <div class="col-3 col-xs-5 col-sm-5 col-md-3 ">
                <q-responsive :ratio="isMobile ? 1 :504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-8 zoom-md">
                            商务合作
                        </div>
                        <div class="contact-content mt-7">
                            <p class="text-center text-white leading-4 text-location zoom-sm"><span class="text-xl mr-3 text-weight-bold">
                                    132-4805-1816</span></p>
                        </div>
                    </div>
                </q-responsive>
            </div>

            <div class="col-3 col-xs-5 col-sm-5 col-md-3 ">
                <q-responsive :ratio="isMobile ? 1 :504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-8 zoom-md">
                            鹿名国际教育电话：
                        </div>
                        <div class="contact-content mt-7">

                            <p class="text-center text-white leading-4 text-location zoom-sm"><span class="text-xl mr-3 text-weight-bold">
                                    137-6440-4117</span></p>
                        </div>
                    </div>
                </q-responsive>
            </div>
            <div class="col-3 col-xs-5 col-sm-5 col-md-3 ">
                <q-responsive :ratio="isMobile ? 1 :504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-5 zoom-md">
                            鹿名国际客服微信：
                        </div>
                        <div class="contact-content flex justify-center zoom-sm">
                            <q-responsive class="h-24 w-24" :ratio="1">
                                <q-img src="wechat_support.jpg"></q-img>
                            </q-responsive>

                        </div>
                    </div>
                </q-responsive>

            </div>
            <div class="col-3 col-xs-5 col-sm-5 col-md-3 ">
                <q-responsive :ratio="isMobile ? 1 :504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-10 zoom-md">
                            鹿名国际教育邮箱：
                        </div>
                        <div class="contact-content">
                            <div class="text-white text-weight-bold text-xl text-center w-full pb-1 zoom-sm">
                                INFO
                            </div>
                            <p class=" text-center text-white leading-4 text-location text-weight-bold zoom-sm">@lumingguoji.com</p>

                        </div>
                    </div>
                </q-responsive>

            </div>

        </div>

    </div>
</div>
</template>

<script lang="ts">
import PartHeader from '../components/PartHeader.vue'
import { useQuasar } from 'quasar'

export default {
    name: 'Contact',
    components: {
        PartHeader
    },
    setup() {
      const $q = useQuasar();
        return {
          isMobile: <boolean>$q.platform.is.mobile
        }
    },
}
</script>

<style lang="scss" scoped>
.lm-bg-green {
    background-color: #14281a;
}

.text-location {
    line-height: 1.5625rem;
    font-size: 0.93275rem;
}

.contact-card {
    height: 10rem;
}
</style>
