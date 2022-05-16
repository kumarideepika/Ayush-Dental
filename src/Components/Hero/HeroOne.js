import React, { Component } from 'react'

class HeroOne extends Component {
    render() {
        return (
            <section className="hero-slider-wrapper home-one-slider">
                <div className="single-hero-slide text-white hero-slide1">
                    <div className="hero-shape">
                        <img src={require ("../../assets/img/shape/aab.png") } alt="" className="shape shape1 cloud1" />
                        <img src={require ("../../assets/img/shape/rmc.png") } alt="" className="shape shape2" />
                        <img src={require ("../../assets/img/shape/dotmr.png") } alt="" className="shape shape3" />
                        <img src={require ("../../assets/img/shape/plusgs.png") } alt="" className="shape shape4" />
                        <img src={require ("../../assets/img/shape/plusb.png") } alt="" className="shape shape5" />
                        <img src={require ("../../assets/img/shape/plusg.png") } alt="" className="shape shape6" />
                        <img src={require ("../../assets/img/shape/plusgs.png") } alt="" className="shape shape7" />
                        <img src={require ("../../assets/img/shape/plusr.png") } alt="" className="shape shape8" />
                        <img src={require ("../../assets/img/shape/sgdot.png") } alt="" className="shape shape9" />
                        <img src={require ("../../assets/img/shape/xsrdot.png") } alt="" className="shape shape10" />
                        <img src={require ("../../assets/img/shape/aab.png") } alt="" className="shape shape11 cloud2" />
                        <img src={require ("../../assets/img/shape/aab.png") } alt="" className="shape shape12 cloud3" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 col-md-10">
                                <div className="hero-slide-left">
                                    <h2>The tongue is ever turning to the aching tooth.</h2>
                                    <h1>Floss like a boss!</h1>
                                    <p>Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
                                    <a href=".#" className="theme-btn fill-btn">Appointment</a>
                                    {/* <a href=".#" className="theme-btn btn_black">Learn More</a> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 col-md-10 offset-md-2 offset-lg-0">
                                <div className="hero-slide-right">
                                    <div className="animate-img">
                                        <img className="aimg1" src={require ("../../assets/img/woman-brush.png") } alt="" />
                                        <img className="aimg2" src={require ("../../assets/img/doctorfinding.png") } alt="" />
                                    </div>
                                    <img src={require ("../../assets/img/hero-theeth.png") } alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroOne
