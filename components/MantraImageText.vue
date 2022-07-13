<template>
  <div class="mantraImageTextRoot">
    <div class="mantraImageTextHeader">
      <img src="@/assets/img/mantra-1/photo3.webp" alt="" />
      <p>
        Attaché à cette nature tendre et sauvage, c’est ici que Ronan vit avec
        sa famille et qu’il sélectionne les vignes destinées au vin éponyme.
        Polyculture, plantation d’arbres fruitiers, et élevage d’animaux sont
        des pratiques courantes dans ces vignobles où vie familiale et travail
        se mêlent avec harmonie.
      </p>
      <h3>Partager fait partie de notre metier</h3>
    </div>
    <div class="mantraImageTextContent">
      <div class="textImage">
        <img src="@/assets/img/mantra-1/photo4.webp" alt="" />
        <p>
          C’est cette même philosophie de vie et ce même respect pour la nature
          qui unissent Ronan et les vignerons qui l’entourent dans cette
          aventure viticole.
        </p>
      </div>
      <img src="@/assets/img/mantra-1/photo5.webp" alt="" class="largeImage" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mantraImageTextRoot {
  position: relative;
  &:before {
    content: "";
    background-image: url("@/assets/img/mantra-1/illus2.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 100%;
    position: absolute;
    right: -21%;
    top: 40%;
  }
  .mantraImageTextHeader {
    position: relative;
    margin-bottom: 360px;

    img {
      object-fit: cover;
      max-width: 100%;
    }

    &:after {
      content: "";
      width: 1px;
      height: 135px;
      background-color: #ae0721;
      position: absolute;
      right: 30%;
      bottom: 2%;

      @include above(big) {
        bottom: -10%;
        height: 140px;
      }
    }

    p {
      max-width: 435px;
      font-size: 22px;
      margin-top: 88px;
    }

    h3 {
      color: #ae0721;
      position: absolute;
      right: 13%;
      bottom: -30%;
      font-size: 73px;
      line-height: 53px;
      font-family: "Sebastian";
      max-width: 360px;
      -webkit-text-stroke: 1px #ae0721;
    }
  }
  .textImage {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: 430px;
      object-fit: cover;
    }

    p {
      font-size: 32px;
      line-height: 38px;
      max-width: 497px;
      margin-right: 56px;
    }
  }

  .largeImage {
    margin-top: 12px;
    max-width: 100%;
    object-fit: cover;
  }
}
</style>
