<template>
  <section class="textSectionRoot">
    <h3>Bordeaux.</h3>
    <div class="textRoot">
      <p>
        Si pour certains ce nom évoque celui d’une ville ou d’une couleur, pour
        d’autres c’est aussi celui d’un vignoble aux racines profondément
        ancrées dans l’histoire. Clinet, cru iconique de Pomerol tire son
        patronyme du vigneron ayant œuvré sur ce terroir au Moyen Age, et
        perpétue sa filiation au travers la collection « Ronan by Clinet ». Tiré
        du nom de l’actuel propriétaire, Ronan by Clinet est un clin d’œil à
        cette histoire et la promesse du savoir-faire de Clinet au service d'un
        bordeaux spontané et généreux, inspiré de terroirs privilégiés et
        discrets mais également du style de vie de Ronan. Qu'il s'agisse du
        rouge, du rosé ou du blanc, Ronan by Clinet est la mise en bouteille des
        valeurs de Ronan : respect, témérité, patience, confiance, optimisme et
        partage. Pour représenter ces valeurs, le personnage de Ronan prend vie
        en 2016 au sein d’une nouvelle étiquette. Il y apparait tel un dandy
        enfourchant sa draisienne pour partager sa vision de Bordeaux – reposant
        sur six principes de vie – avec le reste de monde.
      </p>
      <span>équipe clinet</span>
    </div>
  </section>
</template>

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
  font-size: 51px;
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
  bottom: -5%;
  right: 10%;

  @include above(big) {
    line-height: 57px;
    font-size: 72px;
    position: absolute;
    bottom: -30%;
    right: 0;
  }

  @include above(large) {
    font-size: 90px;
  }
}
</style>
