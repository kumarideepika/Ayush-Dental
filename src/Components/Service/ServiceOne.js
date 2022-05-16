import React, { Component } from 'react';
import SectionTitleOne from '../SectionTitleOne';

class ServiceOne extends Component {
    

    render() {

       let ServiceData = this.props.ServiceData; 

        return (
            <section className="services-wrapper section-bg section-padding text-white">
                <div className="hero-shape service-shape">
                    <img src={require("../../assets/img/shape/rmc.png")} alt="" className="shape shape2" />
                    <img src={require("../../assets/img/shape/plusgs.png")} alt="" className="shape shape4" />
                    <img src={require("../../assets/img/shape/plusg.png")} alt="" className="shape shape6" />
                    <img src={require("../../assets/img/shape/plusr.png")} alt="" className="shape shape8" />
                    <img src={require("../../assets/img/shape/sgdot.png")} alt="" className="shape shape9" />
                    <img src={require("../../assets/img/shape/xsrdot.png")} alt="" className="shape shape10" />
                    <img src={require("../../assets/img/shape/rmc.png")} alt="" className="shape s1" />
                    <img src={require("../../assets/img/shape/plusgs.png")} alt="" className="shape s2" />
                    <img src={require("../../assets/img/shape/sgdot.png")} alt="" className="shape s3" />
                </div>
                <div className="container">
                    <SectionTitleOne BigTitle="Treatments" />

                    <div className="row">

                        {
                            ServiceData.serviceItem.map(item => {
                                return (
                                    <div className="col-md-6 col-12 col-lg-6 col-xl-4" key={item.id}>
                                        <div className="single-service-box">
                                            <div className="service-icon">
                                                <img src={require("../../assets/img/icons/" + item.imgUrl)} alt="" />
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                            <a href={item.link} className="btn-link">read more</a>
                                        </div>
                                    </div>
                                )
                            })
                        } 

                    </div>
                </div>
            </section>
        )
    }
}

export default ServiceOne
