<template>
  <img class="scrollTop" src="@/assets/img/fleche.svg" alt="" @click="scrollToTop" v-if="showBackToHeader" />
</template>

<script setup>
import { useStore } from "@/stores/store";
const store = useStore()
const showBackToHeader = ref(false);

const test = computed(() => store.$state.showBackToHeader);

watch(test, (newValue) => {
  showBackToHeader.value = newValue
});

const scrollToTop = () => {
  const mantraHeader = document.getElementById("mantraHeader");
  mantraHeader.scrollIntoView();
};
</script>

<style lang="scss" scoped>
img {
  position: fixed;
  right: 24px;
  bottom: 5%;
  transform: rotate(180deg);
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 1;
  height: 47px;
  width: 20px;

  @include above(small){
    right: 72px;
  }

  &:hover {
    bottom: 6%;
  }
}
</style>
