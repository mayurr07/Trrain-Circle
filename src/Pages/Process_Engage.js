import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Featuresitems from '../components/Features/Featuresitems';
import FooterSecurity from '../components/Footer/FooterSecurity';
import FooterData from '../components/Footer/FooterData';
import Sectitle from '../components/Title/Sectitle';
import AgencyAction from '../components/AgencyAction';
import SecurityIntegration from '../components/SecurityIntegration';

const Process_Engage = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar nClass="m-auto"
        hbtnClass="new_btn"/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Employee Engagement" tClass="t_color3" TitleP="Employee wellbeing is not only the absence of illness amongst them but 
also taking care of the health as well as other areas that impact it."/>
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home7/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="With efficiency to unlock more opportunities" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Wuth instant data to keep everyone in the know" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                     
                    </div>
                </div>
            </section>
            <SecurityIntegration/>
            <AgencyAction/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default Process_Engage;