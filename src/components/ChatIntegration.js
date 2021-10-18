import React from 'react';
const ChatIntegration =()=>{
    return(
        <section className="security_integration_area chat_integration_area">
            <div className="container">
                <div className="border-bottom"></div>
                <div className="chat_title text-center">
                    <h2 className="wow fadeInUp"><span>Our</span> Clients</h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/kissmetrics.png")} alt=""/>
                            <h5>MULTIPLIER</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/metorik.png")} alt=""/>
                            <h5>CLINIKK</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/nicereply-1.png")} alt=""/>
                            <h5>SNAPMINT</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/update.png")} alt=""/>
                            <h5>ENGLISH BOLO</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/campfire.png")} alt=""/>
                            <h5>WELSPUN</h5>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <a href="/#" className="s_integration_item">
                            <img src={require("../img/new-home/webhooks.png")} alt=""/>
                            <h5>ENGLISH BOLO</h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ChatIntegration;