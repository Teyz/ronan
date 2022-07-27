<template>
  <div class="mantraControlsRoot" :class="{ isSmall }">
    <div @click="prevSlide" :class="slide" class="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.479"
        height="14.033"
        viewBox="0 0 20.479 14.033"
        id="flecheG"
      >
        <g transform="translate(0.5 0.5)">
          <g id="Groupe_399" data-name="Groupe 399">
            <g id="Line-2" transform="translate(0.815 6.516)">
              <path
                id="Tracé_37"
                data-name="Tracé 37"
                d="M26.664,20H8"
                transform="translate(-8 -20)"
                fill="rgba(0,0,0,0)"
                stroke="#260f01"
                stroke-linecap="round"
                stroke-width="1"
              />
            </g>
            <g id="Oval" transform="translate(0 6.516) rotate(-90)">
              <path
                id="Tracé_38"
                data-name="Tracé 38"
                d="M6.516,6.516A6.517,6.517,0,0,1,0,0"
                transform="translate(0)"
                fill="rgba(0,0,0,0)"
                stroke="#260f01"
                stroke-linecap="round"
                stroke-width="1"
              />
            </g>
            <g id="Oval-Copy" transform="translate(6.516 6.516) rotate(90)">
              <path
                id="Tracé_39"
                data-name="Tracé 39"
                d="M6.516,0A6.517,6.517,0,0,0,0,6.516"
                fill="rgba(0,0,0,0)"
                stroke="#260f01"
                stroke-linecap="round"
                stroke-width="1"
              />
            </g>
          </g>
        </g>
      </svg>  {{ $t("prev") }}
    </div>
    <div @click="nextSlide" :class="slide" class="next">
      {{ $t("next") }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.479"
        height="14.033"
        viewBox="0 0 20.479 14.033"
        id="flecheD"
      >
        <g transform="translate(4.251 0.5)">
          <g
            id="Groupe_399"
            data-name="Groupe 399"
            transform="translate(-3.751 0)"
          >
            <g id="Line-2" transform="translate(0 6.516)">
              <path
                id="Tracé_37"
                data-name="Tracé 37"
                d="M8,20H26.664"
                transform="translate(-8 -20)"
                fill="rgba(0,0,0,0)"
                stroke="#260f01"
                stroke-linecap="round"
                stroke-width="1"
              />
            </g>
            <g id="Oval" transform="translate(12.962 6.516) rotate(-90)">
              <path
                id="Tracé_38"
                data-name="Tracé 38"
                d="M6.516,0A6.517,6.517,0,0,0,0,6.516"
                transform="translate(0 0)"
                fill="rgba(0,0,0,0)"
                stroke="#260f01"
                stroke-linecap="round"
                stroke-width="1"
              />
            </g>
            <g id="Oval-Copy" transform="translate(19.479 6.516) rotate(90)">
              <path
                id="Tracé_39"
                data-name="Tracé 39"
                d="M6.516,6.516A6.517,6.517,0,0,1,0,0"
                transform="translate(0 0)"
                fill="rgba(0,0,0,0)"
                stroke="#260f01"
                stroke-linecap="round"
                stroke-width="1"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "MantraControls",
  emits: ["onNext", "onPrev"],
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
    slide: {
      type: Object,
      default: () => {},
    },
    currentSlide: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {

    const slide = computed(() => `slide-${props.currentSlide}`);
    const nextSlide = () => {
      const mantraHeader = document.getElementById("mantraHeader");
      mantraHeader.scrollIntoView();
      setTimeout(() => {
        emit("onNext");
      }, 1000);
    };

    const prevSlide = () => {
      const mantraHeader = document.getElementById("mantraHeader");
      mantraHeader.scrollIntoView();
      setTimeout(() => {
        emit("onPrev");
      }, 1000);
    };

    return { nextSlide, prevSlide, slide };
  },
};
</script>

<style lang="scss" scoped>
.mantraControlsRoot {
  padding: 0 48px;
  margin: 42px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include above(big) {
    padding: 0 200px;
  }

  &.isSmall {
    max-width: 200px;
    width: 100%;
    padding: 0;
  }

  div {
    position: relative;
    transition: all 0.5s ease;
    cursor: pointer;
    font-size: 18px;
    font-weight: 100;
    font-family: "SchnyderS";

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
    }

    #flecheG {
      right: 110%;
    }

    #flecheD {
      left: 115%;
    }
  }
}

.prev{
    color: #260f01;
    pointer-events: auto;
    path {
      stroke: #260f01;
    }
  &.slide-0{
    color: #00000029;
    pointer-events: none;
    path {
        stroke: #cfc9c7;
      }
  }
}

.next{ 
  color: #260f01;
  pointer-events: auto;
    path {
      stroke: #260f01;
    }
  &.slide-0{
    color: #260f01;
    pointer-events: auto;
    path {
      stroke: #260f01;
    }
  }

  &.slide-5{
     color: #00000029;
     pointer-events: none;
    path {
        stroke: #cfc9c7;
      }
  }
}
</style>
