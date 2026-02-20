const terminalContainer = document.getElementById("terminal-container");
const creationContainer = document.getElementById("creation-container");
const backContainer = document.getElementById("back-container");
const loadBtn = document.getElementById("loadCharBtn");
const newBtn = document.getElementById("newCharBtn");
const backBtn = document.getElementById("backBtn");
const menu = document.getElementById("menu-buttons");
const content = document.getElementById("content-container");

// Кнопка "Загрузить персонажа"
loadBtn.addEventListener("click", async () => {
  menu.style.display = "none";
  content.style.display = "block";
  backBtn.style.display = "block";
  
  backContainer.style.display = "flex";
  terminalContainer.style.display = "block";
  creationContainer.style.display = "none";

  const show_output = document.getElementById("output");
  show_output.textContent = "+++ ТЕРМИНАЛ ВВОДА ДАННЫХ ПОДГОТОВЛЕН +++\n +  ОЖИДАНИЕ: КОД ДОСТУПА: УРОВЕНЬ ^БЕТА^  +> ";

});

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*";

function typeScramble(text, container, speed = 10, scrambleTime = 200) {

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

  await typeLine("+ СКАНИРОВАНИЕ СВЯЩЕННЫХ ЭНГРАММ +");
  await typeLine("+ ДЕШИФРОВКА БЛОКА ДАННЫХ +");
  await typeLine("+ ОБРАЩЕНИЕ К ДУХУ МАШИНЫ +");
  await typeLine("+ ПРОВЕРКА ЛИЧНОСТИ +");
}

async function typeLine(text, speed = 10, scrambleTime = 200, color = "#7CFF7C"){
  const line = document.createElement("div");
  line.style.color = color
  line.style.textShadow = `0 0 6px ${color}`;
  
  output.appendChild(line);

  await typeScramble(text, line, speed, scrambleTime);

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

  const pattern_sasha = /САНЯ|САША|САНЁК|АЛЕКСАНДР/i;
  const pattern_hydra = /ГИДРА|АЛЬФА-|АЛЬФАР|ОМЕГО/i;

  if(pattern_sasha.test(text)) {
    await typeLine("+ ДОСТУП РАЗРЕШЕН +", 1, 1);
    await typeLine("+ ИМПЕРАТОР ГОРДИТСЯ ВАМИ, ОЖИДАЙТЕ МИСКА АМАСЕКА И ЭЛЬДАРКА-ЖЕНА +", 1, 1);
  } else if(pattern_hydra.test(text)) {
    await typeLine("+ ГИДРА ДОМИНАТУС, БРАТ +", 1, 1);
    await typeLine("+ ПРЕДОСТАВЛЯЮ ПОЛНЫЙ ДОСТУП +", 1, 1);
  } else {
  await typeLine("+ ДОСТУП ЗАПРЕЩЕН +", 1, 1, "#cc0000");
  await typeLine("+ ПОПЫТКА НЕЗАКОННОГО ДОСТУПА К АРХИВАМ +", 1, 1, "#cc0000");
  await typeLine("+ СИЛЫ СВЯЩЕННОГО ОРДО ЕРЕТИКУС ИМПЕРСКОЙ ИНКВИЗИЦИИ ПОСТАВЛЕНЫ В ИЗВЕСТНОСТЬ +", 1, 1, "#cc0000");
  await typeLine("+ ВОЗНОСИТЕ МОЛЬБЫ ИМПЕРАТОРУ И СМИРЕННО ОЖИДАЙТЕ СВОЕЙ УЧАСТИ +", 1, 1, "#cc0000");
}
  
  input.disabled = false;
}

function scrollToBottom(){
  output.scrollTop = output.scrollHeight;
}

// Кнопка "Создание персонажа"
newBtn.addEventListener("click", async () => {
  menu.style.display = "none";
  content.style.display = "block";
  backBtn.style.display = "block";
  backContainer.style.display = "flex";
  terminalContainer.style.display = "none";
  creationContainer.style.display = "flex";

});

// Кнопка "Назад"
backBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  content.style.display = "none";
  backBtn.style.display = "none";
  
  backContainer.style.display = "flex";
  terminalContainer.style.display = "none";
  creationContainer.style.display = "none";
});



