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
import HostingFeatures from "../components/Service/HostingFeatures"
import HostingFeaturesTwo from "../components/Service/HostingFeaturesTwo"
import Testimonial from "../components/Testimonials/Testimonial"
import ErpActionTwo from "../components/ErpActionTwo";
import AgencyAction from "../components/AgencyAction";


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
      <HostingFeatures/>
      <HostingFeaturesTwo/>
      <ChatIntegration/>
      <ScreenshowCase/> 
      <HostingBlog/>
      <Testimonial tClass="testimonial_area_four sec_pad" FooterData={FooterData}/>
      <FaqSection/>
      {/* <ChatClients/> */}
      <AgencyAction/>
      <FooterSecurity FooterData={FooterData}/>
    </div>
  );
};
export default homechat;
