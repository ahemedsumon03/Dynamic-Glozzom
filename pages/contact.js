import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import ContactTop from "../components/ContactTop/ContactTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import axios from 'axios';
import Head from 'next/head';

export async function getStaticProps() {
    let res = await axios.get('http://127.0.0.1:1000/getContactInfo');
    let jsonData = await res.data;

    return {
        props:{
            myData:jsonData
        }
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <Head>
                   <title>Portfolio Website: Contact Us</title> 
                   <meta property="og:title" content="My page title" key="title" />
                </Head>
                <TopNavigation/>
                <ContactTop/>
                <ContactSection myData={this.props.myData}/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;