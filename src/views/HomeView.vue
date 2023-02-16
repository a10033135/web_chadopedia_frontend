<script setup lang="ts">

import {reactive} from "vue";
import {useThemeStore} from "@/stores/theme";
import {useRouter} from "vue-router";
import theme_utils from "@/utils/theme_utils";

const theme = useThemeStore()
const state = reactive({theme_mode: theme.getTheme})

const menu_state = reactive({
  is_open: false
})

const router = useRouter()

function click_menu() {
  console.log('click_menu')
  menu_state.is_open = !menu_state.is_open
}

function click_menu_nav_item(url: string) {
  router.push(url)
}

const nav_router: { name: string, url: string }[] = [
  {name: '茶道知識', url: '/pedia'},
  {name: '關於我們', url: '/about'}
]

</script>

<template>
  <div class="h-screen">
    <!-- Header   -->
    <div class="flex navbar-height bg-base-200">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost" @click="click_menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-lg" @click="click_menu_nav_item('/pedia')">茶道知識</a>
      </div>
    </div>

    <router-view class="router-view-height px-6 md:px-24 lg:px-48 2xl:px-96 xl:mx-12 overflow-x-auto"/>

    <div v-if="menu_state.is_open" :class="{'ease-in duration-300':menu_state.is_open}">

      <div class="absolute left-0 top-0 h-screen w-screen bg-gray-800 opacity-50" @click="click_menu">
      </div>
      <div class="absolute left-0 top-0 h-screen lg:w-1/3 w-2/3 bg-base-300 rounded-2xl" >
        <ul class="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-t-2xl drop-shadow-md	">
          <li class="menu-title mb-8"><p class="text-lg text-black">抹茶知識百科</p></li>
          <li v-for="route in nav_router">
            <a class="text-lg" @click="click_menu_nav_item(route.url)">{{ route.name }}</a>
          </li>
        </ul>
        <label class="btn w-full" @click="click_menu">關閉</label>
      </div>
    </div>


  </div>
</template>

<style scoped>
.navbar-height {
  height: 5%;
}

.router-view-height {
  height: 95%;
}
</style>

