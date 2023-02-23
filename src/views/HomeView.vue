<script setup lang="ts">

import { reactive, watch } from "vue";
import { useThemeStore } from "@/stores/theme";
import { useRoute, useRouter } from "vue-router";
import FooterView from "@/components/FooterView.vue";
import Theme_utils from "@/utils/theme_utils";
import theme_utils from "@/utils/theme_utils";

const theme = useThemeStore();
const state = reactive({ theme_mode: theme.getTheme });

watch(theme, theme => {
  state.theme_mode = theme.value
})

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

function click_dark_mode() {
  theme.toggle_theme()
}

function click_menu_nav_item(nav_router: { name: string, title: string, url: string, is_outside_url: boolean }) {
  if (nav_router.is_outside_url) {
    window.open(nav_router.url)
  } else {
    menu_state.is_open = false;
    router.push(nav_router.url);
  }
}

const nav_router: { name: string, title: string, url: string, is_outside_url: boolean }[] = [
  { name: "intro", title: "首頁", url: "/", is_outside_url: false },
  { name: "pedia", title: "茶道知識", url: "/pedia", is_outside_url: false },
  { name: "about", title: "關於我們", url: "/about", is_outside_url: false },
  { name: "shopee", title: "茶具 / 古美術 ", url: "https://shopee.tw/ostenlicht", is_outside_url: true },
  { name: "bloger", title: "部落格", url: "https://sadotw.blogspot.com", is_outside_url: true },
];

</script>

<template>
  <div class="static w-screen" :data-theme="state.theme_mode">

    <div class="absolute flex navbar-height bg-base-200 opacity-80 w-full z-50">

      <div class="flex-1 m-auto">
        <a class="btn btn-ghost normal-case text-2xl " @click="click_menu_nav_item(nav_router[0])">茶道事典百科</a>
      </div>
      <div class="btn btn-ghost m-auto lg:mx-6" @click="click_dark_mode">
        <!-- sun icon -->
        <svg class="w-8 h-8 stroke-current" :class="{ 'hidden': state.theme_mode === theme_utils.light }"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        <!-- moon icon -->
        <svg class="w-8 h-8 stroke-current" :class="{ 'hidden': state.theme_mode === theme_utils.dark }"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>

      </div>
      <div class="flex-none m-auto">
        <button class="btn btn-square btn-ghost lg:hidden block" @click="click_menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!--   sidebar   -->
    <div class="absolute top-20 w-1/6 body bg-base-300 hidden lg:block z-50">
      <div class="side-bar-height">
        <ul class="menu body bg-base-100 w-full h-fit">
          <li v-for="route in nav_router">
            <a class="text-lg" :class="{ 'active': route.name === current_route_name }"
              @click="click_menu_nav_item(route)">{{ route.title }}</a>
          </li>
        </ul>
        <div class="flex gap-5 p-6">
          <a href="https://instagram.com/chadopedia?igshid=ZDdkNTZiNTM=">
            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" class="w-8 h-8">
          </a>
          <a href="https://www.facebook.com/chadopedia">
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" class="w-8 h-8">
            </a>
        </div>
        <footer-view />
      </div>
    </div>

    <div class="absolute nav-router-view w-5/6 bg-base-100">
      <router-view />
    </div>

  </div>

  <div class="h-screen">
    <!-- Header   -->

    <transition name="slide">
      <div v-show="menu_state.is_open" class="absolute static left-0 top-0 h-full w-full bg-base-300 z-50">
        <div class="flex">
          <p class="flex-grow text-2xl px-2 py-12 font-bold ">抹茶知識百科</p>
          <div class="btn btn-ghost m-auto flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" class=" h-12 w-12" @click="click_menu" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>


        </div>
        <ul class="menu menu-compact lg:menu-normal w-full drop-shadow-md	">
          <li v-for="route in nav_router">
            <a class="text-lg" :class="{ 'active': route.name === current_route_name }"
              @click="click_menu_nav_item(route)">{{ route.title }}</a>
          </li>
        </ul>
        <div class="flex gap-5 p-6">
          <a href="https://instagram.com/chadopedia?igshid=ZDdkNTZiNTM=">
            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" class="w-8 h-8">
          </a>
          <a href="https://www.facebook.com/chadopedia">
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" class="w-8 h-8">
            </a>
        </div>
        <footer-view />

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

