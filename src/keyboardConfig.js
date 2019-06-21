import {
  degreesBtns,
  floatBtns,
  hideBtn,
  triangleBtn,
  zeroBtn,
  plusMinusBtn,
  RLBtn,
  OKBtn
} from "./const";

export default (onChange, onKeyPress) => ({
  mergeDisplay: true,
  display: {
    "{bksp}": "<"
  },
  buttonTheme: [
    {
      class: "hg-btn--pull-right",
      buttons: `${floatBtns[2]} ${floatBtns[1]} ${plusMinusBtn} ${floatBtns[3]}`
    },
    {
      class: "hg-btn--double-width",
      buttons: `${triangleBtn}`
    },
    {
      class: "hg-btn--zero-btn",
      buttons: `${zeroBtn}`
    },
    {
      class: "hg-btn--left-1",
      buttons: `{bksp} ${RLBtn}`
    },
    {
      class: "hg-btn--left-2",
      buttons: `3`
    },
    {
      class: "hg-btn--ok",
      buttons: `${OKBtn}`
    }
  ],
  onChange,
  onKeyPress,
  theme: "hg-theme-default hg-layout-default",
  layout: {
    default: [
      `${degreesBtns[0]} ${degreesBtns[2]} ${plusMinusBtn} ${
        floatBtns[0]
      } 7 8 9 {bksp}`,
      `${degreesBtns[1]} ${degreesBtns[3]} ${floatBtns[1]} 4 5 6 R=L`,
      `${triangleBtn} ${floatBtns[2]} 1 2 3 ${OKBtn}`,
      `${floatBtns[3]} ${zeroBtn} ${hideBtn}`
    ]
  },
  beforeRender: () => {
    document.body.classList.add("keyboard-opened");
  },
  onRender: () => {
    window.scrollTo(0, document.body.scrollHeight);
  }
});
