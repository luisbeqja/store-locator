const frecciaDx = document.querySelector(".Dx");
const schedaUomo = document.querySelector(".uomo");

const frecciaDx2 = document.querySelector(".dx_foto");
const schedaUomoFoto = document.querySelector(".foto_uomo");
const frecciaSx2 = document.querySelector(".sx_foto");
const schedaDonnaFoto = document.querySelector(".foto_donna");

const schedaDonna2Foto = document.querySelector(".schedaDonna2Foto");
const schedaUomo2Foto = document.querySelector(".schedaUomo2Foto");

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

// FOTO
frecciaDx2.addEventListener("click", function () {
  schedaUomoFoto.classList.toggle("hidden");
  schedaDonnaFoto.classList.toggle("hidden");
  schedaDonna2Foto.classList.toggle("hidden");
  schedaUomo2Foto.classList.toggle("hidden");
});

frecciaSx2.addEventListener("click", function () {
  schedaUomoFoto.classList.toggle("hidden");
  schedaDonnaFoto.classList.toggle("hidden");
  schedaDonna2Foto.classList.toggle("hidden");
  schedaUomo2Foto.classList.toggle("hidden");
});
