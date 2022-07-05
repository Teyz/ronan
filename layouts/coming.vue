<template>
  <div id="__root">
    <div class="background"></div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
#__root {
  position: relative;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("@/assets/img/texture.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
