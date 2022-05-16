import React, { Component } from 'react'

class Appointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            subject: 'Subject',
            message: 'Message'
        };
    }

    myChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    myChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    myChangePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    myChangeSubject = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    myChangeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    heandleSubmit = (event) => {
       
    }


    render() {
        return (
            <section className="appointment-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-8">
                            <div className="section-title-one">
                                <h1>Request Appointment</h1>
                            </div>
                            <div className="appointment-form">
                                <form className="row" onSubmit={this.heandleSubmit}>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input
                                            type='text'
                                            value={this.state.name}
                                            onChange={this.myChangeName}

                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='email'
                                            value={this.state.email} 
                                            onChange={this.myChangeEmail}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='text'
                                            value={this.state.phone} 
                                            onChange={this.myChangePhone}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='text'
                                            value={this.state.subject}
                                            onChange={this.myChangeSubject} 
                                        />
                                    </div>
                                    <div className="col-lg-12 col-12">
                                        <textarea
                                            value={this.state.message} 
                                            onChange={this.myChangeMessage}
                                        />
                                    </div>
                                    <button className="submit-btn" type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="appointment-right-banner">
                    <img src={require("../assets/img/appointment.png")} alt="donto" />
                </div>
            </section>
        )
    }
}

export default Appointment
