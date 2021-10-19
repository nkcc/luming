<template>
<div class="lm-contact w-full lm-bg-background lm-light-dark-background">
    <part-header name="联系鹿名"></part-header>
    <div class="contact-container row justify-center">
        <div class="col-9 row q-gutter-lg pb-36 justify-center">
            <div class="col-3 col-xs-12 col-sm-5 col-md-3">
                <q-responsive :ratio="504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-3">
                            鹿名国际教育地址：
                        </div>
                        <div class="contact-content">
                            <div class="text-white text-weight-bold text-xl text-center w-full pb-1">
                                上海市
                            </div>
                            <p class="text-center text-white leading-4 text-location">黄浦区</p>
                            <p class="text-center text-white leading-4 text-location">九江路299号</p>
                            <p class="text-center text-white leading-3 text-location">宏伊国际广场807室</p>
                        </div>
                    </div>
                </q-responsive>

            </div>
            <div class="col-3 col-xs-12 col-sm-5 col-md-3 ">
                <q-responsive :ratio="504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-8">
                            商务合作
                        </div>
                        <div class="contact-content">

                            <p class="text-center text-white leading-4 text-location"><span class="text-xl mr-3 text-weight-bold">
                                    XXX</span>187-8888-8888</p>
                            <p class="text-center text-white leading-4 text-location"><span class="text-xl mr-3 text-weight-bold">
                                    XXX</span>187-8888-8888</p>
                        </div>
                    </div>
                </q-responsive>
            </div>
            <div class="col-3 col-xs-12 col-sm-5 col-md-3 ">
                <q-responsive :ratio="504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-5">
                            鹿名国际微信公众号：
                        </div>
                        <div class="contact-content flex justify-center">
                            <q-responsive class="h-24 w-24" :ratio="1">
                                <q-img src="vision.jpg"></q-img>
                            </q-responsive>

                        </div>
                    </div>
                </q-responsive>

            </div>
            <div class="col-3 col-xs-12 col-sm-5 col-md-3 ">
                <q-responsive :ratio="504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-8">
                            鹿名国际教育电话：
                        </div>
                        <div class="contact-content">

                            <p class="text-center text-white leading-4 text-location"><span class="text-xl mr-3 text-weight-bold">
                                    XXX</span>187-8888-8888</p>
                            <p class="text-center text-white leading-4 text-location"><span class="text-xl mr-3 text-weight-bold">
                                    XXX</span>187-8888-8888</p>
                        </div>
                    </div>
                </q-responsive>
            </div>
            <div class="col-3 col-xs-12 col-sm-5 col-md-3 ">
                <q-responsive :ratio="504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-5">
                            鹿名国际客服微信：
                        </div>
                        <div class="contact-content flex justify-center">
                            <q-responsive class="h-24 w-24" :ratio="1">
                                <q-img src="vision.jpg"></q-img>
                            </q-responsive>

                        </div>
                    </div>
                </q-responsive>

            </div>
            <div class="col-3 col-xs-12 col-sm-5 col-md-3 ">
                <q-responsive :ratio="504/360">
                    <div class="contact-card lm-bg-green">
                        <div class="contact-title text-quaternary text-xl text-weight-bolder text-center pt-5 pb-10">
                            鹿名国际教育邮箱：
                        </div>
                        <div class="contact-content">
                            <div class="text-white text-weight-bold text-xl text-center w-full pb-1">
                                ABCDEFG
                            </div>
                            <p class=" text-center text-white leading-4 text-location text-weight-bold">@163.com</p>

                        </div>
                    </div>
                </q-responsive>

            </div>

        </div>

    </div>
</div>
</template>

<script>
import PartHeader from '../components/PartHeader.vue'

export default {
    name: 'Contact',
    components: {
        PartHeader
    },
    setup() {
        return {}
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
