import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import ServiceHeader from "../components/ServiceHeader/ServiceHeader";
import ServicePrice from "../components/ServicePrice/ServicePrice";
import FaqSection from "../components/FAQSection/FAQSection";
import Footer from "../components/Footer/Footer";
import axios from 'axios';
import Head from 'next/head';

export async function getStaticProps() {
    let res = await axios.get('http://127.0.0.1:1000/getFaqService');
    let jsonData = await res.data;

    let response = await axios.get('http://127.0.0.1:1000/getServicePrice');
    let jsonData1 = await response.data;

    return{
        props:{
            myData:jsonData,
            myData1:jsonData1
        }
    }
}

class Service extends Component {
    render() {
        return (
            <div>
                <Head>
                   <meta property="og:title" content="My page title" key="title" />
                   <title>Portfolio Website: Service</title>
                </Head>
                <TopNavigation/>
                <ServiceHeader/>
                <ServicePrice myData1={this.props.myData1}/>
                <FaqSection myData={this.props.myData}/>
                <Footer/>
            </div>
        );
    }
}

export default Service;