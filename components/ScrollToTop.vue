<template>
  <img src="@/assets/img/fleche.svg" alt="" @click="scrollToTop" />
</template>

<script setup>
const scrollToTop = () => {
  const mantraHeader = document.getElementById("mantraHeader");
   mantraHeader.scrollIntoView();
};
</script>

<style lang="scss" scoped>
img {
  position: fixed;
  right: 72px;
  bottom: 5%;
  transform: rotate(180deg);
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 1;
  height: 47px;
  width: 20px;

  &:hover {
    bottom: 6%;
  }
}
</style>
