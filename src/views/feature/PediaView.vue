<script setup lang="ts">

import { reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import CategoriesView from "@/components/pedia/CategoriesView.vue";
import ContentDetailView from "@/components/pedia/ContentDetailView.vue";
import { CategoryItem } from "@/model/CategoryItem";
import { genChadoContentPath, genMainCategoryPath, genSubCategoryPath } from "@/utils/cloudinary_utils";
import { collection, getDocs, query, where, orderBy, getDoc, doc } from "@firebase/firestore";
import { chado_content_name, main_category_name, sub_category_name } from "@/utils/firestore_utils";
import { firestore } from "@/plugins/fire_store";
import type { ChadoContent } from "@/model/ChadoContent";
import { doc2ChadoContent } from "@/model/ChadoContent";
import type { SubCategory } from "@/model/SubCategory";
import { doc2SubCategory, docs2SubCategory } from "@/model/SubCategory";
import type { MainCategory } from "@/model/MainCategory";
import { doc2MainCategory, docs2MainCategory } from "@/model/MainCategory";

const route = useRoute();
const router = useRouter();

watch(route, route => {
  console.log(route.query);
  update_query_for_show({
    main_id: route.query.main_id as string,
    sub_id: route.query.sub_id as string,
    content_id: route.query.content_id as string
  });

}, { deep: true });

const category_state = reactive({
  main_categories: [] as MainCategory[],
  sub_categories: [] as SubCategory[],
  chado_contents: [] as ChadoContent[],
  show_main_categories: [] as CategoryItem[],
  show_sub_categories: [] as CategoryItem[],
  show_chado_contents: [] as CategoryItem[]
});

const content_detail_state = reactive({
  chado_content: undefined as ChadoContent | undefined,
  main_category: undefined as MainCategory | undefined,
  sub_category: undefined as SubCategory | undefined
});

const component_state = reactive({
  is_show_content_detail: false
});

update_query_for_show(route.query as { main_id: string, sub_id: string, content_id: string });

function click_main_category(main_id: string) {
  router.push({ path: "pedia", query: { "main_id": main_id } });
}

function click_sub_category(sub_id: string) {
  const main_id = route.query.main_id as string;
  router.push({ path: "pedia", query: { "main_id": main_id, "sub_id": sub_id } });
}

function click_chado_content(content_id: string) {
  const main_id = route.query.main_id as string;
  const sub_id = route.query.sub_id as string;
  router.push({ path: "pedia", query: { "main_id": main_id, "sub_id": sub_id, "content_id": content_id } });
}


async function update_query_for_show(url_query: { main_id: string | null, sub_id: string | null, content_id: string | null }) {
  console.log("update", url_query.content_id);

  if (url_query.main_id) {
    const main_category = await getDoc(doc(firestore, main_category_name, url_query.main_id));
    content_detail_state.main_category = doc2MainCategory(main_category);
  } else {
    content_detail_state.main_category = undefined;
  }

  if (url_query.sub_id) {
    const sub_category = await getDoc(doc(firestore, sub_category_name, url_query.sub_id));
    content_detail_state.sub_category = doc2SubCategory(sub_category);
  } else {
    content_detail_state.sub_category = undefined;
  }

  if (url_query.content_id) {
    component_state.is_show_content_detail = true;
    const chado_content = await getDoc(doc(firestore, chado_content_name, url_query.content_id));
    content_detail_state.chado_content = doc2ChadoContent(chado_content);
    return;
  } else {
    content_detail_state.chado_content = undefined;
  }

  component_state.is_show_content_detail = false;
  if (url_query.main_id == null && url_query.sub_id == null && url_query.content_id == null) {
    category_state.show_sub_categories = [];
    category_state.show_chado_contents = [];
    const main_categories = await getDocs(query(query(collection(firestore, main_category_name), where("enable", "==", true)), orderBy("sort", "asc")));
    category_state.show_main_categories = main_categories.docs.map(docs2MainCategory).map(value => new CategoryItem(value.id, value.title, value.desc, `${genMainCategoryPath(value.id)}`, value.has_image));
    console.log(category_state.show_main_categories);
  } else if (url_query.main_id && url_query.sub_id) {
    category_state.show_main_categories = [];
    category_state.show_sub_categories = [];
    const chado_contents = await getDocs(query(query(collection(firestore, chado_content_name), where("enable", "==", true)), where("sub_categories", "array-contains", url_query.sub_id)));
    category_state.show_chado_contents = chado_contents.docs.map(docs2MainCategory).map(value => {
      return new CategoryItem(value.id, value.title, value.desc, `${genChadoContentPath(value.id)}`, value.has_image);
    });
  } else if (url_query.main_id) {
    category_state.show_main_categories = [];
    const chado_contents = await getDocs(query(query(collection(firestore, chado_content_name), where("enable", "==", true)), where("main_categories", "array-contains", url_query.main_id)));
    category_state.show_chado_contents = chado_contents.docs.map(doc2ChadoContent).map(value => {
      return new CategoryItem(value.id, value.title, value.desc, `${genChadoContentPath(value.id)}`, value.has_image);
    });
    const sub_categories = await getDocs(query(query(query(collection(firestore, sub_category_name), where("enable", "==", true)), orderBy("sort", "asc")), where("main_cate_id", "==", url_query.main_id)));
    category_state.show_sub_categories = sub_categories.docs.map(docs2SubCategory).map(value => {
      return new CategoryItem(value.id, value.title, value.desc, `${genSubCategoryPath(value.id)}`, value.has_image);
    });
  } else {
    await router.push({ path: "pedia" });
  }
}

function back_to_pedia() {
  router.push("pedia");
}

function back_to_main_category() {
  if (content_detail_state.main_category) {
    router.push({
      path: "pedia", query: { "main_id": content_detail_state.main_category.id }
    });
  }
}

function back_to_sub_category() {
  if (content_detail_state.sub_category && content_detail_state.main_category) {
    router.push({
      path: "pedia", query: {
        "main_id": content_detail_state.main_category.id,
        "sub_id": content_detail_state.sub_category.id
      }
    });
  }
}

</script>

<template>
  <div class="lg:static ">
    <div v-if="content_detail_state.main_category"
         class="absolute md:block breadcrumbs text-md py-4">
      <ul>
        <li>
          <p class="badge badge-md lg:badge-lg hover:badge-outline cursor-pointer rounded-md" @click="back_to_pedia">
            回到首頁
          </p>
        </li>
        <li v-if="content_detail_state.sub_category&&content_detail_state.main_category">
          <p class="badge badge-md lg:badge-lg hover:badge-outline cursor-pointer rounded-md"
             @click="back_to_main_category">
            {{ content_detail_state.main_category?.title }}
          </p>
        </li>
        <li v-if="content_detail_state.chado_content&&content_detail_state.sub_category">
          <p class="badge badge-md lg:badge-lg hover:badge-outline cursor-pointer rounded-md"
             @click="back_to_sub_category">
            {{ content_detail_state.sub_category?.title }}
          </p>
        </li>
      </ul>
    </div>


    <categories-view
      class="pt-12 lg:pt-18"
      :class="{
            'block':!component_state.is_show_content_detail,
            'hidden':component_state.is_show_content_detail,
        }"
      @click_sub_category="click_sub_category"
      @click_main_category="click_main_category"
      @click_chado_content="click_chado_content"
      :main_categories="category_state.show_main_categories"
      :sub_categories="category_state.show_sub_categories"
      :chado_contents="category_state.show_chado_contents"
      :main_category="content_detail_state.main_category"
      :sub_category="content_detail_state.sub_category"
    />
    <content-detail-view
      class="pt-12 lg:pt-18"
      :class="{
            'block':component_state.is_show_content_detail,
            'hidden':!component_state.is_show_content_detail
        }"
      v-if="component_state.is_show_content_detail"
      :chado_content="content_detail_state.chado_content"
      :main_category="content_detail_state.main_category"
      :sub_category="content_detail_state.sub_category"
    />
  </div>
</template>