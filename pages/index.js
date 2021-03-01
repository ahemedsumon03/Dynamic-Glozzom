import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Slider from "../components/Slider/Slider";
import HomeIcon from "../components/HomeIcon/HomeIcon";
import HomeSection from "../components/HomeSection/HomeSection";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import HomeVideo from "../components/HomeVideo/HomeVideo";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
import axios from 'axios';
import Head from 'next/head';


export async function getStaticProps() {
    let res = await axios.get('http://127.0.0.1:1000/getGalleryImage');
    let jsonData = await res.data;

    let response = await axios.get('http://127.0.0.1:1000/getHomeIcon');
    let jsonData1 = await response.data;

    let response1 = await axios.get('http://127.0.0.1:1000/getHomeSection');
    let jsonData2 = await response1.data;

    let response2 = await axios.get('http://127.0.0.1:1000/getHomeInfo');
    let jsonData3 = await response2.data;

    let response3 = await axios.get('http://127.0.0.1:1000/getHomeVideo');
    let jsonData4 = await response3.data;

    return {
        props:{
            myData:jsonData,
            myData1:jsonData1,
            myData2:jsonData2,
            myData3:jsonData3,
            myData4:jsonData4
        }
    }
}


class Index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>This is portfolio Home page</title>
                    <meta property="og:title" content="Home page title" key="title" />
                </Head>
                <TopNavigation/>
                <Slider/>
                <HomeIcon myData1={this.props.myData1}/>
                <HomeSection myData2={this.props.myData2}/>
                <HomeInfo myData3={this.props.myData3}/>
                <HomeVideo myData4={this.props.myData4}/>
                <PhotoGallery myData={this.props.myData}/>
                <NewsLetter/>
                <Footer/>
            </div>
        );
    }
}

export default Index;