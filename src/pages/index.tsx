import { Hero } from '@/homepage/Hero';
import { IntroVideo } from '@/homepage/IntroVideo';
import { Testimonials } from '@/homepage/Testimonials';
import { Tushar } from '@/homepage/Tushar';
import { Fragment } from 'react';

const Home: Page = () => (
    <Fragment>
        <Hero />
        <IntroVideo />
        <Tushar />
        <Testimonials />
    </Fragment>
);

export default Home;
