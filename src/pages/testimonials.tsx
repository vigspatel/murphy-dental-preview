import { CommonHero } from '@/CommonHero';
import { Testimonials as Reviews } from '@/homepage/Testimonials';
import { Fragment } from 'react';

const Testimonials: Page = () => (
    <Fragment>
        <CommonHero>
            <h1>Testimonials</h1>
            <p>
                Have a look at our satisfied patients who shared their thoughts after going through
                several different dental treatments offered by Murphy Dental Care. Our doctors and
                staff are highly experienced individuals who consult with precise accuracy depending
                on each case.
            </p>
        </CommonHero>
        <Reviews />
    </Fragment>
);

export default Testimonials;
