import React, { Component } from 'react'

class SectionTitleOne extends Component {
    render() {
        var { BigTitle } = this.props;
        return (
            <div className="row">
                <div className="col-sm-12 text-center">
                    <div className="section-title-one">
                        <h1>{BigTitle}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTitleOne
