<template>
<div class="lm-case w-full lm-bg-background">
    <part-header name="鹿鸣案例"></part-header>
    <div class="cases">

    </div>
    <contact></contact>
</div>
</template>

<script>
import setupData from '../ts/pages/case'
import PartHeader from '../components/PartHeader.vue'
import Contact from '../components/Contact.vue'

export default {
    name: 'Case',
    components: {
      PartHeader,
      Contact,
    },
    setup() {
        return setupData
    },
}
</script>
