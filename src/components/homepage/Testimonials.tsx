import CLink from '@/CLink';
import { Slider } from '@/Slider';
import { flexSpace, px, py } from '@/layout/styles/classes';
import quote from '@a/icons/quote.svg';
import arrow from '@a/icons/sm-arrow.svg';
import styled from '@emotion/styled';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';
import { IconBtn, SecondaryBtn } from '../buttons';
import { info } from '../layout/NavLinks';
import { h2, h3 } from '../layout/styles/Typography';

const Section = styled.section`
    ${py};
    overflow: hidden;

    .swiper {
        overflow: visible;
    }

    .swiper-wrapper {
        align-items: center;
    }

    .swiper-slide {
        max-width: 320px;
        opacity: 0.3;
        transition: opacity 0.3s ease-in;

        :first-of-type {
            margin-left: 12px;
        }

        :last-of-type {
            margin-right: 12px;
        }
    }

    .swiper-slide-active {
        opacity: 1;

        & + .swiper-slide {
            opacity: 0.6;
        }
    }

    > a {
        padding: 16px 32px;
        display: flex;
        margin: 48px auto 0;
        max-width: max-content;
    }

    @media (min-width: 1024px) {
        .swiper-slide {
            max-width: 400px;
        }

        > a {
            margin-top: 64px;
        }
    }
`;

const Top = styled.div`
    ${px};
    text-align: center;
    max-width: 1200px;
    margin: 0 auto 32px;

    > h2 {
        ${h3};
        margin: 0;
    }

    > h3 {
        ${h2};
        margin: 8px 0 0;
        color: ${({ theme }) => theme.colors.primary};
    }

    > div {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        margin-bottom: 80px;
    }
`;

const Review = styled.div`
    padding: 24px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 6px 64px 10px rgba(43, 97, 84, 0.1);
    border-radius: 24px;
    transition: box-shadow 0.3s ease-in-out;

    ::before {
        content: url(${quote});
        top: 0;
        left: 0;
    }

    :hover {
        box-shadow: 0px 6px 64px 10px rgba(43, 97, 84, 0.2);
    }

    > p {
        font-size: 1.25rem;
        line-height: 150%;
        margin: 24px 0;
    }

    > div {
        ${flexSpace};

        ::after {
            content: url(${quote});
            transform: scale(-1);
        }

        p {
            margin: 0;
            color: ${({ theme }) => theme.colors.primary};
            text-transform: capitalize;
            font-weight: 500;
        }
    }

    @media (min-width: 1024px) {
        padding: 48px;

        > p {
            margin: 32px 0;
            font-size: 1.375rem;
        }
    }
`;

const ArrowBtn = styled(IconBtn)`
    border-radius: 24px !important;
    width: 90px !important;
    height: 90px !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 48px;
    z-index: 2;

    ::before {
        content: url(${arrow});
    }

    :last-of-type {
        left: unset;
        right: 48px;

        ::before {
            transform: scaleX(-1);
        }
    }

    @media (max-width: 1279px) {
        display: none;
    }

    @media (min-width: 1024px) and (pointer: fine) {
        display: flex;
    }
`;

const testimonials = [
    {
        text: 'I went to Murphy Dental today for a cleaning.  My Hygienist  was Traci.  Very well planned safety precautions were in place making me completely comfortable.  In no time I was finished. Dr. Bulsara and staff have an excellent plan for managing patient and staff safety while providing/performing top notch service.',
        person: 'Kenneth Snover',
    },
    {
        text: "BEST dentist office ever!  Takes a lot to get me to visit a dentist but honestly now I'm a fan!  No jokes!  Visit was so pleasant, I was made to feel relaxed and it was the most thorough experience!  Traci was awesome!  Thank you!  Looking forward to my next visit!  Yep I said that!        ",
        person: 'Sheila Lewis',
    },
    {
        text: 'Murphy Dental Center is a "high integrity" dentist. Their services are on the cutting edge of technology. You can have a crown put in in one day!  It is the most pleasant dentist office you will ever visit.  Their staff is super, prices fair and location convenient.',
        person: 'Tricia Swiger',
    },
    {
        text: "After retiring to Murphy, I had to find a new dentist. During my cleaning, it was determined that I needed a replacement crown. I received it today and couldn't be more pleased. Dr. Bulsara, Jennifer and the entire staff were a pleasure--professional, personable and caring. I would definitely recommend Murphy Dental Center for all your family's dental needs.",
        person: 'Suzanne Sparks',
    },
    {
        text: 'They were very friendly and nice and professional and patient with me the staff were very nice and professional with me and the dental Hygienist was very nice and professional.',
        person: 'Alfredo Cone',
    },
    {
        text: "Hands down the best dentist office I've ever been to. As someone who is phobic about dentists, I had the most relaxing and comfortable experience. Jennifer was so understanding and pleasant and thorough and very reassuring. I cannot reccomend them highly enough!!!        ",
        person: 'Amy Woody',
    },
    {
        text: 'What a great place! Everyone working there is so pleasant and caring. Sonya is my family’s dental hygienist and she makes our appointments a pleasure.         Highly Recommend Murphy Dental Center!',
        person: 'Damien Oskwarek',
    },
];

export const Testimonials = () => {
    const sliderSettings = {
        navigation: {
            nextEl: '.review-slider-next',
            prevEl: '.review-slider-prev',
        },
        slidesPerView: 'auto' as const,
        autoHeight: false,
        spaceBetween: 16,
        modules: [Navigation],
        breakpoints: {
            768: {
                spaceBetween: 24,
            },
            1024: {
                spaceBetween: 32,
            },
            1280: {
                spaceBetween: 64,
            },
            1600: {
                spaceBetween: 80,
            },
        },
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
    };

    return (
        <Section>
            <Top>
                <h2>Patient Testimonials</h2>
                <h3>What Our Happy Clients Say</h3>
            </Top>
            <Slider sliderSettings={sliderSettings}>
                {testimonials.map((story, i) => (
                    <SwiperSlide key={i}>
                        <Review>
                            <p>{story.text}</p>
                            <div>
                                <p>{story.person}</p>
                            </div>
                        </Review>
                    </SwiperSlide>
                ))}
                <ArrowBtn className="review-slider-prev" />
                <ArrowBtn className="review-slider-next" />
            </Slider>
            <SecondaryBtn as={CLink} to={info.social.google}>
                Write a Review
            </SecondaryBtn>
        </Section>
    );
};
