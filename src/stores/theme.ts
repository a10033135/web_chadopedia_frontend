import {defineStore} from "pinia";
import {inject} from "vue";
import theme_utils from "@/utils/theme_utils";
import type {VueCookies} from "vue-cookies";

export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            value: theme_utils.light,
        }
    },
    getters: {
        getTheme(state) {
            const $cookies = inject<VueCookies>('$cookies');
            return $cookies?.get('theme') ?? state.value
        }
    },
    actions: {
        toggle_theme() {
            let new_theme = ''
            if (this.value == theme_utils.light) {
                new_theme = theme_utils.dark
            } else {
                new_theme = theme_utils.light
            }
            this.value = new_theme
            const $cookies = inject<VueCookies>('$cookies');
            $cookies?.set('theme', new_theme)
            console.log('new_theme', new_theme)
        },

    }
})
