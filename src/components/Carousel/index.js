import Slider from "react-slick";
import "./carousel.css"

export function Carousel({ children }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0
    };

    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}