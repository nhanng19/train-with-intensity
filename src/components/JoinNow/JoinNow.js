import "./JoinNow.css";
import Program from "../../img/f-img-1.jpg"
const JoinNow = () => {
  return (
    <>
      <section id="download" className="banner">
        <span>Get Started</span>
        <h3>download free programs</h3>
        <p>
          Specialized programs for lower body, strength, and efficiency. Cycle up to
          6 months for maximum glute growth, reach your squat, bench and
          deadlift goals, and optimize your workout routines.
        </p>
        <a download href={Program} className="btn">
          DOWNLOAD
        </a>
      </section>
    </>
  );
};

export default JoinNow;
