<template>
  <div class="mantraHeader" id="mantraHeader">
    <img :src="slide.images?.mantra_header" alt="" />
    <span class="sliderStep">Mantra {{ currentSlide + 1 }}/6</span>
    <h2 v-if="reverseTitle">
      <span>{{ $t(`mantra-${index}-title`) }}</span
      >{{ $t(`mantra-${index}-subtitle`) }}
    </h2>
    <h2 v-else-if="redMiddleTitle">
      {{ $t(`mantra-${index}-title`)
      }}<span>{{ $t(`mantra-${index}-red-title`) }}</span>
      {{ $t(`mantra-${index}-subtitle`) }}
    </h2>
    <h2 v-else>
      {{ $t(`mantra-${index}-title`)
      }}<span>{{ $t(`mantra-${index}-subtitle`) }}</span>
    </h2>
    <MantraControls
      is-small
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :currentSlide="currentSlide"
    />
  </div>
</template>

<script>
import { useIntersectionObserver } from '@vueuse/core';
export default {
  name: "MantraHeader",
  props: {
    currentSlide: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
    slide: {
      type: Object,
      default: () => {},
    },
    reverseTitle: {
      type: Boolean,
      default: false,
    },
    redMiddleTitle: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const nextSlide = () => {
      emit("onNext");
    };

    const prevSlide = () => {
      emit("onPrev");
    };


    return { nextSlide, prevSlide};
  },
};
</script>

<style lang="scss" scoped>
#mantraHeader {
  scroll-margin-top: 190px;
}
.mantraHeader {
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 0;
  margin: 160px 0 148px 0;

  @include above(small) {
    padding: 0 160px;
    margin: 300px 0 360px 0;
  }

  &:after {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: none;

    @include above(big) {
      bottom: -65%;
      height: 180px;
      display: block;
    }
  }

  img {
    margin: 0 auto;
    object-fit: cover;
    max-width: 159px;
    display: block;
  }

  .sliderControls {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      position: relative;
      color: #00000029;
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        color: #260f01;

        #flecheG {
          right: 120%;
        }

        #flecheD {
          left: 130%;
        }

        path {
          stroke: #260f01;
        }
      }

      svg {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        transition: all 0.5s ease;

        path {
          stroke: #cfc9c7;
        }
      }

      #flecheG {
        right: 110%;
      }

      #flecheD {
        left: 120%;
      }
    }
  }

  .sliderStep {
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 48px;
    text-align: center;
    display: block;

    @include above(small) {
      font-size: 21px;
      line-height: 29px;
    }
  }

  h2 {
    margin: 0 auto;
    max-width: 100%;
    font-family: "SchnyderS";
    color: #260f01;
    font-size: 32px;
    line-height: 28px;
    margin: 16px auto 56px auto;
    text-align: center;
    font-weight: 100;
    font-style: italic;

    @include above(small) {
      font-size: 65px;
      line-height: 60px;
      max-width: 75%;
    }

    span {
      color: #b71616;
    }
  }
}
</style>
