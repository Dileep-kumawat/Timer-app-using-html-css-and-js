let timinig = 0;
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")
let start = document.querySelector("#start")
let pause = document.querySelector("#pause")
let reset = document.querySelector("#reset")

let intId = null;

timinig = localStorage.getItem("timing");
if (timinig === null) {
    timinig = 0;
} else {
    timinig = Number(timinig);
    startTimer();
}

function updateUI() {
    let second = timinig % 60;
    let minute = Math.floor(timinig / 60);

    min.textContent = String(minute).padStart(2, '0');
    sec.textContent = String(second).padStart(2, '0');
}

function startTimer() {
    intId = setInterval(() => {
        timinig++;
        updateUI();
        localStorage.setItem("timing", timinig);
    }, 200);
    start.setAttribute("disabled", "");
    pause.removeAttribute("disabled");
}

start.addEventListener("click", () => {
    startTimer();
});

pause.addEventListener("click", () => {
    clearInterval(intId);
    pause.setAttribute("disabled", "");
    start.removeAttribute("disabled");
});

reset.addEventListener("click", () => {
    timinig = 0;
    updateUI();
})