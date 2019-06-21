import Keyboard from "simple-keyboard";
import { hideBtn, triangleBtn } from "./const";
import keyboardConfig from "./keyboardConfig";
import { onChange, onKeyPress } from "./keyboardHandlers";

const createCustomKeyboard = () => {
  let keyboard;

  const remove = () => {
    keyboard.destroy();
    keyboard = null;
  };

  const create = () => {
    if (keyboard) {
      remove();
    }
    keyboard = new Keyboard(
      keyboardConfig(
        input => onChange(keyboard, input),
        button => onKeyPress(keyboard, button)
      )
    );

    keyboard.getButtonElement(hideBtn).addEventListener("click", remove);
    keyboard.getButtonElement(triangleBtn).addEventListener("click", () => {
      handleTriangleBtnClick();
      keyboard.clearInput();
    });
  };

  return {
    getInstance: () => keyboard,
    showKeyboard: create
  };
};

const handleTriangleBtnClick = () => {
  document.querySelector(".notifications").textContent =
    "Triangle btn logic should be triggered. Still have no idea what does it do";
};

export default createCustomKeyboard;
