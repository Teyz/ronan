<template>
  <section class="collectionRoot">
    <img src="@/assets/img/collection/illus3.webp" alt="" class="illus" />
    <div class="collectionHeader">
      <h1>{{ $t("collection-title") }}</h1>
      <p>
        {{ $t("collection-texte-1")
        }}<span>{{ $t("collection-texte-red-1") }}</span
        >{{ $t("collection-texte-2")
        }}<span>{{ $t("collection-texte-red-2") }}</span
        >{{ $t("collection-texte-3")
        }}<span>{{ $t("collection-texte-red-3") }}</span
        >{{ $t("collection-texte-4") }}
      </p>
    </div>
    <div class="collectionList">
      <div class="collectionItem item-1">
        <img src="@/assets/img/collection/wine-1.webp" alt="" />
        <h2>{{ $t("collection-1-title") }}</h2>
        <p>{{ $t("collection-1-texte") }}</p>
      </div>
      <div class="collectionItem">
        <img src="@/assets/img/collection/wine-2.webp" alt="" />
        <h2>{{ $t("collection-2-title") }}</h2>
        <p>{{ $t("collection-2-texte") }}</p>
      </div>
      <div class="collectionItem item-3">
        <img src="@/assets/img/collection/wine-3.webp" alt="" />
        <h2>{{ $t("collection-3-title") }}</h2>
        <p>{{ $t("collection-3-texte") }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.illus {
  position: absolute;
  display: none;
  top: 0;
  right: 10%;
  object-fit: cover;
  width: 85px;
  height: 202px;

  @include above(big) {
    display: block;
  }
}
.collectionRoot {
  padding: 104px 32px;
}

.collectionHeader {
  margin-top: 32px;
  margin-bottom: 104px;
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    color: #260f01;
    font-family: "SchnyderS";
    font-weight: 100;
    font-style: italic;
    line-height: 72px;
    font-size: 30px;
    text-align: center;

    @include above(big) {
      line-height: 72px;
      font-size: 80px;
      margin-bottom: 54px;
    }
  }

  p {
    max-width: 684px;
    font-family: "SchnyderS";
    font-weight: 100;
    line-height: 28px;
    text-align: center;
    font-size: 20px;

    span {
      color: #b71616;
    }
  }
}

.collectionList {
  @include above(big) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.item-1,
.item-3 {
  position: relative;
}

.item-1 {
  &:before {
    content: "";
    background-image: url("@/assets/img/collection/illus1.webp");
    background-size: cover;
    width: 45px;
    height: 30px;
    position: absolute;
    top: 52%;
    left: 20%;

    @include above(small) {
      left: 25%;
    }

    @include above(big) {
      width: 89px;
      height: 61px;
      top: 60%;
      left: -15%;
    }
  }
}

.item-3 {
  &:before {
    content: "";
    background-image: url("@/assets/img/collection/illus2.webp");
    background-size: cover;
    width: 50px;
    height: 38px;
    position: absolute;
    top: 50%;
    left: 15%;
    @include above(small) {
      left: 25%;
    }
    @include above(big) {
      width: 101px;
      height: 76px;
      top: 52%;
      left: -20%;
    }
  }
}

.collectionItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0;

  @include above(big) {
    margin: 0 64px;
  }

  &:nth-child(2) {
    @include above(big) {
      margin-top: 64px;
    }
  }

  h2 {
    color: #260f01;
    font-family: "SchnyderS";
    font-weight: 100;
    font-style: italic;
    text-align: center;
    font-size: 32px;
    line-height: 28px;
    align-self: center;
    margin-top: 24px;

    @include above(big) {
      align-self: flex-start;
      text-align: left;
      font-size: 40px;
      margin-top: 0;
      line-height: 72px;
    }
  }

  p {
    color: #260f01;
    margin-top: 24px;
    font-family: "SchnyderS";
    font-weight: 100;
    line-height: 28px;
    align-self: flex-start;
    text-align: center;
    font-size: 20px;
    max-width: 320px;

    @include above(small) {
      margin: 24px auto;
    }
    @include above(big) {
      text-align: left;
      line-height: 24px;
      margin-top: 0;
      font-size: 20px;
    }
  }
}

img {
  object-fit: cover;
  display: block;
  width: 100%;
  max-width: 120px;
  margin: 0 auto;

  @include above(big) {
    max-width: 180px;
  }

  @include above(large) {
    max-width: 200px;
  }
}
</style>
