<template>
  <NuxtLayout name="custom">
    <ScrollToTop />
    <Transition name="fade">
      <Loader v-if="loading" />
    </Transition>
    <Hero />
    <Movie />
    <MantraSlider />
    <Contact />
  </NuxtLayout>
</template>

<script>
import { disableScroll } from "@/utils";
import { onMounted } from "vue";
import { useStore } from "@/stores/store";
export default {
  name: "CustomLayout",
  setup() {
    const store = useStore()
    const loading = computed(() => store.$state.loading);
    const route = useRoute();

    onMounted(() => {
      if (route.hash) {
        setTimeout(() => this.scrollTo(route.hash), 1)
      }
      disableScroll(true);
    });

    setTimeout(() => {
      store.setLoading(false);
      disableScroll(false);
    }, 2500);
    
    return { loading };
  },
};
</script>

<style lang="scss" scoped>
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
