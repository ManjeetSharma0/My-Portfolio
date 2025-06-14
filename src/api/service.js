import swIcon from '../images/service/1.svg';
import swIcon2 from '../images/service/2.svg';
import swIcon3 from '../images/service/3.svg';

import swImgS1 from '../images/service-single/web/img-1.jpg';
import swImgS2 from '../images/service-single/web/img-2.jpg';
import swImgS3 from '../images/service-single/web/img-3.jpg';

const Services = [
  
    {
        Id: '1',
        sIcon: swIcon2,
        sImgS: swImgS2,
        sTitle: 'Web Application Development',
        description: 'Built scalable and maintainable frontend systems using React, Next.js, and API integrations.',
        des2: 'I specialize in building single-page applications (SPAs) and full-stack apps with dynamic routing, protected routes, and custom hooks.',
        des3: 'Integrating REST APIs or GraphQL, I ensure smooth communication between client and server with proper loading states, error handling, and performance optimizations.',
        ssImg1: swImgS1,
        ssImg2: swImgS3,
    },
    {
        Id: '2',
        sIcon: swIcon3,
        sImgS: swImgS3,
        sTitle: 'Responsive UI Development',
        description: 'Designed and developed 100+ responsive interfaces optimized for mobile, tablet, and desktop.',
        des2: 'I use frameworks like Tailwind CSS, Bootstrap, and Material UI to deliver consistent UI across all devices.',
        des3: 'My approach focuses on accessibility, performance, and usability—ensuring everyone enjoys your product regardless of their screen size or device.',
        ssImg1: swImgS2,
        ssImg2: swImgS1,
    },
];

export default Services;
