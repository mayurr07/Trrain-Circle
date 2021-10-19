import React from 'react';
import ErpFeaturesitem from './ErpFeaturesitem';
import Sectitle from '../Title/Sectitle';

const ErpFeatures =()=>{
    return(
        <section className="erp_features_area_two sec_pad">
            <div className="container">
            <Sectitle sClass="sec_title text-center mb_70" Title="Who Are We ?" tClass="t_color3"/>
                <ErpFeaturesitem rowClass="align-items-center flex-row-reverse" image="crm_img1.jpg" roundClass="red"/>
                <ErpFeaturesitem rowClass="align-items-center" image="crm_img2.jpg" roundClass="red"/>
                <ErpFeaturesitem rowClass="align-items-center flex-row-reverse" image="crm_img3.jpg" roundClass="red"/>
            </div>
        </section>
    )
}
export default ErpFeatures;