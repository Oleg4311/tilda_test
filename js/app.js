const input = document.querySelector('.input');
const button = document.querySelector('.button');

const myFunc = function set_rate(event, el) {
  // Позиция клика относительно элемента
  event = event || window.event;
  if (event.clientX <= el.clientWidth) {
    const rate = Math.ceil((event.clientX / el.clientWidth) * 5);
    document.getElementById('rate').innerHTML = `Ваша оценка: ${rate}`;
    el.getElementsByTagName('div')[0].style.width = `${rate * 20}%`;
    if (rate < 4) {
      input.style.display = 'block';
      button.style.display = 'block';
    } else {
      input.style.display = 'none';
      button.style.display = 'none';
    }
  }
};
