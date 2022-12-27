import "./Services.css";
import img1 from "../../img/f-img-1.jpg";
import img2 from "../../img/f-img-2.jpg";
import img3 from "../../img/f-img-3.jpg";
import icon1 from "../../img/icon-1.png";
import icon2 from "../../img/icon-2.png";
import icon3 from "../../img/icon-3.png";
import Food from "../../img/Food.png";
const Services = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">
        <span>Services</span>{" "}
      </h1>

      <div className="box-container">
        <div data-aos="fade-up" className="box">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <img src={icon1} alt="" />
            <h3>Exclusive 1 on 1 Training</h3>
            <p>
              A 1 on 1 training experience expertly crafted for your goals.
              Every minute is calculated to ensure that your purpose is met
              efficiently.
            </p>
          </div>
        </div>

        <div data-aos="fade-down" className="box second">
          <div className="image">
            <img src={Food} alt="" />
          </div>
          <div className="content">
            <img src={icon2} alt="" />
            <h3>Meal Prep Service</h3>
            <p>
              A service created for those who do not have time to prepare food
              that will get them to their health and fitness goals.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="box">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="content">
            <img src={icon3} alt="" />
            <h3>Engaging Duo Training</h3>
            <p>
              Built for you and your friend to enjoy the intensity of a rigorous
              training session, while experiencing the gratification of goals
              met.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
