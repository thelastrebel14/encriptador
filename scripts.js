// Función para encriptar el texto
function encryptText() {
  const inputText = document.getElementById("encryt-data").value;
  const encryptedText = inputText
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  displayText(encryptedText);
}

// Función para desencriptar el texto
function unencryptText() {
  const inputText = document.getElementById("encryt-data").value;
  const decryptedText = inputText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  displayText(decryptedText);
}

// Función para mostrar el texto encriptado o desencriptado
function displayText(text) {
  const textNotFound = document.getElementById("text-not-found");
  const displayTextProcessed = document.getElementById(
    "display-text-processed"
  );
  const processedText = document.getElementById("processed-text");

  if (text.trim() !== "") {
    textNotFound.style.display = "none";
    displayTextProcessed.style.display = "block";
    processedText.textContent = text;
  } else {
    textNotFound.style.display = "block";
    displayTextProcessed.style.display = "none";
    processedText.textContent = "";
  }
}

// Función para copiar el texto al portapapeles
function copyText() {
  const processedText = document.getElementById("processed-text").textContent;
  navigator.clipboard.writeText(processedText).then(() => {
    alert("Texto copiado al portapapeles!");
  });
}
