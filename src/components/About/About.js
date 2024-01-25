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
            Embark on a transformative fitness journey with Bryan, a true
            testament to resilience and passion for health. In the realm of
            combat sports, he grappled with the complexities of their
            relationship with food. However, the story takes a triumphant turn
            as he delved into the intricate world of fitness, unraveling the
            mysteries of the human body. Bryan’s path to wellness is a narrative
            of empowerment through knowledge. Armed with a profound
            understanding of fitness principles, he not only conquered their
            struggles but also emerged as a certified nutrition and powerlifting
            coach. This journey is a fusion of dedication, education, and a
            commitment to a bodybuilding style that epitomizes strength and
            aesthetics. Join us on this empowering odyssey, where the fusion of
            combat sports experience, fitness enlightenment, and coaching
            expertise converge to inspire and guide you towards your own triumph
            over challenges. This isn't just a fitness journey; it's a testament
            to the transformative power of knowledge and determination. Welcome
            to a realm where your fitness goals become a reality.
          </p>
          <div className="box-container">
            <div data-aos="fade-right" className="box">
              <h3>
                <i className="fa-solid fa-dumbbell"></i>Strength
              </h3>
              <p>
                Elevate your fitness journey with our dynamic approach to
                strength training – a comprehensive experience designed to
                enhance not just your physical power, but also your mobility and
                stability. Our strength training goes beyond lifting weights;
                it's a holistic practice that transforms your entire body.
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" className="box">
              <h3>
                <i className="fa-solid fa-person-running"></i>Fat Loss
              </h3>
              <p>
                Embark on a transformative fat loss journey that transcends the
                scale, focusing on more than just numbers. Our specialized fat
                loss training is a holistic approach designed to elevate your
                overall well-being, boost energy levels, sculpt aesthetics, and
                ignite a newfound self-confidence
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className="box">
              <h3>
                <i
                  style={{ color: "transparent", textShadow: "0 0 0 #ff3434" }}
                >
                  💪
                </i>
                Bodybuilding
              </h3>
              <p>
                Step into a realm of fitness where strength meets aesthetics,
                and weaknesses are transformed into strengths. Our
                bodybuilding-style training is a symphony of precision,
                dedicated to building mass around your unique weak points while
                amplifying overall strength.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
