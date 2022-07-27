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
export default {
  name: "CustomLayout",
  setup() {
    const loading = ref(true);

    onMounted(() => {
      disableScroll(true);
    });

    setTimeout(() => {
      loading.value = false;
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
