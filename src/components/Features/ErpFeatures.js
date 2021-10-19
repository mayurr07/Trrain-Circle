import React from 'react';
import ErpFeaturesitem from './ErpFeaturesitem';
import Sectitle from '../Title/Sectitle';

const ErpFeatures =()=>{
    return(
        <section className="erp_features_area_two sec_pad">
            <div className="container">
            <Sectitle sClass="sec_title text-center mb_70" Title="How We Work" tClass="t_color3" TitleP="Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school.!"/>
                <ErpFeaturesitem rowClass="align-items-center flex-row-reverse" image="crm_img1.jpg" roundClass="red"/>
                <ErpFeaturesitem rowClass="align-items-center" image="crm_img2.jpg" roundClass="red"/>
                <ErpFeaturesitem rowClass="align-items-center flex-row-reverse" image="crm_img3.jpg" roundClass="red"/>
            </div>
        </section>
    )
}
export default ErpFeatures;