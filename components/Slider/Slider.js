import React, {Component} from 'react';
import MySlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Slider extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <MySlider {...settings}>
                    <div>
                        <div className='sliderImg'>
                            <img src='img/image1.jpeg'/>
                        </div>
                    </div>

                    <div>
                        <div className='sliderImg'>
                            <img src='img/image2.jpeg'/>
                        </div>
                    </div>

                    <div>
                        <div className='sliderImg'>
                            <img src='img/image3.jpeg'/>
                        </div>
                    </div>


                </MySlider>
            </div>
        );
    }
}

export default Slider;