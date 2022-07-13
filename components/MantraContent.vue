<template>
  <div class="mantraContentRoot">
    <div class="firstBlock">
      <div class="headerImage">
        <img
          src="@/assets/img/mantra-1/photo1.webp"
          alt=""
          class="firstImage"
        />
      </div>
      <div class="content">
        <p>
          Appréciant la vie bordelaise, à fouler ses pavés et admirer ses
          monuments, Ronan sait aussi s’en échapper pour contempler la nature
          environnante et s’inspirer de la créativité et du sentiment d’humilité
          qu’elle génère. Ayant troqué ses mocassins pour une paire de bottes,
          on retrouve Ronan à quelques encablures de la grande ville, entouré de
          paysages vallonnés.
        </p>
        <img src="@/assets/img/mantra-1/photo2.webp" alt="" />
        <h3>Partager fait partie de notre metier</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mantraContentRoot {
  .headerImage {
    position: relative;

    &:after {
      content: "";
      width: 1px;
      height: 135px;
      background-color: #ae0721;
      position: absolute;
      left: 10%;
      bottom: 2%;

      @include above(big) {
        bottom: -30%;
        height: 180px;
      }
    }
  }

  .firstImage {
    object-fit: cover;
    max-width: 100%;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 12px;
    position: relative;

    img {
      max-width: 640px;
      object-fit: cover;
    }

    p {
      max-width: 350px;
    }

    h3 {
      color: #ae0721;
      position: absolute;
      right: 0;
      bottom: -30%;
      font-size: 73px;
      line-height: 53px;
      font-family: "Sebastian";
      max-width: 360px;
      -webkit-text-stroke: 1px #ae0721;
    }
  }
}
</style>
