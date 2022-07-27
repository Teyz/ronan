<template>
  <div class="heroRoot" id="hero">
    <div class="container">
      <img src="@/assets/img/ronandesktop.svg" alt="" />
      <h1 v-if="locale === 'fr'">
        {{ $t("title") }}<span>{{ $t("subtitle") }}</span
        ><br />
        {{ $t("subtitle2") }}<span>{{ $t("subtitle3") }}</span
        >{{ $t("subtitle4") }}<span>{{ $t("subtitle5") }}</span>
      </h1>
      <h1 v-else>
        {{ $t("title") }}<span>{{ $t("subtitle") }},</span
        ><br />
        {{ $t("subtitle2") }}<span>{{ $t("subtitle3") }}</span>
      </h1>
      <a href="#mantraHeader">{{ $t("discover") }}</a>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "Hero",
  setup() {
    const { locale } = useI18n();

    return {
      locale
    };
  },
};
</script>

<style lang="scss" scoped>
.heroRoot {
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  z-index: 2;

  &:before {
    content: "";
    background-image: url("@/assets/img/soleil.png");
    background-size: contain;
    position: absolute;
    left: -15%;
    top: 15%;
    width: 182px;
    height: 146px;
    background-repeat: no-repeat;

    @include above(small) {
      left: -15%;
      top: 12%;
      width: 322px;
      height: 258px;
    }

     @include above(big) {
      left: -9%;
      top: 12%;
      width: 322px;
      height: 258px;
    }

    @include above(large) {
      left: -10%;
      top: 12%;
      width: 441px;
      height: 354px;
    }
  }

  &:after {
    content: "";
    background-image: url("@/assets/img/Avion.png");
    background-size: contain;
    position: absolute;
    right: -22%;
    top: 18%;
    width: 237px;
    height: 146px;
    background-repeat: no-repeat;

    @include above(small) {
      right: -15%;
      top: 25%;
      width: 386px;
      height: 236px;
    }

    @include above(big) {
      right: -8%;
      top: 25%;
      width: 386px;
      height: 236px;
    }

    @include above(large) {
      right: -12%;
      top: 25%;
      width: 531px;
      height: 324px;
    }
  }
  
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    padding-bottom: 56px;

    @include above(big) {
      padding-bottom: 32px;
    }
  }

  img {
    object-fit: cover;
    max-width: 120px;
    width: 100%;

    @include above(big) {
      max-width: 152px;
    }
  }

  h1 {
    font-size: 30px;
    line-height: 27px;
    margin-top: 40px;

    @include above(small) {
      font-size: 60px;
      line-height: 59px;
      margin-top: 32px;
    }

    @include above(large) {
      font-size: 81px;
      line-height: 72px;
      margin-top: 64px;
    }

    font-family: "SchnyderS";
    color: #260f01;
    font-weight: 100;
    letter-spacing: 2px;
    text-align: center;

    span {
      color: $secondary;
    }
  }

  a {
    position: relative;
    font-family: "SchnyderS";
    color: #260f01;
    line-height: 28px;
    font-weight: 100;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    margin-top: 32px;
    margin-bottom: 112px;

    &:after {
      content: "";
      background-image: url("@/assets/img/Pfeil.svg");
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-size: contain;
      top: 40px;
      width: 100%;
      max-width: 13px;
      height: 100%;
      transition: all 0.5s ease;
    }

    &:hover {
      &:after {
        top: 50px;
      }
    }
  }
}
</style>
