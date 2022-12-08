import "./Services.css";
import img1 from "../../img/f-img-1.jpg";
import img2 from "../../img/f-img-2.jpg";
import img3 from "../../img/f-img-3.jpg";
import icon1 from "../../img/icon-1.png";
import icon2 from "../../img/icon-2.png";
import icon3 from "../../img/icon-3.png";

const Services = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">
        {" "}
        <span>Services</span>{" "}
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <img src={icon1} alt="" />
            <h3>body building</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box second">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="content">
            <img src={icon2} alt="" />
            <h3>gym for men</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <div className="content">
            <img src={icon3} alt="" />
            <h3>gym for women</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;