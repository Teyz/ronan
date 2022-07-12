<template>
  <div class="movieRoot">
    <video controls width="1156" id="movie">
      <source src="@/assets/img/movie.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
</template>

<style lang="scss" scoped>
.movieRoot {
  padding: 104px 24px;

  @include above(big) {
    padding: 200px 142px;
  }
  position: relative;
  &:after {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20%;

    @include above(big) {
      top: -5%;
      height: 180px;
    }
  }

  video {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    display: block;

    @include above(small) {
      max-width: 500px;
    }

    @include above(big) {
      max-width: 1156px;
    }

    @include above(large) {
      max-width: 1500px;
    }
  }
}
</style>
