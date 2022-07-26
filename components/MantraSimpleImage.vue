<template>
  <div class="mantraSimpleImageRoot">
    <img :src="slide?.images?.mantra_simpe_image" alt="" />
  </div>
</template>

<script>
export default {
  name: "MantraSimpleImage",
  props: {
    slide: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.mantraSimpleImageRoot {
  @include above(big) {
    padding: 0 160px;
  }
  img {
    object-fit: cover;
    max-width: 100%;
  }
}
</style>
