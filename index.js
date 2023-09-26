const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondsElement.innerText = s;
  ampmElement.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
