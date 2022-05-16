import React, { Component } from 'react'
import Appointment from '../Appointment';
import Banner from '../Banner';
 
class ServiceDetails extends Component {
    render() {

        let bg1 = require('../../assets/img/video-bg1.jpg');
        let bg2 = require('../../assets/img/video-bg2.jpg');

        return (
            <React.Fragment>
                <Banner pageTitle='Service Details' />
                <section className="promo-content-section section-padding">
                    <div className="promo-section-shape">
                        <img src={require("../../assets/img/shape/plusb.png")} alt="" className="shape promo1" />
                        <img src={require("../../assets/img/shape/plusg.png")} alt="" className="shape promo2" />
                        <img src={require("../../assets/img/shape/dotmr.png")} alt="" className="shape promo3" />
                        <img src={require("../../assets/img/shape/xsrdot.png")} alt="" className="shape promo4" />
                        <img src={require("../../assets/img/shape/plusb.png")} alt="" className="shape promo5" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6 col-12">
                                <div className="promo-text">
                                    <h2>PRF For Faster Healing</h2>
                                    <p>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat eget urna. Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur. Donec ut risus ultricies, dictum neque at, bibendum purus. In hac habitasse platea dictumst.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-12 mt-4 mt-lg-0">
                                <img src={require("../../assets/img/service-details-promo1.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="promo-content-section section-bg text-white promo-bg section-padding">
                    <div className="promo-section-shape">
                        <img src={require("../../assets/img/shape/plusr.png")} alt="" className="shape promo1" />
                        <img src={require("../../assets/img/shape/plusg.png")} alt="" className="shape promo2" />
                        <img src={require("../../assets/img/shape/circle1.png")} alt="" className="shape promo3" />
                        <img src={require("../../assets/img/shape/bluef.png")} alt="" className="shape promo4" />
                        <img src={require("../../assets/img/shape/plusb.png")} alt="" className="shape promo5" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6 col-12 mb-4 mb-lg-0">
                                <img src={require("../../assets/img/service-details-promo2.png")} alt="" />
                            </div>
                            <div className="col-md-12 col-lg-6 col-12">
                                <div className="promo-text">
                                    <h2>Composite or Mercury?</h2>
                                    <p>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat eget urna. Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur. Donec ut risus ultricies, dictum neque at, bibendum purus. In hac habitasse platea dictumst.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="featured-video-section section-padding">
                    <div className="promo-section-shape">
                        <img src={require("../../assets/img/shape/plusr.png")} alt="" className="shape promo1" />
                        <img src={require("../../assets/img/shape/dotmr.png")} alt="" className="shape promo2" />
                        <img src={require("../../assets/img/shape/circle1.png")} alt="" className="shape promo3" />
                        <img src={require("../../assets/img/shape/bluef.png")} alt="" className="shape promo4" />
                        <img src={require("../../assets/img/shape/plusb.png")} alt="" className="shape promo5" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-8 offset-lg-2 text-center">
                                <div className="section-text-wrap pb-25">
                                    <h1>Safety First</h1>
                                    <p>Since 1998, Donto  Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. John Dae, Micha  and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                                <div className="single-video-item">
                                    <div className="video-bg-img" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                                        <a href="https://www.youtube.com/watch?v=0s35QCFg7p0" className="popup-video video-play-button">
                                            <i className="fal fa-play" />
                                        </a>
                                    </div>
                                    <h5>The Importance Of Complete Dentistry for your Health</h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <div className="single-video-item">
                                    <div className="video-bg-img" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                                        <a href="https://www.youtube.com/watch?v=0s35QCFg7p0" className="popup-video video-play-button">
                                            <i className="fal fa-play" />
                                        </a>
                                    </div>
                                    <h5>Safety First with CT Scans!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Appointment />
            </React.Fragment>
        )
    }
}

export default ServiceDetails
