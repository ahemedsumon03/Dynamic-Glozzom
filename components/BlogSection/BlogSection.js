import React, {Component} from 'react';
import Link from 'next/link';

class BlogSection extends Component {

    render() {

        const allData = this.props.myData;

        const myView = allData.map(newData=>{
            return  <div className="col-md-4">
                <div className="card" id="image1">
                    <img src={newData.blog_image} alt="No image" className="img-fluid"/>
                    <div className="card-body">
                        <h4>{newData.blog_title}</h4>
                        <small className="text-muted">{newData.blog_author_name}</small>
                        <hr/>
                        <p className="lead">{newData.blog_des}</p>
                        <button className="btn btn-block btn-primary"><Link href='/blog/[blogdetails]/[value]' as={'/blog/'+newData.blog_title+'/'+newData.id}>Read more</Link></button>
                    </div>
                </div>
            </div>
        });

        return (
            <div>
                <section id="blog-head" className={this.props.mainDiv}>
                    <div className="container">
                        <div className="row py-5">
                            {myView}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BlogSection;