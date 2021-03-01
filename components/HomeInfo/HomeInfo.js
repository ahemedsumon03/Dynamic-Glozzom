import React, {Component} from 'react';

class HomeInfo extends Component {
    render() {

        const allData = this.props.myData3;

        return (
            <div>
                <section>
                   <div className='container'>
                       <div className='row mt-md-3'>
                           <div className='col-md-6 mt-lg-5'>
                               <h3 className="text-dark">{allData[0]['Info_title']}</h3>
                               <p className="lead">{allData[0]['Info_des']}</p>
                               <a href="#" className="btn btn-outline-primary">Read More</a>
                           </div>
                           <div className='col-md-6'>
                               <img src={allData[0]['Info_image']} alt='PC' className='img-fluid rounded mt-lg-3'/>
                           </div>
                       </div>
                   </div>
                </section>
            </div>
        );
    }
}

export default HomeInfo;