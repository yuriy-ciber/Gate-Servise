const config = {
  type: "carousel",
  startAt: 1,
  perView: 1,
  autoplay: 3000,
  animationDuration: 2000,
  hoverpause: true,
  breakpoints: {
    1024: {
      perView: 1,
    },
    900: {
      perView: 1,
    },
    600: {
      perView: 1,
    },
  },
};
export const glide = new Glide(".glide", config).mount();
