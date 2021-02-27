const frecciaDx = document.querySelector(".Dx");
const schedaUomo = document.querySelector(".uomo");

const frecciaSx = document.querySelector(".Sx");
const schedaDonna = document.querySelector(".donna");
const schedaDonna2 = document.querySelector(".donna2");
const schedaUomo2 = document.querySelector(".uomo2");

frecciaDx.addEventListener("click", function () {
  schedaUomo.classList.toggle("hidden");
  schedaDonna.classList.toggle("hidden");
  schedaDonna2.classList.toggle("hidden");
  schedaUomo2.classList.toggle("hidden");
});

frecciaSx.addEventListener("click", function () {
  schedaUomo.classList.toggle("hidden");
  schedaDonna.classList.toggle("hidden");
  schedaDonna2.classList.toggle("hidden");
  schedaUomo2.classList.toggle("hidden");
});
