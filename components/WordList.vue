<template>
  <div class="wordListRoot">
    <ul>
      <li>harmonie avec la nature</li>
      <li>pouvoir de la séléction</li>
      <li>prendre le temps</li>
      <li>construire les bonnes relations</li>
      <li>savoir profite</li>
      <li>partager ce plaisir</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wordListRoot {
  max-width: 920px;
  margin: 0 auto 104px auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
      font-family: "SchnyderS";
      color: #00000029;
      font-size: 44px;
      line-height: 61px;
      margin: 0 16px;
      transition: all 0.5s ease;
      cursor: default;

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
