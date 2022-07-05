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
  background: url("@/assets/img/texture.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
