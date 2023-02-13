<script lang="ts" setup>
import {firestore} from "@/firestorePlugin/fire_store";
import {ChadoContent, doc2ChadoContent, doc2Content} from "@/model/ChadoContent";
import {useRoute, useRouter} from "vue-router";
import {reactive} from "vue";
import {getDoc, doc,} from "@firebase/firestore";

const route = useRoute()
const router = useRouter()

const state = reactive({
  id: route.params.id as string,
  query: route.query,
  pedia_content: ChadoContent.newInstance(),
})

const docSnap = await getDoc(doc(firestore, "ChadoContent", state.id));

const mains = doc2Content(docSnap)
state.pedia_content = mains


</script>

<template>
  <div class="h-screen w-screen bg-gray-200">
    <p>{{ state.query }}</p>
    <p>{{ state.pedia_content.title }}</p>
    <p>{{ state.pedia_content.desc }}</p>
  </div>
</template>