const splide = new Splide(".splide", {
  perPage: 6,
  gap: "0.5rem",
  type: "loop",
  height: "11rem",
  focus: "center",
  autoWidth: true,
  breakpoints: {
    768: {
      perPage: 3,
      gap: ".7rem",
      height: "12rem",
    },
    640: {
      perPage: 2,
      gap: ".7rem",
      height: "12rem",
    },
    480: {
      perPage: 1,
      gap: ".7rem",
      height: "10rem",
    },
  },
});

splide.mount();

new Splide("#slider1", {
  perPage: 6,
  gap: "0.5rem",
  type: "loop",
  height: "11rem",
  focus: "center",
  autoWidth: true,
  breakpoints: {
    768: {
      perPage: 3,
      gap: ".7rem",
      height: "12rem",
    },
    640: {
      perPage: 2,
      gap: ".7rem",
      height: "12rem",
    },
    480: {
      perPage: 1,
      gap: ".7rem",
      height: "10rem",
    },
  },
}).mount();

new Splide("#slider2", {
  perPage: 6,
  gap: "0.5rem",
  type: "loop",
  height: "11rem",
  focus: "center",
  autoWidth: true,
  breakpoints: {
    768: {
      perPage: 3,
      gap: ".7rem",
      height: "12rem",
    },
    640: {
      perPage: 2,
      gap: ".7rem",
      height: "12rem",
    },
    480: {
      perPage: 1,
      gap: ".7rem",
      height: "10rem",
    },
  },
}).mount();

const navHover = document.getElementsByClassName("nav-link");

navHover.addEventListener("click", () => navHover.classList.add("active"));
