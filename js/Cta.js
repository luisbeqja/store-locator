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

const scroll = document.querySelector(".scroll");
const scroll2 = document.querySelector(".scroll2");

//ScrollAnimato
//ScrollAnimato
//ScrollAnimato
let i = 0;
frecciaSx.addEventListener("click", function () {
  if (i < 1000) {
    i = i + 500;
    scroll.scrollTo({
      left: i,
      behavior: "smooth",
    });
  } else {
    scroll.scrollTo({
      left: -i,
      behavior: "smooth",
    });
    i = 0;
  }
});

frecciaDx.addEventListener("click", function () {
  if (i >= 500) {
    i = i - 500;
    scroll.scrollTo({
      left: i,
      behavior: "smooth",
    });
  } else {
    scroll.scrollTo({
      left: +i,
      behavior: "smooth",
    });
    i = 0;
  }
});

// Foto
// Foto
// Foto

let x = 0;
frecciaSx2.addEventListener("click", function () {
  if (x < 1000) {
    x = x + 500;
    scroll2.scrollTo({
      left: x,
      behavior: "smooth",
    });
  } else {
    scroll2.scrollTo({
      left: -x,
      behavior: "smooth",
    });
    x = 0;
  }
});

frecciaDx2.addEventListener("click", function () {
  if (x >= 500) {
    x = x - 500;
    scroll2.scrollTo({
      left: x,
      behavior: "smooth",
    });
  } else {
    scroll2.scrollTo({
      left: +x,
      behavior: "smooth",
    });
    i = 0;
  }
});
