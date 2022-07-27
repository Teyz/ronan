<template>
  <div class="contactRoot" id="contact">
    <img src="@/assets/img/montgolfiere.webp" alt="" />
    <h3>contact</h3>
    <p>
      +33 (0) 5 57 25 70 00 <br />
      contact@chateauclinet.com
    </p>
  </div>
</template>

<style lang="scss" scoped>
.contactRoot {
  margin-bottom: 72px;
  z-index: 2;
}

img {
  display: block;
  object-fit: cover;
  margin: 0 auto 32px auto;
  max-width: 111px;
}
p {
  text-align: center;
  font-weight: 100;
  line-height: 15px;
}

h3 {
  font-family: "1942";
  font-size: 19px;
  line-height: 19px;
  color: #b71616;
  text-align: center;
  margin-bottom: 12px;
}
</style>
