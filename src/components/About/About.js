import "./About.css";
import about from "../../img/about-img.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div data-aos="fade-in" data-aos-offset="-100" className="image">
          <img src={about} alt="" />
        </div>

        <div className="content">
          <span data-aos="fade-in">About Bryan</span>
          <h3 data-aos="fade-in" className="title">
            Fitness Is A Way Of Life
          </h3>
          <p data-aos="fade-in">
            Bryan started doing martial arts at a young age and competed in multiple
            tournaments. In most of his tournaments he was required to drop some
            weight, so dieting has always been part of his life. After some years
            passed he began Co - Coaching martial arts for different tournaments
            in high school, and found his purpose in coaching. Once he phased out
            of martial arts, Bryan started training his friends out of 2nd nature and
            was very pleased with the results. When everything closed down
            during covid, Bryan moved back in with his family and started his own
            garage gym where he officially started personal training. He realized
            in this period of his life he was getting a little too comfortable and
            was starting to lose his sense of direction. Thankfully, Covid had
            finally ended and Bryan made the choice to sell all of his equipment to
            Train at Self Made Training Facility in Costa Mesa. It's been a year
            since he has trained at Self Made, and the amount of growth in his
            intuition and judgement has tripled as a coach, especially being
            around so many dedicated coaches. Bryan is beyond excited to work with
            whoever views this message because he has never been more confident
            in his ability to help you reach your goals, and he has built to
            guarantee your success.
          </p>
          <div className="box-container">
            <div className="box">
              <h3>
                <i className="fa-solid fa-dumbbell"></i>Strength
              </h3>
              <p>
                Strength training is about defining a performance objective and
                working towards it. In order to achieve goals efficiently and
                effectively, the process must be planned carefully, which is
                where the strength program comes in.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fa-solid fa-person-running"></i>Fat Loss
              </h3>
              <p>
                Bryan provides programs that will help you burn calories, increase
                endurance, improve athleticism, and even challenge you mentally.
                Lose fat, maintain muscle mass, get in shape and transform your
                physique as much as possible.
              </p>
            </div>
            <div className="box">
              <h3>
                <i style={{ color: "transparent", textShadow: "0 0 0 red" }}>
                  💪
                </i>
                Mass Building
              </h3>
              <p>
                Workouts to increase your muscle mass as much as possible in 10
                weeks. Works each muscle group hard once per week using mostly
                heavy compound exercises, while following a strict bulking diet
                to ensure maximum gains.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
