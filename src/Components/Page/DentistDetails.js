import React, { Component } from 'react'
import Appointment from '../Appointment';
import Banner from '../Banner';


class DentistDetails extends Component {
    render() {
        var bg = require ('../../assets/img/dentist-profile-img.jpg');
        var achievementImg = require('../../assets/img/achievement.jpg');

        return (
            <React.Fragment>
                <Banner pageTitle='Dr. Manish Kesharwani' />

                <section className="dentist-details-wrap section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-8 col-12">
                                <div className="single-dentist-details">
                                    <h2>Dr. Manish Kesharwan <span>(DMD, MS, DICOI)</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy.</p>
                                    <div className="dentist-award-membership">
                                        <h3>Dental Associations</h3>
                                        <li>Indian Dental Association</li>
                                        <li>Academy of General Dentistry</li>
                                        <li>Carolina Dental Society</li>
                                        <li>Academy of General Dentistry</li>
                                        <li>Indian Association of Women Dentists</li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 col-12">
                                <div className="dentist-profile-details">
                                    <div className="profile-img bg-cover mb-35" style={{ backgroundImage: "url(" + bg + ")" }}  >
                                    </div>
                                    <p>Name: <strong>Manish Kesharwani</strong></p>
                                    <p>Specialization: <strong>Orthodontics</strong></p>
                                    <p>Phone: <strong>9827192697</strong></p>
                                    <div className="dentist-social-link">
                                        <a href=".#"><i className="fab fa-facebook-f" /></a>
                                        <a href=".#"><i className="fab fa-twitter" /></a>
                                        <a href=".#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="achievements-content-section section-padding pt-0 pb-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-6 col-12">
                                <div className="achievement-img-banner bg-cover bg-center" style={{ backgroundImage: "url(" + achievementImg + ")" }}></div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <div className="promo-text">
                                    <h2>Achievements</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum dolor sit suspendisse ultrices gravida</p>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and fail in their duty through weakness These cases are perfectly simple and easy.</p>
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

export default DentistDetails
