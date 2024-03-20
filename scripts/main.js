import { Encrypt, Decrypt } from "./encrypt.js";
import { handleCopyMessage } from "./copy.js";

// Events Section
const ButtonCopy = document.querySelector(".button-copy");
ButtonCopy.addEventListener("click", handleCopyMessage);

const ButtonEncrypt = document.querySelector(".button-encrypt");
ButtonEncrypt.addEventListener("click", HandleEncryptMessage);

const ButtonDecrypt = document.querySelector(".button-decrypt");
ButtonDecrypt.addEventListener("click", HandleDecryptMessage);

function ValidateMessage(OriginalMessageValue) {
  if (OriginalMessageValue !== undefined && OriginalMessageValue !== null) {
    const regex = /^[a-z]+$/i;

    if (regex.test(OriginalMessageValue)) {
      document
        .querySelector(".container-decrypt-message")
        .classList.remove("hidden-element");
      document
        .querySelector(".container-no-message-found")
        .classList.add("hidden-element");

      return true;
    } else {
      document
        .querySelector(".container-decrypt-message")
        .classList.add("hidden-element");
      document
        .querySelector(".container-no-message-found")
        .classList.remove("hidden-element");
    }
  }
}

// Encrypt Section
function HandleEncryptMessage(event = MouseEvent) {
  const OriginalMessageValue = document.querySelector(
    ".message-value-content"
  ).value;

  if (ValidateMessage(OriginalMessageValue)) {
    const EncryptMessage = Encrypt(OriginalMessageValue);

    renderMessage(EncryptMessage);
  }
}

// Decrypt Section
function HandleDecryptMessage(event = MouseEvent) {
  const OriginalMessageValue = document.querySelector(
    ".message-value-content"
  ).value;

  if (ValidateMessage(OriginalMessageValue)) {
    const DecryptMessage = Decrypt(OriginalMessageValue);

    renderMessage(DecryptMessage);
  }
}

function renderMessage(text = String()) {
  const DecryptMessageValueElement = document.querySelector(
    ".decrypt-message-value"
  );

  DecryptMessageValueElement.innerText = text;
}
