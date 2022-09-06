<template>
  <div class="innerBurger">
    <div></div>
    <div class="main">
      <div class="languageRoot" v-if="!noLang">
        <span
          @click="changeLang('fr')"
          :class="{ isFrenchActive, lang: 'lang' }"
          >FR</span
        >
        <span> | </span>
        <span
          @click="changeLang('en')"
          :class="{ isEnglishActive, lang: 'lang' }"
          >EN</span
        >
      </div>
      <ul class="nav">
        <li @click="toggleMenu" v-if="route.name !== 'index'">
          <nuxt-link :to="{ path: '/', hash: '#movie' }">Film</nuxt-link>
        </li>
        <li v-else @click="toggleMenu">
          <a href="#movie">Film</a>
        </li>
        <li @click="toggleMenu" v-if="route.name !== 'index'">
          <nuxt-link :to="{ path: '/', hash: '#mantraHeader' }"
            >Mantras</nuxt-link
          >
        </li>
        <li v-else @click="toggleMenu">
          <a href="#mantraHeader">Mantras</a>
        </li>
        <li @click="toggleMenu">
          <nuxt-link :to="{ path: '/collection' }">Collection</nuxt-link>
        </li>
        <li @click="toggleMenu" v-if="route.name !== 'index'">
          <nuxt-link :to="{ path: '/', hash: '#contact' }">Contact</nuxt-link>
        </li>
        <li v-else @click="toggleMenu">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul class="socialLinks">
        <li>
          <a href="https://www.facebook.com/Ronan-By-Clinet-173378592719286"
            >facebook</a
          >
        </li>
        <li>
          <a href="https://www.instagram.com/ronanbyclinet/">instagram</a>
        </li>
      </ul>
    </div>
    <div class="footerContainer">
      <NuxtLink to="mentions-legales" @click="toggleMenu">{{
        $t("footer-legal")
      }}</NuxtLink>
      <div class="footer">
        <p>© 2022 ronan by clinet</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "MobileMenu",
  props: {
    noLang: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const showMenu = ref(false);
    const toggleMenu = () => {
      emit("close-menu");
    };

    const isFrenchActive = ref(true);
    const isEnglishActive = ref(false);

    const { y } = useWindowScroll();

    const isSticky = ref(false);

    const { locale } = useI18n();

    const router = useRouter();
    const route = useRoute();

    const goToHome = () => {
      toggleMenu();
      router.push({ path: "/" });
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
      toggleMenu();
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
      route,
      y,
      isSticky,
      changeLang,
      isFrenchActive,
      isEnglishActive,
      goToHome,
    };
  },
};
</script>

<style lang="scss" scoped>
.innerBurger {
  width: 100vw;
  height: 100vh;
  background-color: $primary;
  z-index: 19;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 44px 30px 30px 30px;

  position: fixed;
  top: 0;
  left: 0;

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
