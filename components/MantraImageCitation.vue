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
      <img :src="slide?.images?.mantra_image_citation_illus_1" alt="" class="illus1">
      <img :src="slide?.images?.mantra_image_citation_illus_2" alt="" class="illus2" :class="{secondIllusTop}">
      <img :src="slide?.images?.mantra_image_citation_illus_3" alt="" class="illus3" v-if="showLastIllus">
      <div class="textCitation">
        <h3>{{ $t(`mantra-${index}-image-citation-citation-1`) }}</h3>
        <img
          :src="slide?.images?.mantra_image_citation_4"
          alt=""
          class="largeImage"
          v-if="isLastBlock"
        />
        <p>
          {{ $t(`mantra-${index}-image-citation-text-3`) }}
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
      class="largeImage lastImage"
      v-if="isLastBlock"
      :class="{lastBlockMarginTop}"
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
    lastBlockMarginTop: {
      type: Boolean,
      default: false,
    },
    showLastIllus: {
      type: Boolean,
      default: false,
    },
    secondIllusTop: {
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

.lastImage{
    display: none;

    @include above(big){
      display: block;
    }
  }
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
        padding: 0;
        text-align: left;
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
  margin-top: 72px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;

  .illus1{
    position: absolute;
    left: -5%;
    top: 15%;
    width: 100px;
    object-fit: cover;

    @include above(big){
      left: -20%;
      width: 200px;
      top: -10%;
    }
  }

  .illus2{
    position: absolute;
    right: 0%;
    top: 37%;
    width: 150px;
    object-fit: cover;

    @include above(big){
      right: -18%;
      top: 30%;
    }

    &.secondIllusTop{
      top: -150%;
    }
  }

  .illus3{
    display: none;

    @include above(big){
    position: absolute;
    right: 0%;
    top: -25%;
    width: 89px;
    object-fit: contain;
    }
  }

  @include above(big){
    margin-top: 208px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }

  .textCitation{
    h3{
      margin-bottom: 140px;
    }

    p{
          padding: 0 38px;
      margin-top: 72px;
    }

    @include above(big){

      img{
        display: none;
    }
      p{
      margin-top: 104px;
    }
    }
  }

  h3 {
    color: #ae0721;
    font-size: 51px;
    line-height: 34px;
    font-family: "Sebastian";
    max-width: 320px;
    position: relative;
    margin: 0 auto;
    -webkit-text-stroke: 0.5px #ae0721;

    &:after {
      content: "";
      width: 1px;
      height: 135px;
      background-color: #ae0721;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 150%;

      @include above(big) {
        height: 173px;
        top: 0%;
        bottom: inherit;
      }
    }

    @include above(big) {
      margin: 0 0 88px 0;
      padding-top: 240px;
      font-size: 73px;
      line-height: 53px;
      max-width: 430px;
    }
  }

  &.isReverse {
    flex-direction: row-reverse;
  }
  p {
    font-size: 16px;
    font-weight: 100;
    line-height: 18px;
    max-width: 300px;
    text-align: left;

    @include above(big){
      font-size: 28px;
      font-weight: 100;
      line-height: 35px;
      max-width: 530px;
    }
  }

  .textImage {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    img {
      max-width: 100%;
      object-fit: cover;
      display: none;

      @include above(big) {
        display: block;
        margin-top: 200px;
        max-width: 430px;
      }
    }

    p{
      padding: 0 38px;
      margin-bottom: 235px;
      @include above(big){
        margin-right: 32px;
        margin-bottom: 0;
      }
    }
  }
}

.lastBlockMarginTop{
  @include above(big){
    margin-top: 72px;
  }
}
</style>
