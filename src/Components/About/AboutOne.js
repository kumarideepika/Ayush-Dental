import React, { Component } from 'react';
import CountUp from 'react-countup';


class AboutOne extends Component {
    render() {
        return (
            <section className="about-wrapper about-us-one section-padding pt-0">
                <div className="about-shape">
                    <img src={require ("../../assets/img/shape/circle1.png") } alt="donto" className="shape ab1" />
                    <img src={require ("../../assets/img/shape/bluef.png") } alt="donto" className="shape ab2" />
                    <img src={require ("../../assets/img/shape/dotmr.png") } alt="donto" className="shape ab3" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="about-us-one-left">
                                <img src={require ("../../assets/img/about-banner1.png") } alt="donto" />
                                <img src={require ("../../assets/img/about-banner2.png") } alt="donto" className="about-animate" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="about-us-one-right mt-5 mt-lg-0">
                                <div className="about-heading">
                                    <h1>Welcome to a Family</h1>
                                </div>
                                <p>Welcome to Ayush Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing.</p>
                                <a href="/Page/About" className="btn-link">About Us</a>
                                <div className="fun-fact-section ">
                                    <div className="single-funfact-one">
                                        < span > < CountUp
                                        end = {
                                            500
                                        }
                                        duration = {
                                            3.75
                                        }
                                        /></span >
                                        <p>Happy Patients</p>
                                    </div>
                                    <div className="single-funfact-one sp-fun">
                                        <span>
                                            <CountUp
                                end={88}
                                duration={2.75} />
                                </span>
                                        <p>Qualified Doctors</p>
                                    </div>
                                    <div className="single-funfact-one">
                                        < span > < CountUp
                                        end = {
                                            25
                                        }
                                        duration = {
                                            3.75
                                        }
                                        /></span >
                                        <p>Years Experience</p>
                                    </div>
                                    <div className="single-funfact-one sp-fun">
                                        <span><CountUp
                                end={55}
                                duration={3.75} /></span>
                                        <p>Dental Awards</p>
                                    </div>
                                    <span className="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutOne
