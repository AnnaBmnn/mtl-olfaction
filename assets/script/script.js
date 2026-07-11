const noise = document.getElementById("noise");

let seed = 1;
let lastTime = 0;
const interval = 100; // ms (10 FPS)

function animate(time) {
  if (time - lastTime >= interval) {
    seed++;
    noise.setAttribute("seed", seed);
    lastTime = time;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

/*
* CALENDAR
*/
const debug = new URLSearchParams(window.location.search).has("debug");

if (debug) {
    document.querySelector('.calendar').classList.remove('hide')

}

const calendarButtons = document.querySelectorAll('.js-calendar-button')

for(let i = 0; i < calendarButtons.length; i++){
  calendarButtons[i].addEventListener('click',(e)=>{
    e.preventDefault()
    // remove class to current button
    document.querySelector('.js-calendar-button.current').classList.remove('current')
    calendarButtons[i].classList.add('current')

    document.querySelector('.js-calendar-day.current').classList.remove('current')
    document.querySelector(`#day${calendarButtons[i].dataset.day}`).classList.add('current')
  })
}
