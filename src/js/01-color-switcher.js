function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;

let timerId;

refs.startBtn.addEventListener('click', timerIDClick);

function timerIDClick() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
});
