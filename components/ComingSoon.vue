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
        <video width="700" loop autoplay muted>
          <source src="@/assets/img/anim.webm" type="video/webm" />
          <source src="@/assets/img/anim.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
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
export default {
  name: "ComingSoon",
  layout: "coming",
};
</script>

<style lang="scss" scoped>
.comingSoonRoot {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  min-height: 300px;

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
    max-width: 350px;
    overflow: hidden;
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

      @include above(small) {
        font-size: 16px;
      }
    }
  }
}
</style>
