<template>
  <section class="loaderRoot">
    <div class="loaderAnimation">
      <div class="loaderAnimationContainer">
        <Lottie :options="lottieOptions" v-on:animCreated="handleAnimation" />
      </div>
    </div>
  </section>
</template>

<script>
import * as animationData from "@/assets/img/anim.json";

export default {
  name: "Loader",
  data() {
    return {
      loader: true,
      loading: false,
      anim: null,
      lottieOptions: { animationData: animationData },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>

<style lang="scss" scoped>
.loaderRoot {
  background: url("@/assets/img/textureMobile.webp") no-repeat center center fixed;
  position: fixed;
  background-color: $primary;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  min-height: 700px;
  padding: 0;

  @include above(small){
    background: url("@/assets/img/texture.webp") no-repeat center center fixed;
      -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    background-color: $primary;
    height: 100vh;
    width: 100vw;
  }

  .loaderAnimationContainer {
    object-fit: cover;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    text-align: center;
    font-family: "SchnyderS";
    font-size: 16px;
    color: #260f01;
    font-weight: 100;

    @include above(small) {
      font-size: 28px;
    }
  }
  .loaderAnimation {
    margin: 84px 0;

    @include above(small) {
      margin: 0;
    }
  }
}
</style>
