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
        <video
          autoplay
          loop
          muted
          playsinline
          width="700"
          v-if="!isDeviceMobile"
        >
          <source src="@/assets/img/anim.webm" type="video/webm" />
        </video>
        <img src="@/assets/img/anim.gif" alt="" v-else />
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
import { onMounted } from "vue";
import { isMobile } from "~/utils";

export default {
  name: "ComingSoon",
  layout: "coming",
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
  padding: 56px 0;

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
    max-width: 350px;
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @include above(small) {
      max-width: 900px;
      overflow: visible;
    }

    img {
      object-fit: cover;
      width: 700px;

      @include above(small) {
        width: 900px;
      }
    }
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
    margin: 128px 0 104px 0;

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
