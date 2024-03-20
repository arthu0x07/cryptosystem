export function AppearErrorFeedback() {
  document
    .querySelector(".container-decrypt-message")
    .classList.remove("hidden-element");
  document
    .querySelector(".container-no-message-found")
    .classList.add("hidden-element");
}

export function HiddenErrorFeedback() {
  document
    .querySelector(".container-decrypt-message")
    .classList.add("hidden-element");
  document
    .querySelector(".container-no-message-found")
    .classList.remove("hidden-element");
}
