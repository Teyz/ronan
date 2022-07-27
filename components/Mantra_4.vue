<template>
  <div class="mantraRoot" ref="el">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
      red-middle-title
    />
    <MantraSimpleText :index="index" no-illus />
    <MantraImageText is-citation :index="index" :slide="slide" is-mantra-4/>
    <MantraSimpleImage :slide="slide" />
    <MantraControls @on-next="() => nextSlide()" @on-prev="() => prevSlide()" :currentSlide="currentSlide" />
  </div>
</template>

<script>
import { useResizeObserver, useIntersectionObserver } from '@vueuse/core'
import { useStore } from "@/stores/store";
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
    const el = ref(null)
    const mantraSize = ref();
    const store = useStore()

    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }], observerElement) => {
        if(isIntersecting){
          store.setMantraSize(mantraSize.value);
        }

      },
    )

    useResizeObserver(el, (entries) => {
      const entry = entries[0]
      const { height } = entry.contentRect
      mantraSize.value = height;
    })
    const nextSlide = () => {
      emit("onNext");
    };

    const prevSlide = () => {
      emit("onPrev");
    };

    return { nextSlide, prevSlide , el};
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
