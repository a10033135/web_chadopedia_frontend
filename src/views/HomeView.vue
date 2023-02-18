<script setup lang="ts">

import {reactive, watch} from "vue";
import {useThemeStore} from "@/stores/theme";
import {useRoute, useRouter} from "vue-router";

const theme = useThemeStore();
const state = reactive({theme_mode: theme.getTheme});

const menu_state = reactive({
  is_open: false
});

const router = useRouter();

const route = useRoute();

let current_route_name = route.name;

watch(route, route => {
  current_route_name = route.name;
});

function click_menu() {
  console.log("click_menu");
  menu_state.is_open = !menu_state.is_open;
}

function click_menu_nav_item(url: string) {
  router.push(url);
  menu_state.is_open = false;
}

const nav_router: { name: string, title: string, url: string }[] = [
  {name: "intro", title: "首頁", url: "/"},
  {name: "pedia", title: "茶道知識", url: "/pedia"},
  {name: "about", title: "關於我們", url: "/about"}
];

</script>

<template>
  <div class="static  w-screen">

    <div class="absolute flex navbar-height bg-base-200 opacity-80 w-full z-50">

      <div class="flex-1 m-auto">
        <a class="btn btn-ghost normal-case text-2xl " @click="click_menu_nav_item('/')">日本茶道事典</a>
      </div>
      <div class="flex-none m-auto">
        <button class="btn btn-square btn-ghost md:hidden block" @click="click_menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-8 h-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!--   sidebar   -->
    <div class="absolute top-20 w-1/6 body bg-base-300 hidden lg:block z-50">
      <div class="side-bar-height ">
        <ul class="menu body bg-base-100 w-full">
          <li v-for="route in nav_router">
            <a class="text-lg" :class="{'active':route.name == current_route_name}"
               @click="click_menu_nav_item(route.url)">{{ route.title }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="absolute nav-router-view w-5/6 ">
      <router-view/>
    </div>

  </div>

  <div class="h-screen">
    <!-- Header   -->

    <transition name="slide">
      <div v-show="menu_state.is_open" class="absolute static left-0 top-0 h-full w-full bg-base-300 z-50">
        <div class="flex">
          <p class="flex-grow text-2xl px-2 py-12 font-bold text-black">抹茶知識百科</p>
          <div class="btn btn-ghost m-auto flex-none">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class=" h-12 w-12" @click="click_menu" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>


        </div>
        <ul class="menu menu-compact lg:menu-normal w-full drop-shadow-md	">
          <li v-for="route in nav_router">
            <a class="text-lg" :class="{'active':route.name == current_route_name}"
               @click="click_menu_nav_item(route.url)">{{ route.title }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.navbar-height {
  height: 10%;
}

.body {
  height: 90%;
  top: 10%;
}

.side-bar-height {
  min-height: 100%;
}

@media screen {
  .nav-router-view {
    height: 90%;
    top: 10%;
    width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .nav-router-view {
    height: 90%;
    top: 10%;
    left: 16.5%;
    width: 83.5%;
  }
}


.slide-leave-active,
.slide-enter-active {
  transition: all .9s ease;
  /*transition: opacity 1s;*/
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  /*opacity: 0;*/
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
  /*opacity: 1;*/
}

</style>

