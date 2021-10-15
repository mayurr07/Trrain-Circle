import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import ChatBanner from "../components/Banner/ChatBanner";
import CoreFeatures from "../components/Features/CoreFeatures";
import ChatFeatures from "../components/Features/ChatFeatures";
import ChatIntegration from "../components/ChatIntegration";
import ChatClients from "../components/chatClients";
import FooterSecurity from "../components/Footer/FooterSecurity";
import FooterData from "../components/Footer/FooterData";
import ScreenshowCase from "../components/ScreenshowCase";
import HostingBlog from "../components/Blog/HostingBlog";
import FaqSection from "../components/FaqSection";


const homechat = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        nClass="m-auto"
        hbtnClass="new_btn"
      />
      <ChatBanner />
      <CoreFeatures/>
      <ChatFeatures rowClass='flex-row-reverse' pClass="pr_70" col1="col-lg-6 offset-lg-1" col2="col-lg-5" icon="chat_icon.png" img1="dot.png" img2="chat_02.png" img3="chat_01.png" titleSmall="Move deals" titlebig="through your funnel – fast"
      p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/>
      <ChatIntegration />
      <ScreenshowCase/> 
      <HostingBlog/>
      <FaqSection/>
      <ChatClients/>
      <FooterSecurity FooterData={FooterData}/>
    </div>
  );
};
export default homechat;
