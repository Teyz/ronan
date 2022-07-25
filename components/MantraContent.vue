<template>
  <div class="mantraContentRoot" :class="{ isReverse }">
    <div class="firstBlock">
      <div class="headerImage">
        <img
          :src="slide.images?.mantra_content_image_1"
          alt=""
          class="firstImage"
        />
      </div>
      <div class="content" :class="{ isReverse }">
        <p>
          {{ $t(`mantra-${index}-content-text`) }}
        </p>
        <div class="imageContent">
          <img :src="slide.images?.mantra_content_image_2" alt="" />
          <h3>{{ $t(`mantra-${index}-content-citation`) }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MantraContent",
  props: {
    slide: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 1,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.mantraContentRoot {
  @include above(big) {
    padding: 0 160px;
  }

    &.isReverse{
      .headerImage {
         &:after {
           right: 10%;
           left: inherit;
         }
      }
    }
  .headerImage {
    position: relative;

    &:after {
      content: "";
      width: 1px;
      height: 135px;
      background-color: #ae0721;
      position: absolute;
      left: 10%;
      bottom: -30%;

      @include above(big) {
        height: 220px;
        bottom: -30%;
      }
    }
  }

  .firstImage {
    object-fit: cover;
    max-width: 100%;
    height: 270px;

    @include above(small) {
      height: 100%;
    }
  }

  .content {
    position: relative;

    @include above(big) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: 12px 0 0 0;

      &.isReverse {
        flex-direction: row-reverse;

        h3 {
          left: 0;
        }
      }
    }

    img {
      max-width: 100%;
      object-fit: cover;

      @include above(big) {
        max-width: 640px;
      }
    }

    p {
      margin: 128px auto 104px auto;
      max-width: 300px;
      font-size: 20px;
      line-height: 28px;
      text-align: left;

      @include above(big) {
        margin: 0;
        max-width: 400px;
      }
    }

    .imageContent {
      position: relative;
    }

    h3 {
      color: #ae0721;
      position: absolute;
      right: 0;
      bottom: -35%;
      font-size: 51px;
      line-height: 34px;
      font-family: "Sebastian";
      max-width: 250px;
      -webkit-text-stroke: 0.5px #ae0721;

      @include above(big) {
        bottom: -30%;
        font-size: 73px;
        line-height: 53px;
        max-width: 360px;
      }
    }
  }
}
</style>
