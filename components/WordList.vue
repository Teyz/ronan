<template>
  <div class="wordListRoot">
    <ul>
      <li @click="goToSlide(0)">{{ $t("mantra-1-wordlist") }}</li>
      <li @click="goToSlide(1)">{{ $t("mantra-2-wordlist") }}</li>
      <li @click="goToSlide(2)">{{ $t("mantra-3-wordlist") }}</li>
      <li @click="goToSlide(3)">{{ $t("mantra-4-wordlist") }}</li>
      <li @click="goToSlide(4)">{{ $t("mantra-5-wordlist") }}</li>
      <li @click="goToSlide(5)">{{ $t("mantra-6-wordlist") }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WordList",
  setup(props, { emit }) {
    const goToSlide = (goToSlideNumber) => {
      const mantraHeader = document.getElementById("mantraHeader");
      mantraHeader.scrollIntoView();
      setTimeout(() => {
        emit("goToSlide", goToSlideNumber);
      }, 1000);
    };

    return { goToSlide };
  },
};
</script>

<style lang="scss" scoped>
.wordListRoot {
  max-width: 920px;
  margin: 32px auto 104px auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
      font-family: "SchnyderS";
      color: #260F01;
      font-size: 28px;
      line-height: 52px;
      margin: 0 16px;
      transition: all 0.5s ease;
      cursor: pointer;
      text-align: center;

      @include above(big) {
        font-size: 44px;
        line-height: 61px;
        text-align: left;
        color: #00000029;
      }

      &:hover {
        color: #b71616;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
