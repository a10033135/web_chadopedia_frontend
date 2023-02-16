<script lang="ts" setup>

import {AdvancedImage} from "@cloudinary/vue";
import {cld} from "@/plugins/cloudinary";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const param = defineProps(['category'])
const image_url = cld.image(param.category.image_url).resize(thumbnail().width(500).height(500).gravity(focusOn(FocusOn.face())))

</script>

<template>
  <!--  主頻道列表  -->
  <div class="h-full drop-shadow-md">
    <div class="card bg-white  my-2 cursor-pointer rounded-2xl  ">
      <figure>
        <AdvancedImage v-if="param.category.has_image" class="img" :cld-img="image_url"/>
      </figure>

      <div class="card-body p-4">
        <p class="card-title ">{{ param.category.title }}</p>
        <p class="text-md">{{ param.category.desc }}</p>

      </div>

    </div>

  </div>

</template>

<style scoped>
.img {
  width: theme('width.full');
}
</style>