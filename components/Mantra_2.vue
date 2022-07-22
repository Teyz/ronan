<template>
  <div class="mantraRoot">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
    />
    <MantraContent :slide="slide" :index="index" is-reverse />
    <MantraSimpleText :slide="slide" :index="index" />
    <MantraImageText :slide="slide" :index="index" />
    <MantraControls @on-next="() => nextSlide()" @on-prev="() => prevSlide()" />
  </div>
</template>

<script>
export default {
  name: "Mantra_2",
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
