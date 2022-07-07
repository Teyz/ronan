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
        class="logo"
      />
      <div class="languageRoot">
        <span>FR</span>
        <span> / </span>
        <span>EN</span>
      </div>
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
  padding: 56px 80px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 155px;
    object-fit: contain;
  }

  .languageRoot {
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
}
</style>
