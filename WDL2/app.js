const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondsDegree = ((360/60) * second) + 90;
  secondHand.style.transition = secondsDegree === 90 ? 'all 0s' : 'all 0.05s';
  secondHand.style['transition-timing-function'] = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const min = now.getMinutes()
  const minsDegree = ((360/60) * min) + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;
  minHand.style.transition = minsDegree === 90 ? 'all 0s' : 'all 0.05s';
  minHand.style['transition-timing-function'] = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hour = now.getHours();
  // to give a realistic hour hand (minsDegree/12 - 8) was added to normal hoursDegree.
  // this serves to ofset the hour hand gradually as the minute hand moves
  // the -8 counters the +90 offset of the original minsDegree
  const hoursDegree = ((360/12) * hour) + 90 + (minsDegree/12 - 8);
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  hourHand.style.transition = hoursDegree === 90 ? 'all 0s' : 'all 0.05s';
  hourHand.style['transition-timing-function'] = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);