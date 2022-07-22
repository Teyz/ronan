<template>
  <div class="mantraImageCitationRoot">
    <div class="mantraImageText">
      <div class="textImage">
        <img :src="slide?.images?.mantra_image_citation_1" alt="" />
        <p>
          {{ $t(`mantra-${index}-image-citation-text-1`) }}
        </p>
      </div>
      <img
        :src="slide?.images?.mantra_image_citation_2"
        alt=""
        class="largeImage"
      />
    </div>
    <div class="mantraCitation" :class="{ isReverse }">
      <div class="textCitation">
        <h3>{{ $t(`mantra-${index}-image-citation-citation-1`) }}</h3>
        <p>
          {{ $t(`mantra-${index}-image-citation-text-2`) }}
        </p>
      </div>
      <div class="textImage">
        <p>
          {{ $t(`mantra-${index}-image-citation-text-2`) }}
        </p>
        <img
          :src="slide?.images?.mantra_image_citation_3"
          alt=""
          v-if="noSecondSmall"
        />
      </div>
    </div>
    <img
      :src="slide?.images?.mantra_image_citation_4"
      alt=""
      class="largeImage"
      v-if="isLastBlock"
    />
  </div>
</template>

<script>
export default {
  name: "MantraImageCitation",
  props: {
    index: {
      type: Number,
      default: 1,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
    isLastBlock: {
      type: Boolean,
      default: false,
    },
    noSecondSmall: {
      type: Boolean,
      default: false,
    },
    slide: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.mantraImageCitationRoot {
  @include above(big) {
    padding: 0 160px;
    margin-bottom: 72px;
  }
}

.mantraImageText {
  .textImage {
    @include above(big) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    img {
      max-width: 100%;
      object-fit: cover;

      @include above(big) {
        max-width: 430px;
      }
    }

    p {
      font-size: 22px;
      line-height: 26px;
      max-width: 325px;
      margin: 0 auto;
      text-align: center;
      padding: 48px 0;
      color: #b71616;
      font-weight: 100;
      font-style: italic;

      @include above(big) {
        font-size: 32px;
        line-height: 38px;
        max-width: 497px;
        margin-right: 56px;
        padding: 0;
      }
    }
  }

  .largeImage {
    margin-top: 12px;
    max-width: 100%;
    height: 280px;
    object-fit: cover;

    @include above(small) {
      height: 100%;
    }
  }
}

.mantraCitation {
  margin-top: 208px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    color: #ae0721;
    font-size: 51px;
    line-height: 34px;
    font-family: "Sebastian";
    max-width: 320px;
    position: relative;
    margin: 0 auto;
    -webkit-text-stroke: 1px #ae0721;

    &:after {
      content: "";
      width: 1px;
      height: 135px;
      background-color: #ae0721;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0%;

      @include above(big) {
        height: 173px;
      }
    }

    @include above(big) {
      margin: 0 0 120px 0;
      padding-top: 240px;
      font-size: 73px;
      line-height: 53px;
      max-width: 360px;
    }
  }

  &.isReverse {
    flex-direction: row-reverse;
  }
  p {
    font-size: 28px;
    font-weight: 100;
    line-height: 35px;
    max-width: 530px;
    text-align: left;
  }

  .textImage {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    img {
      max-width: 100%;
      object-fit: cover;

      @include above(big) {
        margin-top: 200px;
        max-width: 430px;
      }
    }
  }
}
</style>
