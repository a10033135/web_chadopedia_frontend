<script lang="ts" setup>
import PediaListView from "../../components/PediaListView.vue";
import {useFirestore} from "@/stores/use_firestore";
import {firestore} from "@/firestorePlugin/fire_store";

const fire_store = useFirestore()

await fire_store.update_chado_contents(firestore)
await fire_store.update_main_categories(firestore)
await fire_store.update_sub_categories(firestore)


</script>
<template>
  <div class="bg-gray-200 h-screen w-screen md:px-36 2xl:px-72 flex">
    <div class="flex-0 bg-red-200 w-48 relative left-0 bottom-0 p-2">
      <div class="flex h-24 w-full bg-white rounded-lg place-items-center">
        <p class="w-full text-center ">茶道知識</p>
      </div>
    </div>
    <div class="flex-1 h-screen w-full bg-blue-200">

      <suspense>
        <pedia-list-view #default></pedia-list-view>

        <template #fallback>
          loading
        </template>

      </suspense>


    </div>
  </div>
</template>

