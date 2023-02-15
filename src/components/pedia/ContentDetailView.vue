<script lang="ts" setup>

import type {MainCategory} from "@/model/MainCategory";
import type {SubCategory} from "@/model/SubCategory";
import type {ChadoContent} from "@/model/ChadoContent";

const props = defineProps<{
  chado_content: ChadoContent | undefined,
  main_category: MainCategory | undefined,
  sub_category: SubCategory | undefined
}>()

</script>
<template>
  <div v-if="chado_content">
    <div>
      <p v-if="props.main_category">{{ props.main_category.title }}</p>
      <p v-if="props.sub_category">{{ props.sub_category.title }}</p>
    </div>

    <p class="text-center font-bold text-4xl">{{ (props.chado_content) }}</p>
    <p class="text-center text-xl">{{ props.chado_content }}</p>


  </div>
</template>