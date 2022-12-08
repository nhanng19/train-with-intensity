import "./About.css"
import about from "../../img/about-img.jpg"
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="image">
          <img src={about} alt="" />
        </div>

        <div className="content">
          <span>About Bryan</span>
          <h3 className="title">Every day is a chance to improve</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quia accusamus dicta inventore nobis obcaecati vero odio, id
            dolorum. Consequatur ex, aperiam deserunt nostrum perferendis illum
            unde ipsa? Consequatur, distinctio?
          </p>
          <div className="box-container">
            <div className="box">
              <h3>
                <i className="fas fa-check"></i>body and mind
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                enim.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i>healthy life
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                enim.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i>strategies
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                enim.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i>workout
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                enim.
              </p>
            </div>
          </div>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </section>
    </>
  );
};

export default About;