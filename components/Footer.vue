<template>
  <footer ref="footer">
    <div class="footer">
      <ul>
        <li><a href="https://www.facebook.com/Ronan-By-Clinet-173378592719286">facebook</a></li>
        <li><a href="https://www.instagram.com/ronanbyclinet/">instagram</a></li>
        <li class="desktopLink">
          <NuxtLink to="mentions-legales">{{ $t("footer-legal") }}</NuxtLink>
        </li>
      </ul>
      <p>© 2022 ronan by clinet</p>
    </div>
  </footer>
</template>

<script>
import { useStore } from "@/stores/store";

export default {
  name: "Footer",
  setup() {

    const footer = ref(null);

    const store = useStore()

    const { stop } = useIntersectionObserver(
      footer,
      ([{ isIntersecting }], observerElement) => {
        if(isIntersecting){
           store.setShowBackToHeader(false);
        }
      },
    )

    return {
      footer
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 40px 72px 50px 72px;

  .footer {
    position: relative;

    @include above(small) {
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
      font-size: 16px;

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
        font-size: 16px;
        font-family: "SchnyderS";
        font-weight: 100;
        line-height: 18px;

        @include above(big) {
          font-size: 18px;
        }
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
