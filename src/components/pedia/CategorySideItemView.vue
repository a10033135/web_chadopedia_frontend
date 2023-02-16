<script lang="ts" setup>

import {AdvancedImage} from "@cloudinary/vue";
import {cld} from "@/plugins/cloudinary";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const param = defineProps(['category'])
const image_url = cld.image(param.category.image_url).resize(thumbnail().width(250).height(250).gravity(focusOn(FocusOn.face())))


</script>

<template>
  <!--  主頻道列表  -->
  <div class="w-full">
    <div class="card card-side bg-white cursor-pointer rounded-2xl drop-shadow-md">

      <figure class="sm:w-1/2 aspect-square ">
        <AdvancedImage v-if="param.category.has_image" class="img" :cld-img="image_url"/>
      </figure>

      <div class="card-body p-4 w-4/5">
        <p class="card-title line-clamp-1">{{ param.category.title }}</p>
        <p class="text-sm md:text-lg">{{ param.category.desc }}</p>

      </div>

    </div>

  </div>

</template>

<style scoped>
.img {
  height: theme('height.full');
  aspect-ratio: theme('aspectRatio.square');
}
</style>