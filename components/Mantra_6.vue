<template>
  <div class="mantraRoot" ref="el">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
    />
    <MantraImageCitation is-reverse :slide="slide" :index="index" second-illus-top is-mantra-6 last-text-full/>
    <MantraSimpleImage :slide="slide" />
    <MantraControls @on-next="() => nextSlide()" @on-prev="() => prevSlide()" :currentSlide="currentSlide"/>
  </div>
</template>

<script>
import { useResizeObserver, useIntersectionObserver } from '@vueuse/core'
import { useStore } from "@/stores/store";
export default {
  name: "Mantra_6",
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

    return { nextSlide, prevSlide, el };
  },
};
</script>

<style lang="scss" scoped>

.mantraImageCitationRoot{
  @include above(big){
    padding-top: 104px;
  }
}
.mantraSimpleTextRoot {
  padding-top: 144px;
}
</style>
