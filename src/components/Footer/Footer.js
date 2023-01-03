import "./Footer.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Config from "../../config";
import Marker from "../../img/marker.png";
const Footer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: Config.API_KEY,
  });

  if (!isLoaded) return <div>Loading</div>;

  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="left">
            <div className="box">
              <h3>Contact Me</h3>
              <p>
                <i className="fas fa-phone"></i> +562-374-2039
              </p>
              <p>
                <i className="fas fa-envelope"></i> bryannguyen557@gmail.com
              </p>
              <p>
                <i className="fas fa-map"></i> 740 W 16th St, Costa Mesa, CA
                92627
              </p>

              <div className="share">
                <a
                  href="https://www.instagram.com/buzyfitness/"
                  className="fab fa-instagram"
                ></a>
                <a
                  href="https://www.tiktok.com/@pt_bryanng"
                  className="fab fa-tiktok"
                ></a>
                <a
                  href="https://www.facebook.com/bryan.nguyen.969"
                  className="fab fa-facebook-f"
                ></a>
                <a
                  href="mailto: bryannguyen557@gmail.com"
                  className="fas fa-envelope"
                ></a>
              </div>
              <h4 style={{marginTop: "10px"}}>
                Copyright © 2022 <a href="#">BuzyFitness</a>
              </h4>
              <h4>
                In partnership with{" "}
                <a href="https://selfmadetrainingfacility.com/">
                  Self Made Training Facility
                </a>
              </h4>
              <h4>
                Built with React by{" "}
                <a href="https://www.nhanngyn.tech/">Nhan Nguyen</a>
              </h4>
            </div>
            <div className="box">
              <h3>Quick Navigation</h3>
              <a className="links" href="#home">
                Home
              </a>
              <a className="links" href="#features">
                Features
              </a>
              <a className="links" href="#about">
                About
              </a>
              <a className="links" href="#testimonials">
                Testimonials
              </a>
              <a className="links" href="#blogs">
                Contact
              </a>
            </div>
          </div>
          <div style={{ padding: "none" }} className="right">
            <GoogleMap
              zoom={13}
              center={{ lat: 33.6328687, lng: -117.9316199 }}
              mapContainerClassName="map"
              options={{
                mapId: Config.MAP_ID,
                disableDefaultUI: true,
                gestureHandling: "greedy",
              }}
            >
              <MarkerF
                icon={{
                  url: Marker,
                  scaledSize: new window.google.maps.Size(30, 50),
                }}
                position={{ lat: 33.6328687, lng: -117.9316199 }}
              />
            </GoogleMap>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
