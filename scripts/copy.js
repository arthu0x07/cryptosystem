export function handleCopyMessage() {
  console.log("handle");

  const DecryptMessageValue = document.querySelector(
    ".decrypt-message-value"
  ).innerText;

  navigator.clipboard.writeText(DecryptMessageValue).catch((error) => {
    console.error("Falha ao copiar texto para a área de transferência:", error);
  });
}
