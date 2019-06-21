import { degreesBtns, floatBtns, hideBtnTest, triangleBtnTest } from "./const";
import { selectFocusedInput } from "./dom-utils";

const resetInput = () => {
  selectFocusedInput().value = "";
};

export const onChange = (keyboard, input) => {
  if (~floatBtns.indexOf(input)) {
    keyboard.setInput(`0${input}`);
  }

  if (hideBtnTest.test(input)) {
    keyboard.setInput(input.replace(hideBtnTest, ""));
  }

  if (triangleBtnTest.test(input)) {
    keyboard.setInput(input.replace(triangleBtnTest, ""));
  }

  document.querySelector(".input.focused").value = keyboard.getInput();
};

export const onKeyPress = (keyboard, button) => {
  if (~degreesBtns.indexOf(button)) {
    keyboard.clearInput();
    return;
  }

  if (button === "{bksp}") {
    keyboard.clearInput();
    resetInput();
    return;
  }
};
