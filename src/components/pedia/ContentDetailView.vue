<script lang="ts" setup>

import type {MainCategory} from "@/model/MainCategory";
import type {SubCategory} from "@/model/SubCategory";
import type {ChadoContent} from "@/model/ChadoContent";
import {cld} from "@/plugins/cloudinary";
import {AdvancedImage} from "@cloudinary/vue";
import {genChadoContentPath} from "@/utils/cloudinary_utils";
import {reactive, watch} from "vue";
import {CloudinaryImage} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

const props = defineProps<{
  chado_content: ChadoContent | undefined,
  main_category: MainCategory | undefined,
  sub_category: SubCategory | undefined
}>()

watch(props, value => {
  state.image_url = cld.image(genChadoContentPath(props.chado_content?.id ?? '')).resize(thumbnail().width(500).height(500).gravity(focusOn(FocusOn.face())))
})

const state = reactive({
  image_url: undefined as CloudinaryImage | undefined
})


</script>
<template>
  <div class="lg:flex" v-if="chado_content">
    <div class="basis-1/3">
      <div v-if="main_category||sub_category" class="xl:basis-1/3">
        <div v-if="main_category" class="py-4">
          <p class="text-2xl font-bold"> {{ props.main_category.title }} </p>
          <p class="text-lg py-2"> {{ props.main_category.desc }} </p>
        </div>

        <div v-if="sub_category" class="py-4">
          <p class="text-2xl font-bold"> {{ props.sub_category.title }} </p>
          <p class="text-lg py-2"> {{ props.sub_category.desc }} </p>
        </div>
      </div>
    </div>
    <div class="basis-2/3 py-3 lg:px-24 lg:py-0">
      <p class="font-bold lg:text-4xl text-2xl text-start ">{{ (props.chado_content.title) }}</p>
      <p class="text-xl  text-start lg:py-12 py-2 block text-start ">{{ props.chado_content.desc }}</p>
      <AdvancedImage v-if="chado_content.has_image" class="img" :cld-img="state.image_url"/>
    </div>
  </div>
</template>

<style scoped>
.img {
  height: theme('height.2/4');
  margin: auto;
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>