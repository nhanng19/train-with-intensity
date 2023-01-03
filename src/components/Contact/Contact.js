import "./Contact.css";
import Button from "../UI/Button";
const Contact = () => {
  return (
    <>
      <section
        data-aos="fade-in"
        data-aos-offset="0"
        id="contact"
        className="banner"
      >
        <div data-aos="fade-in" className="content">
          <span>Join BuzyFitness</span>
          <h3>SEND A MESSAGE</h3>
          <p>
            Email us with any further questions or text Bryan at 562-374-2039.
            We would be happy to answer your question and set up a meeting with
            you. Let us bring you fitness success.
          </p>
          <Button
            icon="fas fa-envelope"
            href="mailto: bryannguyen557@gmail.com"
            action="EMAIL"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
