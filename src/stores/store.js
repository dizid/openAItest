import { defineStore } from 'pinia'

export const useURLStore = defineStore('url', {
    state: () => ({
        query: 'defaultpiniastorevalue'

    }),

    getters: {
        doubleCount: (state) => state.count * 2,
    },

    actions: {
        increment() {
            this.count++
        },
    },
})