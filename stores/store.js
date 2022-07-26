import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    showBackToHeader: false,
  }),

  actions: {
    setShowBackToHeader(value) {
      this.showBackToHeader = value
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
