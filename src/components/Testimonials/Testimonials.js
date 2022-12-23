import "./Testimonials.css";
import review1 from "../../img/pic-1.png";
import review2 from "../../img/pic-2.png";
import review3 from "../../img/pic-3.png";
import review4 from "../../img/pic-4.png";
const Testimonials = () => {
  return (
   <section class="trainers" id="trainers">

    <h1 class="heading"> <span>Testimonials</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src={review1} alt=""/>
            <div class="content">
                <span>Testimonials</span>
                <h3>Ruben</h3>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/trainer-2.jpg" alt=""/>
            <div class="content">
                <span>expert trainer</span>
                <h3>Joanne</h3>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src={review3} alt=""/>
            <div class="content">
                <span>expert trainer</span>
                <h3>Jalen</h3>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/trainer-4.jpg" alt=""/>
            <div class="content">
                <span>expert trainer</span>
                <h3>john deo</h3>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

    </div>

</section>
  );
};

export default Testimonials;
