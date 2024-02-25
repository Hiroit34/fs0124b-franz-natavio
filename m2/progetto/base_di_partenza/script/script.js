const nav = document.querySelector(".nav");
const get = document.querySelector(".get");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.scrollY > 399) {
    nav.classList.add("nav-white");
    get.classList.add("get-green");
  } else {
    nav.classList.remove("nav-white");
    get.classList.remove("get-green");
  }
};
