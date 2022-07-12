<template>
  <div class="innerBurger">
    <div class="main">
      <div class="languageRoot">
        <span>FR</span>
        <span> / </span>
        <span>EN</span>
      </div>
      <ul class="nav">
        <li><a href="#movie">Film</a></li>
        <li><a href="#mantras">Mantras</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul class="socialLinks">
        <li><a href="">facebook</a></li>
        <li><a href="">instagram</a></li>
      </ul>
    </div>
    <div class="footerContainer">
      <a href="">mentions légales</a>
      <div class="footer">
        <p>© 2022 ronan by clinet</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
};
</script>

<style lang="scss" scoped>
.innerBurger {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/img/texture.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 44px 30px 30px 30px;

  a {
    font-family: "SchnyderS";
  }

  .languageRoot {
    display: block;
    margin-bottom: 42px;
    text-align: center;
  }

  .logoMobile {
    position: relative;
    left: 0;
    transform: translate(0);
  }

  .socialLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;

    li {
      margin: 0 6px;

      a {
        font-family: "SchnyderS";
        color: #260f01;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }

  .nav {
    display: block;

    li {
      text-align: center;
      margin: 18px 0;
    }

    a {
      font-size: 28px;
      font-weight: 100;
      opacity: 50%;
    }
  }

  .footerContainer {
    text-align: center;
  }

  .footer {
    padding: 48px 24px 24px 24px;
    width: 100%;
    position: relative;

    p {
      position: relative;
      font-family: "1942";
      font-size: 12px;
    }

    &:before {
      content: "";
      position: absolute;
      top: 25%;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #260f01;
    }
  }
}
</style>
