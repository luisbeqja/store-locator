const frecciaDx = document.querySelector(".Dx");
const scheda1 = document.querySelector(".uomo");

const frecciaDx2 = document.querySelector(".dx_foto");
const schedaUomoFoto1 = document.querySelector(".foto_uomo");
const frecciaSx2 = document.querySelector(".sx_foto");
const schedaDonnaFoto2 = document.querySelector(".foto_donna");

const schedaDonna2Foto3 = document.querySelector(".schedaDonna2Foto");
const schedaUomo2Foto4 = document.querySelector(".schedaUomo2Foto");

const frecciaSx = document.querySelector(".Sx");
const scheda2 = document.querySelector(".donna");
const scheda4 = document.querySelector(".donna2");
const scheda3 = document.querySelector(".uomo2");

frecciaSx.addEventListener("click", function () {
  if (scheda1.classList.contains("hidden")) {
    scheda1.classList.remove("hidden");
    scheda1.classList.add("Ffx");
    scheda3.classList.add("hidden");
  } else {
    scheda1.classList.add("hidden");
    scheda3.classList.remove("hidden");
    scheda3.classList.add("Fdx");
  }
});

frecciaDx.addEventListener("click", function () {
  if (scheda2.classList.contains("hidden")) {
    scheda2.classList.remove("hidden");
    scheda2.classList.add("Ffx");
    scheda4.classList.add("hidden");
  } else {
    scheda2.classList.add("hidden");
    scheda4.classList.remove("hidden");
    scheda4.classList.add("Fdx");
  }
});

// FOTO
// FOTO
// FOTO
// frecciaSx2.addEventListener("click", function () {
//   schedaUomoFoto.classList.toggle("hidden");
//   schedaDonnaFoto.classList.toggle("hidden");
//   schedaDonna2Foto.classList.toggle("hidden");
//   schedaUomo2Foto.classList.toggle("hidden");

//   schedaDonna2Foto.classList.add("Ffx");
//   schedaUomo2Foto.classList.add("Ffx");
//   schedaUomoFoto.classList.add("Ffx");
//   schedaDonnaFoto.classList.add("Ffx");

//   schedaDonna2Foto.classList.remove("Fdx");
//   schedaUomo2Foto.classList.remove("Fdx");
//   schedaUomoFoto.classList.remove("Fdx");
//   schedaDonnaFoto.classList.remove("Fdx");
// });

// frecciaDx2.addEventListener("click", function () {
//   schedaUomoFoto.classList.toggle("hidden");
//   schedaDonnaFoto.classList.toggle("hidden");
//   schedaDonna2Foto.classList.toggle("hidden");
//   schedaUomo2Foto.classList.toggle("hidden");

//   schedaDonna2Foto.classList.add("Fdx");
//   schedaUomo2Foto.classList.add("Fdx");
//   schedaUomoFoto.classList.add("Fdx");
//   schedaDonnaFoto.classList.add("Fdx");

//   schedaDonna2Foto.classList.remove("Ffx");
//   schedaUomo2Foto.classList.remove("Ffx");
//   schedaUomoFoto.classList.remove("Ffx");
//   schedaDonnaFoto.classList.remove("Ffx");
// });

frecciaSx2.addEventListener("click", function () {
  if (schedaUomoFoto1.classList.contains("hidden")) {
    schedaUomoFoto1.classList.remove("hidden");
    schedaUomoFoto1.classList.add("Ffx");
    schedaDonna2Foto3.classList.add("hidden");
  } else {
    schedaUomoFoto1.classList.add("hidden");
    schedaDonna2Foto3.classList.remove("hidden");
    schedaDonna2Foto3.classList.add("Fdx");
  }
});

frecciaDx2.addEventListener("click", function () {
  if (schedaDonnaFoto2.classList.contains("hidden")) {
    schedaDonnaFoto2.classList.remove("hidden");
    schedaDonnaFoto2.classList.add("Ffx");
    schedaUomo2Foto4.classList.add("hidden");
  } else {
    schedaDonnaFoto2.classList.add("hidden");
    schedaUomo2Foto4.classList.remove("hidden");
    schedaUomo2Foto4.classList.add("Fdx");
  }
});
