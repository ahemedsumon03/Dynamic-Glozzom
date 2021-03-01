import React, {Component} from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Testimonial extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            vertical:true,
            swipe:true,
            verticalSwiping: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const allData1 = this.props.myData1;

        const myView = allData1.map(newData=>{
            return  <div className='text-center'>
                <div className='row justify-content-center'>
                    <div className='col-lg-7 col-md-6 col-sm-12'>
                        <blockquote className="blockquote">
                            <p>{newData.testimonial_text}</p>
                            <div className="blockquote-footer">
                                {newData.author_name}
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        })


        return (
            <div>
                <section className="py-5 bg-light">
                    <h2 className="text-center mb-3"> Testimonial </h2>
                    <div className='container text-center'>
                        <Slider {...settings}>
                            {myView}
                        </Slider>
                    </div>
                </section>
            </div>

        );
    }
}

export default Testimonial;