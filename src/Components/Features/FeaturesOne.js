import React, { Component } from 'react'

export class FeaturesOne extends Component {
    render() {

        let FeaturesData = this.props.FeaturesData;

        return (
            <section className="features-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        {
                            FeaturesData.items.map(item => {
                                return (
                                    <div className="col-md-6 col-12 col-lg-6 col-xl-4">
                                        <div className="single-feature-box" key={item.id}>
                                            <div className="icon-box">
                                                <img src={require("../../assets/img/icons/" + item.imgUrl)} alt="" />
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
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

export default FeaturesOne
