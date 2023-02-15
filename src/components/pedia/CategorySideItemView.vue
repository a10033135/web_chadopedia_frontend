<script lang="ts" setup>

import {AdvancedImage} from "@cloudinary/vue";
import {cld} from "@/plugins/cloudinary";

const param = defineProps(['category'])
const image_url = cld.image(param.category.image_url)

</script>

<template>
  <!--  主頻道列表  -->
  <div class="h-full w-full">
    <div class="card sm:card-side bg-white my-2 cursor-pointer rounded-md">

      <figure class="sm:w-1/5 aspect-square rounded-2xl">
        <AdvancedImage v-if="param.category.has_image" class="img" :cld-img="image_url"/>
      </figure>

      <div class="card-body p-4 w-4/5">
        <p class="card-title line-clamp-1">{{ param.category.title }}</p>
        <p class="text-sm">{{ param.category.desc }}</p>

      </div>

    </div>

  </div>

</template>

<style scoped>
.img {
  height: theme('height.full');
}
</style>