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

  .logo,
  .comingSoonAnimation {
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }

  .comingSoonAnimation {
    margin-top: 96px;
    width: 250px;

    @include above(small) {
      width: 500px;
    }

    @include above(medium) {
      width: 900px;
    }
  }

  p {
    text-align: center;
    font-family: "SchnyderS";
    font-size: 28px;
    color: #260f01;
    font-weight: 100;
  }

  .comingSoon {
    margin-top: 32px;
  }

  h2 {
    text-align: center;
    font-family: "1942";
    font-size: 24px;
    color: $secondary;
    margin-bottom: 12px;
  }

  .contactRoot {
    margin-top: 96px;
    p {
      font-size: 16px;
    }
  }
}
</style>
