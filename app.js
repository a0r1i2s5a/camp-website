const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 30,
  effect: "coverflow",
  autoplay: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
  gsap.fromTo(
    ".target1",
    {
      x: 5,

      autoAlpha: 0, // x軸方向に500pxの位置から100pxの位置まで移動しながらフェードインさせる
    },
    {
      x: 0,
      autoAlpha: 1,

      scrollTrigger: {
        trigger: ".target1",
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play none none reverse", // リバースアニメーションを適応させています
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    ".target2",
    {
      x: -5,

      autoAlpha: 0, // x軸方向に500pxの位置から100pxの位置まで移動しながらフェードインさせる
    },
    {
      x: 5,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".target2",
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play none none reverse", // リバースアニメーションを適応させています
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    ".target3",
    {
      x: 0,

      autoAlpha: 0, // x軸方向に500pxの位置から100pxの位置まで移動しながらフェードインさせる
    },
    {
      x: 0,
      autoAlpha: 1,

      scrollTrigger: {
        trigger: ".target3",
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play none none reverse", // リバースアニメーションを適応させています
        // markers: true,
      },
    }
  );
});
