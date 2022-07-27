import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    showBackToHeader: false,
    mantraSize: 5905,
    showMenu: false,
    loading: true
  }),

  actions: {
    setShowBackToHeader(value) {
      this.showBackToHeader = value
    },
    setMantraSize(value) {
      this.mantraSize = value
    },
    setShowMenu(value) {
      this.showMenu = value
    },
    setLoading(value) {
      this.loading = value
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
