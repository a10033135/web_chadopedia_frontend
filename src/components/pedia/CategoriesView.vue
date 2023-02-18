<script lang="ts" setup>

import CategoryItemView from "@/components/pedia/CategoryItemView.vue";
import type {CategoryItem} from "@/model/CategoryItem";
import CategorySideItemView from "@/components/pedia/CategorySideItemView.vue";
import type {MainCategory} from "@/model/MainCategory";
import type {SubCategory} from "@/model/SubCategory";

const props = defineProps<{
  main_categories: CategoryItem[],
  sub_categories: CategoryItem[],
  chado_contents: CategoryItem[],
  main_category: MainCategory | undefined,
  sub_category: SubCategory | undefined
}>()

</script>

<template>
  <div >
    <!--  主頻道列表  -->
    <div  class="lg:static xl:flex gap-20 pb-12 ">
      <div v-if="sub_categories.length>0||chado_contents.length>0" class="xl:static xl:basis-2/5">
        <div  class="xl:absolute xl:w-1/5">
          <div v-if="main_category">
            <p class="text-2xl font-bold"> {{ props.main_category.title }} </p>
            <p class="text-lg py-2"> {{ props.main_category.desc }} </p>
          </div>
          <div class="divider"></div>

          <div v-if="sub_category" class="py-4">
            <p class="text-2xl font-bold"> {{ props.sub_category.title }} </p>
            <p class="text-lg py-2"> {{ props.sub_category.desc }} </p>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div v-if="props.main_categories.length > 0"
             class="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 pb-2">
          <category-item-view
            class="transition ease-in-out lg:hover:scale-110 duration-300"
              v-for="item in props.main_categories"
              :category="item"
              @click="$emit('click_main_category',item.id)" />
        </div>

        <div v-if="props.chado_contents.length > 0"
             class="xl:basis-3/5 grid xl:grid-cols-1 gap-4 mt-4">
          <category-side-item-view
            class="transition ease-in-out lg:hover:scale-110 duration-300"
            v-for="item in props.chado_contents"
              :category="item"
              @click="$emit('click_chado_content',item.id)" />
        </div>

        <div v-if="props.sub_categories.length > 0"
             class="xl:basis-3/5 grid xl:grid-cols-1 gap-4 mt-4 ">
          <category-side-item-view
            class="transition ease-in-out lg:hover:scale-110 duration-300"
            v-for="item in props.sub_categories"
              :category="item"
              @click="$emit('click_sub_category',item.id)" />
          <div class="h-12"/>
        </div>

      </div>

    </div>
  </div>

</template>

<style scoped>

@media screen {
  .item-view-height {
    height: 90vh;
  }
}


</style>