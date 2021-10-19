import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';
import FooterSecurity from '../components/Footer/FooterSecurity';
import AppWork from '../components/Service/AppWork';
import ErpFeatures from '../components/Features/ErpFeatures';
import SecurityFeatures from '../components/Features/SecurityFeatures'
import AgencyAction from '../components/AgencyAction';

const About = () => {
    return(
        <div className="body_wrapper">         
            <CustomNavbar nClass="m-auto" hbtnClass="new_btn"/>
            <ErpFeatures/>
            <AppWork ServiceData={ServiceData}/>
            <SecurityFeatures/>
            <AgencyAction/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default About;