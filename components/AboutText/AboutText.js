import React, {Component} from 'react';

class AboutText extends Component {
    render() {

        const allData = this.props.myData;

        return (
            <div>
                <section id="about-text" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <h2>What We Do</h2>
                                <p className="lead">{allData[0]['about_des pone']}</p>
                                <p className="lead">{allData[0]['about_des ptwo']}</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src={allData[0]['about_image']} alt="No image" className="img-fluid rounded-circle mr-auto"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutText;