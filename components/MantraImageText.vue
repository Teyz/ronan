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
  overflow: hidden;
  @include above(big) {
    padding: 0 160px;
  }
  position: relative;
  &:before {
    content: "";
    background-image: url("@/assets/img/mantra-1/illus2.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 100px;
    height: 100%;
    position: absolute;
    right: -5%;
    top: 75%;

    @include above(big) {
      width: 200px;
      height: 100%;
      right: -21%;
      top: 40%;
    }
  }
  .mantraImageTextHeader {
    position: relative;
    margin-bottom: 72px;

    @include above(big) {
      margin-bottom: 360px;
    }

    img {
      object-fit: cover;
      max-width: 100%;
      height: 365px;
      @include above(big) {
        height: 100%;
      }
    }

    &:after {
      content: "";
      width: 1px;
      height: 110px;
      background-color: #ae0721;
      position: absolute;
      right: 50%;
      transform: translateX(-50%);
      bottom: 15%;

      @include above(big) {
        bottom: -10%;
        height: 140px;
        right: 30%;
        position: absolute;
      }
    }

    p {
      max-width: 300px;
      font-size: 16px;
      padding: 0 24px;
      margin: 88px auto 208px auto;

      @include above(big) {
        padding: 0;
        font-size: 22px;
        max-width: 435px;
        margin: 88px 0 0 0;
      }
    }

    h3 {
      color: #ae0721;
      font-size: 51px;
      line-height: 34px;
      font-family: "Sebastian";
      max-width: 320px;
      text-align: center;
      margin: 0 auto;
      -webkit-text-stroke: 1px #ae0721;

      @include above(big) {
        text-align: left;
        position: absolute;
        font-size: 73px;
        line-height: 53px;
        right: 13%;
        max-width: 360px;
        bottom: -30%;
      }
    }
  }
  .textImage {
    @include above(big) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    img {
      max-width: 100%;
      object-fit: cover;

      @include above(big) {
        max-width: 430px;
      }
    }

    p {
      font-size: 22px;
      line-height: 26px;
      max-width: 325px;
      margin: 0 auto;
      text-align: center;
      padding: 48px 0 208px 0;
      color: #b71616;
      font-weight: 100;
      font-style: italic;

      @include above(big) {
        font-size: 32px;
        line-height: 38px;
        max-width: 497px;
        margin-right: 56px;
        padding: 0;
      }
    }
  }

  .largeImage {
    margin-top: 12px;
    max-width: 100%;
    height: 280px;
    object-fit: cover;

    @include above(big) {
      height: 100%;
    }
  }
}
</style>
