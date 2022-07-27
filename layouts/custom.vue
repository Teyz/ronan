<template>
  <div id="__root">
    <div class="background"></div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
#__root{
  position: relative;
}

.background{
  background-image: url("@/assets/img/texturelonguex2.webp");
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-size: cover;
  background-position: center;
  z-index: -1;

  @include above(small){
    background-image: url("@/assets/img/texture.webp");
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100vw;
  }
}
</style>
