import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import ChatBanner from "../components/Banner/ChatBanner";
import CoreFeatures from "../components/Features/CoreFeatures";
import ChatIntegration from "../components/ChatIntegration";
import ChatClients from "../components/chatClients";
import FooterSecurity from "../components/Footer/FooterSecurity";
import FooterData from "../components/Footer/FooterData";
import ScreenshowCase from "../components/ScreenshowCase";
import HostingBlog from "../components/Blog/HostingBlog";
import FaqSection from "../components/FaqSection";
import AppFeatures from "../components/Features/AppFeatures";
import AppWork from "../components/Service/AppWork";
import ServiceData from "../components/Service/ServiceData";


const homechat = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        nClass="m-auto"
        hbtnClass="new_btn"
      />
      <ChatBanner />
      <CoreFeatures/>
      <AppFeatures/>
      <AppWork ServiceData={ServiceData}/>
      <ChatIntegration/>
      <ScreenshowCase/> 
      <HostingBlog/>
      <FaqSection/>
      <ChatClients/>
      <FooterSecurity FooterData={FooterData}/>
    </div>
  );
};
export default homechat;
