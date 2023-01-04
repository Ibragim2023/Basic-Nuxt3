import { createGlobalState } from "@vueuse/core"
import { ref } from "vue"

export const globalState = createGlobalState(
    () => {
        let cart = ref([])
        let page = ref(1)
        return { page, cart }
    }
)