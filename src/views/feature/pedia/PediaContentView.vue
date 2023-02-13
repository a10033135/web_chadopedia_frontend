<script lang="ts" setup>

import {reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
import {SubCategory} from "@/model/SubCategory";
import {collection, getDocs, query, where, orderBy} from "firebase/firestore";
import {firestore} from "@/firestorePlugin/fire_store";
import {ChadoContent, doc2ChadoContent} from "@/model/ChadoContent";

const route = useRoute()
const router = useRouter()

const state = reactive({
  id: route.params.id,
  sub_id: route.params.sub_id,
  sub_categories: [] as ChadoContent[]
})

const docs = await getDocs(query(collection(firestore, 'ChadoContent'), where('sub_categories', 'array-contains', route.params.sub_id)))
const mains = docs.docs.map(doc2ChadoContent)
console.log(mains)
state.sub_categories = mains

function on_click_pedia_list(item: ChadoContent) {
  router.push(`/content/${item.id}`)
}

</script>

<template>
  <div class="w-screen h-screen bg-blue-200 px-32 ">
    <div class="grid grid-cols-3 gap-10 w-fit m-auto">
      <div v-for="item in state.sub_categories" class="place-items-center bg-white h-48 w-48 rounded-xl"
           @click="on_click_pedia_list(item)">
        <p class="w-full text-center"> {{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
