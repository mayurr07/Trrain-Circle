import React from 'react';
import Sectitle from '../Title/Sectitle';
import HostingBlogItems from '../Blog/HostingBlogItems';
const HostingBlog =()=> {
    return(
        <section className="h_blog_area sec_pad">
            <div className="container">
            <Sectitle sClass="sec_title text-center mb_70" Title="Our Latest News"/>
                <div className="row">
                    <HostingBlogItems blogImage="h_blog1.jpg" blogTitle="How To Deploy a PHP Application with Kubernetes on Ubuntu" pDate="March 20, 2019" comments="3 Comments"/>
                    <HostingBlogItems blogImage="h_blog2.jpg" blogTitle="How To Build a Node.js Application with Docker" pDate="June 20, 2019" comments="2 Comments"/>
                </div>
            </div>
        </section>
    )
}

export default HostingBlog;