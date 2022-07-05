<template>
  <div id="__root">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
#__root {
  position: relative;
  background: url("@/assets/img/texture.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100vh;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include above(small) {
    min-height: 700px;
  }
}
</style>
