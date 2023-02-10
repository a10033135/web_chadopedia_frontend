import {defineStore} from "pinia";
import {inject} from "vue";
import theme_utils from "@/utils/theme_utils";
import type {VueCookies} from "vue-cookies";

export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            value: theme_utils.dark,
        }
    },
    getters: {
        getTheme(state) {
            const $cookies = inject<VueCookies>('$cookies');
            return $cookies?.get('theme') ?? state.value
        }
    },
    actions: {
        set_theme_utils(theme: string) {
            this.value = theme
            const $cookies = inject<VueCookies>('$cookies');
            $cookies?.set('theme', theme)
        },

    }
})
