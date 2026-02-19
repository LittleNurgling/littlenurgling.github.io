const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*";

function typeScramble(text, container, speed = 25, scrambleTime = 200) {

  return new Promise(resolve => {

    let i = 0;

    function nextChar(){

      if(i >= text.length){
        resolve();
        return;
      }

      const span = document.createElement("span");
      container.appendChild(span);

      if(text[i] === " "){
        span.textContent = " ";
        i++;
        setTimeout(nextChar, speed);
        return;
      }

      let start = performance.now();

      function scramble(now){

        if(now - start > scrambleTime){
          span.textContent = text[i];
          i++;
          setTimeout(nextChar, speed);
          return;
        }

        span.textContent = CHARS[Math.floor(Math.random()*CHARS.length)];
        requestAnimationFrame(scramble);
      }

      scramble(start);
    }

    nextChar();
  });
}

async function fakeLoading(){

  await typeLine("СКАНИРОВАНИЕ СВЯЩЕННЫХ ЭНГРАММ");
  await typeLine("ДЕШИФРОВКА БЛОКА ДАННЫХ");
  await typeLine("ОБРАЩЕНИЕ К ДУХУ МАШИНЫ");
  await typeLine("ПРОВЕРКА ЛИЧНОСТИ");
}

async function typeLine(text){
  const line = document.createElement("div");
  output.appendChild(line);

  await typeScramble(text, line);

  await sleep(300);
}

function sleep(ms){
  return new Promise(r=>setTimeout(r,ms));
}

const input = document.getElementById("cmd");
const output = document.getElementById("output");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {

    const value = input.value.trim();
    input.value = "";

    processCommand(value);
  }
});

async function processCommand(text) {

  output.textContent += "\n> " + text;

  input.disabled = true;

  await fakeLoading();   // ← ВОТ ТУТ

  await typeLine("ДОСТУП ЗАПРЕЩЕН");

  await typeLine("ПОПЫТКА НЕЗАКОННОГО ДОСТУПА К АРХИВАМ");

  await typeLine("СИЛЫ СВЯЩЕННОГО ОРДО ЕРЕТИКУС ИМПЕРСКОЙ ИНКВИЗИЦИИ ПОСТАВЛЕНЫ В ИЗВЕСТНОСТЬ");
  
  await typeLine("ВОЗНОСИТЕ МОЛЬБЫ ИМПЕРАТОРУ И СМИРЕННО ОЖИДАЙТЕ СВОЕЙ УЧАСТИ");

  input.disabled = false;
}

function scrollToBottom(){
  output.scrollTop = output.scrollHeight;
}
