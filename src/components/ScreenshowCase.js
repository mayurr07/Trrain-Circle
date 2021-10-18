import React from 'react';
import Sectitle from './Title/Sectitle';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
const ScreenshowCase =()=>{
    return(
        <section  className="app_screenshot_area sec_pad_app" id="showcase">
            <div  className="container custom_container p0">
                <Sectitle sClass="sec_title text-center mb_70" Title="Trrain Circle Technologies" tClass="t_color3 mb_20" TitleP="Its features are built to aid the use cases and operations of all departments in an organization"/>
                <div  className="app_screen_info">
                    <Slider  className="app_screenshot_slider" {...settings}>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="img/home7/screenshot1.png"  className="image-link"><img src={require('../img/home7/screenshot1.png')} alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="img/home7/screenshot2.png"  className="image-link"><img src={require('../img/home7/screenshot2.png')} alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="img/home7/screenshot3.png"  className="image-link"><img src={require('../img/home7/screenshot3.png')} alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="img/home7/screenshot4.png"  className="image-link"><img src={require('../img/home7/screenshot4.png')} alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="img/home7/screenshot5.png"  className="image-link"><img src={require('../img/home7/screenshot5.png')} alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="img/home7/screenshot3.png"  className="image-link"><img src={require('../img/home7/screenshot3.png')}alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="img/home7/screenshot4.png"  className="image-link"><img src={require('../img/home7/screenshot1.png')} alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="img/home7/screenshot5.png"  className="image-link"><img src={require('../img/home7/screenshot1.png')} alt=""/></a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default ScreenshowCase;