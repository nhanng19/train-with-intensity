import "./JoinNow.css";
import { useState } from "react";
import Newsletter from "../Newsletter/Newsletter";
const JoinNow = () => {
  const [modal, showModal] = useState(false);
  const showModalHandler = () => {
    showModal(!modal)
  }
  return (
    <>
      {modal && <Newsletter onClick={showModalHandler}/>}
      <section id="download" className="banner">
        <div data-aos="fade-in" className="content">
          <span>Get Started</span>
          <h3>download free programs</h3>
          <p>
            Specialized programs for lower body, strength, and efficiency. Cycle
            up to 6 months for maximum glute growth, reach your squat, bench and
            deadlift goals, and optimize your workout routines.
          </p>
          <a onClick={showModalHandler}>
            <button class="button-54" role="button">
              <i class="fas fa-download"></i>&nbsp;Download
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default JoinNow;
