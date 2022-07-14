<template>
  <div class="mantraHeader">
    <img src="@/assets/img/raisin.png" alt="" />
    <span class="sliderStep">Mantra 1/6</span>
    <h2>vivre en harmonie avec <span>la nature</span></h2>
    <div class="sliderControls">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.479"
          height="14.033"
          viewBox="0 0 20.479 14.033"
          id="flecheG"
        >
          <g transform="translate(0.5 0.5)">
            <g id="Groupe_399" data-name="Groupe 399">
              <g id="Line-2" transform="translate(0.815 6.516)">
                <path
                  id="Tracé_37"
                  data-name="Tracé 37"
                  d="M26.664,20H8"
                  transform="translate(-8 -20)"
                  fill="rgba(0,0,0,0)"
                  stroke="#260f01"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </g>
              <g id="Oval" transform="translate(0 6.516) rotate(-90)">
                <path
                  id="Tracé_38"
                  data-name="Tracé 38"
                  d="M6.516,6.516A6.517,6.517,0,0,1,0,0"
                  transform="translate(0)"
                  fill="rgba(0,0,0,0)"
                  stroke="#260f01"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </g>
              <g id="Oval-Copy" transform="translate(6.516 6.516) rotate(90)">
                <path
                  id="Tracé_39"
                  data-name="Tracé 39"
                  d="M6.516,0A6.517,6.517,0,0,0,0,6.516"
                  fill="rgba(0,0,0,0)"
                  stroke="#260f01"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
        </svg>

        précendant
      </div>
      <div>
        suivant
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.479"
          height="14.033"
          viewBox="0 0 20.479 14.033"
          id="flecheD"
        >
          <g transform="translate(4.251 0.5)">
            <g
              id="Groupe_399"
              data-name="Groupe 399"
              transform="translate(-3.751 0)"
            >
              <g id="Line-2" transform="translate(0 6.516)">
                <path
                  id="Tracé_37"
                  data-name="Tracé 37"
                  d="M8,20H26.664"
                  transform="translate(-8 -20)"
                  fill="rgba(0,0,0,0)"
                  stroke="#260f01"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </g>
              <g id="Oval" transform="translate(12.962 6.516) rotate(-90)">
                <path
                  id="Tracé_38"
                  data-name="Tracé 38"
                  d="M6.516,0A6.517,6.517,0,0,0,0,6.516"
                  transform="translate(0 0)"
                  fill="rgba(0,0,0,0)"
                  stroke="#260f01"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </g>
              <g id="Oval-Copy" transform="translate(19.479 6.516) rotate(90)">
                <path
                  id="Tracé_39"
                  data-name="Tracé 39"
                  d="M6.516,6.516A6.517,6.517,0,0,1,0,0"
                  transform="translate(0 0)"
                  fill="rgba(0,0,0,0)"
                  stroke="#260f01"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mantraHeader {
  padding: 0 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  position: relative;
  margin-bottom: 0;

  @include above(small) {
    padding: 0 160px;
    margin-bottom: 360px;
  }

  &:after {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: none;

    @include above(big) {
      bottom: -30%;
      height: 180px;
      display: block;
    }
  }

  img {
    margin: 0 auto;
    object-fit: cover;
    max-width: 159px;
    display: block;
  }

  .sliderControls {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      position: relative;
      color: #00000029;
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        color: #260f01;

        #flecheG {
          right: 120%;
        }

        #flecheD {
          left: 130%;
        }

        path {
          stroke: #260f01;
        }
      }

      svg {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        transition: all 0.5s ease;

        path {
          stroke: #cfc9c7;
        }
      }

      #flecheG {
        right: 110%;
      }

      #flecheD {
        left: 120%;
      }
    }
  }

  .sliderStep {
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 48px;
    text-align: center;
    display: block;

    @include above(small) {
      font-size: 21px;
      line-height: 29px;
    }
  }

  h2 {
    margin: 0 auto;
    max-width: 522px;
    font-family: "SchnyderS";
    color: #260f01;
    font-size: 32px;
    line-height: 28px;
    margin: 16px auto 56px auto;
    text-align: center;

    @include above(small) {
      font-size: 73px;
      line-height: 60px;
    }

    span {
      color: #b71616;
    }
  }
}
</style>
