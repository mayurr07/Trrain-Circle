import React from "react";

const ChatBanner = () => {
  return (
    <section className="startup_banner_area_three">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="chat_banner_content">
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
              Enabling employee <strong>Wellbeing</strong> At the click of the button
              </h2>
              <p className="b_color f_p f_size_18">We are a company and we will help your children have fun celebrating a birthday or any other holidays</p>
              <div
                className="text-center pr_100 wow fadeInUp"
                data-wow-delay="0.4s">
              </div>
              <a href=".#" className="btn_six slider_btn">Schedule A Demo</a>
                <a href=".#" ><img src={require('../../img/play_btn.png')} alt="" /></a>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="chat_img">
              {/* <img
                className="p_absoulte p_one"
                src={require('../../img/home-chat/panguin_img_one.png')}
                alt=""
              />
              <img
                className="p_absoulte p_two"
                src={require('../../img/home-chat/panguin_img_two.png')}
                alt=""
              /> */}
              <img
                className="p_absoulte p_three"
                src={require('../../img/home-chat/panguin_img_three.png')}
                alt=""
              />
              {/* <div className="round one"></div> */}
              {/* <div className="round two"></div>
              <div className="round three"></div> */}
              <img
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                src={require('../../img/home-chat/Messages.png')}
                alt="chat-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBanner;
