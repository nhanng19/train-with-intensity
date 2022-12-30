import "./Landing.css";
import demo from "../../img/demo.mov";
import intro from "../../img/intro.mp3";
import silence from "../../img/silence.mp3";
const Landing = () => {

  return (
    <section className="home" id="home">
      <audio id="audio" autoplay>
        <source src={intro} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
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
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide slide"
            // style={{ backgroundImage: `url(${background})` }}
          >
            <div data-aos="fade-in" data-aos-delay="3000" className="content">
              <h4>TRAIN STRONG, TRAIN FIT</h4>
              <h3>TRAIN WITH INTENSITY</h3>
              <a href="#download" className="btn">
                GET STARTED
              </a>
            </div>
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Landing;
