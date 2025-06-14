import React, { useState } from 'react';
import Services from '../../api/service';
import ServiceSingle from '../ServiceSingle';
import sign from '../../images/signature.png';
import rotate from '../../images/rotate-text.svg';

const About = (props) => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section className="wpo-about-section" id="about">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <h2>Why Hire Me As Your Frontend Developer?</h2>
                            <p>I specialize in building responsive, scalable, and user-friendly web applications with modern tools like React, Next.js, Tailwind CSS, and more.</p>
                        </div>
                    </div>
                </div>
                <div className="about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-content">
                                <p>With over 2 years of experience in frontend development, I’ve delivered pixel-perfect, performant websites for startups, agencies, and personal brands. I transform UI/UX designs into clean, maintainable code using the best practices of modern web development.</p>
                                <div className="about-info">
                                    <h4>Manjeet Sharma</h4>
                                    <span>- Frontend Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="about-img">
                                <img src="/1.jpg" alt="about" />
                                
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="wpo-service-area">
                                {Services.slice(0, 3).map((service, index) => (
                                    <div className="wpo-service-item" key={index}>
                                        <div className="icon">
                                            <i><img src={service.sIcon} alt="icon" /></i>
                                        </div>
                                        <div className="wpo-service-text">
                                            <h3 onClick={() => handleClickOpen(service)}>{service.sTitle}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceSingle
                open={open}
                onClose={handleClose}
                title={state.sTitle}
                dImg={state.sImgS}
                sImg1={state.ssImg1}
                sImg2={state.ssImg2}
            />
        </section>
    );
};

export default About;
