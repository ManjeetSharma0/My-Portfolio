
import Slider from "react-slick";
import client1 from '../../images/slider/client1.png';
import client2 from '../../images/slider/client2.png';
import client3 from '../../images/slider/client3.png';
import client4 from '../../images/slider/client4.png';
import client5 from '../../images/slider/client5.png';
import client6 from '../../images/slider/client6.png';
import client7 from '../../images/slider/client7.png';
import client8 from '../../images/slider/client8.png';
import client9 from '../../images/slider/client9.png';
import client10 from '../../images/slider/client10.png';
import vector1 from '../../images/vector/1.svg';
import vector2 from '../../images/vector/2.svg';
import vector3 from '../../images/vector/3.svg';
import shape1 from '../../images/vector/4.svg';

// Slider settings
const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
};

const Hero = () => {
    return (
        <section className="wpo-hero-style-1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
                        <div className="wpo-hero-left">
                            <div className="wpo-hero-title-box">
                                <div className="wpo-hero-title">
                                    <h2>Hi, I'm Manjeet Sharma</h2>
                                </div>
                            </div>
                            <div className="wpo-supporter">
                                <div className="wpo-supporter-text">
                                    <div className="content">
                                        <h3>8+</h3>
                                        <p>Web Projects Delivered</p>
                                    </div>
                                </div>
                                <div className="wpo-supporter-img">
                                    <ul className="wpo-supporter-slide">
                                        <Slider {...settings}>
                                            <li><img src={client1} alt="Client 1" /></li>
                                            <li><img src={client2} alt="Client 2" /></li>
                                            <li><img src={client3} alt="Client 3" /></li>
                                            <li><img src={client4} alt="Client 4" /></li>
                                            <li><img src={client5} alt="Client 5" /></li>
                                            <li><img src={client6} alt="Client 6" /></li>
                                            <li><img src={client7} alt="Client 7" /></li>
                                            <li><img src={client8} alt="Client 8" /></li>
                                            <li><img src={client9} alt="Client 9" /></li>
                                            <li><img src={client10} alt="Client 10" /></li>
                                        </Slider>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="wpo-hero-img">
                            <img src="/2.png" alt="Manjeet Sharma" />
                            <div className="vector-1">
                                <img src={vector1} alt="vector" />
                            </div>
                            <div className="vector-2">
                                <img src={vector2} alt="vector" />
                            </div>
                            <div className="vector-3">
                                <img src={vector3} alt="vector" />
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
                        <div className="wpo-hero-right">
                            <div className="experience">
                                <div className="icon"><span>1+</span></div>
                                <div className="content">
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                            <div className="wpo-hero-title-box">
                                <div className="wpo-hero-title">
                                    <h2>Frontend Developer</h2>
                                    <p className="mt-2">Crafting responsive, fast, and user-focused web applications using React, Next.js, Tailwind & more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape-1">
                <img src={shape1} alt="shape" />
            </div>
            <div className="shape-2">
                <img src={shape1} alt="shape" />
            </div>
        </section>
    );
};

export default Hero;
