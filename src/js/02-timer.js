import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');
const remDays = document.querySelector('[data-days]');
const remHours = document.querySelector('[data-hours]');
const remMinutes = document.querySelector('[data-minutes]');
const remSeconds = document.querySelector('[data-seconds]');
let timerId = null;

btnStart.setAttribute('disabled', 'true');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

let choosenDate = 0;

const padLeadingZero = value => String(value).padStart(2, 0);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    if (selectedDates[0] > new Date()) {
      choosenDate = selectedDates[0];
    }

    btnStart.removeAttribute('disabled');
  },
};

const timer = () => {
  const current = new Date();
  localStorage.setItem('selecetedData', choosenDate);
  const saveData = new Date(localStorage.getItem('selectedData'));

  if (!saveData) return;

  const differ = choosenDate - current;
  const { days, hours, minutes, seconds } = convertMs(differ);
  remDays.textContent = days;
  remHours.textContent = padLeadingZero(hours);
  remMinutes.textContent = padLeadingZero(minutes);
  remSeconds.textContent = padLeadingZero(seconds);

  if (differ < 1000) {
    clearInterval(timerId);
  }
};

const onClick = () => {
  if (timerId) {
    clearInterval(timerId);
  }
  timer();
  timerId = setInterval(timer, 1000);
};

btnStart.addEventListener('click', onClick);

flatpickr('#datetime-picker', { ...options });
