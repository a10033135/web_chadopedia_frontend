<script setup lang="ts">

import { reactive, watch } from "vue";
import { useThemeStore } from "@/stores/theme";
import { useRoute, useRouter } from "vue-router";

const theme = useThemeStore();
const state = reactive({ theme_mode: theme.getTheme });

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
  { name: "intro", title: "首頁", url: "/" },
  { name: "pedia", title: "茶道知識", url: "/pedia" },
  { name: "about", title: "關於我們", url: "/about" }
];

</script>

<template>
  <div class="h-screen">
    <!-- Header   -->
    <div class="flex navbar-height bg-base-200 opacity-80">
      <div class="flex-none m-auto">
        <button class="btn btn-square btn-ghost md:hidden block" @click="click_menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-8 h-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="flex-1 m-auto">
        <a class="btn btn-ghost normal-case text-2xl " @click="click_menu_nav_item('/')">日本茶道事典</a>
      </div>
    </div>

    <div class="h-screen overflow-x-auto">
      <div class="flex body lg:static ">
        <!--   sidebar   -->
        <div class="absolute w-1/6 body xl:basis-1/6 bg-base-300 hidden lg:block">
          <div class="router-view-height pb-24">
            <ul class="menu body bg-base-100 w-full">
              <li v-for="route in nav_router">
                <a class="text-lg" :class="{'active':route.name == current_route_name}"
                   @click="click_menu_nav_item(route.url)">{{ route.title }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:basis-1/6"></div>
        <div class="lg:basis-5/6 xl:basis-5/6">
          <router-view class="router-view-height z-0" />
        </div>
      </div>
      <!--  footer  -->
      <div class="lg:flex gap-12 p-4 z-50 ">
        <p class="hidden lg:block w-1/6"></p>
        <div>
          <p class="flex-grow">©2023東凡堂 日本茶道百科 版權所有</p>
          <router-link class="basis-fit min-w-1/3 hover:text-success underline underline-offset-2 text-black" to="/about">
            聯絡我們
          </router-link>
        </div>
        <p class="basis-2/4">Chadopedia
          Copyright(C) 2023～ TUNGFANHALL Chadopedia. All rights reserved. Never reproduce or republicate without
          written
          permission.</p>

      </div>
    </div>


    <transition name="slide">
      <div v-show="menu_state.is_open" class="absolute static left-0 top-0 h-screen z-50">
        <div class="h-screen w-screen bg-gray-800 opacity-50 z-40" @click="click_menu" />
      </div>
    </transition>

    <transition name="slide">
      <div v-show="menu_state.is_open" class="absolute static left-0 top-0 h-screen w-2/3 bg-base-300 z-50">
          <p class="text-3xl font-bold text-black">抹茶知識百科</p>
          <ul class="menu menu-compact lg:menu-normal bg-base-100 w-full drop-shadow-md	">
            <li v-for="route in nav_router">
              <a class="text-lg" :class="{'active':route.name == current_route_name}"
                 @click="click_menu_nav_item(route.url)">{{ route.title }}</a>
            </li>
          </ul>
          <label class="btn w-full rounded-none" @click="click_menu">關閉</label>
        </div>
    </transition>


  </div>
</template>

<style scoped>
.navbar-height {
  height: 10%;
}

.body {
  min-height: 90%;
}

.router-view-height {
  min-height: 100%;
}

.slide-leave-active,
.slide-enter-active {
  transition: all .9s ease;
  /*transition: opacity 1s;*/
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  /*opacity: 0;*/
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
  /*opacity: 1;*/
}

</style>

