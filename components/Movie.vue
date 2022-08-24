<template>
  <div class="movieRoot" id="movie">
    <div style="padding: 56.25% 0 0 0; position: relative">
      <iframe
        src="https://player.vimeo.com/video/736442874?h=8a8f59f665&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&byline=0&title=false"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        autoplay
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        title="Ronan by Clinet - EN"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#movie {
  scroll-margin-bottom: 0px;
}
.movieRoot {
  @include above(big) {
    padding: 200px 142px;
  }
  position: relative;
  &:before {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -70%;
    z-index: 11;

    @include above(big) {
      top: -10%;
      height: 200px;
    }
  }

  &:after {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -70%;

    @include above(big) {
      bottom: -20%;
      height: 220px;
    }
  }

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
