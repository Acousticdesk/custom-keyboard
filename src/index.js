import "simple-keyboard/build/css/index.css";

import { selectInputsOnPage } from "./dom-utils";
import createCustomKeyboard from "./createCustomKeyboard";
import "./index.css";

// TODO: remove weird click logic and add event listeners instead
const keyboard = createCustomKeyboard();

// TODO: event should be changed to tap for iPads
selectInputsOnPage().forEach(input => {
  input.addEventListener("click", () => {
    selectInputsOnPage().forEach(input => input.classList.remove("focused"));
    input.classList.add("focused");
    keyboard.showKeyboard();
  });
});
