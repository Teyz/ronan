<template>
  <div class="mantraRoot">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
    />
    <MantraSimpleImage :slide="slide" />
    <MantraSimpleText no-illus :index="index" />
    <MantraImageCitation
      :index="index"
      :slide="slide"
      no-second-small
      is-last-block
    />
    <MantraControls @on-next="() => nextSlide()" @on-prev="() => prevSlide()" />
  </div>
</template>

<script>
export default {
  name: "Mantra_5",
  props: {
    currentSlide: {
      type: Number,
      default: 0,
    },
    slide: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const nextSlide = () => {
      emit("onNext");
    };

    const prevSlide = () => {
      emit("onPrev");
    };

    return { nextSlide, prevSlide };
  },
};
</script>

<style lang="scss" scoped>
.mantraHeader {
  margin-bottom: 0px;

  @include above(big){
    margin-bottom: 360px;
  }
}

.mantraSimpleTextRoot {
  padding-top: 144px;
}

.mantraImageCitationRoot{
  .lastImage{
    @include above(big){
      margin-top: 72px;
    }
  }

}
</style>
