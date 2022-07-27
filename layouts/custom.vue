<template>
  <div id="__root">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
#__root{
  background: url("@/assets/img/textureMobile.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  @include above(big){
    background: url("@/assets/img/texture.webp");
    background-attachment: fixed;
    background-size: cover;
    width: 100vw;
    height: 100vh;
  }
}
</style>
