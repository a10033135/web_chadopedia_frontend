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
  <div>
    <!--  主頻道列表  -->
    <div class="h-full w-full xl:flex gap-20">

      <div v-if="props.main_category || props.sub_category" class="xl:basis-1/3">
        <div v-if="props.main_category" class="py-4">
          <p class="text-2xl font-bold"> {{ props.main_category.title }} </p>
          <p class="text-lg py-2"> {{ props.main_category.desc }} </p>
        </div>

        <div v-if="props.sub_category" class="py-4">
          <p class="text-2xl font-bold"> {{ props.sub_category.title }} </p>
          <p class="text-lg py-2"> {{ props.sub_category.desc }} </p>
        </div>
      </div>

      <div class="xl:basis-2/3">


        <div class=" grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          <category-item-view
              v-for="item in props.main_categories"
              :category="item"
              @click="$emit('click_main_category',item.id)"
          />
        </div>


        <div class="grid grid-cols-1  gap-4">
          <category-side-item-view
              v-for="item in props.sub_categories"
              :category="item"
              @click="$emit('click_sub_category',item.id)"
          />
        </div>

        <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          <category-item-view
              v-for="item in props.chado_contents"
              :category="item"
              @click="$emit('click_chado_content',item.id)"
          />
        </div>

      </div>

    </div>


  </div>

</template>