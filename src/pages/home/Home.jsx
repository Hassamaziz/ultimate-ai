import React from "react";
import "./home.css";
import Robot from "../../assets/robot.png";
import map from "../../assets/map.png";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
     
      <div className="my-5">
        <div className="container my-5">
          <div className="row row__main ">
            <div className="col-md-12 btn__home">
              <button className="bt3">Unleash The Power Of AI</button>
            </div>
          </div>
          <div className="row row2">
            <div className="col-md-12 h1__home d-flex justify-content-center my-3">
            <div className="col-md-4">
              <h1 className="home__h1-text">
                Ultimate AI Chatbot <img src={Robot} alt="Robot" />
              </h1>
              </div>
            </div>
          </div>
          <div className="row row2">
            <div className="col-md-12 h1__home">
              <p className="home__text">
                All-in-one platform to generate AI content and start making money in minutes
              </p>
            </div>
          </div>
          <div className="row row2">
            <div className="col-md-12 my-3 h1__home">
              <div className="btn__home">
                <button className="bt2">Thank You!</button>
              </div>
            </div>
          </div>
          <div className="row row2">
            <div className="col-md-12 h1__home mb-5">
              <img src={map} className="img-fluid" alt="Map" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
