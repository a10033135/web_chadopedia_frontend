<script setup lang="ts">

import {reactive} from "vue";
import {useThemeStore} from "@/stores/theme";
import {useRouter} from "vue-router";

const theme = useThemeStore()
const state = reactive({theme_mode: theme.getTheme})

</script>

<template>
  <div class="w-screen h-screen bg-black hidden md:block">
    <!-- Header   -->
    <div class="h-48 w-screen bg-green-100">

    </div>
    <suspense>

      <router-view #default>

      </router-view>
    </suspense>

  </div>
  <div class="w-screen h-screen bg-blue-200 block md:hidden">

  </div>

</template>
