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
          <h1 class="text-4xl font-bold">東凡堂</h1>
          <p class="xl:text-lg py-6">
            東明於學習日本茶道過程中，發現缺乏系統性與易於查詢的日本茶道中文資源，故與工程師阿凡成立【茶道事典百科－Chadopedia】網站，希望以更數位的方式分享日本茶道的心得與知識，以及日本古美術收藏，以惠華文世界的讀者。          </p>

          <p class="xl:text-lg py-6">
            網站資料持續更新中，歡迎利用分享。惟本人才疏學淺，有任何資料上錯誤不妥處，還請大家留言多多指教！
          </p>
          <div class="flex gap-5">
            <a href="https://instagram.com/chadopedia?igshid=ZDdkNTZiNTM="><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" class="w-8 h-8"></a>
            <a href="https://www.facebook.com/chadopedia"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" class="w-8 h-8"></a>
          </div>
        </div>
        <img src="https://res.cloudinary.com/di0d7y9qa/image/upload/v1676620371/home_background_mty1uz.jpg"
             class="lg:max-w-2xl  shadow-2xl"/>

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