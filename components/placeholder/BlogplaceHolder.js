import React, {Component} from 'react';

class BlogplaceHolder extends Component {
    render() {

        let isLoading = this.props.isLoading;

        return (
            <div>
                <div className={isLoading}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 col-lg-4 col-sm-2'>
                                <img className='img-fluid' src='img/cardPhotoPlaceholder.svg'/>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-4"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4 col-lg-4 col-sm-2'>
                                <img className='img-fluid' src='img/cardPhotoPlaceholder.svg'/>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-4"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4 col-lg-4 col-sm-2'>
                                <img className='img-fluid' src='img/cardPhotoPlaceholder.svg'/>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-4"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogplaceHolder;