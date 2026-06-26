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