import "./Services.css";
import img1 from "../../img/f-img-1.jpg";
import img2 from "../../img/f-img-2.jpg";
import Food from "../../img/Food.png";
import Equipment from "../../img/f-img-4.jpg"
const Services = () => {
  return (
    <section className="features" id="features">
      <h1 data-aos="fade-in" className="heading">
        <span>SERVICES</span>
      </h1>

      <div className="box-container">
        <div data-aos="fade-down" className="box">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <span></span>
          <div className="content">
            <h3>Exclusive 1 on 1 Training</h3>
            <p>
              A 1 on 1 training experience expertly crafted for your goals.
              Every minute is calculated to ensure that your purpose is met
              efficiently.
            </p>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-delay="100" className="box second">
          <div className="image">
            <img src={Food} alt="" />
          </div>
          <span></span>
          <div className="content">
            <h3>Meal Prep Service</h3>
            <p>
              A service created for those who do not have time to prepare food
              that will get them to their health and fitness goals.
            </p>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-delay="200" className="box">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <span></span>
          <div className="content">
            <h3>Engaging Duo Training</h3>
            <p>
              Built for you and your friend to enjoy the intensity of a rigorous
              training session, while experiencing the gratification of goals
              met.
            </p>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-delay="300" className="box second">
          <div className="image">
            <img src={Equipment} alt="" />
          </div>
          <span></span>
          <div className="content">
            <h3>Quality Equipments</h3>
            <p>
              Self Made Training Facility provies stackable plyometric boxes, weighted
              medicine balls, battle ropes, squat racks, and deadlift platforms,
              all the equipment you need to take your training to the next
              level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
