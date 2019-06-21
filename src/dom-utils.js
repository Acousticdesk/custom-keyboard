export const selectInputsOnPage = () => [
  ...document.querySelectorAll(".input")
];
export const selectFocusedInput = () =>
  document.querySelector(".input.focused");
