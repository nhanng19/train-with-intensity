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
            I started doing martial arts at a young age and competed in multiple
            tournaments. In most of my tournaments I was required to drop some
            weight, so dieting has always been part of my life. After some years
            passed I began Co - Coaching martial arts for different tournaments
            in high school, and found my purpose in coaching. Once I phased out
            of martial arts, I started training my friends out of 2nd nature and
            was very pleased with the results. When everything closed down
            during covid, I moved back in with my family and started my own
            garage gym where I officially started personal training. I realized
            in this period of my life I was getting a little too comfortable and
            was starting to lose my sense of direction. Thankfully, Covid had
            finally ended and I made the choice to sell all of my equipment to
            Train at Self Made Training Facility in Costa Mesa. It's been a year
            since I have trained at Self Made, and the amount of growth in my
            intuition and judgment has tripled as a coach, especially being
            around so many dedicated coaches. I am beyond excited to work with
            whoever views this message because I have never been more confident
            in my ability to help you reach your goals, and I have built to
            guarantee your success.
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