import "./Transformation.css"
import { useEffect } from "react";
const Transformation = () => { 
  useEffect(() => {
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
var swiper = new Swiper(".transformation-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: false,
    thresholdDelta: 70,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
    },
    1560: {
      slidesPerView: 4,
    },
  },
});`;
    document.body.append(inlineScript);
    return () => {
      inlineScript.remove();
    };
  }, []);
  return (
    <div className="transformation-swiper-container banner">
      <div data-aos="fade-in" className="content">
        <span>Transformation</span>
        <h3>Results Guaranteed</h3>
        <p>
          Our promise is more than a claim – it's a commitment to your success.
          Join the ranks of countless individuals who have achieved remarkable
          transformations with our programs.
        </p>
      </div>
      <div class="swiper transformation-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide transformation-slide slide-one"></div>
          <div class="swiper-slide transformation-slide slide-two"></div>
          <div class="swiper-slide transformation-slide slide-three"></div>
          <div class="swiper-slide transformation-slide slide-four"></div>
          <div class="swiper-slide transformation-slide slide-five"></div>
          <div class="swiper-slide transformation-slide slide-six"></div>
          <div class="swiper-slide transformation-slide slide-seven"></div>
          <div class="swiper-slide transformation-slide slide-eight"></div>
          <div class="swiper-slide transformation-slide slide-nine"></div>
          <div class="swiper-slide transformation-slide slide-ten"></div>
        </div>
      </div>
    </div>
  );
}

export default Transformation;