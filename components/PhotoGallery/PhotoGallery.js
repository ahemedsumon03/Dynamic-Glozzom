import React, {Component} from 'react';

class PhotoGallery extends Component {
    render() {

        const allData = this.props.myData;

        const myView = allData.map(newData=>{
            return <div className="col-md-4 mb-3">
                <div>
                    <a href={newData.Image}>
                        <img src={newData.Image} alt="" className="img-fluid"/>
                    </a>
                </div>
            </div>
        })

        return (
            <div>
                <section id="galary" className="py-5 text-center" uk-lightbox>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>Photo Gallery</h3>
                                <p className="lead">Check out our photos</p>
                            </div>
                        </div>
                        <div className="row">
                            {myView}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PhotoGallery;