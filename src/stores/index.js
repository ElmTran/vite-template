import { defineStore } from 'pinia'
import getters from './getters'
import user from './modules/user'
export const useStore = defineStore('store', () => {
    return {
        ...getters,
        ...user,
    }
})