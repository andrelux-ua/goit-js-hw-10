import iziToast from 'izitoast';

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(event.target.elements.delay.value, 10);
  const state = event.target.elements.state.value;

  const createPromise = (delay, state) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  };

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
        timeout: 5000,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
        timeout: 5000,
      });
    });
});
