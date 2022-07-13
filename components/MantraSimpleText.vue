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
  padding: 320px 0 144px 0;

  &:before {
    content: "";
    background-image: url("@/assets/img/mantra-1/Illu1.webp");
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 100%;
    position: absolute;
    left: -23%;
    top: 40%;
  }
  p {
    max-width: 815px;
    text-align: center;
    font-size: 32px;
    line-height: 42px;
    margin: 0 auto;
    font-weight: 100;
  }
}
</style>
