import React, { Component } from 'react'
import Banner from '../Banner';
import Dentist from '../Team/Dentist'
import TeamData from '../Data/TeamData'

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner pageTitle='All Dentists Member' />

                <section className="doctors-wrapper section-padding">
                    <div className="container">
                        <div className="row text-center">
                            <Dentist TeamData={TeamData} />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Team
