<template>
  <div class="movieRoot">
    <!-- <video controls width="1156" id="movie">
      <source src="https://vimeo.com/369521302" />
    </video> -->
  </div>
</template>

<style lang="scss" scoped>
.movieRoot {
   padding: 24px 0 0 0 ;

  // @include above(big) {
  //   padding: 200px 142px;
  // }
  position: relative;
  &:before {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -150%;
    z-index: 11;

    @include above(big) {
      top: -200%;
      height: 200px;
    }
  }

  // &:after {
  //   content: "";
  //   width: 1px;
  //   height: 135px;
  //   background-color: $secondary;
  //   position: absolute;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   bottom: -20%;

  //   @include above(big) {
  //     bottom: -5%;
  //     height: 180px;
  //   }
  // }

  video {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
}

#movie {
  scroll-margin-top: 120px;
}
</style>
