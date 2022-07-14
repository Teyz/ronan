<template>
  <div class="mantraSimpleTextRoot">
    <p>
      Dans ces collines, parsemées de vignes, flotte un léger voile brumeux au
      petit matin qui laisse parfois entrevoir l'ombre d'une biche égarée de sa
      forêt avoisinante. L'air frais et pur vient rosir les joues qui seront
      bientôt réchauffées par un soleil étincelant.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.mantraSimpleTextRoot {
  position: relative;
  padding: 320px 24px 144px 24px;

  @include above(big) {
    padding: 320px 140px 144px 140px;
  }

  &:before {
    content: "";
    background-image: url("@/assets/img/mantra-1/Illu1.webp");
    background-repeat: no-repeat;
    background-size: contain;
    width: 150px;
    height: 100%;
    position: absolute;
    left: -10%;
    top: 12%;

    @include above(big) {
      left: -23%;
      top: 40%;
      width: 200px;
    }
  }
  p {
    max-width: 325px;
    text-align: center;
    font-size: 22px;
    line-height: 26px;
    margin: 0 auto;
    font-weight: 100;

    @include above(big) {
      max-width: 815px;
      font-size: 32px;
      line-height: 42px;
    }
  }
}
</style>
