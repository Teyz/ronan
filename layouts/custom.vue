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
  background: url("@/assets/img/texturelonguex2.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;

  @include above(small){
    background: url("@/assets/img/texture.webp");
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
  }
}
</style>
