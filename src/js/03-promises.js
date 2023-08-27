import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector('[delay]');
const step = document.querySelector('[step]');
const amount = document.querySelector('[amount]');
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let delayNr = Number(delay.value);
  let stepNr = Number(step.value);
  let amountNr = Number(amount.value);

  for (let i = 1; i <= amountNr; i += 1) {
    createPromise(i, delayNr)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    delayNr += stepNr;
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}