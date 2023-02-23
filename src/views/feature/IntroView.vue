<script setup lang="ts">

import {useRouter} from "vue-router";
import FooterView from "@/components/FooterView.vue";

const router = useRouter();

const is_vertical = false

function click_start() {
  router.push('/pedia')
}
</script>

<template>
  <div class="body overflow-x-auto">
    <div class="hero h-fit lg:h-full py-12 ">
      <div class="hero-content flex-col xl:flex-row ">
        <div>
          <h1 class="text-4xl font-bold">日本茶道學習第一站。</h1>
          <p class="xl:text-lg py-6">
            茶杓銘、季語、家元等必備術語日文念法通通有，分門別類簡單好查詢，圖文介紹好理解。茶道事典百科－Chadopedia分享給您最正確的日式茶道知識與風雅趣聞。</p>
          <button class="hidden xl:block ease-in duration-1000 btn btn-primary" @click="click_start">Get Started
          </button>
        </div>
        <img src="https://res.cloudinary.com/di0d7y9qa/image/upload/v1676620371/home_background_mty1uz.jpg"
             class="lg:max-w-2xl  shadow-2xl"/>
        <button class="xl:hidden block ease-in duration-1000 btn btn-primary" @click="click_start">Get Started</button>

      </div>
    </div>
    <footer-view class="bg-base-100" :is_vertical="true"/>
  </div>

</template>


<style scoped>
.body{
  height: 90vh;
}
</style>