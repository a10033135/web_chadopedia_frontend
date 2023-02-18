<script lang="ts" setup>

const props = defineProps<{
  is_vertical: boolean,
}>()
</script>

<template>
  <!--  footer  -->
  <div class="gap-12 px-4 z-50 " :class="{
    'lg:flex' : props.is_vertical ?? false
  }">
    <div>
      <p class="flex-grow">©2023 東凡堂 日本茶道百科 版權所有</p>
      <router-link class="basis-fit min-w-1/3 hover:text-success underline underline-offset-2 " to="/about">
        聯絡我們
      </router-link>
    </div>
    <p class="basis-2/4">Chadopedia
      Copyright(C) 2023～ TUNGFANHALL Chadopedia. All rights reserved. Never reproduce or republicate without
      written
      permission.</p>
  </div>
</template>