const pad = n => String(n).padStart(2, "0");
function update(){
  const now = new Date();

  const s = now.getSeconds();
  const m = now.getMinutes();
  const h = now.getHours();

  const sDeg = s * 6;
  const mDeg = m * 6 + s * 0.1;
  const hDeg = (h % 12) * 30 + m * 0.5;

  document.getElementById("s").style.transform = `rotate(${sDeg}deg)`;
  document.getElementById("m").style.transform = `rotate(${mDeg}deg)`;
  document.getElementById("h").style.transform = `rotate(${hDeg}deg)`;

  document.getElementById("digital").textContent = now.toLocaleTimeString();
}

const analog = document.querySelector(".analog");
for(let i = 0; i < 12; i++) {
  const t = document.createElement("div");
  t.className = "tick";
  t.style.transform = `rotate(${i * 30}deg)`;
  analog.appendChild(t);
}

update();
setInterval(update, 1000);