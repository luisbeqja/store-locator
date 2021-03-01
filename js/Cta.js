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

frecciaSx.addEventListener("click", function () {
  schedaUomo.classList.toggle("hidden");
  schedaDonna.classList.toggle("hidden");
  schedaDonna2.classList.toggle("hidden");
  schedaUomo2.classList.toggle("hidden");

  schedaDonna2.classList.add("Ffx");
  schedaUomo2.classList.add("Ffx");
  schedaUomo.classList.add("Ffx");
  schedaDonna.classList.add("Ffx");

  schedaDonna2.classList.remove("Fdx");
  schedaUomo2.classList.remove("Fdx");
  schedaUomo.classList.remove("Fdx");
  schedaDonna.classList.remove("Fdx");
});

frecciaDx.addEventListener("click", function () {
  schedaUomo.classList.toggle("hidden");
  schedaDonna.classList.toggle("hidden");
  schedaDonna2.classList.toggle("hidden");
  schedaUomo2.classList.toggle("hidden");

  schedaDonna2.classList.add("Fdx");
  schedaUomo2.classList.add("Fdx");
  schedaUomo.classList.add("Fdx");
  schedaDonna.classList.add("Fdx");

  schedaDonna2.classList.remove("Ffx");
  schedaUomo2.classList.remove("Ffx");
  schedaUomo.classList.remove("Ffx");
  schedaDonna.classList.remove("Ffx");
});

// FOTO
// FOTO
// FOTO
frecciaSx2.addEventListener("click", function () {
  schedaUomoFoto.classList.toggle("hidden");
  schedaDonnaFoto.classList.toggle("hidden");
  schedaDonna2Foto.classList.toggle("hidden");
  schedaUomo2Foto.classList.toggle("hidden");

  schedaDonna2Foto.classList.add("Ffx");
  schedaUomo2Foto.classList.add("Ffx");
  schedaUomoFoto.classList.add("Ffx");
  schedaDonnaFoto.classList.add("Ffx");

  schedaDonna2Foto.classList.remove("Fdx");
  schedaUomo2Foto.classList.remove("Fdx");
  schedaUomoFoto.classList.remove("Fdx");
  schedaDonnaFoto.classList.remove("Fdx");
});

frecciaDx2.addEventListener("click", function () {
  schedaUomoFoto.classList.toggle("hidden");
  schedaDonnaFoto.classList.toggle("hidden");
  schedaDonna2Foto.classList.toggle("hidden");
  schedaUomo2Foto.classList.toggle("hidden");

  schedaDonna2Foto.classList.add("Fdx");
  schedaUomo2Foto.classList.add("Fdx");
  schedaUomoFoto.classList.add("Fdx");
  schedaDonnaFoto.classList.add("Fdx");

  schedaDonna2Foto.classList.remove("Ffx");
  schedaUomo2Foto.classList.remove("Ffx");
  schedaUomoFoto.classList.remove("Ffx");
  schedaDonnaFoto.classList.remove("Ffx");
});
