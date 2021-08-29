import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from "../images/ama1.jpg";
import Img2 from "../images/ama2.jpg";
import Img3 from "../images/ama3.jpg";
import Img4 from "../images/ama4.jpg";
import Img5 from "../images/ama5.jpg";

function HomeSlider() {
    return (

        <div className=" z-[1] relative mb-[-130px] w-[100vw] ">
            <Carousel>
                <Carousel.Item>
                    <div className=" w-[100vw] flex justify-center">
                        <img
                        className=" sliderImage "
                        src={Img1}
                        alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className=" w-[100vw] flex justify-center">
                    <img
                        className=" sliderImage "
                        src={Img2}
                        alt="Second slide"
                        />
                </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className=" w-[100vw] flex justify-center">
                        <img
                            className=" sliderImage "
                            src={Img3}
                            alt="Third slide"
                            />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className=" w-[100vw] flex justify-center">
                        <img
                        className=" sliderImage "
                        src={Img4}
                        alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className=" w-[100vw] flex justify-center">
                        <img
                        className=" sliderImage "
                        src={Img5}
                        alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        
            )
        }

export default HomeSlider