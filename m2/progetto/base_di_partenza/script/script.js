const nav = document.getElementsByTagName("nav");
const get = document.querySelector(".get");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.scrollY > 0) {
    nav.classList.add("nav-white");
  } else {
    nav.classList.remove("nav-white");
  }
};
