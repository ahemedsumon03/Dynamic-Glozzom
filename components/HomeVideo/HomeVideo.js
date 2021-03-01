import React, {Component} from 'react';

class HomeVideo extends Component {
    render() {

        const allData = this.props.myData4;

        return (
            <div>
                <section id="Homevideo" className="text-center text-light mt-5">
                    <div className="dark-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col mt-5 pt-3">
                                    <div uk-lightbox>
                                        <a href={allData[0]['Video']} target="_blank">
                                            <i className="fa fa-play"></i>
                                        </a>
                                    </div>
                                    <h2 className="mt-4">{allData[0]['title']}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeVideo;