<script lang="ts" setup>

import {useRouter} from "vue-router";

const router = useRouter()
</script>
<template>
  <div class="h-screen w-full">
    <div class=" grid-cols-3 relative left-0 bottom-0 bg-white md:grid">
      <div class="btn rounded-none rounded-sm my-2  flex w-full place-items-center drop-shadow-md"
           @click="router.push('/feature/pedia')">
        <p class="w-full text-center ">茶道知識</p>
      </div>
      <div class="btn btn-disabled rounded-sm my-2 flex w-full place-items-center drop-shadow-md"
           @click="router.push('/feature/pedia')">
        <p class="w-full text-center ">茶道知識</p>
      </div>
      <div class="btn btn-disabled rounded-sm my-2 flex w-full place-items-center drop-shadow-md"
           @click="router.push('/feature/pedia')">
        <p class="w-full text-center ">茶道知識</p>
      </div>
    </div>
    <div class="flex-1 h-full w-full bg-gray-200 px-12 md:px-24 lg:px-48">

      <suspense>
        <router-view class="h-full w-full" #default/>
        <template #fallback>
          <div class="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            <div class="h-48 rounded-t dark:bg-gray-700"></div>
            <div class="flex-1 px-4 py-8 space-y-4 sm:p-8">
              <div class="w-full h-6 rounded"></div>
              <div class="w-full h-6 rounded"></div>
              <div class="w-3/4 h-6 rounded"></div>
            </div>
          </div>
        </template>
      </suspense>


    </div>

  </div>
</template>

