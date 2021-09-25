<template>
<q-layout view="hHh lpR fFf" class="lg:container lg:mx-auto shadow-sm">
    <main-header></main-header>
    <q-page-container :padding="true">
        <router-view />
    </q-page-container>
    <main-footer></main-footer>
</q-layout>
</template>

<script lang="ts">
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

import {
    defineComponent,
    ref
} from 'vue'

export default defineComponent({
    name: 'MainLayout',

    components: {
        MainHeader,
        MainFooter,
    },

    setup() {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
})
</script>
