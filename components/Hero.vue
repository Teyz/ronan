<template>
  <div class="heroRoot">
    <div class="container">
      <img src="@/assets/img/ronandesktop.svg" alt="" />
      <h1>
        savoir-<span>faire</span>,<br />
        savoir-<span>vivre</span>, savoir-<span>être</span>
      </h1>
      <a href="#movie">découvrir</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heroRoot {
  height: 100%;
  position: relative;
  background: url("@/assets/img/texture.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
  width: 100%;

  &:before {
    content: "";
    background-image: url("@/assets/img/soleil.png");
    background-size: cover;
    position: absolute;
    left: -9%;
    top: 15%;
    width: 200px;
    height: 146px;
    background-repeat: no-repeat;

    @include above(big) {
      left: -12%;
      top: 12%;
      width: 450px;
      height: 355px;
    }
  }

  &:after {
    content: "";
    background-image: url("@/assets/img/Avion.png");
    background-size: cover;
    position: absolute;
    right: -2%;
    top: 18%;
    width: 160px;
    height: 146px;
    background-repeat: no-repeat;

    @include above(big) {
      right: -5%;
      top: 35%;
      width: 400px;
      height: 324px;
    }
  }

  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    padding-bottom: 56px;

    @include above(big) {
      padding-bottom: 8px;
    }
  }

  img {
    object-fit: cover;
    max-width: 120px;
    width: 100%;

    @include above(big) {
      max-width: 200px;
    }
  }

  h1 {
    font-size: 30px;
    line-height: 27px;
    margin-top: 40px;

    @include above(small) {
      font-size: 60px;
      line-height: 59px;
      margin-top: 40px;
    }

    @include above(large) {
      font-size: 81px;
      line-height: 72px;
      margin-top: 72px;
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
    margin-bottom: 104px;

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
    }
  }
}
</style>
