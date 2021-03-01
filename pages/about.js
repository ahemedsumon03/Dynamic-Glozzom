import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AboutHome from "../components/AboutHome/AboutHome";
import AboutText from "../components/AboutText/AboutText";
import IconBoxes from "../components/IconBoxes/IconBoxes";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
import axios from 'axios';
import Head from 'next/head';

export async function getStaticProps() {
    let res = await axios.get('http://127.0.0.1:1000/getaboutText');
    let jsonData = await res.data;

    let response = await axios.get('http://127.0.0.1:1000/getTestimonial');
    let jsonData1 = await response.data;

    let response1 = await axios.get('http://127.0.0.1:1000/getIconBox');
    let jsonData2 = await response1.data;

    return{
        props:{
            myData:jsonData,
            myData1:jsonData1,
            myData2:jsonData2
        }
    }
}


class About extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Portfolio Website: About Us</title>
                    <meta property="og:title" content="My page title" key="title" />
                </Head>
                <TopNavigation/>
                <AboutHome/>
                <AboutText myData={this.props.myData}/>
                <IconBoxes myData2={this.props.myData2}/>
                <Testimonial myData1={this.props.myData1}/>
                <Footer/>
            </div>
        );
    }
}

export default About;