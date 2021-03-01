const Servizi = document.querySelector(".ServiziDisponibili");
const Collezioni = document.querySelector(".Collezioni");
const Brand = document.querySelector(".Brand");
const NegozioScritta = document.querySelector(".titolo_ilnegozio");
const ManagerScritta = document.querySelector(".StoreManager_mobile");

let ServizziUl = document.querySelector(".ul_servizi");
let CollezioniUl = document.querySelector(".ul_collezioni");
let BrandLogo = document.querySelector(".brand__logo2");
let Negozio = document.querySelector(".ilNegozio_scritte");
let Manager = document.querySelector(".Manager_content");
let ManagerFoto = document.querySelector(".Manager_content_foto");

let s = window.innerWidth;

if (s <= 768) {
  //primo
  ServizziUl.style.display = "none";
  Servizi.addEventListener("click", () => {
    if (ServizziUl.style.display === "none") {
      ServizziUl.style.display = "block";
    } else {
      ServizziUl.style.display = "none";
    }
  });

  //secondo
  CollezioniUl.style.display = "none";
  Collezioni.addEventListener("click", () => {
    if (CollezioniUl.style.display === "none") {
      CollezioniUl.style.display = "block";
    } else {
      CollezioniUl.style.display = "none";
    }
  });

  //terzo
  BrandLogo.style.display = "none";
  Brand.addEventListener("click", () => {
    if (BrandLogo.style.display === "none") {
      BrandLogo.style.display = "block";
    } else {
      BrandLogo.style.display = "none";
    }
  });

  // quarto
  Manager.style.display = "none";
  ManagerScritta.addEventListener("click", () => {
    if (Manager.style.display === "none") {
      Manager.style.display = "block";
      ManagerFoto.style.display = "block";
    } else {
      Manager.style.display = "none";
      ManagerFoto.style.display = "none";
    }
  });

  Negozio.style.display = "none";
  NegozioScritta.addEventListener("click", () => {
    if (Negozio.style.display === "none") {
      Negozio.style.display = "block";
    } else {
      Negozio.style.display = "none";
    }
  });
}
