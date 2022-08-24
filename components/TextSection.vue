<template>
  <section class="textSectionRoot">
    <h3>Bordeaux.</h3>
    <div class="textRoot">
      <div v-if="locale === 'fr'">
        <p>
          {{ $t("home-text-1") }}
          <span>{{ $t("home-text-red-1") }}</span>
          {{ $t("home-text-2") }}
          <span>{{ $t("home-text-red-2") }}</span>
          {{ $t("home-text-3") }}
          <span>{{ $t("home-text-red-3") }}</span>
          {{ $t("home-text-4") }}
          <span>{{ $t("home-text-red-4") }}</span>
          {{ $t("home-text-5") }}
          <span>{{ $t("home-text-red-5") }}</span>
          {{ $t("home-text-6") }}
        </p>
        <span>{{ $t("home-citation") }}</span>
      </div>
      <div v-else>
        <p>
          {{ $t("home-text-1") }}
          <span>{{ $t("home-text-red-1") }}</span>
          {{ $t("home-text-2") }}
          <span>{{ $t("home-text-red-2") }}</span>
          {{ $t("home-text-3") }}
          <span>{{ $t("home-text-red-3") }}</span>
          {{ $t("home-text-4") }}
          <span>{{ $t("home-text-red-4") }}</span>
          {{ $t("home-text-5") }}
          <span>{{ $t("home-text-red-5") }}</span>
          {{ $t("home-text-6") }}
          <span>{{ $t("home-text-red-6") }}</span>
          {{ $t("home-text-7") }}
        </p>
        <span class="citation-en">{{ $t("home-citation") }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "TextSection",
  setup() {
    const { locale } = useI18n();

    return {
      locale,
    };
  },
};
</script>

<style lang="scss" scoped>
.textSectionRoot {
  padding: 240px 0;
  margin: 0 auto;
  position: relative;
  max-width: 550px;

  &:before {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5%;
    z-index: 11;

    @include above(big) {
      top: -5%;
      height: 200px;
    }
  }

  @include above(large) {
    max-width: 800px;
  }
}

.textRoot {
  position: relative;
}
h3 {
  font-family: "SchnyderS";
  font-style: italic;
  color: #b71616;
  text-transform: capitalize;
  text-align: center;
  font-size: 30px;
  line-height: 34px;
  margin-bottom: 16px;

  @include above(big) {
    line-height: 22px;
    font-size: 22px;
  }
}

p {
  font-family: "SchnyderS";
  color: #260f01;
  text-align: left;
  font-weight: 100;
  max-width: 300px;
  font-size: 16px;
  line-height: 18px;
  margin: 0 auto;

  @include above(big) {
    line-height: 22px;
    font-size: 16px;
    max-width: 550px;
    text-align: center;
  }

  @include above(large) {
    line-height: 28px;
    font-size: 20px;
    max-width: 800px;
  }

  span {
    font-family: "SchnyderS";
    color: #b71616;
    position: relative;
    bottom: inherit;
    right: inherit;
    font-weight: 100;
    font-size: 16px;
    line-height: 18px;
    font-style: inherit;
    text-transform: none;

    @include above(big) {
      line-height: 22px;
      font-size: 16px;
      max-width: 550px;
      text-align: center;
    }

    @include above(large) {
      line-height: 28px;
      font-size: 20px;
    }
  }
}

span {
  font-family: "Sebastian";
  font-style: italic;
  text-transform: lowercase;
  color: #b71616;
  -webkit-text-stroke: 0.5px #ae0721;
  font-size: 50px;
  line-height: 34px;
  position: absolute;
  bottom: -10%;
  right: 10%;

  &.citation-en {
    bottom: -10%;

    @include above(big) {
      bottom: -30%;
    }

    @include above(large) {
      bottom: -30%;
    }
  }

  @include above(big) {
    line-height: 57px;
    font-size: 72px;
    position: absolute;
    bottom: -30%;
    right: 0;
  }

  @include above(large) {
    font-size: 90px;
    bottom: -20%;
  }
}
</style>
