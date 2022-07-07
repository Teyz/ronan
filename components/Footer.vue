<template>
  <footer>
    <div class="footer">
      <ul>
        <li class="mobileLink"><a href="">email</a></li>
        <li class="desktopLink"><a href="">facebook</a></li>
        <li><a href="">instagram</a></li>
        <li class="desktopLink"><a href="">mentions légales</a></li>
      </ul>
      <p>© 2022 ronan by clinet</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: url("@/assets/img/texture.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 40px 104px 50px 104px;

  @include above(big) {
    padding: 40px 96px 50px 96px;
  }

  .footer {
    position: relative;

    @include above(big) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:before {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #260f01;
      position: absolute;
      top: -30%;
      left: 0;

      @include above(big) {
        top: -100%;
      }
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 0 12px;

      &.desktopLink {
        display: none;

        @include above(big) {
          display: block;
        }
      }

      &.mobileLink {
        display: block;

        @include above(big) {
          display: none;
        }
      }

      a {
        font-size: 12px;
        font-family: "SchnyderS";
        font-weight: 100;
        line-height: 18px;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  p {
    @include typo-text-footer-mobile;
    margin-top: 12px;

    @include above(big) {
      margin-top: 0;
      @include typo-text-footer;
    }
  }
}
</style>
