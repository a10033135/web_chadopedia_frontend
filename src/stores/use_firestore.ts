import {defineStore} from 'pinia';
import {collection, doc, Firestore, getDoc, getDocs, onSnapshot, orderBy, query} from "@firebase/firestore";
import {doc2MainCategory, MainCategory} from "@/model/MainCategory";
import {doc2SubCategory, SubCategory} from "@/model/SubCategory";
import {ChadoContent, doc2ChadoContent} from "@/model/ChadoContent";

export const useFirestore = defineStore('firestore_store', {
    state: () => {
        return {
            main_categories: null as MainCategory[] | null,
            sub_categories: null as SubCategory[] | null,
            chado_contents: null as ChadoContent[] | null
        }
    },
    getters: {
        get_main_categories: state => state.main_categories,
        get_sub_categories: state => state.sub_categories,
        get_matcha_contents: state => state.chado_contents
    },
    actions: {
        async update_main_categories(firestore: Firestore) {
            console.log('update_main_categories', 'start')
            const q = await getDocs(query(collection(firestore, 'MainCate'), orderBy('sort', "asc")))
            this.main_categories = q.docs.map(doc2MainCategory)
        },
        async update_sub_categories(firestore: Firestore) {
            console.log('update_sub_categories', 'start')
            const q = await getDocs(query(collection(firestore, 'SubCate'), orderBy('sort', "asc")))
            this.sub_categories = q.docs.map(doc2SubCategory)
        },
        async update_chado_contents(firestore: Firestore) {
            console.log('update_chado_categories', 'start')
            const q = await getDocs(collection(firestore, 'ChadoContent'))
            this.chado_contents = q.docs.map(doc2ChadoContent)
        }
    }
})