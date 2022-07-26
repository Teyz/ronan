import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    showBackToHeader: false,
    mantraSize: 5905
  }),

  actions: {
    setShowBackToHeader(value) {
      this.showBackToHeader = value
    },
    setMantraSize(value) {
      this.mantraSize = value
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
