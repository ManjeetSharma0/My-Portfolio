import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import FunFactSection from '../../components/FunFact/FunFact';
import About from '../../components/about/about';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ContactArea from '../../components/ContactArea';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar topbarNone={'topbar-none'} />
            <Hero />
            <FunFactSection />
            <About />
            <ProjectSection />
            <ContactArea contactClass={'wpo-contact-section-s2'} btnClass={'theme-btn'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;