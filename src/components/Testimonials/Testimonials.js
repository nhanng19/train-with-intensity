import { useEffect } from "react";
import "./Testimonials.css";
import Ruben from "../../img/pic-1.png";
import Jalen from "../../img/pic-3.png";
import Audrina from "../../img/pic-2.png"
import Joanne from "../../img/pic-4.png"
const Testimonials = () => {
  useEffect(() => {
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
    var swiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
      },
    });`;
    document.body.append(inlineScript);
    return () => {
      inlineScript.remove();
    };
  }, []);

  return (
    <section class="review" id="testimonials">
      <div class="information">
        <span>Testimonials</span>
        <h3>What the clients say</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptas praesentium asperiores fugiat, excepturi odit obcaecati a
          voluptatibus earum quisquam?
        </p>
      </div>

      <div class="swiper review-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide">
            <p>
              Training with Bryan has not only allowed me to maximize my
              progress, but has also given me a different outlook of life. He'll
              keep you accountable and definitely have you working, but always
              with a positive attitude.
            </p>
            <div class="user">
              <img src={Ruben} alt="" />
              <div class="info">
                <h3>Ruben</h3>
                <span>Body Builder</span>
              </div>
              <i class="fas fa-quote-left"></i>
            </div>
          </div>

          <div class="swiper-slide slide">
            <p>
              He's not only given me knowledge about fitness but has finally
              made me confident in myself. Pushing me through the toughest
              workouts and never quitting, always comitting.
            </p>
            <div class="user">
              <img src={Jalen} alt="" />
              <div class="info">
                <h3>Jalen</h3>
                <span>Restaurant Manager</span>
              </div>
              <i class="fas fa-quote-left"></i>
            </div>
          </div>

          <div class="swiper-slide slide">
            <p>
              Bryan has always kept my accountable to show up to my sessions for
              the week and will even sacrifice his own time to accomodate my
              schedule as a full time college student and full time worker.
            </p>
            <div class="user">
              <img src={Joanne} alt="" />
              <div class="info">
                <h3>Joanne</h3>
                <span>Student</span>
              </div>
              <i class="fas fa-quote-left"></i>
            </div>
          </div>

          <div class="swiper-slide slide">
            <p>
              Bryan knows how to reprogram the appropriate training to reach my
              goals in different ways. This shows me he knows his craft and
              understand what he needs to do for each of his clients.
            </p>
            <div class="user">
              <img src={Audrina} alt="" />
              <div class="info">
                <h3>Audrina</h3>
                <span>Student</span>
              </div>
              <i class="fas fa-quote-left"></i>
            </div>
          </div>
          <div class="swiper-slide slide">
            <p>
              My goal was to gain weight and muscle, but I never saw big
              results after I tried working on for years. It wasn't until I started training with Bryan that I
              started to see major results in just a few months! 
            </p>
            <div class="user">
              <img src="images/pic-4.png" alt="" />
              <div class="info">
                <h3>Aileen</h3>
                <span>Registered Nurse</span>
              </div>
              <i class="fas fa-quote-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
