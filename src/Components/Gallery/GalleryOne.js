import React, { Component } from 'react'
import SectionTitleOne from '../SectionTitleOne'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

class GalleryOne extends Component {
    render() {
            var img1 = require('../../assets/img/gallery/g1.jpg');
            var img2 = require('../../assets/img/gallery/g2.jpg');
            var img3 = require('../../assets/img/gallery/g3.jpg');
            var img4 = require('../../assets/img/gallery/g4.jpg');
            var img5 = require('../../assets/img/gallery/g5.jpg');

        return (
            <section className="gallery-one-wrapper section-bg text-white section-padding">
                <div className="hero-shape service-shape">
                    <img src={require("../../assets/img/shape/rmc.png")} alt="donto" className="shape shape2" />
                    <img src={require("../../assets/img/shape/plusgs.png")} alt="donto" className="shape shape4" />
                    <img src={require("../../assets/img/shape/plusg.png")} alt="donto" className="shape shape6" />
                    <img src={require("../../assets/img/shape/plusr.png")} alt="donto" className="shape shape8" />
                    <img src={require("../../assets/img/shape/sgdot.png")} alt="donto" className="shape shape9" />
                    <img src={require("../../assets/img/shape/xsrdot.png")} alt="donto" className="shape shape10" />
                    <img src={require("../../assets/img/shape/rmc.png")} alt="donto" className="shape s1" />
                    <img src={require("../../assets/img/shape/plusgs.png")} alt="donto" className="shape s2" />
                    <img src={require("../../assets/img/shape/sgdot.png")} alt="donto" className="shape s3" />
                </div>
                <div className="container">

                    <SectionTitleOne BigTitle="Our Gallery" />

                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" >
                                <ReactFancyBox
                                    thumbnail={img1}
                                    image={img1} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" >
                                <ReactFancyBox
                                    thumbnail={img2}
                                    image={img2} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item" >
                                <ReactFancyBox
                                    thumbnail={img3}
                                    image={img3} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-12">
                            <div className="single-gallery-item">
                                <ReactFancyBox
                                    thumbnail={img4}
                                    image={img4} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-gallery-item">
                                <ReactFancyBox
                                    thumbnail={img5}
                                    image={img5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default GalleryOne
