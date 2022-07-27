<template>
  <div class="mantraSliderRoot" :class="{ animateRightLeft, animateLeftRight }" ref="showBackTopHeader">
    <Carousel
      ref="slider"
      :mouseDrag="false"
      :touchDrag="false"
      :transition="500"
      :style="`height: ${store.$state.mantraSize}px`"
    >
      <slide v-for="(slide, key) in slides" :key="key">
        <component
          :is="slide.components"
          :slide="slide"
          :index="key + 1"
          v-bind:currentSlide="currentSlide"
          @on-next="() => nextSlide()"
          @on-prev="() => prevSlide()"
          ref="mantraRoot"
        />
      </slide>
    </Carousel>
    <WordList @go-to-slide="(goToSlideNumber) => goToSlide(goToSlideNumber)" v-bind:currentSlide="currentSlide"/>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { getSliders } from "./slides";
import Mantra_1 from "./Mantra_1.vue";
import Mantra_2 from "./Mantra_2.vue";
import Mantra_3 from "./Mantra_3.vue";
import Mantra_4 from "./Mantra_4.vue";
import Mantra_5 from "./Mantra_5.vue";
import Mantra_6 from "./Mantra_6.vue";
import { useStore } from "@/stores/store";
import { useElementSize } from '@vueuse/core'

export default {
  name: "MantraSlider",
  components: {
    Carousel,
    Slide,
    Mantra_1,
    Mantra_2,
    Mantra_3,
    Mantra_4,
    Mantra_5,
    Mantra_6,
  },
  setup() {
    const animateRightLeft = ref(false);
    const animateLeftRight = ref(false);
    const slider = ref(null);

    const slides = getSliders();

    const currentSlide = computed(() => slider?.value?.data.currentSlide.value);

    const addAnimationRightLeft = () => {
      animateRightLeft.value = true;
      setTimeout(() => {
        animateRightLeft.value = false;
      }, 1500);
    };

    const addAnimationLeftRight = () => {
      animateLeftRight.value = true;
      setTimeout(() => {
        animateLeftRight.value = false;
      }, 1500);
    };

    const goToSlide = (goToSlideNumber) => {
      addAnimationRightLeft();
      slider.value.slideTo(goToSlideNumber);
      slider.value.updateSlideWidth();
    };

    const nextSlide = () => {
      addAnimationRightLeft();
      slider.value.next();
      slider.value.updateSlideWidth();
    };

    const prevSlide = () => {
      addAnimationLeftRight();
      slider.value.prev();
      slider.value.updateSlideWidth();
    };

    const showBackTopHeader = ref(null);

    const store = useStore()

    const { stop } = useIntersectionObserver(
      showBackTopHeader,
      ([{ isIntersecting }], observerElement) => {
        store.setShowBackToHeader(isIntersecting);
      },
    )

    return {
      slider,
      nextSlide,
      currentSlide,
      animateLeftRight,
      animateRightLeft,
      prevSlide,
      slides,
      goToSlide,
      showBackTopHeader,
      store
    };
  },
};
</script>

<style lang="scss">
.mantraSliderRoot {
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    content: "";
    width: 500%;
    height: 100%;
    background-color: white;
    right: 0;
    top: 0;
    transform: translateX(100%);
    z-index: 10;
    visibility: hidden;
    opacity: 0;

    @include above(big){
      width: 400%;
    }

    @include above(large){
      width: 500%;
    }
  }

  &:before {
    position: absolute;
    content: "";
    width: 500%;
    height: 100%;
    background-color: white;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 10;
    visibility: hidden;
    opacity: 0;

    @include above(big){
       width: 400%;
    }

    @include above(large){
      width: 500%;
    }
  }


  @keyframes slideRightLeft {
    from {
      transform: translateX(100%);
      right: 0;
      top: 0;
      visibility: visible;
      opacity: 1;
    }
    to {
      transform: translateX(0%);
      right: 100%;
      visibility: visible;
      opacity: 1;
    }
  }

  @keyframes slideLeftRight {
    from {
      transform: translateX(-100%);
      left: 0;
      top: 0;
      visibility: visible;
      opacity: 1;
    }
    to {
      transform: translateX(0%);
      left: 100%;
      visibility: visible;
      opacity: 1;
    }
  }

  &.animateRightLeft {
    &:after {
      animation: 0.5s ease slideRightLeft;
    }
  }

  &.animateLeftRight {
    &:before {
      animation: 1s ease slideLeftRight;
    }
  }
}
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.carousel__slide {
  overflow: hidden;
  align-items: flex-start;
}

.carousel__viewport, .carousel__slide, .carousel__track{
  height: 100%;
}
</style>
