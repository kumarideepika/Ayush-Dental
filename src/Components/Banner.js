import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Banner extends Component {
    render() {
        let { pageTitle} = this.props;
        return (
            <section className="breadcrumb-wrap page-banner text-white section-bg">
                <div className="breadcrumb-shape">
                    <img src={require ("../assets/img/shape/aab.png")} alt="" className="shape breadcrumb1" />
                    <img src={require ("../assets/img/shape/aab.png")} alt="" className="shape breadcrumb2" />
                    <img src={require ("../assets/img/shape/plusgs.png")} alt="" className="shape breadcrumb3" />
                    <img src={require ("../assets/img/shape/plusr.png")} alt="" className="shape breadcrumb4" />
                    <img src={require ("../assets/img/shape/dotmr.png")} alt="" className="shape breadcrumb5" />
                    <img src={require ("../assets/img/shape/rmc.png")} alt="" className="shape breadcrumb7" />
                    <img src={require ("../assets/img/shape/sgdot.png")} alt="" className="shape breadcrumb8" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="page-banner-breadcrumb">
                                <h1>{pageTitle}</h1>
                            </div>
                            <div className="breadcrumb-nav">
                                {/* <Link to="/">home page</Link>
                                <Link to="/"> {pageTitle}</Link> */}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="page-banner-img">
                                <div className="banner-animate">
                                    <img src={require ("../assets/img/page-banner/1.png")} alt="" className="a1" />
                                    <img src={require ("../assets/img/page-banner/2.png")} className="bannerimg a2" alt="" />
                                    <img src={require ("../assets/img/page-banner/3.png")} className="bannerimg a3" alt="" />
                                    <img src={require ("../assets/img/page-banner/4.png")} className="bannerimg a4" alt="" />
                                    <img src={require ("../assets/img/page-banner/5.png")} className="bannerimg a5" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner
