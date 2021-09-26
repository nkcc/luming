<template>
<q-layout view="hHh lpR fFf" class="lg:container lg:mx-auto shadow-sm">
    <q-page-container :padding="true">
        <router-view />
    </q-page-container>
</q-layout>
</template>

<script lang="ts">

import {
    defineComponent,
    ref
} from 'vue'

export default defineComponent({
    name: 'MainLayout',

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
