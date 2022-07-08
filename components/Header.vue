<template>
  <header>
    <div class="container">
      <ul class="nav">
        <li><a href="#movie">Film</a></li>
        <li><a href="#mantras">Mantras</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <img
        src="@/assets/img/logo.svg"
        alt="Logo Ronan By Clinet"
        class="logoDesktop"
      />
      <img
        src="@/assets/img/logoMobile.svg"
        alt="Logo Ronan By Clinet"
        class="logoMobile"
      />
      <div class="languageRoot">
        <span>FR</span>
        <span> / </span>
        <span>EN</span>
      </div>
      <div class="menu-icon">
        <input class="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="innerBurger">
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
      <img
        src="@/assets/img/logoMobile.svg"
        alt="Logo Ronan By Clinet"
        class="logoMobile"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  padding: 30px 24px;

  @include above(big) {
    padding: 56px 80px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include above(big) {
      justify-content: space-between;
    }
  }

  .logoDesktop {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 155px;
    object-fit: contain;

    display: none;

    @include above(big) {
      display: block;
    }
  }

  .logoMobile {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 38px;
    object-fit: cover;

    @include above(big) {
      display: none;
    }
  }

  .languageRoot {
    display: none;

    @include above(big) {
      display: block;
    }
    span {
      font-family: "SchnyderS";
      font-weight: 100;
      font-size: 14px;
      letter-spacing: 2px;
      line-height: 20px;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        color: $secondary;
      }
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    display: none;

    @include above(big) {
      display: block;
    }

    li {
      margin: 0 14px;

      &:hover {
        color: $secondary;
      }

      a {
        font-family: "SchnyderS";
        font-weight: 100;
        font-size: 14px;
        letter-spacing: 2px;
        line-height: 20px;
        text-transform: uppercase;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .menu-icon {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;

    .menu-icon__cheeckbox {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }
    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
    }
    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--bar-bg, #000);
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }
      &:last-of-type {
        bottom: 0;
      }
    }
    &.active,
    .menu-icon__cheeckbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 5px;
        }
        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
        }
      }
    }

    &.active:hover span:first-of-type,
    &.active:hover span:last-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 22px;
    }

    &:hover {
      // no need hover effect on mobile.
      @media (min-width: 1024px) {
        span:first-of-type {
          width: 26px;
        }

        span:last-of-type {
          width: 12px;
        }
      }
    }
  }

  .innerBurger {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: url("@/assets/img/texture.webp") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .languageRoot {
      display: block;
      margin-bottom: 42px;
    }

    .logoMobile {
      top: 30px;
    }

    .socialLinks {
      display: flex;
      align-items: center;
      justify-content: center;

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
  }
}
</style>
