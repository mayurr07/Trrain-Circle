import React from 'react';

const chatClients =()=>{
    return(
        <div>
            <section className="chat_clients_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0 chat_clients_feedback">
                            <div className="clients_feedback_item flex-row-reverse">
                                {/* <div className="feedback_body">
                                    <p>
                                        Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!
                                    </p>
                                    <div className="ratting">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h3 className="f_name">John Doe</h3>
                                    <a href=".#">hello.com</a>
                                </div> */}
                                <img src={require("../img/home-chat/john.png")} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 chat_clients_feedback feedback_two">
                            <div className="clients_feedback_item">
                                {/* <div className="feedback_body">
                                    <p>
                                        Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!
                                    </p>
                                    <div className="ratting">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h3 className="f_name">Richard Tea</h3>
                                    <a href=".#">hello.com</a>
                                </div> */}
                                <img src={require("../img/home-chat/richard.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="chat_get_started_area">
                <div className="container">
                    <div className="chat_get_started_content text-center">
                        <h2 className="wow fadeInUp" data-wow-delay="0.2s">Get started with us</h2>
                        <p>As an organization we believe we’re the sum of all individuals who come together to help us make our impact. We’re on constant lookout for individuals who want to do the best work of their lives.</p>
                        <a href=".#" className="chat_btn btn_hover">Get A Demo Now</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default chatClients;