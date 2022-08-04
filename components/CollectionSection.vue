<template>
  <section class="collectionRoot">
    <div class="collectionHeader">
      <h1>{{ $t("collection-title") }}</h1>
      <p>{{ $t("collection-texte") }}</p>
    </div>
    <div class="collectionList">
      <div class="collectionItem">
        <img src="@/assets/img/collection/wine-1.webp" alt="" />
        <h2>{{ $t("collection-1-title") }}</h2>
        <p>{{ $t("collection-1-texte") }}</p>
      </div>
      <div class="collectionItem">
        <img src="@/assets/img/collection/wine-2.webp" alt="" />
        <h2>{{ $t("collection-2-title") }}</h2>
        <p>{{ $t("collection-2-texte") }}</p>
      </div>
      <div class="collectionItem">
        <img src="@/assets/img/collection/wine-3.webp" alt="" />
        <h2>{{ $t("collection-3-title") }}</h2>
        <p>{{ $t("collection-3-texte") }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
    font-size: 80px;
    text-align: center;

    margin-bottom: 32px;
  }

  p {
    max-width: 684px;
    font-family: "SchnyderS";
    font-weight: 100;
    line-height: 28px;
    text-align: center;
    font-size: 20px;
  }
}

.collectionList {
  @include above(big) {
    @include above(big) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.collectionItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include above(big) {
    margin: 0 104px;
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
    text-align: left;
    font-size: 32px;
    line-height: 28px;
    align-self: flex-start;
    margin-top: 24px;

    @include above(big) {
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
    text-align: left;
    font-size: 20px;
    max-width: 320px;
    @include above(big) {
      line-height: 24px;
      margin-top: 0;
      font-size: 20px;
    }
  }
}

img {
  object-fit: cover;
  display: block;
  width: 120px;
  margin: 0 auto;

  @include above(big) {
    max-width: 180px;
  }
}
</style>
