const input = document.getElementById("cmd");
const output = document.getElementById("output");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {

    const value = input.value.trim();
    input.value = "";

    processCommand(value);
  }
});

function processCommand(text) {

  output.textContent += "\n> " + text;

  // имитация обработки
  output.textContent += "\nPROCESSING...";
  
  input.disabled = true;

  setTimeout(() => {

    output.textContent += "\nACCESS DENIED\n";
    input.disabled = false;

    scrollToBottom();

  }, 1500);
}

function scrollToBottom(){
  output.scrollTop = output.scrollHeight;
}
