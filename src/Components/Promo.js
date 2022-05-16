import React, { Component } from 'react'

class Promo extends Component {
    render() {
        return (
            <section className="appointment-promo-wrapper section-bg text-white">
                <div className="appointment-promo-shape">
                    <img src={require("../assets/img/shape/plusr.png")} alt="" className="shape app1" />
                    <img src={require("../assets/img/shape/plusr.png")} alt="" className="shape app2" />
                    <img src={require("../assets/img/shape/bluef.png")} alt="" className="shape app3" />
                    <img src={require("../assets/img/shape/bluef.png")} alt="" className="shape app4" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-6  col-12">
                            <div className="appointment-promo-content">
                                <h1>Request your appointment and start your smile makeover!</h1>
                                <a href=".#" className="theme-btn">Request Appointment</a>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-12">
                            <div className="promo-right-banner text-center">
                                <img src={require("../assets/img/doctor-nars.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Promo
