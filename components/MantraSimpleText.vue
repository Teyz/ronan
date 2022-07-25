<template>
  <div class="mantraSimpleTextRoot">
    <img :src="slide?.images?.illus_1" alt="" v-if="!noIllus" />
    <p>
      {{ $t(`mantra-${index}-simple-text`) }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MantraSimpleText",
  props: {
    index: {
      type: Number,
      default: 1,
    },
    slide: {
      type: Object,
      default: () => {},
    },
    noIllus: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.mantraSimpleTextRoot {
  position: relative;
  padding: 320px 24px 144px 24px;

  @include above(big) {
    padding: 320px 140px 144px 140px;
  }

  img {
    content: "";
    object-fit: contain;
    width: 150px;
    position: absolute;
    left: -10%;
    top: 12%;

    @include above(big) {
      left: -5%;
      top: 15%;
      width: 200px;
    }
  }
  p {
    max-width: 325px;
    text-align: center;
    font-size: 22px;
    line-height: 26px;
    margin: 0 auto;
    font-weight: 100;

    @include above(big) {
      max-width: 1054px;
      font-size: 40px;
      line-height: 45px;
    }
  }
}
</style>
