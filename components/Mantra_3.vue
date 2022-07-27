<template>
  <div class="mantraRoot" ref="el">
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
    <MantraImageCitation is-last-block :index="index" :slide="slide" no-second-small is-mantra-5 />
    <MantraControls @on-next="() => nextSlide()" @on-prev="() => prevSlide()" :currentSlide="currentSlide"/>
  </div>
</template>

<script>
import { useResizeObserver, useIntersectionObserver } from '@vueuse/core'
import { useStore } from "@/stores/store";
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

.mantraSimpleImageRoot{
  @include above(big){
    margin-top: 208Px;
  }
}
.mantraSimpleTextRoot {
  padding-top: 144px;
}
.mantraImageCitationRoot {
  margin-bottom: 12px;
}
</style>
