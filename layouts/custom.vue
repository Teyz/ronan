<template>
  <div id="__root">
    <Header />
    <slot />
    <Footer />
    <ScrollToTop />
  </div>
</template>

<style lang="scss" scoped>
#__root{
  background: url("@/assets/img/textureMobile.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @include above(big){
    background: url("@/assets/img/texture.webp") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
</style>
