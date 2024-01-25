import "./Landing.css";
import demo from "../../img/demo.mov";
import Button from "../UI/Button";

const Landing = () => {
  return (
    <section className="home" id="home">
      <div className="back-video">
        {" "}
        <video
          data-aos="fade-in"
          data-aos-delay="3000"
          className="back-video"
          autoPlay="autoplay"
          muted
          loop
          playsinline="playsinline"
        >
          <source src={demo} type="video/mp4" />
        </video>
      </div>

      <div
        data-aos="fade-in"
        data-aos-delay="3000"
        className="swiper-slide slide"
      >
        <div className="content">
          <h4>BRYAN NGUYEN</h4>
          <h3>TRAIN WITH INTENSITY</h3>
          <Button
            href="#download"
            action="Get Started&nbsp;&nbsp;"
            icon="fas fa-arrow-right"
          />
        </div>
      </div>

    </section>
  );
};

export default Landing;
