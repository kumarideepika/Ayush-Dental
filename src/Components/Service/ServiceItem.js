import React, { Component } from 'react'

export class ServiceItem extends Component {
    render() {
        return (
            {
                ServiceData.serviceItem.map(item => {
                    return (
                        <div className="col-md-6 col-12 col-lg-6 col-xl-4">
                            <div className="single-service-box" key={item.id}>
                                <div className="service-icon">
                                    <img src={require("../../assets/img/icons/" + item.imgUrl)} alt="" />
                                </div>
                                <h3>{serviceItem.title}</h3>
                                <p>{serviceItem.text}</p>
                                <a href={serviceItem.link} className="btn-link">read more</a>
                            </div>
                        </div>
                    )
                })
            } 
        )
    }
}

export default ServiceItem
