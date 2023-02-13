<script lang="ts" setup>
import {collection, getDocs} from 'firebase/firestore'
import {firestore} from "@/firestorePlugin/fire_store";
import {reactive} from "vue";
import {doc2MainCategory, MainCategory} from "@/model/MainCategory";
import {useRouter} from "vue-router";

const router = useRouter()

const state = reactive({
  main_categories: [] as MainCategory[]
})

const docs = await getDocs(collection(firestore, 'MainCate'))
const mains = docs.docs.map(doc2MainCategory)
state.main_categories = mains

function click_main_categories(item: MainCategory) {
  router.push(`/pedia/${item.id}`)
}

</script>


<template>
  <div>
    <div class="flex bg-white my-2 p-8 rounded-lg m-2" @click="click_main_categories(item)"
         v-for="item in state.main_categories">
      <img class="h-12 w-12 "
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png">
      <div class="mx-4 ">
        <p>{{ item.title }}</p>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>


</template>

