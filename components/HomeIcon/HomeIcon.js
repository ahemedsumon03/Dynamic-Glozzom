import React, {Component} from 'react';


class HomeIcon extends Component {
    render() {

        const allData = this.props.myData1;
        const myView = allData.map(newData=>{
            return <div className="col-md-4">
                <i className="fa fa-gears mb-2"></i>
                <h3 className="mb-2">{newData.Icon_title}</h3>
                <p className="lead mb-0">{newData.Icon_des}</p>
            </div>
        });

        return (
            <div>
                <section id="homeicon" className="py-5 text-center">
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

export default HomeIcon;