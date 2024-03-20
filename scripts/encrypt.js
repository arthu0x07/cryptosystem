export function Decrypt(text = String()) {
  let DecryptMessage = text;

  DecryptMessage = DecryptMessage.replace(/enter/gim, "e");
  DecryptMessage = DecryptMessage.replace(/ober/gim, "o");
  DecryptMessage = DecryptMessage.replace(/imes/gim, "i");
  DecryptMessage = DecryptMessage.replace(/ai/gim, "a");
  DecryptMessage = DecryptMessage.replace(/ufat/gim, "u");

  return DecryptMessage;
}

export function Encrypt(text = String()) {
  let EncryptMessage = text;

  EncryptMessage = EncryptMessage.replace(/e/gim, "enter");

  EncryptMessage = EncryptMessage.replace(/o/gim, "ober");
  EncryptMessage = EncryptMessage.replace(/i/gim, "imes");
  EncryptMessage = EncryptMessage.replace(/a/gim, "ai");
  EncryptMessage = EncryptMessage.replace(/u/gim, "ufat");

  return EncryptMessage;
}
