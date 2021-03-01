import React, { Component } from 'react';
import axios from 'axios';

class BlogDetails extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            dataList:[],
            id:this.props.id
        }
    }

    componentDidMount()
    {
        window.scroll(0,0);
        axios.get('http://127.0.0.1:1000/api/blogdetails/'+this.state.id).then(response=>{
            let jsonData = response.data
            this.setState({dataList:jsonData})
        }).catch(error=>{
            alert(error);
        });
    }

    render() {

        const myData = this.state.dataList;
        const MyView = myData.map(newData=>{
            return <div className='container-fluid mt-5 pt-2'> 
                       <img className='detailsImage' src={newData.image}/>
                       <p className='text-justify para1'>{newData.des}</p>
                  </div>
        })

        return (
            <div>
               {MyView}
            </div>
        );
    }
}

export default BlogDetails;