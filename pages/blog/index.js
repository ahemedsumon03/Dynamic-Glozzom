import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BlogHead from "../../components/BlogHead/BlogHead";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import BlogplaceHolder from "../../components/placeholder/BlogplaceHolder";
import Head from 'next/head';

export async function getStaticProps() {
    let res = await axios.get('http://127.0.0.1:1000/getblog');
    let jsonData = await res.data

    return {
        props:{
            myData:jsonData,
            isLoading:'d-none',
            MainDiv:''
        }
    }
}

class Blog extends Component {

    constructor()
    {
        super();
        this.state = {
            isLoading:'BetweenTwoSection',
            MainDiv:'d-none'
        }
    }

    componentDidMount() {
        this.setState({isLoading:this.props.isLoading,MainDiv:this.props.MainDiv})
    }

    render() {
        return (
            <div>
                <Head>
                   <title>Portfolio Website: Blog</title>
                   <meta property="og:title" content="My page title" key="title" />
                </Head>
                <TopNavigation/>
                <BlogHead/>
                <BlogSection myData={this.props.myData} mainDiv={this.state.MainDiv} />
                <BlogplaceHolder isLoading={this.state.isLoading}/>
                <Footer/>
            </div>
        );
    }
}

export default Blog;