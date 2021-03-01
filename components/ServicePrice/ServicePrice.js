import React, {Component} from 'react';

class ServicePrice extends Component {
    render() {

        const allData = this.props.myData1;
        const myView = allData.map(newData=>{
            return  <div className="col-md-4">
                <div className="card mb-sm-2">
                    <div className="card-header">
                        <h3>{newData.service_name}</h3>
                    </div>
                    <div className="card-body">
                        <div className="card-title">
                            <h3>{newData.price}</h3>
                        </div>
                        <div className="card-text">
                            <p className="lead">{newData.service_des}</p>
                        </div>
                        <ul className="list-group mt-3">
                            <li className="list-group-item">
                                <i className="fa fa-check"></i> {newData.featureOne}
                            </li>
                            <li className="list-group-item">
                                <i className="fa fa-check"></i> {newData.featureTwo}
                            </li>
                            <li className="list-group-item">
                                <i className="fa fa-check"></i> {newData.featureThree}
                            </li>
                            <li className="list-group-item">
                                <i className="fa fa-check"></i> {newData.featureFour}
                            </li>
                            <li className="list-group-item">
                                <i className="fa fa-check"></i> {newData.featureFive}
                            </li>
                        </ul>
                        <a href="#" className="btn btn-block btn-primary mt-2">Order Now</a>
                    </div>
                    <div className="card-footer">
                        <p className="mb-0">{newData.service_plan_time}</p>
                    </div>
                </div>
            </div>
        })

        return (
            <div>
                <section id="price-box" className="py-5 text-center">
                    <div className="container">
                        <div className="row">
                            {myView}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ServicePrice;