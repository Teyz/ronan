<template>
  <div class="headerRoot">
    <Transition name="slidedown">
       <MobileMenu v-if="showMenu" @close-menu='toggleMenu'/>
    </Transition>
    <header :class="{ isSticky }">
      <div class="container">
        <ul class="nav">
          <!-- <li><a href="#movie">Film</a></li> -->
          <li v-if="route.name === 'mentions-legales'"><nuxt-link :to="{path: '/', hash: '#mantraHeader'}">Mantras</nuxt-link></li>
          <li v-if="route.name === 'mentions-legales'"><nuxt-link :to="{ path: '/',hash:'#contact'}">Contact</nuxt-link></li>
          <li v-if="route.name !== 'mentions-legales'"><a href="#mantraHeader">Mantras</a></li>
          <li v-if="route.name !== 'mentions-legales'"><a href="#contact">Contact</a></li>
        </ul>
        <img
          src="@/assets/img/logoMobile.svg"
          alt="Logo Ronan By Clinet"
          class="logoMobile"
          @click="goToHome('hero')"
        />
        <img
          src="@/assets/img/logo.svg"
          alt="Logo Ronan By Clinet"
          class="logoDesktop"
          @click="goToHome('hero')"
        />
        <div class="languageRoot">
          <span @click="changeLang('fr')" :class="{ isFrenchActive, lang: 'lang' }">FR</span>
          <span> | </span>
          <span @click="changeLang('en')" :class="{ isEnglishActive , lang: 'lang' }">EN</span>
        </div>
        <div class="menu-icon">
          <input
            class="menu-icon__cheeckbox"
            type="checkbox"
            @click="toggleMenu"
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { useWindowScroll } from "@vueuse/core";
import { useI18n } from "vue-i18n";
export default {
  name: "Header",
  setup() {
    const showMenu = ref(false);
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
      document.querySelector(".menu-icon__cheeckbox").checked = showMenu.value;
    };

    const isFrenchActive = ref(true);
    const isEnglishActive = ref(false);

    const { y } = useWindowScroll();

    const isSticky = ref(false);

    const { locale } = useI18n();

    const router = useRouter();
    const route = useRoute();

    const goToHome = (value) => {
      router.push({ path: "/" });
      const hero = document.getElementById(value);
      hero.scrollIntoView();
    };

    const changeLang = (lang) => {
      if (lang === "en") {
        isEnglishActive.value = true;
        isFrenchActive.value = false;
      } else {
        isEnglishActive.value = false;
        isFrenchActive.value = true;
      }
      locale.value = lang;
      if(route.name != 'mentions-legales'){
        const hero = document.getElementById("hero");
        hero.scrollIntoView();
      }
    };

    watch(y, (newValue) => {
      if (newValue > 110) {
        isSticky.value = true;
      }
      if (newValue < 110) {
        isSticky.value = false;
      }
    });

    return {
      showMenu,
      toggleMenu,
      y,
      isSticky,
      changeLang,
      isFrenchActive,
      isEnglishActive,
      goToHome,
      route
    };
  },
};
</script>

<style lang="scss" scoped>
.headerRoot {
  overflow: hidden;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100%;
  padding: 24px;

  @include above(big) {
    padding: 40px 80px;
    &.isSticky {
      padding: 24px 80px;
    }
  }

  &.isSticky {
    transition: all 0.5s ease;
    animation: smoothScroll 0.5s forwards;
    position: fixed;
    background-color: $primary;

    .logoMobile {
      cursor: pointer;
      display: block;
    }

    .logoDesktop {
      cursor: pointer;
      display: none;
    }
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
    cursor: pointer;
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

      &.lang{
        &:hover{
        color: $secondary;
        }
      }
      
      &.isEnglishActive,
      &.isFrenchActive {
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
      display: flex;
    }

    li {
      margin: 0 24px;

      &:hover {
        color: $secondary;
      }

      a {
        font-family: "SchnyderS";
        font-weight: 100;
        font-size: 14px;
        letter-spacing: 3px;
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
    z-index: 10;

    @include above(big) {
      display: none;
    }

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
      width: 150%;
      height: 1px;
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
}

@keyframes smoothScroll {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
