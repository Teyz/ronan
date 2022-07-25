<template>
  <div class="mantraRoot">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
      red-middle-title
    />
    <MantraSimpleText :index="index" no-illus />
    <MantraImageText is-citation :index="index" :slide="slide" />
    <MantraSimpleImage :slide="slide" />
    <MantraControls @on-next="() => nextSlide()" @on-prev="() => prevSlide()" />
  </div>
</template>

<script>
export default {
  name: "Mantra_4",
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
  margin-bottom: 0;

  @include above(big){
    margin-bottom: 120px;
  }
}
.mantraSimpleTextRoot {
  padding-top: 144px;

  @include above(big) {
    padding-top: 320px;
  }
}
</style>
