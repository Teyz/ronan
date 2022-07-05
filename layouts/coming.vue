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
  z-index: -1;
  background: url("@/assets/img/texture.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
