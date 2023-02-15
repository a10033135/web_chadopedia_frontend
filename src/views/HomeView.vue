<script setup lang="ts">

import {reactive} from "vue";
import {useThemeStore} from "@/stores/theme";
import {useRouter} from "vue-router";
import theme_utils from "@/utils/theme_utils";

const theme = useThemeStore()
const state = reactive({theme_mode: theme.getTheme})

const router = useRouter()

function onClick() {
  router.push('/pedia')
}

</script>

<template>
  <div class="h-screen">
    <!-- Header   -->
    <div class="navbar bg-base-200">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" @click="onClick">茶道知識</a>
      </div>
    </div>


    <router-view class=" px-12 md:px-24 lg:px-48"/>


  </div>
</template>
