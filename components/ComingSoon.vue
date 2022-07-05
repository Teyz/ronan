<template>
  <section class="comingSoonRoot">
    <div class="comingTop">
      <img
        src="@/assets/img/logo.svg"
        alt="Logo Ronan By Clinet"
        class="logo"
      />
    </div>
    <div class="comingAnimation">
      <div class="comingAnimationContainer">
        <Lottie :options="lottieOptions" v-on:animCreated="handleAnimation" />
      </div>
      <p class="comingSoon">coming soon...</p>
    </div>
    <div class="contactRoot">
      <h2>contact</h2>
      <p>
        +33 (0) 5 57 25 70 00 <br />
        contact@chateauclinet.com
      </p>
    </div>
  </section>
</template>

<script>
import * as animationData from "@/assets/img/anim.json";
import { onMounted } from "vue";
import { isMobile } from "~/utils";

export default {
  name: "ComingSoon",
  layout: "coming",
  data() {
    return {
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
  setup() {
    const isDeviceMobile = ref(true);

    onMounted(() => {
      if (!isMobile()) {
        isDeviceMobile.value = false;
      }
    });

    return { isDeviceMobile };
  },
};
</script>

<style lang="scss" scoped>
.comingSoonRoot {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 72px 0;
  overflow-x: hidden;

  @include above(small) {
    height: 100vh;
    min-height: 700px;
    padding: 0;
  }

  .logo {
    margin: 0 auto;
    display: block;
    object-fit: cover;
    width: 110px;

    @include above(small) {
      width: 200px;
    }
  }

  .comingAnimationContainer {
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

  .comingSoon {
    margin-top: 32px;
  }

  .comingAnimation {
    margin: 84px 0;

    @include above(small) {
      margin: 0;
    }
  }

  h2 {
    text-align: center;
    font-family: "1942";
    font-size: 19px;
    color: $secondary;
    margin-bottom: 12px;

    @include above(small) {
      font-size: 24px;
    }
  }

  .contactRoot {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    p {
      font-size: 12px;
      color: #260f01;
      text-decoration: none;

      @include above(small) {
        font-size: 16px;
      }
    }
  }
}
</style>
