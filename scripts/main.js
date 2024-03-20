import { Encrypt, Decrypt } from "./encrypt.js";
import { handleCopyMessage } from "./copy.js";
import { AppearErrorFeedback, HiddenErrorFeedback } from "./feedback.js";

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
      AppearErrorFeedback();
      return true;
    }

    HiddenErrorFeedback();
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
