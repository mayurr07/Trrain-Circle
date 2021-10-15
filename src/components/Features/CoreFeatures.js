import React from "react";

const CoreFeatures = () => {
  return (
    <section className="chat_core_features_area sec_pad">
      <div className="container">
        <div className="hosting_title chat_title text-center">
          <h3 className="wow fadeInUp" data-wow-delay="0.2s">
          At TRRAIN Circle we believe in a holistic approach towards employee experience to 
            <br /> help them grow and<span> succeed.</span>
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp">
              <div className="round">
                <div className="round_circle"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/pluse.png")}
                  alt=""
                />
                <img src={require("../../img/home-chat/chat.png")} alt="" />
              </div>
              <a href=".#">
                <h4>WELL BEING</h4>
              </a>
              <p>
              How can we help the employee maintain maintaining physical, mental and financial wellbeing.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.2s">
              <div className="round">
                <div className="round_circle two"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/triangle.png")}
                  alt=""
                />
                <img src={require('../../img/home-chat/mobile.png')} alt="" />
              </div>
              <a href=".#">
                <h4>WELL BEING</h4>
              </a>
              <p>
              How can we help the employee maintain maintaining physical, mental and financial wellbeing.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.4s">
              <div className="round">
                <div className="round_circle three"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../../img/home-chat/box.png")}
                  alt=""
                />
                <img src={require('../../img/home-chat/book.png')} alt="" />
              </div>
              <a href=".#">
                <h4>WELL BEING</h4>
              </a>
              <p>
              How can we help the employee maintain maintaining physical, mental and financial wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreFeatures;
