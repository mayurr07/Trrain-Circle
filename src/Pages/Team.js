import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Teams from '../components/Team/Team';
import FooterData from '../components/Footer/FooterData';
import FooterSecurity from '../components/Footer/FooterSecurity';

const Team =()=>{
    return(
        <div className="body_wrapper">
            <CustomNavbar nClass="m-auto" hbtnClass="new_btn"/>
            <Teams/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default Team;