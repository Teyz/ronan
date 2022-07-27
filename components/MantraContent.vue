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
          <h3 v-if="lang == 'fr'" :class={isTop} >{{ $t(`mantra-${index}-content-citation`) }}</h3>
          <h3 v-else :class={isTop} class="en">{{ $t(`mantra-${index}-content-citation`) }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
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
    isTop: {
      type: Boolean,
      default: false,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
  setup(){
    const { locale } = useI18n();

    const lang = computed(() => locale.value);

    return { locale, lang }
  }
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
          @include above(big){
            right: 30%;
            left: inherit;
          }
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
      left: 20%;
      bottom: -30%;

      @include above(small) {
        height: 180px;
        left: 30%;
      }

      @include above(big) {
        height: 180px;
        left: 10%;
        bottom: -10%;
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
      object-fit: cover;
      max-width: 100%;

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

      @include above(small){
        max-width: 400px;
      }

      @include above(big) {
        font-size: 16px;
        margin: 0;
        max-width: 300px;
      }

      @include above(large) {
        font-size: 20px;
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

       &.isTop{
          bottom: -15%;

           &.en{
             bottom: -30%;
          }
       }

      @include above(big) {
        bottom: -30%;
        font-size: 73px;
        line-height: 53px;
        max-width: 360px;

        &.isTop{
          bottom: -15%;

          &.en{
             bottom: -30%;
          }
        }
      }
    }
  }
}
</style>
