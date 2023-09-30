<script lang="ts" setup>

import { AdvancedImage } from "@cloudinary/vue";
import { cld } from "@/plugins/cloudinary";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const param = defineProps(["category"]);
const image_url = cld.image(param.category.image_url).resize(thumbnail().width(250).height(250).gravity(focusOn(FocusOn.face())));

</script>

<template>
  <!--  主頻道列表  -->
  <div>
    <div class="flex  cursor-pointer  ">

      <div class=" p-4 xl:w-screen">
        <p class="card-title ">{{ param.category.title }}</p>
        <p class="text-sm lg:text-lg">{{ param.category.desc }}</p>
      </div>

      <div v-if="param.category.has_image"
           class="h-32 aspect-square m-4">
        <AdvancedImage
          :cld-img="image_url" />
      </div>

    </div>

    <img class="w-8 h-8 ml-auto mr-8" src="src/assets/icon/ic_click.png">

    <div class="divider"></div>

  </div>

</template>

<style scoped>

</style>