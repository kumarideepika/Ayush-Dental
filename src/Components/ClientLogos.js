import React, { Component } from 'react'
import Slider from 'react-slick';

class ClientLogos extends Component {
    render() {

        const settings = {
            slidesToShow: 3,
            slidesToScroll: 4,
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,           
        };


        return (
            <section className="brand-logo-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider className="brand-logo-carousel" {...settings}>
                                <div className="single-brand-logo">
                                    <img src={require("../assets/img/brand/1.png")} alt="donto" />
                                </div>
                                <div className="single-brand-logo">
                                    <img src={require("../assets/img/brand/2.png")} alt="donto" />
                                </div>
                                <div className="single-brand-logo">
                                    <img src={require("../assets/img/brand/3.png")} alt="donto" />
                                </div>
                                <div className="single-brand-logo">
                                    <img src={require("../assets/img/brand/4.png")} alt="donto" />
                                </div>
                                <div className="single-brand-logo">
                                    <img src={require("../assets/img/brand/5.png")} alt="donto" />
                                </div>
                                <div className="single-brand-logo">
                                    <img src={require("../assets/img/brand/6.png")} alt="donto" />
                                </div>
                            </Slider >
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ClientLogos
