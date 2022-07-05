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
      <img
        src="@/assets/img/coming.svg"
        alt="Animation Coming Soon Ronan By Clinet"
        class="comingSoonAnimation"
      />
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
  height: 95vh;
  min-height: 300px;

  @include above(small) {
    height: 100vh;
    min-height: 700px;
  }

  .logo {
    width: 110px;

    @include above(small) {
      width: 200px;
    }
  }

  .logo,
  .comingSoonAnimation {
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }

  .comingSoonAnimation {
    margin-top: 96px;
    width: 325px;

    @include above(small) {
      width: 500px;
    }

    @include above(medium) {
      width: 700px;
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
    margin-top: 96px;
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
