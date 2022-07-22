<template>
  <div class="mantraRoot">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
    />
    <MantraContent :slide="slide" :index="index" />
    <MantraSimpleText :index="index" :slide="slide" />
    <MantraImageText :index="index" :slide="slide" />
    <MantraControls @on-next="() => nextSlide()" @on-prev="() => prevSlide()" />
  </div>
</template>

<script>
export default {
  name: "Mantra",
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
