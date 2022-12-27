import "./Landing.css"
import video from "../../img/Homepage.mp4"
import demo from "../../img/demo.mov"
import background from "../../img/home-bg-1.jpg"
const Landing = () => {

    return (
      <section className="home" id="home">
        <video
          className="back-video"
          autoplay="autoplay"
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
              <div className="content">
                <h4>TRAIN STRONG, TRAIN FIT</h4>
                <h3>TRAIN WITH INTENSITY</h3>
                <a href="#" className="btn">
                  get started
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
    );
}

export default Landing