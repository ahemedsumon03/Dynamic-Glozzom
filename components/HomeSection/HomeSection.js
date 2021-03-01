import React, {Component} from 'react';

class HomeSection extends Component {
    render() {

        const allData = this.props.myData2;

        return (
            <div>
                <section id="homestart" className="py-5 text-center text-light">
                    <div className="dark-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col mt-5 pt-3">
                                    <h3>{allData[0]['HomeTitle']}</h3>
                                    <p className="lead">{allData[0]['HomeDes']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeSection;