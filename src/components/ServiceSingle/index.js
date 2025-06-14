import React, { Fragment } from 'react';
import { Dialog, Grid } from '@mui/material';
import './style.css';
import Contact from './contact';
import Services from '../../api/service';

const ServiceSingle = ({ maxWidth, open, onClose, title, dImg, sImg1, sImg2 }) => {
    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <div className="modal-close-btn">
                        <button onClick={onClose}><i className='ti-close'></i></button>
                    </div>
                    <div className="wpo-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-main-img">
                                                <img src={dImg} alt="" />
                                            </div>
                                            <div className="wpo-service-single-title">
                                                <h3>{title}</h3>
                                            </div>
                                            <p>
                                                I specialize in building engaging, interactive, and pixel-perfect web experiences.
                                                With a strong understanding of frontend technologies like React.js, Next.js, Tailwind CSS,
                                                and API integration, I ensure every component I develop is functional, responsive, and scalable.
                                            </p>
                                            <p>
                                                I focus on writing clean, maintainable code and building accessible UIs that align with the latest design systems
                                                and best practices. My work spans from landing pages to full-scale web applications.
                                            </p>
                                            <div className="row flex-wrap justify-center pt-9">
                                                <div className="col-md-6 col-12">
                                                    <div className="wpo-p-details-img pr-2 sm:pr-0">
                                                        <img src={sImg1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="wpo-p-details-img pl-2 sm:pl-0">
                                                        <img src={sImg2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wpo-service-single-item list-widget">
                                            <div className="wpo-service-single-title">
                                                <h3>What I Offer</h3>
                                            </div>
                                            <p>
                                                I bring innovative frontend solutions tailored to your business needs, focusing on modern stack and user-centric design.
                                            </p>
                                            <ul>
                                                <li>Interactive React/Next.js based websites & apps</li>
                                                <li>Tailwind CSS / SCSS responsive UI development</li>
                                                <li>API integration with REST/GraphQL</li>
                                                <li>SEO optimization and Core Web Vitals performance</li>
                                                <li>Clean, reusable, component-based code</li>
                                            </ul>
                                        </div>

                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>My Frontend Workflow</h3>
                                            </div>
                                            <p>
                                                I follow a streamlined process from concept to delivery to ensure smooth project execution:
                                            </p>
                                        </div>

                                        <div className="wpo-service-single-item list-widget">
                                            <div className="wpo-service-single-title">
                                                <h3>Frontend Development Process</h3>
                                            </div>
                                            <ul>
                                                <li>Understand your business goals & user needs</li>
                                                <li>Create wireframes / accept Figma or PSD designs</li>
                                                <li>Convert designs into performant UI</li>
                                                <li>Integrate backend/API functionality</li>
                                                <li>Conduct cross-browser & device testing</li>
                                            </ul>
                                        </div>

                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Related Frontend Services</h3>
                                            </div>
                                            <div className="wpo-service-area">
                                                <div className="grid row">
                                                    {Services.slice(0, 3).map((service, srv) => (
                                                        <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                            <div className="wpo-service-item">
                                                                <i><img src={service.sIcon} alt="" /></i>
                                                                <h2>{service.sTitle}</h2>
                                                                <p>{service.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-contact-area">
                                                <div className="wpo-contact-title">
                                                    <h2>Have a project in mind? Let’s build it together</h2>
                                                    <p>Send me your idea or design and I’ll bring it to life with modern frontend tech.</p>
                                                </div>
                                                <div className="wpo-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
};

export default ServiceSingle;
