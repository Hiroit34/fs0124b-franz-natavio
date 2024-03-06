const title = document.getElementById("title");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");
const input = document.getElementById("name");
const timerCD = document.getElementById("timerCD");

saveBtn.addEventListener("click", () => {
  const inputText = input.value;
  localStorage.setItem("savedName", inputText);
  input.value = "";
  title.innerHTML = inputText;
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("savedName");
  title.innerHTML = "";
});

let timer = sessionStorage.getItem("timer_station");
if (!timer) {
  timer = 20;
}

let interval = setInterval(function () {
  timer++;
  timerCD.innerHTML = timer;
  sessionStorage.setItem("timer_station", timer);
  if (timer === 0) {
    clearInterval(interval);
    sessionStorage.clear();
    timerCD.innerHTML = "Tempo Scaduto Stupido";
  }
}, 1000);
