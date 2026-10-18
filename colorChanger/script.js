const o = document.querySelector(".orange");
const g = document.querySelector(".grey");
const b = document.querySelector(".blue");
const r = document.querySelector(".red");
const body = document.querySelector("body")


o.addEventListener("click", function () {
  body.style.backgroundColor = "orange";
});

g.addEventListener("click", function () {
  body.style.backgroundColor = "grey";
});

b.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});

r.addEventListener("click", function () {
  body.style.backgroundColor = "red";
});