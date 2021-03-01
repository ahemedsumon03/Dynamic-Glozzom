import React, {Component} from 'react';

class IconBoxes extends Component {
    render() {

        const allData = this.props.myData2;

        const myView = allData.map(newData=>{
            return <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundColor:newData.color}}>
                    <div className="card-body">
                        <i className="fa fa-envelope"></i>
                        <h3>{newData.service_title}</h3>
                        <p className="lead">{newData.service_des}</p>
                    </div>
                </div>
            </div>
        });

        return (
            <div>
                <section id="icon-box" className="text-center py-5 text-light">
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

export default IconBoxes;