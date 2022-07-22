<template>
  <div class="mantraRoot">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
      reverse-title
    />
    <MantraSimpleImage :slide="slide" />
    <MantraSimpleText :index="index" no-illus />
    <MantraImageCitation is-last-block :index="index" :slide="slide" />
    <MantraControls @on-next="() => nextSlide()" @on-prev="() => prevSlide()" />
  </div>
</template>

<script>
export default {
  name: "Mantra_3",
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
.mantraSimpleTextRoot {
  padding-top: 144px;
}
.mantraImageCitationRoot {
  margin-bottom: 12px;
}
</style>
