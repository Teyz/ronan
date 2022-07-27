<template>
  <div class="mantraImageTextRoot">
    <img
      :src="slide?.images?.mantra_image_text_image_illus"
      alt=""
      class="illustration"
      :class="{bigIllus, isMantra4}"
    />
    <div class="mantraImageTextHeader" :class="{ isCitation }">
      <img :src="slide?.images?.mantra_image_text_image_1" alt="" />
      <p>
        {{ $t(`mantra-${index}-image-first-text`) }}
      </p>
      <h3>{{ $t(`mantra-${index}-image-citation`) }}</h3>
    </div>
    <div class="mantraImageTextContent" v-if="!isCitation">
      <div class="textImage">
        <img :src="slide?.images?.mantra_image_text_image_2" alt="" />
        <p>
          {{ $t(`mantra-${index}-image-second-text`) }}
        </p>
      </div>
      <img
        :src="slide?.images?.mantra_image_text_image_3"
        alt=""
        class="largeImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MantraImageText",
  props: {
    isCitation: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 1,
    },
    bigIllus: {
      type: Boolean,
      default: false,
    },
    isMantra4: {
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
.mantraImageTextRoot {
  overflow: hidden;
  @include above(big) {
    padding: 0 160px;
  }
  position: relative;
  .illustration {
    object-fit: contain;
    width: 100px;
    position: absolute;
    right: -10%;
    top: 78%;

    &.isMantra4{
      top: 60%;
      width: 180px;
      right: -2%;
      @include above(big) {
        right: 0;
        top: 7%;
        width: 200px;
      }
    }

    &.bigIllus{
      width: 180px;
      right: -5%;
      top: 75%;
    }

    @include above(big) {
      width: 200px;
      height: 100%;
      right: 0%;
      top: 13%;

       &.bigIllus{
      width: 200px;
      height: 100%;
      right: 0%;
      top: 13%;
    }
    }
  }
  .mantraImageTextHeader {
    position: relative;
    margin-bottom: 72px;

    @include above(big) {
      margin-bottom: 360px;
    }

    img {
      object-fit: cover;
      max-width: 100%;
      height: 365px;
      @include above(big) {
        height: 100%;
      }
    }

    &:after {
      content: "";
      width: 1px;
      height: 110px;
      background-color: #ae0721;
      position: absolute;
      right: 50%;
      transform: translateX(-50%);
      bottom: 15%;

      @include above(big) {
        bottom: 0%;
        height: 140px;
        right: 30%;
        position: absolute;
      }
    }

    p {
      max-width: 300px;
      font-size: 20px;
      line-height: 28px;
      text-align: left;
      margin: 102px auto 240px auto;

      @include above(small) {
        max-width: 447px;
      }

      @include above(big) {
        padding: 0;
        font-size: 28px;
        line-height: 35px;
        max-width: 447px;
        margin: 88px 0 0 0;
        text-align: left;
      }
    }

    h3 {
      color: #ae0721;
      font-size: 51px;
      line-height: 34px;
      font-family: "Sebastian";
      max-width: 320px;
      text-align: center;
      margin: 0 auto;
      -webkit-text-stroke: 0.5px #ae0721;

      @include above(big) {
        position: absolute;
        font-size: 73px;
        line-height: 53px;
        right: 14%;
        max-width: 360px;
        bottom: -25%;
      }
    }

    &.isCitation {
      h3 {
        font-family: "1942";
        font-size: 20px;
        color: #260f01;
        line-height: 20px;
        text-align: left;
        max-width: 410px;
        -webkit-text-stroke: inherit;
        padding: 0 24px;

        @include above(big){
          padding: 0;
          margin-left: 24px;
          left: 60%;
          width: 100%;
          bottom: -20%;
        }
      }
    }
  }
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
      text-align: left;
      padding: 48px 0 208px 0;
      color: #b71616;
      font-weight: 100;
      font-style: italic;

      @include above(big) {
        text-align: left;
        font-size: 32px;
        line-height: 38px;
        max-width: 497px;
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
</style>
