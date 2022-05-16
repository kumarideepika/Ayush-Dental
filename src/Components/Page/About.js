import React, { Component } from 'react'
import CountUp from 'react-countup';
import Banner from '../Banner';
import SectionTitleOne from '../SectionTitleOne'
import Appointment from '../Appointment';
import BlogOne from '../Blog/BlogOne';
import BlogData from '../Data/BlogData';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner pageTitle='About Us' />

                <section className="about-page-top-content-wrap section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-8 offset-lg-2 text-center">
                                <div className="section-text-wrap">
                                    <h1>Our Dental Practice</h1>
                                    <p>Since 1998, Donto Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. John Dae, Micha and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="patient-focused-wrap section-padding text-white section-bg text-center">
                    <div className="container">
                        
                        <SectionTitleOne BigTitle='Patient Focused Approach' />

                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="best-service-item-box">
                                    <div className="service-box-icon">
                                        <img src={require ("../../assets/img/icons/like.png") } alt="" />
                                    </div>
                                    <h3><a href=".#">Consolation</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="best-service-item-box">
                                    <div className="service-box-icon">
                                        <img src={require ("../../assets/img/icons/love.png") } alt="" />
                                    </div>
                                    <h3><a href=".#">Familiarity</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="best-service-item-box">
                                    <div className="service-box-icon">
                                        <img src={require ("../../assets/img/icons/respect.png") } alt="" />
                                    </div>
                                    <h3><a href=".#">Outcome</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="promo-content-section promo-bg section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <img src={require("../../assets/img/experienceddentist.png")} alt="" />
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="promo-text mt-5 mt-lg-0">
                                    <h2>Experienced Dentist</h2>
                                    <p>Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
                                    <p>Dr. Harrie believes in providing her patients with more than just world class dental care. He also helps patients recognize the vital connection between dental health and whole body health. A graduate of the University of California’s School of Dentistry, Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the dental world for future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-achievement-wrap section-bg text-white section-padding mb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-lg-6">
                                <div className="section-text-wrap">
                                    <h1>Our Achievement</h1>
                                    <p>Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
                                    <a href=".#" className="theme-btn mr-lg-3">Appointment</a>
                                    <a href=".#" className="theme-btn border-btn popup-video"><i className="fal fa-play mr-2" />Watch Video</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="achievement-funfact row">
                                    <div className="col-12 col-sm-6 text-center">
                                        <div className="single-am-funfact">
                                                <CountUp
                                                end={22}
                                                duration={3.75} />
                                            <p>Patients</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 text-center">
                                        <div className="single-am-funfact">
                                                <CountUp
                                                    end={75}
                                                    duration={3.75} />
                                            <p>Dentist</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 text-center">
                                        <div className="single-am-funfact">
                                                <CountUp
                                                    end={25}
                                                    duration={3.75} />
                                            <p>Awards</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 text-center">
                                        <div className="single-am-funfact">
                                                <CountUp
                                                    end={28}
                                                    duration={3.75} />
                                            <p>Branch</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <BlogOne BlogData={BlogData} />
                <Appointment />

            </React.Fragment>
        )
    }
}

export default About
