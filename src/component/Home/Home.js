import React from "react";
import Artboard from "../../asset/artboard.svg";
import chatbot from "../../asset/chtbotfloat.png";
import gsap from "gsap";
import ChatComponent from "../Bot/Bot";

const Navbar = () => {
  React.useEffect(() => {
    const anime = gsap.timeline();
    anime.from(".navbar", 1, {
      delay: 1.2,
      opacity: 0,
      y: -50,
      ease: "power4.easeIn",
    });
  });
  return (
    <div className="navbar" id="tonav">
      <h5 className="brandname">FINOCK</h5>

      <div className="applink">
        <h6>
          <a href="https://stockpredictor12.herokuapp.com/" target="_blank">
            STOCK PREDICTION
          </a>
        </h6>
        <h6>
          <a href="#tonews">FINEWS</a>
        </h6>
      </div>
    </div>
  );
};

const Landing = () => {
  React.useEffect(() => {
    const anime = gsap.timeline();
    anime.from(".landing .firstpart", 1, {
      delay: 1,
      opacity: 0,
      x: -50,
      ease: "power4.easeIn",
    });
  });
  return (
    <div className="landing">
      <div className="firstpart">
        <h4>AI Powerd Stock Price Predictor</h4>
        <h3>
          <br></br>
        </h3>
        <a className="getstart" href="https://stockpredictor12.herokuapp.com/">
          Get Started &#10132;
        </a>
      </div>
      <div className="secondpart">
        <img src={Artboard} className="artimage" />
      </div>
    </div>
  );
};

const Home = () => {
  React.useEffect(() => {
    const anime = gsap.timeline();
    anime.from(".overlay", 1, {
      opacity: 0.5,
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
      position: "absolute",
      ease: "power4.easeIn",
    });
  });
  return (
    <div>
      <div className="overlay"></div>
      <Navbar />
      <Landing />
      <ChatComponent />
    </div>
  );
};

export default Home;
