<template>
  <img src="@/assets/img/fleche.svg" alt="" @click="scrollToTop" />
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>

<style lang="scss" scoped>
img {
  position: fixed;
  right: 5%;
  bottom: 5%;
  transform: rotate(180deg);
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 1;

  &:hover {
    bottom: 6%;
  }
}
</style>
