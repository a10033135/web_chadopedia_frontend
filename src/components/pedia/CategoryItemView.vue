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
    <div class="  h-full my-2 cursor-pointer   ">
      <figure>
        <AdvancedImage v-if="param.category.has_image" class="img" :cld-img="image_url"/>
      </figure>

      <div>
        <p class="text-lg font-bold pt-4">{{ param.category.title }}</p>
        <p class="text-md pt-1">{{ param.category.desc }}</p>

      </div>

    </div>

  </div>

</template>

<style scoped>
.img {
  width: theme('width.full');
}
</style>