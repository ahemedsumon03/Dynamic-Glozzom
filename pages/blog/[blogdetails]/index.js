import React, { Component } from 'react';
import BlogDetails from '../../../components/BlogDetails/BlogDetails';
import TopNavigation from '../../../components/TopNavigation/TopNavigation';
import Head from 'next/head';


class MyBlogDetails extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            title:this.props.title
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <title>{`Blog Post ${this.props.id}`}</title>
                    <meta property="og:title" content="My page title" key="title" />
                </Head>
                <TopNavigation/>
                <BlogDetails id={this.props.id}/>
            </div>
        );
    }
}

export default MyBlogDetails;